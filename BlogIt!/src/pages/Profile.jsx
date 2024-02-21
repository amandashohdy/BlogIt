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

function Dates() {
  return (
    <div className = "Dates">
      Dec 02: Title...<br />
      Nov 04: Title...<br />
      Oct 20: Title...<br />
      Sep 24: Title...<br />
      Aug 08: Title...<br />
      July  19: Title...<br />
      Jun 09: Title...<br />
      May 09: Title...<br />
      Apr  16: Title...<br />
      Mar 01: Title...<br />
      Feb 04: Title...<br />
      Jan 09: Title...<br />
    </div>
  )
}

function Profile() {
  return (
    <div>
      <Logout/>
      <ProfileHeader/>
      <Dates/>
    </div>
  )
}

export default Profile ; 