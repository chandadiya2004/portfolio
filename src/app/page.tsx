import { Navbar } from '../components/common/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Certificates } from '../components/sections/Certificates';
import { Research } from '../components/sections/Research';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/common/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-text-main transition-colors duration-300 w-full max-w-full overflow-x-hidden lg:overflow-x-visible">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden lg:overflow-x-visible">
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
