import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhySummit } from "@/components/sections/WhySummit";
import { Speakers } from "@/components/sections/Speakers";
import { Schedule } from "@/components/sections/Schedule";
import { Registration } from "@/components/sections/Registration";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySummit />
        <Speakers />
        <Schedule />
        <Registration />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
