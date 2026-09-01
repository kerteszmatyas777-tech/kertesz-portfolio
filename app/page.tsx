import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of design projects can I help with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I help with brand identity, logo design, print design, social media visuals and web design for businesses that need a clearer and more memorable visual presence.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see examples of my work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The portfolio includes selected case studies such as Gibi Gyöngy, Mazur, Tisztafa, Kertész Szigszer and Hermon Kertépítés.",
        },
      },
      {
        "@type": "Question",
        name: "How can a new project start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start by sending a short project brief through the contact form, including what you need, the planned timeline and the type of design support you are looking for.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
