function MyButton() {
  return (
    <button style = {{color: 'blue'}}>
      Login
    </button>
  ) ;
}

export default function MyApp() {
  return (
      <div>
        <h1>Blog It!</h1>
        <MyButton/>
      </div>
  ) ;
}

