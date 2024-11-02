const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
require('dotenv').config(); // Load environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const apiKey = process.env.GEMINI_API_KEY;

// Config values for the generative model
const generationConfig = {
	temperature: 0.9, // controls randomness in response, higher values make it more creative
	topK: 1, // Controls how many words are sampled for each step
	topP: 1, // Controls nucles sampling
	maxOutputTokens: 2048, // Max tokens in response
};

// Controller function to obtain a recipe from a user's text input
const getRecipeText = async (req, res) => {
	const { ingredients } = req.body; // extract input ingredients from body
	console.log(ingredients) 

    try {
		// Initialive model with specific configuration
		const model = genAI.getGenerativeModel({ 
			model: "gemini-1.5-flash", // specied model to use
			response_mime_type: "application/json", // Response type JSON
		});
		
		// Construct prompt, including user ingredients and JSON Schema
		let prompt = "Generate a recipe using these ingredients found in users house, make sure the instructions are numbered (Only include ingredients that I have listed): ";
		prompt += ingredients.join(", ");
		prompt += `\n Return the recipe using this JSON schema:
		{"recipeName": string}
		{"prepTime": time}
		{"cookTime": time}
		{"servingSize": int}
		{"ingredients": string}
		{"instructions": string}`

		// Call model to generate content based on prompt and generationConfig
        const result = await model.generateContent([prompt], generationConfig);

		// Format the result text into a JSON Object
		const resp = formatResultTxt(result.response.text());

		console.log(resp);

        // Send response to client
        res.json(JSON.stringify(resp));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recipes' }); // Send error response
    }
}

// Controller function to obtain a recipe based on a user uploaded image (JPEG or PNG)
const getRecipeImg = async (req, res) => {

	try{
		const file = req.file; // get the uploaded file

		console.log('file', file);

		if(!file) {
			return res.status(400).send('No file uploaded.'); // Return error if file isn't valid
		}

		// Prepare image data for API request to Gemini in base64 format
		const mimeType = file.mimetype
		const data = {
			inlineData: {
				data: Buffer.from(file.buffer).toString("base64"), // Convert file buffer to base64 string
				mimeType // Include MIME type of file
			}
		}

		// Initialize model with specific configuration for image-based recipe generation
		const model = genAI.getGenerativeModel({ 
			model: "gemini-1.5-flash", // Specify model version
			response_mime_type: "application/json", // Set response type to JSON
		});
		
		// Construct prompt for recipe generation
		const prompt = `Take note of all the ingredients in this image and then create a recipe using those ingredients and return the result as this JSON schema, make sure the instructions are numbered:
		{"recipeName": string}
		{"prepTime": time}
		{"cookTime": time}
		{"servingSize": int}
		{"ingredients": string}
		{"instructions": string}`

		// Call the model to generate content based on prompt
		const result = await model.generateContent([prompt, data]);

		// Format the result text into JSON
		const resp = formatResultTxt(result.response.text());

		// Send response to client
		res.json(JSON.stringify(resp));
	} catch (e) {
		console.error(e); // Log errors 
		res.status(500).json({ error: 'Failed to fetch recipes' }); // Send error response
	}
}

// Helper function to format a model's result text into a useable JSON object
function formatResultTxt(response) {
	console.log(response);
	let fixedTxt = response.slice(response.indexOf('{'), response.lastIndexOf('}') + 1); // Extract JSON object
	console.log(fixedTxt);
	return JSON.parse(fixedTxt); // Parse and return as JSON object
}

module.exports = { getRecipeText, getRecipeImg }