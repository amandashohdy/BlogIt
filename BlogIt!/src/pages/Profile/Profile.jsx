import React from 'react'
import {Link, useNavigate} from 'react-router-dom' ; 
import "./Profile.css" ;


function ProfileHeader() {
  return (
      <div className = "ProfileHeader">   
          <h1>DISPLAY NAME</h1> 
          <h2>@username</h2> 
          <h3>short description/bio...</h3> 
      </div>
  ) ;
}

const Profile = () => {

  const navigate = useNavigate() ; 

  const handleLogout = async (e) => {
      e.preventDefault() ;
      window.localStorage.clear() ;
      navigate("/") 
    } ;

  return (
    <div>
      <button className="Logout" onClick={handleLogout}>
        Logout
      </button>
      <ProfileHeader/>
    </div>
  )
}


export default Profile ; 