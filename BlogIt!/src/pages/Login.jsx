import {Link} from 'react-router-dom' ;

function MyButton() {
  return (
    <button style = {{color: 'blue'}}>
      <Link to="/profile"> Login </Link>
    </button>
  ) ;
}

export default function Login() {
  return (
      <div>
        <h1>Blog It!</h1>
        <MyButton/>
      </div>
  ) ;
}
