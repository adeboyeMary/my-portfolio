import Image from "next/image";

import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import js from "../assets/svg/js.svg";
import react from "../assets/svg/react.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import figma from "../assets/svg/figma.svg";
import git from "../assets/svg/git.svg";
import typescript from "../assets/svg/typescript.svg";
import sass from "../assets/svg/sass.svg";


const MyTechnologies = () => {
    return (
        <div className="flex flex-col w-[86%] lg:w-[79%] m-auto">
            <p className="pb-3">Worked with:</p>
            <div className="flex flex-row gap-4 lg:gap-2 overflow-x-auto whitespace-nowrap lg:whitespace-normal ">
                <Image src={html} alt="html" width={500} height={300} className=" w-[23%] md:w-[14%] lg:w-[8.2%] m-auto
                inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md  " />

                <Image src={css} alt="css" width={500} height={300} className="w-[23%] md:w-[14%] lg:w-[8.2%] m-auto 
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md " />
                
                <Image src={js} alt="js" width={500} height={300} className="w-[24%] md:w-[14.5%] lg:w-[8.5%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />

                <Image src={react} alt="react" width={500} height={300} className="w-[24%] md:w-[16%] lg:w-[8.8%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
                
                <Image src={bootstrap} alt="bootstrap" width={500} height={300} className="w-[24%] md:w-[15.5%] lg:w-[8.2%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
                
                  <Image src={figma} alt="figma" width={500} height={300} className="w-[22%] md:w-[13%] lg:w-[7.6%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
               
                  <Image src={git} alt="git" width={500} height={300} className="w-[24%] md:w-[15%] lg:w-[8.5%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />

                  <Image src={typescript} alt="typescript" width={500} height={300} className="w-[24%] md:w-[15%] lg:w-[8.5%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
                
                  <Image src={sass} alt="sass" width={500} height={300} className="w-[24%] md:w-[15%] lg:w-[9.2%] m-auto
                  inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
            </div>
          </div>
    )
};

export default MyTechnologies;