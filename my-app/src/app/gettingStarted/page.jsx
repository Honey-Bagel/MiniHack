'use client';
import TextareaAutosize from 'react-textarea-autosize';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function GettingStarted() {
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [file, setFile] = useState(null);
  const fileUploadRef = useRef();

  const handleTextSubmit = async (event) => {
	try {
		const response = await axios.post('http://localhost:4000/api/recipes', {
			ingredients: ingredients.split(',').map(item => item.trim())
		});
		setRecipe(JSON.parse(response.data));
		console.log(response.data);
	} catch (error) {
		console.error('Error fetching recipe:', error);
	}
  }

  const handleFileChange = async (event) => {
		setFile(event.target.files[0]);
		const formData = new FormData();

		formData.append('file', event.target.files[0]);

		try {
			const response = await axios.post('http://localhost:4000/api/recipes/image', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			setRecipe(JSON.parse(response.data));
			console.log('File uploaded successfully:', response.data);
		} catch (error) {
			console.error(error);
		}
  }

  const handleImageSubmit = async (event) => {
	const formData = new FormData();

	formData.append('file', file);

	try {
		const response = await axios.post('http://localhost:4000/api/recipes/image', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		setRecipe(response.data);
		console.log('File uploaded successfully:', response.data);
	} catch (error) {
		console.error(error);
	}
	
  }

  return (
    <>
      <div className="pt-20">
        <div className="flex flex-col mt-10 ml-32">
          <div>
            <div className="flex text-5xl font-bold text-black mb-4">
              Getting Started
            </div>
            <div className="flex text-2xl font-semibold w-96">
              Try it yourself! Enter the ingredients you have on hand and we will generate a recipe using what you have available.
            </div>
          </div>
          <div>
            <div className="w-6/12 mt-2">
              <TextareaAutosize
                minRows={3}
                maxRows={5}
				type="text"
				value={ingredients}
				onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter ingredients here..."
                className="border rounded-lg w-full p-2"
              />
            </div>
            <div className='flex'>
							<div className='flex mr-6'>
								<button onClick={handleTextSubmit} className="flex border rounded-lg bg-yellow-500 mt-1 hover:opacity-80 active:bg-yellow-500/50">
									<div className="text-black font-semibold p-1 px-6">
										Generate!
									</div>
								</button>
							</div>
							<div className='flex'>
								<button 
									className="border rounded-lg bg-yellow-500 mt-1 hover:opacity-80 active:bg-yellow-500/50"
									onClick={() => fileUploadRef.current.click()}
								>
									<div className="text-black font-semibold p-1 px-6">
										Input File
									</div>
								</button>
								<input
									type='file' 
									ref={fileUploadRef}
									onChange={handleFileChange}
									accept='image/png, image/jpeg'
									hidden
								/>
            </div>
            </div>
          </div>
		  
          <div>
			{recipe &&
            <div className='w-10/12 mt-20 border rounded-lg'>
			   <div className="font-bold">
				  Recipe:
				</div>	
              <h2>{recipe && <div>{recipe.recipeName} (Prep Time: {recipe.prepTime}, Cook Time: {recipe.cookTime})</div> }</h2>
			  <br/>
			  <h4 className="font-bold">Serves: {recipe.servingSize}</h4>
			  <br/>
			  <h3 className="font-bold">Ingredients:</h3>
			  <div>
				{recipe.ingredients.split('\n').map((i) => {
					return (
						<div key={i}>
							{i}
							<br/>
						</div>
					)
				})} 
				</div>
				<br/>
				<h3 className="font-bold">Instructions:</h3>
				<div>
					{recipe.instructions.split('\n').map((i) => {
						return (
							<div className='pb-2' key={i}>
								{i}
								<br/>
							</div>
						)
					})}
				</div>
            </div>
			}
          </div>
        </div>
      </div>
    </>
  );
}