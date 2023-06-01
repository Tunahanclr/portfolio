import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skiils from "./components/Skiils";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skiils />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
