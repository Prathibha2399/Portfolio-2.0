import React from "react";
import logo from "../assets/logo.svg";
import logos from "../assets/Untitled_logo_1_free-file.jpg";

import { useState } from "react";



const NavBar = () => {
   
    const [menu, setMenu] = useState("");

    const handleEvent = (id) => {
        /* const id = this.str;
        setMenu(id); */
        console.log(id);
    }

    return(
        <div className = "text-white flex flex-wrap align-middle p-4 justify-evenly">
            <img src={logos} alt="" className = "w-40 h-28 relative"/> 
            <ul className = "flex gap-8 m-2 p-4 text-xl">
                <li id="home" onClick={() => handleEvent(id)}>Home</li>
                <li id="about" onClick={() => handleEvent(id)}>About Me</li>
                <li id="skill" onClick={() => handleEvent(id)}>Skills</li>
                <li id="education" onClick={() => handleEvent(id)}>Projects</li>
                <li id="connect" onClick={() => handleEvent(id)}>Contact</li>
            </ul>
            <div className = "m-8 p-2 rounded-2xl cursor-pointer bg-gradient-to-bl from-orange-500 to-purple-500 text-black font-medium italic font-serif hover:scale-105 ease-in-out delay-200">Connect Me At</div>
        </div>
    )
}

export default NavBar;