
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi Mr Biker Pitstop, I’m interested in bike accessories and riding gears.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
    >
      <div className="mr-3 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:block">
        Chat with us
      </div>
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse hover:animate-none">
        <MessageCircle className="w-7 h-7" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
