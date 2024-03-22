import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap";
import { getRecipes, getRecipeById, createRecipe, editRecipe, deleteRecipe } from '../services/recipes.js';
import '../styles/dashboard.css'
// import { useParams, useNavigate } from "react-router-dom";
// import { getIngredient, getIngredientById, createIngredient, editIngredient, deleteIngredient } from "../services/recipes.js"
// import { jwtDecode } from 'jwt-decode';




function Dashboard( {user} ) {

  const [toggle, setToggle] = useState(false)
  // uses endpoint 
  const [recipes, setRecipes] = useState()
  // const [newRecipe, setNewRecipe] = useState()
  const [showModal, setShowModal] = useState(false)

  // This should fetch all recipes, need to make it so it only pulls recipes that are for said user.
  const fetchRecipes = async () => {
    try {
      // localStorage.getItem("token")
      // const userId = jwtDecode(response.data.token);
      // console.log("THIS IS TTHE USER ID", userId)
      // const userId = jwtDecode( localstorage.getItem("token") ) //attempting to get the userid thru the token | not being used just testing if possible
      // console.log(userId) //need to see if we need to do user._id or something
      const allRecipes = await getRecipes()
      console.log(allRecipes)
      //need to filter 
      const userRecipes = allRecipes.filter((recipe) => recipe.userId == user._id)
      setRecipes(userRecipes)
    } catch (error) {
      console.error("Error fetching All Recipes", error)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [toggle])

  const handleCreateRecipe = async () => {
    try {
      await createRecipe()
      // await - need to refresh recipes after one is created
      setShowModal(false);
      setToggle(true);
    } catch (error) {
      
    }
  }
  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const [recipeForm, setRecipeForm] = useState({
    mealName: "",
    instructions: "",
    image:"",
    calories:"",
    ingredients:[],
    comments:[]
  })


  const { mealName, instructions, image, calories, ingredients } = recipeForm

  //recipe handle change
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setRecipeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [newIngredient, setNewIngredient] = useState({
    name:"",
    quantity:""
  })

  //on submit function for ingredient +
  function handleAddIngredient(e) {
    e.preventDefault()
    setNewIngredient(prev => [
        ...prev, newIngredient
    ]);
    setNewIngredient("")
}

//handle submit for when the value input changes
function ingredientHandleChange(e) {
  const {name, value} = e.target
  setNewIngredient((prev) => ({
    ...prev,
    [name]: value
  }))
}

  return (
    <>
      <div className='dashboard_title'>
        <p>WELCOME TO MY DASHBOARD </p>
      </div>
      <div className='recipe_photos'>
        
        <div className='db_recipe_card'>{recipes}</div>
        
      </div>

      <div className='user_profile'></div>

      <div className="rootAddRecipeBtn">
        <Button className="addRecipeBtn"onClick={() => setShowModal(true)}>Add Recipe</Button>
      </div>
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3">
              <Form.Label>Recipe Name:</Form.Label>
              <Form.Control
                type="text"
                name="mealName"
                value={mealName}
                onChange={handleChange}
                autoFocus
              />
        </Form.Group>
        <Form.Group className="mb-3">
              <Form.Label>Instructions:</Form.Label>
              <Form.Control
                type="text"
                name="instructions"
                value={instructions}
                onChange={handleChange}
                autoFocus
              />
        </Form.Group>
        <Form.Group className="mb-3">
              <Form.Label>image:</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                autoFocus
              />
        </Form.Group>
        <Form.Group className="mb-3 ">
              <Form.Label>Calories:</Form.Label>
              <Form.Control
                type="text"
                name="calories"
                value={calories}
                onChange={handleChange}
                autoFocus
              />
        </Form.Group>
        <Form.Group className="mb-3" >
              <Button onClick={handleAddIngredient}> PLUS </Button>
              <Form.Label>Ingredient:</Form.Label>
              <Form.Control
                type="text"
                name="ingredients"
                value={ingredients.name}
                onChange={ingredientHandleChange}
                autoFocus
              />
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="text"
                name="calories"
                value={ingredients.quantity}
                onChange={ingredientHandleChange}
                autoFocus
              />
              {/* <Form.Label>Ingredients:</Form.Label>
              <Form.Control
                type="text"
                name="ingredients"
                value={ingredients}
                onChange={handleChange}
                autoFocus
              /> */}
        </Form.Group>
        <Button onClick={handleCreateRecipe}> make a recipe </Button>
        </Modal.Body>
        </Modal>
      
      
    </>
  );
}

export default Dashboard
