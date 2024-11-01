const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const fs = require('fs');
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

const recipeSchema = {
	description: "Recipe result",
	type: SchemaType.OBJECT,
	properties: {
		recipeName: {
			type: SchemaType.STRING,
			description: "Title of the recipe",
			nullable: false
		},
		prepTime: {
			type: SchemaType.STRING,
			description: "Total time to prep for the recipe (not including the cook time)",
			nullable: false
		},
		cookTime: {
			type: SchemaType.STRING,
			description: "Total time to cook the recipe (not including the prep time)",
			nullable: false
		},
		ingredients: {
			type: SchemaType.ARRAY,
			items: {
				type: SchemaType.STRING,
				description: "Ingredient needed and the amount of the ingredient needed",
				nullable: false
			}
		},
		instructions: {
			type: SchemaType.STRING,
			description: "The various steps of the recipe outlining what the person needs to do in each step",
			nullable: false
		}
	},
};

const generationConfig = {
	temperature: 0.9,
	topK: 1,
	topP: 1,
	maxOutputTokens: 2048,
	response_mime_type:'text/plain'
};

const getRecipeText = async (req, res) => {
	const { ingredients } = req.body;
	console.log(ingredients)
    const apiKey = process.env.GEMINI_API_KEY;

    try {

		const model = genAI.getGenerativeModel({ 
			model: "gemini-1.5-flash",
			response_mime_type: "application/json",
		});
		
		let prompt = "Generate a recipe using these ingredients found in users house (Only include ingredients that I have listed): ";
		prompt += ingredients.join(", ");
		prompt += `\n Return the recipe using this JSON schema: 
		Recipe: = {'recipeName': string}
		Prep Time: = {'prepTime': time}
		Cook Time: = {'cookTime': time}
		Ingredients: = {'ingredients': string}
		Instructions: = {'instructions': string}`
        const result = await model.generateContent([prompt], generationConfig);
		const resp = formatResultTxt(result.response.text());

		
        // Call Gemini API with user-provided ingredients
        res.json(JSON.stringify(resp));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
}

const getRecipeImg = async (req, res) => {

	try{
		const file = req.file;

		console.log('file', file);

		if(!file) {
			return res.status(400).send('No file uploaded.');
		}

		const mimeType = file.mimetype
		const data = {
			inlineData: {
				data: Buffer.from(file.buffer).toString("base64"),
				mimeType
			}
		}

		const model = genAI.getGenerativeModel({ 
			model: "gemini-1.5-flash",
			response_mime_type: "application/json",
		});
		
		const prompt = `Take note of all the ingredients in this image and then create a recipe using those ingredients and return the result as this JSON schema:
		Recipe: = {'recipeName': string}
		Prep Time: = {'prepTime': time}
		Cook Time: = {'cookTime': time}
		Ingredients: = {'ingredients': string}
		Instructions: = {'instructions': string}`

		const result = await model.generateContent([prompt, data]);

		const resp = formatResultTxt(result.response.text());

		res.json(JSON.stringify(resp));

	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'Failed to fetch recipes' });
	}
}

function formatResultTxt(response) {
	fixedTxt = response.slice(response.indexOf('{'), response.lastIndexOf('}') + 1);
	return JSON.parse(fixedTxt);
}

module.exports = { getRecipeText, getRecipeImg }