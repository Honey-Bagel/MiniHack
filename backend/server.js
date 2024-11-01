const express = require('express');
const axios = require('axios');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
})