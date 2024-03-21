import React from 'react'
import Nav from "../components/Nav.jsx"
import { Link } from "react-router-dom"
import "../styles/Home.css"

function Home() {
  return (
    <div>
  
      <div className='container'>
        <div>
        <div id="recipeSearch" className="h-100 d-flex align-items-center justify-content-center" >
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
        <div className='recipeFeed'>
          <div className='recipe'>
            <div className='recipeHeader'>
            <img src= "" alt = "User Image"></img>
            <p>Recipe Name </p>
            </div>
            <img src="" alt="Recipe Image"></img>

          </div>

        </div>
      </div> 
      
    </div>
  )
}

export default Home
