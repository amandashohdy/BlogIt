import React from 'react'
import './LoginForm.css'
import { CiUser } from "react-icons/ci" ;
import { CiLock } from "react-icons/ci" ; 
import { Link, useNavigate } from 'react-router-dom' ;
import { useContext, useState } from "react" ; 
import { AuthContext } from "../../context/authContext" ; 


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

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  }) ;

  const [err, setErr] = useState(null) ;

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) ;
  } ;
  const { login } = useContext(AuthContext) ; 

  const handleLogin = async (e) => {
    e.preventDefault() ;
    try {
      await login(inputs) ;
    } catch (err) {
      setErr(err) ;
    }
  } ;

  return (
    <div className='wrapper'>
      <form action="">
          <h1>Blog It!</h1>
          <div className="input-box">
              <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
              <CiUser className='icon'/>
          </div>

          <div className="input-box">
              <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
              <CiLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
            <ForgotPassword/>
          </div>

          {/* err && err */}
          <button className="Login" onClick={handleLogin}>
            Login
          </button>

          <div className="register-link">
              Don't have an account? <RegisterButton/>
          </div>
      </form>
    </div>
  )
}

export default LoginForm; 