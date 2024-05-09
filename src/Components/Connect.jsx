import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";

import theme from "../assets/theme_pattern.svg";



const Connect = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6fb8ebc1-178e-4f41-8e74-b0a4fea5fe63");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return(
        <div className = "bg-black text-white mx-[50px]">
            <div className = "relative">
                <h1 className = "bg-clip-text text-transparent bg-gradient-to-bl from-orange-300 to-purple-600 font-bold italic md:text-[60px] text-[40px] text-center p-[15px] pt-0">Get in touch !...</h1><hr></hr>
              {/*   <img src={theme} alt="" className = "absolute bottom-0 right-0 -z-1"/> */}
            </div>
            
            <div className = "">
                <div className = "bg-black text-white md:text-[20px] text-[16px] line-clamp-[35px] p-4 pt-[3%] ">
                    <p className = "md:text-justify font-serif"><span className = "font-serif text-[40px]">T</span>hanks for checking in :-) Currently I am a fresher, looking for entry level opportunity to work with talented people and companies. I am highly adaptable and much dedicated to learn and implement new technologies as per the requirements. I hope to be part of your team soon! If you feel that I might be a potent candidate (if not now, though future) feel free to reach me out via <a href="mailto:prathibha230499@gmail.com" target="_blank"><span className = "text-pink-500 cursor-pointer italic">prathibha230499@gmail.com</span></a> or anywhere you feel comfortable. I am very exicted to grow connections and to work on some beautiful projects 😄.</p>
                </div>

                <div className = "md:grid md:grid-cols-2 md:mx-[60px] md:my-[100px] mx-[30px] my-[50px] flex flex-col gap-8">
                    <div className = "flex flex-col gap-[30px] w-9/12 md:px-[20px]">
                        <h1 className = "md:text-[38px] text-[28px] bg-clip-text text-transparent bg-gradient-to-r from-orange-300 from-10% via-purple-500 via-20% to-pink-500 to-60% ">Let's Connect..</h1>
                        <div className = "flex flex-col gap-[20px] md:gap-[30px] text-[15px]">
                            <div className = "flex items-center gap-3">
                                <img src={mail} alt="" className = "md:w-6 md:h-6 w-4 h-4"/>
                                <p>prathibha230499@gmail.com</p>
                            </div>
                            <div className = "flex items-center gap-3">
                                <img src={call} alt="" className = "md:w-6 md:h-6 w-4 h-4"/>
                                <p>+91 9591992789</p>
                            </div>
                            <div className = "flex items-center gap-3">
                                <img src={location} alt="" className = "md:w-6 md:h-6 w-4 h-4"/>
                                <p>Banglore, Karnataka</p>
                            </div>
                        </div>
                   </div>
            

                    <div className = "caret-white">
                        <form onSubmit={onSubmit} className = "flex flex-col items-start gap-[15px]" >
                            <label className = "text-[16px] font-[400]">Name</label>
                            <input type="text" placeholder="Enter name" name="name" className = "border-none w-full h-[40px] pl-[20px] border-[2px] bg-gray-500 opacity-45 placeholder-white" />

                            <label className = "text-[16px] font-[400]">E-mail</label>
                            <input type="email" placeholder="Enter e-mail" name="email" className = "border-none w-full h-[40px] pl-[20px] border-[2px] bg-gray-500 opacity-45 placeholder-white"/>

                            <label className = "text-[16px] font-[400]">Message</label>  
                            <textarea name="message" rows="5" placeholder="Write your message here.." 
                            className = "w-full border-none border-[2px] bg-gray-500 opacity-45 pl-[20px]  placeholder-white"/>

                            <button className = "border-none bg-gradient-to-r from-purple-600 from-10%  via-pink-600 via-50% to-orange-400 text-white font-medium rounded-3xl md:px-[30px] md:py-[8px] px-[20px] py-[4px] transition-[0.3s] mb-[50px] mt-[10px] hover:scale-110 hover:transition-all">Submit</button>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    )
}


export default Connect;