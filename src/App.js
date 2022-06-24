import { Route, Routes } from "react-router-dom";
import "./App.css";

import NoMatch from "./routes/NoMatch";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
