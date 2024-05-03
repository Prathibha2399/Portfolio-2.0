import React from "react";
import logo from "../assets/logo.svg";


const NavBar = () => {
    return(
        <div className = "text-white flex flex-wrap align-middle p-4 justify-evenly">
            <img src={logo} alt="" /> 
            <ul className = "flex gap-8 m-2 p-4 text-xl">
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
            <div className = "m-4 p-2 rounded-2xl cursor-pointer bg-gradient-to-bl from-orange-500 to-purple-500 text-black font-medium italic font-serif hover:scale-105 ease-in-out delay-200">Connect Me At</div>
        </div>
    )
}

export default NavBar;