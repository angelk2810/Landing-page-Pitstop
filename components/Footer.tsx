import React from 'react';
import { Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const categoryLinks = [
    { name: 'Helmets', href: '#products' },
    { name: 'Riding Jackets', href: '#products' },
    { name: 'Boots', href: '#products' },
    { name: 'Accessories', href: '#products' },
    { name: 'Electronics', href: '#products' },
  ];

  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/mr.biker_pitstop?igsh=dmN5YjlhdmY2dHYy"
    },
    {
      Icon: Youtube,
      href: "https://youtube.com/@devilnashter6325?si=VwvI_HgfQAh4dU5g"
    }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
             <img
               src="http://lh3.googleusercontent.com/d/1tddLLcXiuU3XbJuXPybDxJgfPvMIuZyY"
               alt="MR. BIKER Pitstop"
               className="h-16 w-auto object-contain"
            />

            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your one-stop destination for premium riding gears and high-quality motorcycle accessories. Ride safe, ride styled.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:text-[#F6EB14] hover:bg-[#F6EB14] transition-all"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-[#F6EB14] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 font-heading">Categories</h4>
            <ul className="space-y-4">
              {categoryLinks.map((cat) => (
                <li key={cat.name}>
                  <a href={cat.href} className="text-gray-500 text-sm hover:text-[#F6EB14] transition-colors">{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 font-heading">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-6">Stay updated on new arrivals and riding events.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded focus:outline-none focus:border-[#F6EB14] w-full"
              />
              <button className="bg-[#F6EB14] text-black p-2 rounded hover:bg-[#F6EB14] transition-all">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Mr Biker Pitstop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; export default Footer;