import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80" className="rounded-lg shadow-2xl border-4 border-white/10 opacity-80 rotate-3" />
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80" className="absolute -bottom-10 -right-10 w-2/3 rounded-lg shadow-2xl border-4 border-lime-500 -rotate-6" />
        </div>
        
        <div className="space-y-6">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-2 block">Download App</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">Get Advice On <br /> Gym & Fitness App</h2>
          <p className="text-neutral-400 max-w-lg">Mauris vitae quam tincidunt, sollicitudin sapien nas, tincidunt urna integer commodo, lorem vel fringilla tincidunt.</p>
          
          <div className="flex gap-4 pt-4">
            <button className="flex items-center gap-3 bg-black border border-white/20 px-6 py-3 rounded-lg hover:border-lime-500 transition-colors">
              <Apple className="w-8 h-8 text-white" />
              <div className="text-left">
                <div className="text-[10px] text-neutral-400 uppercase">Available on</div>
                <div className="text-white font-bold leading-none">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-lime-500 px-6 py-3 rounded-lg hover:bg-lime-400 transition-colors">
              <PlayCircle className="w-8 h-8 text-black fill-current" />
              <div className="text-left text-black">
                <div className="text-[10px] uppercase font-medium">Available on</div>
                <div className="font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
