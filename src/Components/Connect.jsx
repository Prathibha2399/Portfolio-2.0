import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";


const Connect = () => {
    return(
        <div className = "bg-black text-white">
            <h1 className = "font-bold italic text-xl">Get in touch !...</h1>
            <hr></hr>
            <div className = "flex">
                <div className = "bg-black text-white">
                    <p>Thanks for checking in :). Currently I am a fresher, looking for entry level opportunity to work with talented people and companies. I am highly adaptable and much dedicated to learn and implement new technologies as per the requirements. I hope to be part of your team soon! If you feel that I might be a potent candidate (if not now, though future) feel free to reach me out via prathibha230499@gmail.com or anywhere you feel comfortable. I am very exicted to grow connections and to work on some beautiful projects 😄.</p>
                </div>
                <div>
                    <p></p>
                    <div>
                        <img src={mail} alt="" />
                        <p>prathibha230499@gmail.com</p>
                    </div>
                    <div>
                        <img src={call} alt="" />
                        <p>+91 9591992789</p>
                    </div>
                    <div>
                        <img src={location} alt="" />
                        <p>Banglore, Karnataka</p>
                    </div>
                   
                </div>
                </div>

                <div className = "w-6/12 border border-white">
                    <form className = "flex flex-col w-9/12 justify-center" >
                        <label>Name</label>
                        <input type="text" placeholder="Enter name" name="name" />

                        <label>E-mail</label>
                        <input type="email" placeholder="Enter e-mail" name="email" />

                        <label>Message</label>  
                        <textarea name="message" rows="5" placeholder="Write your message here.." />

                        <button>Submit</button>
                    </form>
                </div>
            
            
        </div>
    )
}


export default Connect;