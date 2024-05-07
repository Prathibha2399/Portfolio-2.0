import {My_FrontEnd_Skills} from "../Utils/mySkills";
import { My_BackEnd_Skills } from "../Utils/mySkills";
import { My_Tools } from "../Utils/mySkills";


const Skills = () => {
    return(
        <div className = "bg-black flex justify-center items-center">
            <div className = "flex flex-col items-center justify-center">
                <h1 className = "font-serif text-xl text-purple-500 italic underline underline-offset-4">Front-End Languages & framework / library</h1>
                <div className = "border-spacing-2 m-4 grid grid-cols-3 gap-2">
                    {My_FrontEnd_Skills.map((skill) => {
                        return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                        <p className = "text-white text-center">{skill.name}</p></div></>

                    })}
                </div>
            </div>

            <div className = "flex flex-col items-center justify-center">
            <h1 className = "font-serif text-xl text-purple-500 italic underline underline-offset-4">Back-End Languages & framework / library</h1>
                <div className = "border-spacing-2 m-4 grid grid-cols-3 gap-2">
                    {My_BackEnd_Skills.map((skill) => {
                        return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                        <p className = "text-white text-center">{skill.name}</p></div></>

                    })}
                </div>
            </div>

            <div className = "flex flex-col items-center justify-center">
            <h1 className = "font-serif text-xl text-purple-500 italic underline underline-offset-4">Tools & Platforms</h1>
                <div className = "border-spacing-2 m-4 grid grid-cols-3 gap-2">
                    {My_Tools.map((skill) => {
                        return <><div><img key = {skill.s_no} src = {skill.icon} alt = " " className = "border-black border-spacing-2 rounded-lg bg-gray w-24 h-24 gap-2 m-4 bg-gray-300 p-1"/>
                        <p className = "text-white text-center">{skill.name}</p></div></>

                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Skills;