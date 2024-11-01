const express = require('express'); // Express framework for routing and handling requests
const { getRecipeText, getRecipeImg } = require('../controllers/recipeController'); // Import controller functions
const multer = require('multer'); // Multer for handling file uploads

// Create an Express router to define route paths for API
const router = express.Router();

// Configure multer to store uploaded files in memory instead of saving them to disk
const storage = multer.memoryStorage(); // Store file in memory for easier API upload
const upload = multer({ storage: storage }); // Set up multer with memory storage

// Define a POST route for text input based recipe generation
router.post('/', getRecipeText); // Calls getRecipeText function at 'api/recipes/'

// Define a POST route for image input based recipe generation
router.post('/image', upload.single('file'), getRecipeImg) // Uses multer to handle a single file upload then calls getRecipeImg at 'api/recipes/image'

module.exports = router;