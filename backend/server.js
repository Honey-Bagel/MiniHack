const express = require('express'); // Express framework for creating the server and handling routes
const cors = require('cors'); // CORS middleware to enable cross-origin requests
const recipeRoutes = require('./routes/recipeRoutes'); // Import custom routes for recipe endpoints
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express application
const app = express();
const PORT = process.env.PORT; // Retrieve the server port from env variables

// Middleware
app.use(cors()); // Enable CORS for all routes, allowing API to be accessed from other domains
app.use(express.json()); // Parse incoming JSON requests automatically

// Routes
app.use('/api/recipes', recipeRoutes); // All routes in recipeRoutes will be prefixed with 'api/recipes'

// Start the server and listen on the specified port 
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`); // Log the server URL when it starts successfully
})