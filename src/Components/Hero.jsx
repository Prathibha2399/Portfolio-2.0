import Profile from "../assets/Profile.jpg";

import github from "../assets/github.svg";
import linkedin from "../assets/icons8-linkedin.svg";

const Hero = () => {
    return(
        <div className = " flex flex-col justify-center items-center text-white pb-[10%] md:pb-0">
            <div className = "flex flex-col justify-center items-center md:gap-[20%] md:flex-row-reverse mt-[5%]"> 
                <img src = {Profile} alt="" className = "h-48 rounded-[90%] w-[25%] md:w-[40%] md:h-[40%] shadow-slate-400"/>
                <div className = "text-[80] flex flex-col gap-4 animate-ping">
                    <h1 className = "font-bold text-2xl italic font-serif"><span className = "font-serif italic text-[80px]">H</span>ello, <br></br><span className = "bg-clip-text text-transparent bg-gradient-to-r from-orange-300 from-18% via-pink-600 via-15% to-purple-500 to-80% font-bold text-4xl italic font-serif">I'm Prathibha A S</span></h1>
                    <p className = "pt-[1%]">Passionate Web Developer, Building code one line at a time ✨</p> 
                    <div className = "bg-transparent flex flex-row gap-8 pt-[8%] justify-center">
                        <a href ="https://github.com/Prathibha2399" target="_blank"><img src={github} alt="" className = "bg-white rounded-3xl w-9 h-9 hover:scale-110 cursor-pointer"/></a>
                        <a href ="https://www.linkedin.com/in/prathibha-a-s-18b1a217a/" target="_blank"><img src={linkedin} alt="" className = "bg-white rounded-3xl w-9 h-9 hover:scale-110 cursor-pointer"/></a>
                </div>
                </div>
                
                </div>
               
            <div className = "pt-[2%]">
                <a href = "" download ="MyResumeDoc" target="_blank"><div className = "border-2 border-white px-8 py-2 rounded-full m-4 cursor-pointer hover:border-2 hover:scale-110 ease-in-out pt-[2%] font-serif font-bold">Resume</div></a>
            </div>
        </div>
    )
}


export default Hero;