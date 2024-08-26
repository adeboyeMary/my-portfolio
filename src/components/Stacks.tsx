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
    <section id="stacks" className="bg-black text-white py-[3rem]">
      <div className="w-[81%] lg:w-[79%] m-auto ">
        <h1 className="text-4xl text-center font-bold">My Expertise</h1>
        <div className="flex m-auto gap-4 lg:gap-2 py-4 overflow-x-auto whitespace-nowrap lg:whitespace-normal">
          
          <Image src={html} alt="html" width={500} height={300} className="w-[23%] lg:w-[8.2%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
         
          <Image src={css} alt="css" width={500} height={300} className="w-[23%] lg:w-[8.2%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={react} alt="react" width={500} height={300} className="w-[24%] lg:w-[9%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={bootstrap} alt="bootstrap" width={500} height={300} className="w-[24%] lg:w-[8.5%]  m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={figma} alt="figma" width={500} height={300} className="w-[22%] lg:w-[7.6%] m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
          <Image src={git} alt="git" width={500} height={300} className="w-[24%] lg:w-[8.5%] m-auto
          inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
            <Image src={typescript} alt="typescript" width={500} height={300} className="w-[24%] lg:w-[8.5%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
          
            <Image src={nodejs} alt="nodejs" width={500} height={300} className="w-[24%] lg:w-[8.5%] m-auto
            inline-block py-[8px] px-[26px] border-[1px] border-[#1B1B1B] rounded-md" />
        </div>
        <div className="w-[100%] lg:w-[40%] m-auto pt-3">
          <h1 className="text-3xl text-center font-bold pb-3">What I Offer</h1>
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