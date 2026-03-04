// Fix: Added React import to resolve the 'React' namespace error when using React.ReactNode in a .ts file
import React from 'react';

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}