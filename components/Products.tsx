import React, { useState } from 'react';
import { MessageCircle, Search, ChevronRight } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO } from '../constants';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Helmets', 'Riding Jackets', 'Gloves', 'Bike Accessories', 'Knee Guards'];
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hi Mr Biker Pitstop, I'm interested in the ${productName}. Could you please share more details?`);
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
  };

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
    <section id="products" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading uppercase">OUR <span className="text-[#F6EB14]">CATALOG</span></h2>
          <div className="w-24 h-1 bg-[#F6EB14] mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded transition-all ${activeCategory === cat ? 'bg-[#F6EB14] text-black' : 'bg-[#1A1A1A] text-gray-500 hover:text-white border border-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-[#1A1A1A] rounded overflow-hidden border border-gray-800 shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#F6EB14] backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-widest border border-[#F6EB14] rounded">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-wide uppercase">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#F6EB14] font-black text-lg">ENQUIRE</span>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#F6EB14] text-black border border-[#F6EB14] hover:bg-[#F6EB14] transition-all text-xs font-bold uppercase tracking-tighter rounded"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6 italic">Many more premium products available in-store. Visit us today!</p>
          <button
             onClick={() => scrollToId('contact')}
             className="inline-flex items-center gap-2 text-[#F6EB14] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
          >
            Find Our Location <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;