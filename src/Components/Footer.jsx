import footer from "../assets/Untitled_logo_1_free-file.jpg";
import user from "../assets/user_icon.svg";

const Footer = () => {
    return(
        <div className = "text-white bg-black flex flex-col gap-[30px] pt-[5%] md:mx-[4px] md:px-12 px-4">
            <div className = "flex justify-between">
                <div className = "">
                    <img src={footer} alt=""  className = "w-40 h- relative" />
                </div>
                <div className = "flex items-center gap-[20px]">
                    <div className = "border-none w-full bg-gray-500 opacity-55 flex gap-2 rounded-2xl pr-[25px] md:px-[15px] md:py-[8px]  px-[11px] py-[6px]">
                        <img src={user} alt="" className ="opacity-65" />
                        <input type="email" placeholder="Enter you email" className = "outline-none border-none bg-transparent placeholder-white"/>
                    </div>
                    <div className = "border-none bg-gradient-to-r from-purple-600 from-10%  via-pink-600 via-50% to-orange-400 text-white font-medium rounded-2xl md:px-[18px] md:py-[8px] px-[15px] py-[4px] transition-[0.3s] cursor-pointer">Subscribe</div>
                </div>
            </div>
            <hr />
            <div id = "footer_join" className = "from-neutral-400 text-sm flex justify-between">
                <p><span>&copy;</span>2024 Prathibha A S. All rights preserved</p>
                <div className = "flex gap-[30px] mb-[50px]">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
                
            </div>
    </div>
    )
}



export default Footer;