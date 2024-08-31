import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import laptop from "../assets/svg/laptop.svg";
import tablet from "../assets/svg/tablet.svg";
import screen from "../assets/svg/screen.svg";


const MyProjects = () => {
    return (
        <section id="projects" className="bg-white pt-[4.2rem] pb-[3rem] ">
          <h1 className="text-4xl md:text-5xl text-center font-bold">Projects</h1>
          <p className="text-sm md:text-2xl text-center pt-3 pb-8">Here are some of the projects I have worked on.</p>
          
          <div className="flex flex-col w-[86%] lg:w-[70%]  m-auto">

            <div className="flex flex-col-reverse lg:flex-row  justify-center mb-[2.5rem] lg:mb-[4rem] ">
              <div className="lg:w-[50%]  text-[#9C9C9C] py-5 lg:pr-5 ">
                <button className="wiggle-button bg-[#FFF6E9] text-[#FFA217] text-xs text-center rounded-xl py-1 
                px-3 mb-3 font-bold md:text-[19px] md:py-2 md:px-5 md:rounded-2xl lg:text-sm xl:text-sm lg:py-1 
                xl:py-1.5" >
                  Entertainment
                </button>
                <h1 className="font-bold text-black pb-2 md:text-[28px] lg:text-xl xl:text-xl ">Movie Discovery</h1>
                <p className="text-xs md:text-2xl lg:text-sm xl:text-sm pb-5 ">This movie discovery website utilizes The Movie Database (TMDb) to offer movie recommendations. 
                  Users can view suggestions and click on each film to access detailed information. 
                  The project is built using React, Tailwind CSS, and JavaScript.
                </p>
                <div className="wiggleButton flex flex-row font-bold bg-[#FFA217] text-white text-sm py-2 w-[46%] 
                justify-center md:text-[22px] md:py-4 lg:text-base lg:py-3
                rounded-md hover:bg-[#fcb03e] active:bg-[#f1c076] ">
                  <Link href="/">
                    <button className="animate-pulse hover:animate-none pt-[0.1rem] lg:pt-0 ">View Project</button>
                  </Link>
                  <ChevronRight />
                </div>
              </div>
                
              <Image src={laptop} alt="laptop" width={500} height={300} className="md:w-[100%] lg:w-[50%] h-[50%] " />
            </div>

            <div className="flex flex-col lg:flex-row lg:w-[100%] justify-center mb-[2.5rem] lg:mb-[4rem]">
              {/* <div> */}
                <Image src={tablet} alt="tablet" width={500} height={300} className="m-auto md:m-0 md:w-[100%] 
                lg:w-[50%] h-[50%]" />
              {/* </div> */}
              <div className="lg:w-[50%]  text-[#9C9C9C] py-5 lg:pl-5 ">
                <button className="wiggle-button bg-[#D0E6FF] text-[#000AFF] text-xs text-center rounded-xl py-1 
                px-3 mb-3 font-bold md:text-[19px] md:py-2 lg:py-1 xl:py-1.5 md:px-4 md:rounded-2xl lg:text-sm 
                xl:text-sm">
                  Socials
                </button>
                <h1 className="font-bold pb-2 text-black md:text-[28px] lg:text-xl xl:text-xl">Link Tree</h1>
                <p className="text-xs sm:text-base md:text-2xl lg:text-sm xl:text-sm pb-5">This project features a 
                  customizable 
                  Link tree page that aggregates links to various social 
                  media profiles. This is built with React, JavaScript, and Tailwind CSS, 
                  it provides a fully responsive and interactive interface for easy navigation.
                </p>
                <div className=" wiggleButton flex flex-row font-bold bg-[#000AFF] text-white text-sm py-2 w-[46%] 
                justify-center rounded-md hover:bg-[#3a40f8] active:bg-[#9295f3] md:text-[22px] lg:text-base 
                md:py-4 lg:py-3">
                  <Link href="https://mylinktree-zjen.onrender.com">
                    <button className="animate-pulse hover:animate-none pt-[0.1rem] lg:pt-0 ">View Project</button>
                  </Link>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row w-[100%] justify-center lg:mb-[4rem]">
              <div className="lg:w-[50%]  text-[#9C9C9C] py-5 lg:pr-5 ">
                <button className="wiggle-button bg-[#E0FFF8] text-[#2AB090] text-xs text-center rounded-xl 
                py-1 px-3 mb-2 font-bold md:text-[19px] md:py-2 md:px-5 md:rounded-2xl lg:text-sm lg:py-1 xl:py-1.5
                xl:text-sm">
                  Food
                </button>
                <h1 className="font-bold pb-2 text-black md:text-[28px] lg:text-xl xl:text-xl">Food Order App</h1>
                <p className="text-xs pb-5 md:text-2xl lg:text-sm xl:text-sm">This application allows users to explore a variety of delicacies, add items to their cart, 
                  and proceed to checkout. It is fully responsive and designed for ease of use, built with React, 
                  JavaScript, Tailwind CSS, and traditional CSS.
                </p>
                <div className="wiggleButton flex font-bold bg-[#2AB090] text-white text-sm md:text-[22px] py-2 
                lg:text-base w-[46%] justify-center md:py-4 lg:py-3
                 rounded-md hover:bg-[#2ecca7] active:bg-[#34f3c6]">
                  <Link href="https://foodorder-app-kd58.onrender.com/">
                    <button className="animate-pulse hover:animate-none pt-[0.1rem] lg:pt-0 ">View Project</button>
                  </Link>
                  <ChevronRight />
                </div>
              </div>
              {/* <div> */}
                <Image src={screen} alt="screen" width={500} height={300} className="md:w-[100%] lg:w-[50%] lg:h-[50%]" />
              {/* </div> */}
            </div>

          </div>
        </section>
    )
};

export default MyProjects;