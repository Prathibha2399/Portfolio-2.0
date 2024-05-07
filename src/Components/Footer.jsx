import footer from "../assets/Untitled_logo_1_free-file.jpg";
import user from "../assets/user_icon.svg";

const Footer = () => {
    return(
        <div className = "text-white bg-black">
            <div className = "">
                <img src={footer} alt=""  className = "w-28 h-20 relative" />
            </div>
            <div className = "">
                <div>
                    <img src={user} alt="" />
                    <input type="email" placeholder="Enter you email" />
                </div>
                <div className = "">Subscribe</div>
            </div>
            <hr />
            <div className = "from-neutral-400 text-sm">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
    </div>
    )
}



export default Footer;