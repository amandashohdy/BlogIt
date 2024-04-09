import React from 'react'
import { useState } from "react" ; 
import { useLocation, useNavigate} from 'react-router-dom' ; 
import { makeRequest } from "../../axios" ; 
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query" ;
import axios from "axios" ; 
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
      window.localStorage.clear() ;
      e.preventDefault() ;
      await axios.post('http://localhost:8800/api/auth/logout', { } , { withCredentials: true }) ;
      navigate("/") ;  
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