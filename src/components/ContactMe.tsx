import { ChevronRight } from "lucide-react";

const ContactMe = () => {
    return (
        <section id="contact" className="min-h-screen bg-[#080808] text-[#808080] text-base md:text-sm lg:text-sm
        pt-[4.2rem] pb-[3rem]">
          <h1 className="text-4xl text-white text-center font-bold">Get In Touch</h1>
          <p className=" text-center pt-4 lg:w-[39%] m-auto">Excited to collaborate? Lets make something amazing together! 
            Reach out through the form below.
          </p>
          <form className="w-[86%] lg:w-[100%] xl:w-[70%] m-auto pt-[2rem]">
            <div className="flex flex-col gap-2 mb-5 lg:w-[45%] m-auto ">
              <label htmlFor="email" className="text-sm font-bold text-white">Email</label>
              <input type="email" id="email" name="email" className="py-1.2  rounded-md p-3 justify-center 
              focus:border-[#3F8E00] focus:border-[3px] focus:outline-none" 
                placeholder="Please enter your email"></input>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[45%] m-auto">
              <label htmlFor="number" className="text-sm font-bold text-white">Mobile</label>
              <input type="tel" id="number" name="number" className="py-1.2 rounded-md p-3 
                focus:border-[#3F8E00] focus:border-[3px] focus:outline-none" 
                placeholder="Enter your mobile"></input>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[45%] m-auto">
              <label htmlFor="message" className="text-sm font-bold text-white">Message</label>
              <textarea rows={5} id="message" name="message" className="py-1.2 rounded-md p-3 
                focus:border-[#3F8E00] focus:border-[3px] focus:outline-none" 
                placeholder="Enter your message"></textarea>
            </div>
            <div className="bg-[#3F8E00] text-white rounded-md flex flex-row font-bold text-sm
            py-2.5 lg:w-[45%] m-auto justify-center hover:bg-[#6dc02a] active:bg-[#87eb36]">
              <button>Submit</button>
              <ChevronRight />
            </div>
          </form>
        </section>
    )
};

export default ContactMe;