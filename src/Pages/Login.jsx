import { useState } from "react";
import useAuth from "./../Hook/useAuth";
import "./../Components/Login/login.css"

function Login() {
  const [token, setToken] = useAuth();
  // const [error, setError] = useError()
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault()

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputValue,
        password: inputValue1
      })
    })
    .then(res => res.json())
    .then(data => setToken(data.token))
  }

  return (
    <>
      <div className="login">
        <h1 className="login__title">Sign in</h1>
        <p className="login__text">Sign in and start managing your candidates!</p>
        <form onSubmit={(e) => hendleSubmit(e)}>
          <input
            type="text"
            placeholder="email"
            className="login__email login__input"
            onChange={(e) => setInputValue(e.target.value)}
            />
          <input
            type="text"
            placeholder="password"
            className="login__password login__input"
            onChange={(e) => setInputValue1(e.target.value)}
            />
          <button type="submit" className="login__button">Login</button>
        </form>
      </div>
    </>
  );
}
export default Login;