import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Trainers() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Best Trainer</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">Our Professional Trainer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Desert Antony', role: 'Fitness Trainer', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80' },
            { name: 'Kate Johnson', role: 'Fitness Trainer', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80' },
            { name: 'John Hard', role: 'Main Trainer', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80' },
            { name: 'Zahra Sharif', role: 'Yoga Trainer', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80' },
          ].map((trainer, i) => (
            <div key={i} className="text-center group">
              <div className="relative overflow-hidden mb-6 h-[350px]">
                <img src={trainer.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center hover:bg-white"><Twitter className="w-4 h-4" /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
              <p className="text-lime-500 text-sm">{trainer.role}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-8 h-1 bg-lime-500"></div>
          <div className="w-4 h-1 bg-neutral-700"></div>
          <div className="w-4 h-1 bg-neutral-700"></div>
        </div>
      </div>
    </section>
  );
}
