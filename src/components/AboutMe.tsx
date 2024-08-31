
import Image from "next/image";

import { ChevronRight } from "lucide-react";
import mary from "../assets/jpg/mary2.jpg";
import MyTechnologies from "./MyTechnologies";



const AboutMe = () => {
    return (
        <section id="home" className="bg-[#080808] text-white pt-[4.2rem] pb-[3rem] md:text-2xl lg:pb-[3rem] ">
          <div className="flex flex-col justify-center p-[2rem] md:flex-col lg:flex-row md:pt-[5rem] 
            lg:pt-[5rem] text-base md:text-base lg:text-base  lg:m-auto">

            {/* Profile pic for mobile */}
            <div className=" lg:hidden m-auto ">
              <Image src={mary} alt="mary" width={500} height={300} className="h-[60%] w-[80%] object-contain m-auto " />
            </div>

            <div className="w-[95%] m-auto lg:m-0 md:w-[95%] lg:w-[50%] lg:mt-[2.5rem] lg:pl-[5rem] xl:pl-[5rem] ">
              <h1 className="text-[28px] sm:text-3xl md:text-5xl lg:text-5xl font-bold pt-3 text-center lg:pt-1 pb-[1.7rem] m-auto 
              lg:text-start lg:m-0 md:pt-[2rem] ">Adeboye Mary</h1>
              <p className="text-sm sm:text-base md:pb-[1.5rem] md:text-2xl md:m-auto lg:text-base">Hi! I am a frontend developer passionate about building beautiful and functional websites. 
                Crafting digital experiences, one pixel at a time.
              </p>
              <div className="wiggleButton flex flex-row bg-[#3F8E00] hover:bg-[#6dc02a] text-sm py-5 
              justify-center md:m-auto md:text-2xl md:gap-2 lg:text-base lg:gap-0 lg:m-0
              md:w-[85%] lg:w-[55%] rounded-md mt-8 ">
                <button className=" text-white sm:pt-0 md:pt-0 lg:pt-[0.1rem] ">Lets get started</button>
                <ChevronRight />
              </div>
            </div>

            {/* Profile pic for larger screens */}
            <div className="w-[50%] h-[50%] hidden md:hidden lg:block  ">
              <Image src={mary} alt="mary" width={500} height={300} className="h-[58%] w-[58%] object-contain m-auto
              hover:animate-out " />
            </div>
          </div>

          <MyTechnologies />
        </section>
    )
};

export default AboutMe;