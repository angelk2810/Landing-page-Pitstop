import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black text-white font-heading leading-tight mb-4">OUR <span className="text-[#F6EB14]">EXPERTISE</span></h2>
            <div className="w-16 h-1 bg-[#F6EB14] mb-6"></div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Beyond just selling products, we provide specialized services to ensure every rider gets the safest and most comfortable experience on their motorcycle.
            </p>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="p-8 bg-[#202020] border border-gray-800 hover:border-[#F6EB14] transition-all group">
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;