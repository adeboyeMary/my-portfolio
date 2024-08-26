import Image from "next/image";

import fb from "../assets/svg/fb.svg";
import ig from "../assets/svg/ig.svg";
import linkedin from "../assets/svg/linkedin.svg"
import mail from "../assets/svg/mail.svg";


const Footer = () => {
    return (
        <footer className="bg-[#1B1B1B] text-white py-[1rem]">
            <div className="flex gap-3 justify-center">
                <Image src={fb} alt="facebook" width={500} height={300} className=" w-[17px]" />
                <Image src={ig} alt="ig" width={500} height={300} className=" w-[18px]" />
                <Image src={linkedin} alt="linkedin" width={500} height={300} className=" w-[17px]" />
                <Image src={mail} alt="mail" width={500} height={300} className=" w-[17px]" />
            </div>
        </footer>
    )
};

export default Footer;