import React, { useState } from "react";
import { useAuth } from "../src/AuthProvider";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const auth = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      auth.loginAuth(input);
      return;
    }
    alert("please provide a valid input");
  };
  return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <br />
        <input
            type="text"
            onChange={(e) => setInput({ ...input, username: e.target.value })}
        />
        <br />
        <label>Password: </label>
        <br />
        <input
            type="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <button type="submit">Login</button>
            </form>
    </div>
  );
}

export default Login;