"use client";
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';

export default function Home() {

	const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

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

            <div>
                {recipes}
            </div>
		</div>
    </>
  );
}
