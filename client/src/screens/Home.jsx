import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { getRecipe } from "../services/recipes.js";
import Nav from "../components/Nav.jsx";
import "../styles/Home.css";
import john from "../assets/john.png";
import burger from "../assets/Burger.jpg";



function Home() {


  const Recipes = (props) => {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()

    useEffect(() => {
      const fetchRecipe = async () => {
        const recipe = await getRecipe(id)
        setRecipe(recipe)
        
      }
      fetchRecipe()
    }, [id])
  }

  




  return (
    <div>
      <div className="container">
        <div>
          <div
            id="recipeSearch"
            className="h-100 d-flex align-items-center justify-content-center"
          >
            <label for="recipeSearch"></label>
            <input
              placeholder="Search Recipe"
              type="text"
              name="recipeSearch"
              className="userFormInputs"
            />
            <input
              id="userFormsButtons"
              type="Submit"
              value="Submit"
              class="btn btn-center mt-3"
            />
          </div>
        </div>
        <div className="recipeFeed">
          
          <div className="recipe">
            <div className="recipeHeader">
              <img className="userIcon" src={john} alt="User Image"></img>
            </div>
            <p className="recipeFeedTitle">Emmy Squared Burger </p>
            <img className= "recipeImage" src={burger} alt="Recipe Image"></img>
            <div className="ingredientsAndMeasurements">
              <ul className="ingredients">
                <h5 className="listTitle">Ingredients</h5>
                <li>Cheeseburger</li>
              </ul>
              <ul className="measurements">
                <h5 className="listTitle">Measurement</h5>
                <li>1 Burger</li>
              </ul>
            
            </div>
            <div className="recipeComments">
                <p>TEST COMMENTssss </p>
              </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
