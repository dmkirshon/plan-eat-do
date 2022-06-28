import { Route, Routes } from "react-router-dom";
import "./App.css";

import NoMatch from "./routes/NoMatch";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const submitLogin = (values) => {};

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login submitLogin={submitLogin} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
