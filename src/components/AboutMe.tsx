
import Image from "next/image";

import { ChevronRight } from "lucide-react";
import mary from "../assets/jpg/mary2.jpg";
import MyTechnologies from "./MyTechnologies";



const AboutMe = () => {
    return (
        <section id="home" className="bg-[#080808] text-white pb-[3rem] lg:pb-[3rem] ">
          <div className="flex flex-col justify-center p-[2rem] md:flex-row lg:flex-row md:pt-[5rem] md:pl-[7rem] 
            lg:pt-[5rem] text-base lg:text-base  ">

            {/* Profile pic for mobile */}
            <div className="md:hidden lg:hidden m-auto ">
              <Image src={mary} alt="mary" width={500} height={300} className="h-[60%] w-[80%] object-contain m-auto " />
            </div>

            <div className="w-[95%] m-auto lg:m-0 md:w-[50%] lg:w-[50%] lg:mt-[2.5rem] ">
              <h1 className="text-3xl lg:text-5xl font-bold pt-3 text-center lg:pt-1 pb-[1.7rem] m-auto lg:text-start lg:m-0">Adeboye Mary</h1>
              <p>Hi! I am a frontend developer passionate about building beautiful and functional websites. 
                Crafting digital experiences, one pixel at a time.
              </p>
              <div className="flex flex-row bg-[#3F8E00] hover:bg-[#6dc02a] text-sm py-5 justify-center  
              md:w-[50%] lg:w-[55%] rounded-md mt-8 ">
                <button className=" text-white ">Lets get started</button>
                <ChevronRight />
              </div>
            </div>

            {/* Profile pic for larger screens */}
            <div className="w-[50%] h-[50%] hidden md:block lg:block  ">
              <Image src={mary} alt="mary" width={500} height={300} className="h-[58%] w-[58%] object-contain m-auto " />
            </div>
          </div>

          <MyTechnologies />
        </section>
    )
};

export default AboutMe;