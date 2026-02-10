import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Certificates from "../../components/sections/Certificates";
import Research from "../../components/sections/Research";
import Projects from "../../components/sections/Projects";
import Contact from "../../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
