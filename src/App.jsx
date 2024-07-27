import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
