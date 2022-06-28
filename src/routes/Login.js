import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Login = ({ submitLogin }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitLogin(values);
  };

  return (
    <div>
      <Logo />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type={"email"}
          onChange={handleChange}
          value={values.email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={"password"}
          onChange={handleChange}
          value={values.password}
          required
        />

        <button
          type="submit"
          disabled={values.email.length === 0 || values.password.length === 0}
        >
          Submit
        </button>
      </form>
      <div>
        New to planEatdo? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
