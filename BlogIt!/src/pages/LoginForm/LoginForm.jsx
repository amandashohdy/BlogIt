import React from 'react'
import './LoginForm.css'
import { CiUser } from "react-icons/ci" ;
import { CiLock } from "react-icons/ci" ; 
import { Link } from 'react-router-dom' ;

function Login() {
  return (
    <button className="Login">
        <Link to="/profile"> Login </Link>
    </button>
  ) ;
}

function RegisterButton() {
  return (
      <button className="RegisterButton">
        <Link to="/register"> Register </Link>
    </button>
  ) ;
}

function ForgotPassword() {
  return (
      <button className="ForgotPassword">
        <Link to="/forgot_password"> Forgot password? </Link>
      </button>
  )
}

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
          <h1>Blog It!</h1>
          <div className="input-box">
              <input type="text" placeholder="Username" required></input>
              <CiUser className='icon'/>
          </div>

          <div className="input-box">
              <input type="password" placeholder="Password" required></input>
              <CiLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
            <ForgotPassword/>
          </div>

          <div>
            <Login/>
          </div>

          <div className="register-link">
              Don't have an account? <RegisterButton/>
          </div>
      </form>
    </div>
  )
}

export default LoginForm; 