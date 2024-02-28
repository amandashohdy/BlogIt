import React from 'react' ;
import "./ForgotPassword.css" ;
import { CiMail } from "react-icons/ci" ;
import { CiUser } from "react-icons/ci" ;
import { Link } from 'react-router-dom' ;

function Submit() {
    return (
        <button className="Submit">
            <Link to="/"> Continue </Link>
            {/* Send email to either change password 
                or with a temporary password         */}
        </button>
    )
}

const ForgotPassword = () => {
    return (
      <div className='wrapper'>
        <form action="">
            <h1>Forgot Password?</h1>
  
            <div className="input-box">  
                <input type="text" placeholder="Email" required></input>
                <CiMail className='icon'/>
            </div>
  
            <div className="input-box">
                <input type="text" placeholder="Username" required></input>
                <CiUser className='icon'/>
            </div>

            <div>
              <Submit/>
            </div>
  
        </form>
      </div>
    )
  }

export default ForgotPassword ; 