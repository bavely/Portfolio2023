import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Header from "./Components/Portfolio/Header";
import "./App.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagenotfound from "./Pages/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/pagenotfound" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
