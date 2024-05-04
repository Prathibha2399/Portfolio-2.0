import profile_img from "../assets/profile_img.svg";

const Hero = () => {
    return(
        <div className = " flex flex-col justify-center items-center text-white">
            <img src = {profile_img} alt="" className = "h-48 mt-[8%]"/>
            <h1><span className = "bg-clip-text text-transparent bg-gradient-to-bl from-orange-600 to-purple-500 font-bold text-2xl">I'm Prathibha A S</span></h1>
            <p></p>
            <div className = "flex">
                <div className = "border border-white p-2 rounded-lg m-4 cursor-pointer hover:border-2 hover:scale-110 ease-in-out">Resume</div>
                <div className = "border border-white p-2 rounded-lg m-4 cursor-pointer hover:border-2 hover:scale-110 ease-in-out">CV</div>
            </div>
        </div>
    )
}


export default Hero;