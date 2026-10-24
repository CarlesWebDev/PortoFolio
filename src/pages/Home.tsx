import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import About from "../components/About";
import Now from "../components/Now";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useMeta } from "../useMeta";

export default function Home() {
  useMeta(
    "Carles Marvin — Web Developer",
    "Bikin website yang rapi, cepat, dan nggak kelihatan kayak template."
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
