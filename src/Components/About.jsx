import Profile from "../assets/Profile.jpg";

const About = () => {
    return(
        <div className = "bg-black">
            <h1 className = "text-xl italic">About me</h1>
            <div className = "flex">
            <div>
                <img src = {Profile} alt="" className = "w-9/12"/>
            </div>
            <div className = "w-5/12 flex flex-wrap">
            <p>Hello! My name is Prathibha A S, a passionate Web Developer and enjoy learning new stuffes. My journey to code began during recent days when i discovered the real joy of building the websites and have a impactful work. </p>
            </div>
            </div>
        </div>
    )
}


export default About;