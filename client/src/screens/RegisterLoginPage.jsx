import React from "react";


function RegisterLoginPage() {
  return (
    <div>
 <div className='landingNav'>
        <p className='navTitles'>MeNu</p>
    </div>

      <div className="homeBody">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="d-flex justify-content-around">
            <form
              action="/register"
              method="POST"
              class="col-3 p-3"
              className="userForms"
            >
              <h2 id="userFormsTitle" class="text text-center">
                Register
              </h2>
              <div class="form-group">
                <label for="first_name"></label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  className="userFormInputs"
                />
              </div>
              <div class="form-group">
                <label for="last_name"></label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  className="userFormInputs"
                />
              </div>
              <div class="form-group">
                <label for="email"></label>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  className="userFormInputs"
                />
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="userFormInputs"
                />
              </div>
              <div class="form-group">
                <label for="confirm"></label>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  name="confirm"
                  className="userFormInputs"
                />
              </div>
              <div class="text-center">
                <input
                  id="userFormsButtons"
                  type="submit"
                  value="Register"
                  class="btn mt-3"
                />
              </div>
            </form>

            <form
              action="/home"
              method="POST"
              class="col-3 p-3"
              className="userForms"
            >
              <h2 id="userFormsTitle" class="text text-center">
                Login
              </h2>
              <div class="form-group">
                <label for="email"></label>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  className="userFormInputs"
                />
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="userFormInputs"
                />
              </div>
              <div class="text-center">
                <input
                  id="userFormsButtons"
                  type="submit"
                  value="Login"
                  class="btn btn-center mt-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLoginPage;
