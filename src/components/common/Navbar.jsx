import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-500">Diya.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#research" className="hover:text-purple-400">Research</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6">
          <ul className="flex flex-col gap-4 font-medium">
            <li><a href="#home" onClick={()=>setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={()=>setOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={()=>setOpen(false)}>Projects</a></li>
            <li><a href="#research" onClick={()=>setOpen(false)}>Research</a></li>
            <li><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
