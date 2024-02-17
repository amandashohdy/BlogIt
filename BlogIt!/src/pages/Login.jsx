function MyButton() {
  return (
    <button style = {{color: 'blue'}}>
      Login
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
