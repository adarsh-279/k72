import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Agency from "./pages/Agency";
import Navbar from "./components/navigation/Navbar";
import NavPage from "./components/navigation/NavPage";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <NavPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<Agency />} />
      </Routes>
    </div>
  );
};

export default App;