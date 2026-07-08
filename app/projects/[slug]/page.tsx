import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}