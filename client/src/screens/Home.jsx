import { useState, useEffect } from "react";
import { getRecipes } from "../services/recipes.js";
import { getCommentById } from "../services/comments.js";
import "../styles/Home.css";
import icon from "../assets/userIcon.jpg";
import Comments from "../components/Comments.jsx";
import Modal from "react-modal";

function Home({ user }) {
  const [recipes, setRecipes] = useState([]);
  const [comment, setComments] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState(null);
  

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

  const openModal = (recipeId) => {
    setCurrentRecipeId(recipeId);
  };

  const closeModal = () => {
    setCurrentRecipeId(null);
  };

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
                    src={
                      recipe?.userId?.img === undefined
                        ? icon
                        : recipe?.userId?.img
                    }
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
                <p>{recipe.calories}</p>
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
                
                <button className="modalButton" onClick={() => openModal(recipe._id)}>
                  Create a Comment
                </button>
                {/* <div className="recipeComments">
                  {recipe.comments.map((oneComment, index) => (
                    <p key={index}>{oneComment.comment}</p>
                  ))}
                </div> */}

                <div>
                  <Modal 
                    isOpen={currentRecipeId === recipe._id}
                    onRequestClose={closeModal}
                  >
                    <div className="closeModalButtonDiv" >
                    <p>Add a Comment!</p>
                    <button className="closeModalButton" onClick={closeModal}>X</button>
                    </div>
                    <Comments
                      recipeId={currentRecipeId}
                      userId={user.id}
                      comment={comment}
                      setComment={setComments}
                    />
                    
                  </Modal>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
