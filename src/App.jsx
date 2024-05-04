import React from "react";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";

const App = () => {
  return(
    <div className="bg-black text-white">
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}


export default App;