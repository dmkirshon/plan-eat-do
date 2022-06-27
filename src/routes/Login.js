import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div>
      <Logo />
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type={"email"} />

        <label htmlFor="password">Password</label>
        <input id="password" type={"password"} />

        <button type="submit">Submit</button>
      </form>
      <div>
        New to planEatdo? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
