import React from 'react' ;
import "./Register.css" ;
import { CiUser } from "react-icons/ci" ;
import { CiLock } from "react-icons/ci" ; 
import { CiMail } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { Link } from 'react-router-dom' ;

function SignUp() {
  return (
    <button className="SignUp">
        <Link to="/profile"> SignUp </Link>
    </button>
  ) ;
}

const Register = () => {
  return (
    <div className='wrapper'>
      <form action="">
          <h1>Register!</h1>

          <div className="input-box"> 
              <input type="text" placeholder="Email" required></input>
              <CiMail className='icon'/>
          </div>

          <div className="input-box">
              <input type="text" placeholder="Username" required></input>
              <CiUser className='icon'/>
          </div>

          <div className="input-box">
              <input type="password" placeholder="Password" required></input>
              <CiLock className='icon'/>
          </div>

          <div className="input-box">
              <input type="text" placeholder="Display Name" required></input>
              <CiDesktop className='icon'/>
          </div>

          <div>
            <SignUp/>
          </div>

      </form>
    </div>
  )
}

export default Register; 