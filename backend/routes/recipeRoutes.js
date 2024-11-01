const express = require('express');
const { getRecipe } = require('../controllers/recipeController');

const router = express.Router();

router.post('/', getRecipe);

module.exports = router;