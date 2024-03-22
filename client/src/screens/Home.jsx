import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipes } from "../services/recipes.js";
import Nav from "../components/Nav.jsx";
import "../styles/Home.css";
import john from "../assets/john.png";
import burger from "../assets/Burger.jpg";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams()


  async function fetchRecipes() {
    const allRecipes = await getRecipes();
    setRecipes(allRecipes);
    setLoaded(true)
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
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
          {recipes.map((recipe,index) => (
            <div className="recipe">
              <div className="recipeHeader">
                {/* <img
                className="userIcon"
                src={recipe.user.img}
                alt={recipe.user.name}
              ></img> */}
              </div>
              <p className="recipeFeedTitle">{recipe.Mealname}</p>
              <img
                className="recipeImage"
                src={burger}
                alt="Recipe Image"
              ></img>
              <div className="ingredientsAndMeasurements">
                <ul className="ingredients">
                  <h5 className="listTitle">Ingredients</h5>
                  <li>{recipe.ingredients}</li>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
