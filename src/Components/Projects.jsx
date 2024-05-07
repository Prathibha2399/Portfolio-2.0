import { My_Projects } from "../Utils/myProjects";


const Projects = () => {
    return (
        <div className = "bg-black text-white justify-center flex flex-col">
            <h1 className = "text-xl italic font-serif font-semibold">Projects</h1>
            <p>Some projects that I have built 🎉...</p>
            {My_Projects.map((prj, index) => {
                return <div key={prj.id} className = "border p-2">
                    <h1 className = "text-lg text-yellow-500">{prj.p_name}</h1>
                    <p>{prj.p_des}</p>
                    <p className = "">{(!prj.p_des.length ? ", " : " ") + prj.p_tools}</p>
                </div>

            })}

        </div>
    )
}


export default Projects;