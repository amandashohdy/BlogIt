import React from "react" ; 

function ProfileHeader() {
  return (
      <div className = "header">
          <h1>DISPLAY NAME</h1>
          <h2>@username</h2>
          <h3>short description/bio...</h3>
      </div>
  ) ;
}

function Profile() {
  return (
    <div>
      <ProfileHeader/>
    </div>
  )
}

export default Profile ; 