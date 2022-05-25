import React from "react";
import Header from "./component/Header/Index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CountryDetails } from "./component/Country/CountryDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="country-details" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
