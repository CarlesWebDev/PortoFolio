import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import About from "../components/About";
import Now from "../components/Now";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useMeta } from "../useMeta";
import { useCmsContent } from "../lib/cms";
import { useSiteMeta } from "../useSiteMeta";
export default function Home() {
    const { settings } = useCmsContent();
    useSiteMeta(settings);
    useMeta(settings?.site_title ?? "Carles Marvin — Web Developer", settings?.meta_description ??
        "Bikin website yang rapi, cepat, dan nggak kelihatan kayak template.");
    return (<>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>);
}
