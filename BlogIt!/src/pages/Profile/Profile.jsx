import React from 'react'
import { useContext, useEffect, useState } from "react" ; 
import { AuthContext } from "../../context/authContext" ;
import { useLocation, useNavigate} from 'react-router-dom' ; 
import { makeRequest } from "../../axios" ; 
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query" ;
import axios from "axios" ; 
import "./Profile.css" ;


const Profile = () => {

  const [user, setUser] = useState([]) ;

  useEffect(() => {

    axios.get(`http://localhost:8800/api/users/find/:userID`).then(res => {
      console.log(res) ; 
      setUser(res.data.getUser) ; 
    }) ;
  }, [])

  const navigate = useNavigate() ; 

  const { currentUser } = useContext(AuthContext) ; 

  const handleLogout = async (e) => {
      window.localStorage.clear() ;
      e.preventDefault() ;
      await axios.post('http://localhost:8800/api/auth/logout', { } , { withCredentials: true }) ;
      navigate("/") ;  
    } ;

  var userDetails = "" ; 
  userDetails = user.map( (item, index) => {
    return (
      <tr key={index}>
        <td> {item.display_name} </td>
        <td> {item.username} </td>
      </tr>
    )
  }) ;

  return (
  <div>
    <button className="Logout" onClick={handleLogout}> Logout </button>
    {userDetails}
  </div>
  )
}


export default Profile ; 