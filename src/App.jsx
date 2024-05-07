import React from "react";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Connect from "./Components/Connect.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";


const App = () => {

  return(
    <div className="bg-black text-white w-screen h-screen">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
      
    </div>
  )
}


export default App;