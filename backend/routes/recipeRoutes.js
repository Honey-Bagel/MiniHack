const express = require('express');
const { getRecipeText, getRecipeImg } = require('../controllers/recipeController');
const multer = require('multer');

const router = express.Router();

const storage = multer.memoryStorage(); // Store file in memory for easier API upload
const upload = multer({ storage: storage });

router.post('/', getRecipeText);

router.post('/image', upload.single('file'), getRecipeImg)

module.exports = router;