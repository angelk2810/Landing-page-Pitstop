import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading uppercase">LIFE AT <span className="text-[#F6EB14]">PITSTOP</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into our store, premium gear collection, and the community of riders we serve.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded bg-[#1A1A1A]">
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;