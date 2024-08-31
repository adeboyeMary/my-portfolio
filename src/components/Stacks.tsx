import Image from "next/image";

import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import typescript from "../assets/svg/typescript.svg";
import nodejs from "../assets/svg/node.svg";
import git from "../assets/svg/git.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import react from "../assets/svg/react.svg";
import figma from "../assets/svg/figma.svg";


const Stacks = () => {
  return (
    <section id="stacks" className="bg-black text-white pt-[4.2rem] pb-[3rem] ">
      <div className="w-[81%] lg:w-[79%] m-auto ">
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-center font-bold pb-[1rem] md:pb-[2rem] 
          lg:pb-0 xl:pb-[2.1rem] ">My Expertise</h1>
        <div className="flex m-auto gap-4 lg:gap-2 py-4 overflow-x-auto whitespace-nowrap lg:whitespace-normal">
          
          <Image src={html} alt="html" width={500} height={300} className="w-[23%] md:w-[16%] lg:w-[8.2%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
         
          <Image src={css} alt="css" width={500} height={300} className="w-[23%] md:w-[16%] lg:w-[8.2%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={react} alt="react" width={500} height={300} className="w-[24%] md:w-[17%] lg:w-[9%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={bootstrap} alt="bootstrap" width={500} height={300} className="w-[24%] md:w-[17%] lg:w-[8.5%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={figma} alt="figma" width={500} height={300} className="w-[22%] md:w-[14%] lg:w-[7.6%] m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={git} alt="git" width={500} height={300} className="w-[24%] md:w-[16.5%] lg:w-[8.5%] m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
            <Image src={typescript} alt="typescript" width={500} height={300} className="w-[24%] md:w-[16%] lg:w-[8.5%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
            <Image src={nodejs} alt="nodejs" width={500} height={300} className="w-[24%] md:w-[16%] lg:w-[8.5%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
        </div>
        <div className="w-[100%] md:text-2xl lg:text-sm xl:text-xl lg:w-[40%] m-auto pt-10">
          <h1 className="text-3xl  md:text-4xl lg:text-4xl xl:text-4xl text-center font-bold pb-3">What I Offer</h1>
          <ul className=" m-auto list-disc ">
            <li>I am passionate about hig-quality work</li>
            <li>I have strong problem solving skills</li>
            <li>I am versatile with React, Next.js, Tailwind CSS, and more</li>
            <li>Always eager to learn and broaden my scope</li>
            <li>Client-focused, prioritizing their needs</li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Stacks;