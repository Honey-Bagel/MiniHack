const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const getRecipe = async (req, res) => {
	const { ingredients } = req.body;
	console.log(ingredients)
    const apiKey = process.env.GEMINI_API_KEY;

    try {

		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
		
		let prompt = "Generate a recipe using these ingredients found in users house (Only include ingredients that I have listed): ";
		prompt += ingredients.join(", ");
		console.log(prompt);
        const result = await model.generateContent([prompt]);
        console.log(result.response.text());
        // Call Gemini API with user-provided ingredients
        res.json(result.response.text());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
}

module.exports = { getRecipe }