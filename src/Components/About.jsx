import Profile from "../assets/Profile.jpg";
import img from "../assets/My_img.jpg";

const About = () => {
    return(
        <div className = "bg-black mx-[50px]">
            <h1 className = "italic bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-purple-500 font-bold md:text-[60px] text-[40px] font-serif">About me</h1><hr></hr>
            <div className = "flex md:flex-row items-center pt-[5%] justify-center px-[2%]">
                <div className = "flex gap-[10%] flex-col md:flex-row">
                    <div className = "flex justify-center md:justify-normal">
                        <img src = {img} alt="" className = "md:w-[270px] md:h-[370px] w-[170px] h-[250px] rounded-2xl"/>
                    </div>
                    <div className = "md:w-6/12 flex w-full pt-[5%] md:pt-0">
                        <p className = "text-[18px] text-justify"><span className = "text-2xl font-bold font-serif">H</span>ello! My name is <span className = "text-lime-500 italic font-serif">Prathibha A S</span>, a passionate <span className = "text-lime-500 italic font-serif">Web Developer</span> and enjoy learning new stuffes. My journey to code began during recent days when i discovered the real joy of building the websites and have a impactful work. Ever since I have involed myself in continuous learning. I am always eager to tackle new challenges and embrace new technologies. <br />
                        Web development, to me, represents the perfect blend of creativity and technical prowess. It's a realm where I can unleash my imagination while simultaneously delving into the intricacies of code. My ultimate goal is to leverage my skills and creativity to craft exceptional digital experiences that leave a lasting impact. Whether it's building responsive websites, optimizing user interfaces, or delving into the world of web applications</p>
                    </div>
                </div>
            </div>
            
            <div className = "md:pt-[7%] md:px-[2%] pt-[20%] pb-[10%] md:pb-0">
                <h1 className = "text-[35px] font-bold italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-orange-300 from-18% via-pink-600 via-15% to-purple-500 to-80% ">Education</h1>
                <div className = "flex flex-row pt-[7%] md:pt-[2%] px-2 justify-between pb-[2%]">
                    <div className = "flex flex-col flex-wrap w-9/12 md:w-10/12">
                        <h1 className = "italic text-lg font-bold text-pink-600 underline">Nitte Meenakshi Institute of technology</h1>
                        <p className = "pt-[1%] px-4">— Bachelor's in <span className = "text-lime-500">Electrical and Electronics Engineering</span> </p>
                        <p className = "px-2"> • Received Gold Medal with CGPA - 9.71</p>
                        <p className = "px-2 text-justify"> • Published a research paper at 7th International conference on Emerging Research in computing, Information, Communication held during February 2022 at NMIT, Bengaluru on <span className = "text-lime-500 italic font-serif">"Automatic Load Shedding & Restoration Using Microcontroller in MUSS System"</span></p>
                        <p className = "px-2"> • Proposed project idea to IISC Banglore on <span className = "text-lime-500 italic font-serif">"Automatic Watering System for Irrigation Using Porous Pipe".</span></p>
                   </div>
                   <div className = "font-bold">2017 - 2021</div>    
                </div>
                <hr></hr>
                <div className = "flex flex-row justify-between pt-[3%] md:pt-[1%] pb-[2%] md:w-full">
                    <div>
                        <h1 className = "pb-[3%] italic text-lg font-bold text-pink-600 underline">MES PU College of Arts Science & Commerce</h1>
                        <p className = "px-4">Stream - PCMB</p>
                        <p className = "px-4">Percentage - 91.33%</p>
                    </div>
                    <div className = "font-bold">2015 - 2017</div>
                </div>
                <hr />
                <div className = "flex flex-row justify-between pt-[3%] md:pt-[1%]  pb-[2%]">
                    <div>
                        <h1 className = "pb-[3%] italic text-lg font-bold text-pink-600 underline">Saandeepani English High School</h1>
                        <p className = "px-4">Percentage - 97.12%</p>
                    </div>
                    <div className = "font-bold">2014 - 2015</div>
                </div>
            </div>
        </div>
    )
}


export default About;