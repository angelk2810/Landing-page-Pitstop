import React from 'react';
import { ChevronRight, ArrowDown, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden">
      {/* Background Image with Opacity/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Biker Background" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black md:via-black/70 md:to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-[#F6EB14] border border-[#F6EB14] rounded backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F6EB14] animate-pulse"></span>
            <span className="text-black text-[10px] font-black uppercase tracking-[0.3em]">
              Premier Biker Store
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 font-heading leading-[0.9] uppercase italic tracking-tighter drop-shadow-lg">
            MR BIKER <br />
            <span className="text-[#F6EB14]">PITSTOP</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed tracking-wide drop-shadow">
            Experience the pinnacle of motorcycle safety and style. We offer curated high-performance riding gears and premium accessories for those who live on two wheels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToId('products')}
              className="px-10 py-4 bg-[#F6EB14] text-black font-black rounded shadow-2xl hover:shadow-[#F6EB14] hover:bg-[#F6EB14] transition-all flex items-center justify-center gap-2 group tracking-widest uppercase text-sm"
            >
              Explore Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="px-10 py-4 bg-white/5 border-2 border-white/20 text-white font-black rounded backdrop-blur-md hover:bg-[#F6EB14] hover:text-black hover:border-[#F6EB14] transition-all tracking-widest uppercase text-sm flex items-center justify-center"
            >
              Visit Store
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl font-heading">500+</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Premium Products</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl font-heading">5/5</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Rider Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Detail Card (Positioned relative to the viewport/section) */}
      <div className="absolute bottom-12 right-12 z-20 bg-black/60 backdrop-blur-lg border border-white/10 p-6 hidden xl:block rounded-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F6EB14] rounded-full flex items-center justify-center text-black shadow-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-white text-xs font-black uppercase tracking-widest">Certified Safety</p>
            <p className="text-gray-300 text-[10px] max-w-[150px] leading-tight mt-1">All gears meet international ECE & DOT standards.</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block">
        <ArrowDown className="w-6 h-6 text-[#F6EB14]" />
      </div>
    </section>
  );
};

export default Hero;