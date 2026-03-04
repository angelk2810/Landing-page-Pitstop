import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-white font-heading uppercase mb-4">GET IN <span className="text-[#F6EB14]">TOUCH</span></h2>
              <p className="text-gray-400">Have a specific requirement? Contact us or visit our showroom in Dindigul for expert assistance.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F6EB14] flex items-center justify-center flex-shrink-0 text-black">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider font-heading">Our Store</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F6EB14] flex items-center justify-center flex-shrink-0 text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider font-heading">Call Us</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 text-sm hover:text-[#F6EB14] transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F6EB14] flex items-center justify-center flex-shrink-0 text-black">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wider font-heading">Business Hours</h4>
                  <div className="space-y-1">
                    {CONTACT_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-sm w-64">
                        <span className="text-gray-500">{h.day}</span>
                        <span className="text-gray-300 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-8 py-4 bg-[#F6EB14] text-black font-black uppercase text-xs tracking-widest rounded hover:bg-[#F6EB14] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi Mr Biker Pitstop, I’m interested in bike accessories and riding gears.")}`}
                className="px-8 py-4 bg-transparent border-2 border-[#F6EB14] text-[#F6EB14] font-black uppercase text-xs tracking-widest rounded hover:bg-[#F6EB14] hover:text-black transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative rounded-lg overflow-hidden border-4 border-gray-800 h-[500px] shadow-2xl">
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={`https://maps.google.com/maps?q=Anna%20Nagar%20Dindigul%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="grayscale contrast-125 invert-[0.9] hue-rotate-[180deg]"
            ></iframe>
            <div className="absolute top-4 right-4 bg-[#F6EB14] text-black p-4 rounded shadow-lg">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; export default Contact;