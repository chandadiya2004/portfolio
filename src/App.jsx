import CustomCursor from "./components/common/CustomCursor";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Research from "./components/sections/Research";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Research />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
