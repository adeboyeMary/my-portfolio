import Image from "next/image";
import { ChevronRight } from "lucide-react";

import recentOne from "../assets/svg/recentOne.svg";
import recentTwo from "../assets/svg/recentTwo.svg";

const MoreProjects = () => {
    return (
        <section className="bg-white py-[3rem] ">
            <h1 className="text-4xl text-center font-bold">Recent & Ongoing Projects</h1>
            <p className="text-sm text-center pt-3 pb-8 text-[#9C9C9C]">Check out some of my latest projects, including those 
                still in development</p>
            <div className="flex flex-row w-[100%] px-[1rem] overflow-x-auto whitespace-nowrap lg:overflow-hidden lg:whitespace-normal 
            lg:m-auto lg:w-[70%] gap-6 lg:gap-8">
                <div className=" lg:w-[100%] flex flex-col">
                    <Image src={recentOne} alt="tablet" width={500} height={300} className="w-[] lg:w-[100%] " />
                    <div className="justify-between px-2 flex flex-col ">
                        <h1 className="font-bold text-xl pt-6">Link Sharing App</h1>
                        <p className="py-[1.2rem] text-sm text-[#9C9C9C] whitespace-normal">
                            Simplify file sharing with our app. Upload your files, create shareable links, 
                            and control who can access them.
                        </p>
                        <div className="bg-[#3F8E00] hover:bg-[#6dc02a] text-white rounded-md flex flex-row 
                            font-bold text-sm py-1.5 md:w-[40%] lg:w-[40%] justify-center">
                            <button className="">View Project</button>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[100%] flex flex-col ">
                    <Image src={recentOne} alt="tablet" width={500} height={300} className=" " />
                    <div className="justify-between px-2 flex flex-col">
                        <h1 className="font-bold text-xl pt-6">Sonjinwoo Store</h1>
                        <p className="py-[1.2rem] text-sm text-[#9C9C9C] whitespace-normal">
                            Shop effortlessly with our app. Browse thousands of products, 
                            make selections, and checkout securely.
                        </p>
                        <div className="bg-[#3F8E00] hover:bg-[#6dc02a] text-white rounded-md flex flex-row 
                        font-bold text-sm py-1.5 md:w-[40%] lg:w-[40%] justify-center">
                            <button >View Project</button>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MoreProjects;