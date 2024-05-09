import React from "react";
import logo from "../assets/logo.svg";
import logos from "../assets/Untitled_logo_1_free-file.jpg";
import underline from "../assets/nav_underline.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


const NavBar = () => {
   
    const [menu, setMenu] = useState("");

    const navigate = useNavigate();

    const handleEvent = (name) => {
        setMenu(name);
        //console.log(menu);
        navigate("/" + name);
    }

    return(
        <div className = "text-white flex flex-wrap align-middle p-4 justify-evenly">
            <img src={logos} alt="" className = "md:w-48 md:h-44 w-40 h-38 pt-0 relative"/> 
            <ul className = "flex gap-8 m-2 p-4 text-xl cursor-pointer pt-[2%]">
                <li onClick={() => handleEvent("home")}><p>Home</p>{menu==="home"? <img src={underline} />:null}</li>
                <li onClick={() => handleEvent("about")}><p>About Me</p>{menu==="about"? <img src={underline} alt=""/>:null} </li>
                <li onClick={() => handleEvent("skill")}><p>Skills</p>{menu==="skill"? <img src={underline} />:null}</li>
                <li onClick={() => handleEvent("project")}><p>Projects</p>{menu==="project"? <img src={underline} />:null}</li>
                <li onClick={() => handleEvent("connect")}><p>Contact</p>{menu==="connect"? <img src={underline} />:null}</li>
            </ul>
            <AnchorLink className="" offset={50} href="#footer_join"><div id = "join" className = "m-8 p-2 rounded-3xl cursor-pointer bg-gradient-to-r from-orange-300 from-10%  via-pink-700 via-50% to-purple-700 px-[18px] py-[8px] transition-[0.3s] text-gray-900 italic font-serif hover:scale-105 ease-in-out delay-200 font-bold animate-bounce hover:animate-none">Connect Me At</div></AnchorLink>
        </div>
    )
}

export default NavBar;