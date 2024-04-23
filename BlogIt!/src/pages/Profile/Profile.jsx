import React from 'react'
import { useContext, useState } from "react" ; 
import { AuthContext } from "../../context/authContext" ;
import { useLocation, useNavigate} from 'react-router-dom' ; 
import { makeRequest } from "../../axios" ; 
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query" ;
import axios from "axios" ; 
import "./Profile.css" ;


const Profile = () => {

  const navigate = useNavigate() ; 

  const { currentUser } = useContext(AuthContext) ; 

  const handleLogout = async (e) => {
      window.localStorage.clear() ;
      e.preventDefault() ;
      await axios.post('http://localhost:8800/api/auth/logout', { } , { withCredentials: true }) ;
      navigate("/") ;  
    } ;

  return (
  <div>
    <button className="Logout" onClick={handleLogout}> Logout </button>
    <h1>  </h1>
  </div>
  )
}


export default Profile ; 