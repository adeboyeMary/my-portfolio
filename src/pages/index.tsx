import Image from "next/image";
import { Inter } from "next/font/google";
import AboutMe from "@/components/AboutMe";
import MyProjects from "@/components/MyProjects";
import Stacks from "@/components/Stacks";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import MoreProjects from "@/components/MoreProject";
import Footer from "@/components/footer";
import { Carousel } from "@/components/ui/carousel";
import AboutMeCarousel from "@/components/AboutMeCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div>
        <Header />
        <main>
          <AboutMe />
          <MyProjects />
          <Stacks />
          <MoreProjects />
          <ContactMe />
          {/* <AboutMeCarousel /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
