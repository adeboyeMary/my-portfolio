"useClient"
import Image from "next/image";
import { useState } from "react";

import menu from "../assets/svg/menu.svg";


const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="bg-black sticky top-0 z-10 w-full">
            <div className="hidden lg:flex w-[90%] bg-[#1B1B1B] text-[#9C9C9C] m-auto justify-between py-3 px-14 
            ">
                <a href="#home"><button>Home</button></a>
                <div>
                    <a href="#projects"><button>Projects</button></a>
                    <a href="#stacks"><button>Stacks</button></a>
                    <a href="#contact"><button>Contact me</button></a>
                </div>
                <div>
                    <button>Socials</button>
                </div>
            </div>
            <button onClick={onClickHandler} className='lg:hidden  pl-3 w-[19%]'>
                <Image src={menu} alt="menu" width={500} height={300} className=" " />
            </button>

            <div className={`lg:hidden fixed top-0 left-0 bg-[#ffffff] p-4 z-50 transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <button onClick={onClickHandler} className='text-5xl text-[#FF2A63]'> &times; </button>

                    <ul className=''>
                        <a href="#home"><li className=''>Home</li></a>
                        <a href="#projects"><li className=''>projects</li></a>
                        <a href="#stacks"><li className=''>Stack</li></a>
                        <a href="#contact"><li className=''>Contact me</li></a>
                        <li className=''>Socials</li>
                    </ul>
                </div>

                <div onClick={onClickHandler} className={`fixed top-0 left-0 w-full h-full bg-[black] 
                bg-opacity-50 transition-opacity duration-300 ease-in 
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden`} ></div>
        </div>
    )
};

export default Header;