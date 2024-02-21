import {Link} from 'react-router-dom' ;

{/* Login Button */}
function LoginButton() {
  return (
    <button style = {{color: 'blue'}}>
      <Link to="/profile"> Login </Link>
    </button>
  ) ;
}

export default function Login() {
  return (
      <div classname="Login">
        <h1>Blog It!</h1>
        <LoginButton/>
      </div>
  ) ;
}
