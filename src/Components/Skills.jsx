import {My_FrontEnd_Skills} from "../Utils/mySkills";
import { My_BackEnd_Skills } from "../Utils/mySkills";
import { My_Tools } from "../Utils/mySkills";


const Skills = () => {
    return(
        <div className = "mx-[50px] pt-[1%] pb-[10%] md:pb-0">
            <h1 className = "italic bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-purple-500 font-bold md:text-[60px] text-[40px] font-serif">Skills & Tools</h1>
            <hr></hr>
            <div className = "bg-black flex md:flex-row flex-col gap-8 justify-center items-center pt-[5%]">
                <div className = "flex flex-col items-center justify-center">
                    <h1 className = "font-serif md:text-2xl text-xl text-center md:text-nowrap bg-clip-text text-transparent bg-gradient-to-r  from-orange-300 from-20% to-pink-600 to-90% italic underline underline-offset-4">Front-End Languages & framework / library</h1>
                    <div className = "border-2 md:border-none border-spacing-2 m-4 grid grid-cols-3 gap-2">
                        {My_FrontEnd_Skills.map((skill) => {
                            return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                            <p className = "text-white text-center">{skill.name}</p></div></>

                        })}
                    </div>
                </div>

                <div className = "flex flex-col items-center justify-center">
                <h1 className = "font-serif md:text-2xl text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-300 from-20% to-pink-600 to-90% italic underline underline-offset-4">Back-End Languages & framework / library</h1>
                    <div className = "border-2 md:border-none border-spacing-2 m-4 grid grid-cols-3 gap-2">
                        {My_BackEnd_Skills.map((skill) => {
                            return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                            <p className = "text-white text-center">{skill.name}</p></div></>

                        })}
                    </div>
                </div>

                <div className = "flex flex-col items-center justify-center">
                <h1 className = "font-serif md:text-2xl text-xl text-center md:text-nowrap bg-clip-text text-transparent bg-gradient-to-r from-orange-300 from-20% to-pink-600 to-90% italic underline underline-offset-4">Tools & Platforms</h1>
                    <div className = "border-2 md:border-none border-spacing-2 m-4 grid grid-cols-3 gap-2">
                        {My_Tools.map((skill) => {
                            return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                            <p className = "text-white text-center">{skill.name}</p></div></>

                        })}
                    </div>
                </div>
            
            </div>
        </div>
            
    )
}

export default Skills;