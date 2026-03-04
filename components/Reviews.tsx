import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white font-heading uppercase">RIDERS <span className="text-[#F6EB14]">FEEDBACK</span></h2>
            <p className="text-gray-500 mt-2">Hear what our local motorcycling community has to say about us.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-[#F6EB14]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-white font-bold text-xl">4.9/5</span>
            <span className="text-gray-500 text-sm">Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-8 bg-[#202020] border-t-2 border-[#F6EB14] rounded shadow-xl relative overflow-hidden">
              <Quote className="absolute -right-4 -top-4 w-24 h-24 text-white/5 opacity-50" />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F6EB14] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-base uppercase tracking-wider">{review.author}</div>
                  <div className="text-gray-500 text-xs uppercase font-semibold">{review.date}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F6EB14] border border-[#F6EB14] flex items-center justify-center text-black font-black">
                  {review.author[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;