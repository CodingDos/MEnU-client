import React from 'react'
import { useState, useEffect } from "react"
import Modal from "react-modal";
// import { getRecipes, createRecipe, editRecipe, deleteRecipe } from '../services/recipes.js';
import { getRecipes, createRecipe } from '../services/recipes.js';
import '../styles/dashboard.css'



function Dashboard( {user} ) {
  console.log(user)
  const [toggle, setToggle] = useState(false)
  // uses endpoint 
  const [recipes, setRecipes] = useState([])
  const [showModal, setShowModal] = useState(false)

  // This should fetch all recipes, need to make it so it only pulls recipes that are for said user.
  const fetchRecipes = async () => {
    try {
      const allRecipes = await getRecipes()
      console.log(allRecipes)     
      const userRecipes = allRecipes.filter((recipe) => recipe.userId && recipe.userId._id === user?.id)
      const recipesMapped = userRecipes.map(recipe => ({
        mealName: recipe.mealName,
        instructions: recipe.instructions,
        image: recipe.image,
        calories: recipe.calories,
        ingredients: recipe.ingredients,
      }));
      setRecipes(recipesMapped)
    } catch (error) {
      console.error("Error fetching All Recipes", error)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [toggle])

  const handleCreateRecipe = async (e) => {
    e.preventDefault()
    try {
      await createRecipe(recipeForm)
      setShowModal(false);
      setToggle(prev => !prev);
    } catch (error) {
      console.error("Error creating Recipes", error)
    }
  }

  const [recipeForm, setRecipeForm] = useState({
    mealName: "",
    instructions: "",
    image:"",
    calories:"",
    ingredients:[],
  }, [])

  //recipe handle change
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setRecipeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //INGREDIENT state for form input
  const [newIngredient, setNewIngredient] = useState({
    name:"",
    quantity:""
  })

  //on submit function for INGREDIENTS +
  function handleAddIngredient(e) {
    e.preventDefault()
    setRecipeForm(prev =>({
      ...prev,
      ingredients: [...prev.ingredients, newIngredient]
    }))
    setNewIngredient({ name: "", quantity: ""})
  }

//handle MULTIPLE submit for when the value input changes
function ingredientHandleChange(e) {
  const {name, value} = e.target
  setNewIngredient((prev) => ({
    ...prev,
    [name]: value
  }))
}
//MODAL state change for open and closing
function openModal() {
  setShowModal(true);
}

function closeModal() {
  setShowModal(false);
}

  return (
    <div>
        <div className='dashboard_title'>
          <p>WELCOME {user.username}</p>
        </div>
        <div className='recipe_photos'>
          {recipes?.map(recipe => (
            <div className="root_recipe">
              <div className="recipe_name">
              <h1>Recipe Name:{recipe.mealName}</h1>
              </div>
              <div className="recipe_img">
                <img src={recipe.image} alt={recipe.mealName} />
              </div>
              <div className="recipe_instructions">
                <p>{recipe.instructions}</p>  
              </div>
              <div className="recipe_calories">
                <h3>{recipe.calories}</h3>
              </div>
              <div className="recipe_ingredients">
                <ul> Ingredient:
                  {recipe.ingredients.map((ingredient, index) => (
                    <li>{ingredient.name}</li>
                  ))}
                </ul>
                <ul> Ammount:
                  {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      <div className='user_profile'></div>
      <button onClick={openModal}>Add Recipe</button>
        <Modal isOpen={showModal} onRequestClose={closeModal} contentLabel="Example Modal">
        <button onClick={() => setShowModal(false)}>
            Close
          </button>
          <form onSubmit={handleCreateRecipe} className="createRecipeForm">
            <label>
              Meal Name:
              <input type="text" name="mealName" value={recipeForm.mealName} onChange={handleChange} required/>
            </label>
            <label>
              Instructions:
              <textarea name="instructions" value={recipeForm.instructions} onChange={handleChange} required/>
            </label>
            <label>
              Image URL:
              <input type="text" name="image" value={recipeForm.image} onChange={handleChange} required/>
            </label>
            <label>
              Calories:
              <input type="text" name="calories" value={recipeForm.calories} onChange={handleChange} required/>
            </label>
            <div className="ingredients_input">
              <label>
                Ingredient Name:
                <input type="text" name="name" value={newIngredient.name} onChange={ingredientHandleChange} />
              </label>
              <label>
                Quantity:
                <input type="text" name="quantity" value={newIngredient.quantity} onChange={ingredientHandleChange} />
              </label>
              <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
            <ul>
              {recipeForm?.ingredients?.map((ingredient, index) => (
                <li>{ingredient.name} - {ingredient.quantity}</li>
              ))}
            </ul>
            <button type="submit">Add Recipe</button>
          </form>
        </Modal>
    </div>
  );
}

export default Dashboard
