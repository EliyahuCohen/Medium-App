import React, { useContext, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import PostDetials from "./components/PostDetials";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
