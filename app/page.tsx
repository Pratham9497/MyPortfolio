import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
         />
        <Hero />
        <Grid />
        <RecentProjects />
        <Achievements />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
