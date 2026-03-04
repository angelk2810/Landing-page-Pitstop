import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#F6EB14]' : 'bg-[#1A1A1A]/50 backdrop-blur-sm lg:bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center cursor-pointer transition-all duration-300 active:scale-95"
          >
            <img 
              src="http://lh3.googleusercontent.com/d/1tddLLcXiuU3XbJuXPybDxJgfPvMIuZyY" 
              alt="MR. BIKER Pitstop" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all relative py-1 group ${
                  activeSection === link.id ? 'text-[#F6EB14]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F6EB14] transition-transform duration-300 origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-2 bg-[#F6EB14] text-black text-[11px] font-black rounded uppercase tracking-widest hover:bg-[#F6EB14] transition-all transform hover:scale-105 shadow-lg shadow-[#F6EB14] active:scale-95"
            >
              Enquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F6EB14] focus:outline-none p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-[#1A1A1A] transition-all duration-300 shadow-2xl border-b border-[#F6EB14] overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-[#1A1A1A]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block px-4 py-5 text-sm font-bold uppercase tracking-widest transition-all border-b border-white/5 last:border-0 ${
                activeSection === link.id ? 'text-[#F6EB14] bg-[#F6EB14]' : 'text-gray-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block w-full text-center py-4 bg-[#F6EB14] text-black text-xs font-black rounded uppercase tracking-widest"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;