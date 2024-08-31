"useClient";
import Image from "next/image";
import { useState } from "react";

import { Menu } from "lucide-react";
// import menu from "../assets/svg/menu.svg";



const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="bg-black sticky top-0 z-10 w-full lg:text-[18px] cursor-pointer sm:cursor-pointer 
        md:cursor-pointer lg:cursor-pointer">
            <div className="hidden lg:flex w-[90%] bg-[#1B1B1B] text-[#9C9C9C] m-auto justify-between py-3 px-14 
            ">
                <a href="#home"><button>Home</button></a>
                <div>
                    <a href="#projects" className=""><button>Projects</button></a>
                    <a href="#stacks" className="pl-10"><button>Stacks</button></a>
                    <a href="#moreP" className="pl-10"><button>More Projects</button></a>
                    {/* <a href="#contact" className="pl-10"><button>Contact me</button></a> */}
                </div>
                <div>
                    <a href="#contact" className=""><button>Contact me</button></a>
                </div>
            </div>
            <button onClick={onClickHandler} className='lg:hidden  pl-3 py-3'>
                {/* <Image src={menu} alt="menu" width={500} height={300} className="color-white" /> */}
                <Menu size={44} color="#ffffff" strokeWidth={2.25} />
            </button>

            <div className={`lg:hidden fixed top-0 left-0 bg-[#ffffff] w-[70%] h-[70vh] z-50 transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <button onClick={onClickHandler} className='text-5xl text-[#3F8E00]'> &times; </button>

                    <ul className='cursor-pointer text-[18px] sm:text-[28px] md:text-base lg:text-[18px] '>
                        <a href="#home">
                            <li className='pb-4 hover:pb-2 hover:mb-2 pt-2 hover:bg-[#3F8E00] hover:font-bold 
                            hover:text-white p-4'>Home</li>
                        </a>
                        <a href="#projects">
                            <li className='pb-4 hover:pb-2 hover:mb-2 pt-2 hover:bg-[#3F8E00] hover:font-bold 
                            hover:text-white p-4'>projects</li>
                        </a>
                        <a href="#stacks">
                            <li className='pb-4 hover:pb-2 hover:mb-2 pt-2 hover:bg-[#3F8E00] hover:font-bold 
                            hover:text-white p-4'>Stack</li>
                        </a>
                        <a href="#moreP">
                            <li className='pb-4 hover:pb-2 hover:mb-2 pt-2 hover:bg-[#3F8E00] hover:font-bold 
                            hover:text-white p-4'>More Projects</li>
                        </a>
                        <a href="#contact">
                            <li className='pb-4 hover:pb-2 hover:mb-2 pt-2 hover:bg-[#3F8E00] hover:font-bold 
                            hover:text-white p-4'>Contact me</li>
                        </a>
                        
                    </ul>
                </div>

                <div onClick={onClickHandler} className={`fixed top-0 left-0 w-full h-full bg-[black] 
                bg-opacity-50 transition-opacity duration-300 ease-in 
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden`} ></div>
        </div>
    )
};

export default Header;