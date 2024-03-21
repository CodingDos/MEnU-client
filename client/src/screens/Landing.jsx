import React from "react";
import { register, login } from "../services/users.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Landing(props) {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    description: "",
    image: "",
    isError: false,
    errorMsg: "",
  });

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await register(registerForm)
      setUser(user)
      navigate('/home')
    } catch (error) {
      console.error(error)
      setRegisterForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        description: '',
        image:'',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const onLoginSubmit = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await login(loginForm)
      setUser(user)
      navigate('/home')
    } catch (error) {
      console.error(error)
      setLoginForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }


  const registerHandleChange = (event) => setRegisterForm({
    ...registerForm,
    [event.target.name]: event.target.value,
  })

  const loginHandleChange = (event) => setLoginForm({
    ...loginForm,
    [event.target.name]: event.target.value,
  })

  const renderRegisterError = () => {
    const toggleRegisterForm = registerForm.isError ? 'danger' : ''
    if (registerForm.isError) {
      return (
        <button type='submit' className={toggleRegisterForm}>
          {registerForm.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Register</button>
    }
  }

  const renderLoginError = () => {
    const toggleLoginForm = loginForm.isError ? 'danger' : ''
    if (loginForm.isError) {
      return (
        <button type='submit' className={toggleLoginForm}>
          {loginForm.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Login</button>
    }
  }

  const { username, email, password, passwordConfirmation, firstName, lastName, description, image} = registerForm

  return (
    <div>
      <div className="landingNav">
        <p className="navTitles">MeNu</p>
      </div>

      <div className="homeBody">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="d-flex justify-content-around">
            <form onSubmit={onSignUp} //make onSubmit function
              action="/register"
              method="POST"
              className="col-3 p-3"
              id="userForms"
            >
              <h2 id="userFormsTitle" className="text text-center">
                Register
              </h2>
              <div className="form-group">
                <label htmlFor="firstName"></label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={registerHandleChange}  //make handleChange function 
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName"></label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={registerHandleChange}  //make handleChange function 
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username"></label>
                <input
                  required
                  type="text"
                  name="username"
                  value={username}
                  placeholder="username"
                  onChange={registerHandleChange}  //make handleChange function 
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={registerHandleChange}  //make handleChange function 
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={registerHandleChange}
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm"></label>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={registerHandleChange}
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description"></label>
                <input
                  required
                  type="text"
                  name="description"
                  value={description}
                  placeholder="Description"
                  onChange={registerHandleChange}  //make handleChange function 
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="image"></label>
                <input
                  placeholder="Profile Picture"
                  name='image'
                  type='text'
                  value={image}
                  onChange={registerHandleChange}
                  className="userFormInputs"
                />
              </div>

              <div className="text-center">
                <input
                  id="userFormsButtons"
                  type="submit"
                  value="Register"
                  className="btn mt-3"
                />
              </div>
              {renderRegisterError()}
            </form>

            <form onSubmit={onLoginSubmit}
              action="/home"
              method="POST"
              className ="col-3 p-3"
              id="userForms"
            >
              <h2 id="userFormsTitle" className="text text-center">
                Login
              </h2>
              <div className="form-group">
                <label htmlFor="username"></label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={loginForm.username}
                  onChange={loginHandleChange}
                  className="userFormInputs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginForm.password}
                  onChange={loginHandleChange}
                  className="userFormInputs"
                />
              </div>
              {renderLoginError()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;



{/* <div class="text-center">
<input
  id="userFormsButtons"
  type="submit"
  value="Login"
  class="btn btn-center mt-3"
/>
</div> */}