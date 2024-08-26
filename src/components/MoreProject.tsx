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
            <div className="flex w-[100%] pl-[2rem] overflow-x-auto whitespace-nowrap lg:whitespace-normal lg:m-auto
                lg:w-[70%] gap-5 lg:gap-8">
                <div className="w-[86%] lg:w-[100%]">
                    <Image src={recentOne} alt="tablet" width={500} height={300} className="" />
                    <div className="justify-between p-2">
                        <h1 className="font-bold text-xl pt-6">Link Sharing App</h1>
                        <p className="py-[1.2rem] text-sm text-[#9C9C9C]">
                            Simplify file sharing with our app. Upload your <br /> files, create shareable links, 
                            and control who<br /> can access them.
                        </p>
                        <div className="bg-[#3F8E00] hover:bg-[#6dc02a] text-white rounded-md flex flex-row 
                            font-bold text-sm py-1.5 md:w-[40%] lg:w-[40%] justify-center">
                            <button className="">View Project</button>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
                <div className="w-[86%] lg:w-[100%] p-2">
                    <Image src={recentTwo} alt="tablet" width={500} height={300} className="" />
                    <div className="justify-between">
                        <h1 className="font-bold text-xl pt-6">Sonjinwoo E-commerce Store</h1>
                        <p className="py-[1.2rem] text-sm text-[#9C9C9C] mt-[0.6rem] lg:mt-0">
                            Shop effortlessly with our app. Browse<br />thousands of products, 
                            make selections, <br />and checkout securely.
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