import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#F6EB14]"></div>
            <img 
              src="https://images.unsplash.com/photo-1591378603223-e15b45a81640?auto=format&fit=crop&q=80&w=800" 
              alt="Biker shop interior" 
              className="rounded shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-[#F6EB14] p-8">
              <span className="text-black text-5xl font-black font-heading block mb-2 leading-none">5+</span>
              <span className="text-black text-xs font-bold uppercase tracking-widest leading-tight">Years of Excellence</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block text-[#F6EB14] font-bold text-sm uppercase tracking-widest mb-2">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-black text-white font-heading">FOR RIDERS, <span className="text-[#F6EB14]">BY RIDERS</span></h2>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Mr Biker Pitstop was born out of a pure passion for the open road and a deep commitment to motorcycle safety. We aren't just a retail store; we're a community hub for local riders who demand quality and style.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Located in the heart of Dindigul, we specialize in curated riding gears that meet international safety standards and premium bike accessories that enhance your machine's performance and aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F6EB14]"></div>
                  Quality First
                </h4>
                <p className="text-sm text-gray-500">Only genuine brands and certified safety equipment enter our shelves.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F6EB14]"></div>
                  Expert Support
                </h4>
                <p className="text-sm text-gray-500">Professional guidance on fitment and choosing the right gear for your ride.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;