import React from "react";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Connect from "./Components/Connect.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  /* const appProvider = createBrowserRouter([
    {
      path : "/",
      element : <App />,
      children : [
        {
          path : "/",
          element : <Hero />
        },
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/skill",
          element : <Skills />
        },
        {
          path : "/project",
          element : <Projects />
        },
        {
          path : "/connect",
          element : <Connect />
        },
      ]
    } 
  
  ]);  */
  
  return (
        <div className="bg-black text-white w-screen h-screen">
            <Router>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Hero />}/>
                <Route exact path="/home" element={<Hero />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/skill" element={<Skills />}/>
                <Route exact path="/project" element={<Projects />}/>
                <Route exact path="/connect" element={<Connect />}/>
              </Routes>
              <Footer />

            </Router>
        </div>
    );

}


export default App;