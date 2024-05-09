import { My_Projects } from "../Utils/myProjects";
import arrow from "../assets/arrow_icon.svg";


const Projects = () => {
    return (
        <div className = "mx-[50px] pb-[10%] md:pb-0">
            <h1 className = "italic bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-purple-500 font-bold md:text-[60px] text-[40px] font-serif">Projects</h1>
            <hr></hr>
            <p className = "md:text-2xl text-xl pt-[3%] md:pt[2%] text-emerald-400 font-serif">Some projects that I have built 🎉...</p>
            
            <div className = "justify-center md:grid grid-cols-2 md:gap-4 pt-[6%] md:pt-[4%]">
                {My_Projects.map((prj) => {
                return <div key={prj.id} className = "p-2">
                        <div className = "box-border border p-4 ">
                            <h1 className = "md:text-2xl text-xl font-bold text-yellow-500 italic font-serif">{prj.p_name}</h1>
                            <p className = "text-justify pt-1">{prj.p_des}</p>
                            <p className = "pt-4 font-semibold">Tools : {(!prj.p_des.length ? ", " : " ") + prj.p_tools}</p>
                        </div>
                    </div>
                 })}
            </div>

            <div className = "items-center justify-center flex flex-col md:pt-[6%] pt-[10%]"> 
                <a href ="https://github.com/Prathibha2399" target="_blank"><button className ="hover:scale-110"><img src={arrow} alt="" className = "border px-[35px] py-[5px] rounded-3xl"></img></button></a>
                <p className = "pt-2">Click here for more projects..</p>
            </div>    
        </div>
    )
}


export default Projects;