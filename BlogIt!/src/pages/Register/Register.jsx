import React from 'react' ;
import "./Register.css" ;
import { useState } from "react" ;
import axios from "axios" ; 
import { CiUser } from "react-icons/ci" ;
import { CiLock } from "react-icons/ci" ; 
import { CiMail } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { Link } from 'react-router-dom' ;


const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    display_name:"",
  }) ;

  const [err, setErr] = useState(null) ;

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) ;
  } ;

  const handleClick = async e => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs) ;
    } catch(err) {
      setErr(err.response.data) ; 
    }
  } ;

  console.log(err) ;

  return (
    <div className='wrapper'>
      <form action="">
          <h1>Register!</h1>

          <div className="input-box">
              <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
              <CiUser className='icon'/>
          </div>

          <div className="input-box"> 
              <input type="text" placeholder="Email" name="email" onChange={handleChange}></input>
              <CiMail className='icon'/>
          </div>

          <div className="input-box">
              <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
              <CiLock className='icon'/>
          </div>

          <div className="input-box">
              <input type="text" placeholder="Display Name" name="display_name" onChange={handleChange}></input>
              <CiDesktop className='icon'/>
          </div>

        {/* {err && err} */}
        <button className="SignUp" onClick={handleClick}>
          Sign Up
        </button>

      </form>
    </div>
  )
}

export default Register; 