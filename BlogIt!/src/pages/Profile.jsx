import {Link} from 'react-router-dom' ; 

{/* Button to return to the login page */}
function Logout() {
  return (
      <button className="Logout" style = {{color: 'blue'}}>
        <Link to="/"> Logout </Link>
    </button>
  ) ;
}

function ProfileHeader() {
  return (
      <div className = "ProfileHeader">   
          <h1>DISPLAY NAME</h1>
          <h2>@username</h2>
          <h3>short description/bio...</h3>
      </div>
  ) ;
}

function Profile() {
  return (
    <div>
      <Logout/>
      <ProfileHeader/>
    </div>
  )
}

export default Profile ; 