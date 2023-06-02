import React, { useRef, useState } from "react";
import "./Login.scss";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";

function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request.post(
        "/auth/login",
        {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      // console.log(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          ref={usernameRef}
        />

        <label htmlFor="">Password</label>
        <input name="password" type="password" ref={passwordRef} />
        <button type="submit">Login</button>
        {error && <div>{error.message}</div>}
      </form>
    </div>
  );
}

export default Login;
