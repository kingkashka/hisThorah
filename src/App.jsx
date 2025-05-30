import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Leviticus11Page from "./pages/Leviticus11Page.jsx";
import LanguagePage from "./pages/LanguagePage.jsx";
import SacrificePage from "./pages/SacrificePage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import DNAPage from "./pages/DNAPage.jsx";
import TheName from "./pages/TheName.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leviticus11" element={<Leviticus11Page />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/sacrifices" element={<SacrificePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/DNA" element={<DNAPage />} />
        <Route path="/TheName" element={<TheName />} />
      </Routes>
    </>
  );
}

export default App;
