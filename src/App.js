import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import NoMatch from "./routes/NoMatch/NoMatch";
import Welcome from "./routes/Welcome/Welcome";
import Login from "./routes/Login/Login";
import SignUp from "./routes/Signup/SignUp";
import Do from "./routes/Main/Do";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import getFirebaseConfig from "./firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // Initial Mount
  useEffect(() => {
    // Initialize Firebase with authentication listener
    initializeApp(getFirebaseConfig());
    onAuthStateChanged(getAuth(), authStateObserver);
  }, []);

  const authStateObserver = (user) => {
    if (user) {
      // Signed In
      if (location.pathname === "/login") {
        navigate("/do", { replace: true });
      }
    } else {
      // Signed Out
    }
  };

  const submitLogin = async (values) => {
    await signInWithEmailAndPassword(
      getAuth(),
      values.email,
      values.password
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login submitLogin={submitLogin} />} />
        <Route path="/do" element={<Do />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
