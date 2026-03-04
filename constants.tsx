import React from 'react';
import { 
  ShieldCheck, 
  Settings, 
  HardHat, 
  Wrench, 
  ShoppingBag,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook
} from 'lucide-react';
import { Product, Review, Service } from './types';

export const COLORS = {
  bg: '#1A1A1A', // Matte Charcoal
  accent: '#F6EB14', // Brand Yellow
  secondary: '#252525',
  text: '#FFFFFF',
  muted: '#A0A0A0'
};

export const CONTACT_INFO = {
  address: "No 27, 41 A, Near Gomath Lodge, Anna Nagar, Mookan Asari Lane, New Agraharam, Dindigul – 624001, Tamil Nadu",
  phone: "7904137335", 
  whatsapp: "917904137335",
  hours: [
    { day: "Tue – Sat", time: "9:30 AM – 9:30 PM" },
    { day: "Sunday", time: "9:30 AM – 12:00 PM" },
    { day: "Monday", time: "9:30 AM – 9:30 PM" }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: 'h1',
    category: 'Helmets',
    name: 'Stealth Carbon Pro',
    description: 'Ultra-lightweight ECE certified racing helmet with dual visor.',
    image: 'https://images.unsplash.com/photo-1627530980937-b8721b91506a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j1',
    category: 'Riding Jackets',
    name: 'Titanium Mesh Jacket',
    description: 'High-airflow textile jacket with Level 2 armor protection.',
    image: 'https://images.unsplash.com/photo-1591216089766-cc5f26b8d447?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g1',
    category: 'Gloves',
    name: 'Predator Leather Gloves',
    description: 'Full-grain leather with carbon fiber knuckle protection.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mt5AGVkQQiohjJrmJuT606WWBbl1d_19Tw&s?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a1',
    category: 'Bike Accessories',
    name: 'LED Fog Light Kit',
    description: 'High-intensity dual color fog lights with waterproof switch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mFxHIpMpL8Jf2rMvwkhl4jAyZmWmPKA2lQ&s?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'k1',
    category: 'Knee Guards',
    name: 'Bionic Knee Protectors',
    description: 'Dual-pivot design for maximum comfort and safety.',
    image: 'https://m.media-amazon.com/images/I/7112PEvkAZL.jpg?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a2',
    category: 'Bike Accessories',
    name: 'Precision Phone Mount',
    description: 'Vibration dampening CNC aluminum motorcycle mount.',
    image: 'https://d2raye211e9z2r.cloudfront.net/catalog/product/cache/75aea685e6c397532e2c00bbaa475b19/b/o/bobo-bm10h-pro-fully-waterproof-bike--cycle-phone-holder-with-vibration-controller-motorcycle-mobile-mount-_2_.jpg?auto=format&fit=crop&q=80&w=800'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Helmet Fitting',
    description: 'Expert consultation to find the perfect shell size and inner padding fit.',
    icon: <HardHat className="w-8 h-8 text-[#F6EB14]" />
  },
  {
    title: 'Gear Consultation',
    description: 'Professional advice on safety ratings and material choices for your riding style.',
    icon: <ShieldCheck className="w-8 h-8 text-[#F6EB14]" />
  },
  {
    title: 'Accessory Installation',
    description: 'On-site installation for lights, mirrors, phone mounts, and basic accessories.',
    icon: <Wrench className="w-8 h-8 text-[#F6EB14]" />
  },
  {
    title: 'Custom Fitting',
    description: 'Minor adjustments to gears for better comfort during long distance touring.',
    icon: <Settings className="w-8 h-8 text-[#F6EB14]" />
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Arun Kumar",
    rating: 5,
    text: "Best collection of helmets in Dindigul. The staff is very knowledgeable about safety standards.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "Priya S.",
    rating: 5,
    text: "Found a perfect riding jacket. Great quality and reasonably priced. Highly recommend Mr Biker Pitstop.",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "Sanjay Raj",
    rating: 4,
    text: "Excellent service. They helped me install the fog lights on my Himalayan perfectly.",
    date: "3 months ago"
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1721016955456-3347f18de45d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1591378603223-e15b45a81640?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1655098085639-3f652507ad86?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1758887698516-bf98e619de12?auto=format&fit=crop&q=80&w=800'
];