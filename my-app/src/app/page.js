"use client";
import Image from "next/image";
import { useState, createRef } from 'react';
import axios from 'axios';

export default function Home() {

	const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
	const [file, setFile] = useState(null);

	const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/recipes', {
                ingredients: ingredients.split(',').map(item => item.trim())
            });
            setRecipes(response.data);
			console.log(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	}

const handleSubmit = async (event) => {
	event.preventDefault();
	const formData = new FormData();

	formData.append('file', file);

	try {

		const response = await axios.post('http://localhost:4000/api/recipes/image', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		setRecipes(response.data);
		console.log('File uploaded successfully:', response.data);

	} catch (e) {
		console.error(e);
	}
}


  return (
    <>
      <div>
            <h1>Recipe Finder</h1>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients, separated by commas"
            />
            <button onClick={handleSearch}>Search Recipes</button>
			<form onSubmit={handleSubmit}>
            	<input type="file" onChange={handleFileChange} />
            	<button type="submit">Upload File</button>
        	</form>

            <div>
                {recipes}
            </div>
		</div>
    </>
  );
}
