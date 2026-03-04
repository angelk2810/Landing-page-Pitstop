import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#F6EB14] selection:text-black">
      <Navbar isScrolled={isScrolled} />
      
      {/* Added pt-20 (80px) to account for fixed navbar height */}
      <main className="pt-20">
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;