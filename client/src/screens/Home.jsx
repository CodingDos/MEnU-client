import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipes} from "../services/recipes.js";
import { getCommentById} from "../services/comments.js";
import Nav from "../components/Nav.jsx";
import "../styles/Home.css";
import icon from "../assets/userIcon.jpg"
import Comments from "../components/Comments.jsx";

function Home({user}) {
  const [recipes, setRecipes] = useState([]);
  const [comment, setComments] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  async function fetchRecipes() {
    const allRecipes = await getRecipes();
    setRecipes(allRecipes);
    setLoaded(true);
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
        {/* <div> Handle this LATER*******
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
              className="btn btn-center mt-3"
            />
          </div>
        </div> */}
        <div className="recipeFeed">
          {recipes.length > 0 &&
            recipes.map((recipe, index) => (
  
              <div className="recipe">
                <div className="recipeHeader">
                
                  <img
                    className="userIcon"
                    
                    src={recipe?.userId?.img === undefined ? icon : recipe?.userId?.img}

                       //}
                  
                    
                    // else do the above
                    alt={recipe?.userId?.username}
                  ></img>
                  <p className="userIconTitle">{recipe?.userId?.username}</p>
                </div>
                <p className="recipeFeedTitle">{recipe.mealName}</p>
                <img
                  className="recipeImage"
                  src={recipe.image}
                  alt={recipe.name}
                ></img>
                <div className="ingredientsAndMeasurements">
                  <ul className="ingredients">
                    <h5 className="listTitle">Ingredients</h5>

                    {recipe.ingredients.map((ingredient) => (
                      <li>{ingredient.name}</li>
                    ))}
                  </ul>
                  <ul className="measurements">
                    <h5 className="listTitle">Measurements</h5>
                    {recipe.ingredients.map((measurement) => (
                      <li>{measurement.quantity}</li>
                    ))}
                  </ul>
                </div>
                <p>{recipe.calories}</p>
                <div className="recipeComments">
                {recipe.comments.map((comment) => (
                      <p>{comment.comment}</p>
                    ))
                    
                    }
                </div>
                <div>
                  <Comments comment={comment} setComment={setComments} recipeId ={recipe._id} userId = {user.id} />
                </div>
              </div>
              
              
            ))}
        </div>
        
        
      </div>
    </div>
  );
}

export default Home;
