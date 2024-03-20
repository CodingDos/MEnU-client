import React from 'react'
import Nav from "../components/Nav.jsx"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
  
      <div className='container'>
        <div className='recipeSearch'>
        <div class="form-group">
                <label for="email"></label>
                <input
                  placeholder="Search Recipe"
                  type="text"
                  name="recipeSearch"
                  className="userFormInputs"
                />
                <Link to='/'>
                 <input
                  id="userFormsButtons"
                  type="Submit"
                  value="Submit"
                  class="btn btn-center mt-3"
                />
                </Link>
              </div>

        </div>
        <div className='recipeFeed'>

        </div>
      </div> 
      
    </div>
  )
}

export default Home
