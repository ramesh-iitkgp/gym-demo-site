import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter uppercase">
            <span className="text-outline block mb-2">Achieve</span>
            <span className="text-white">More</span> <br />
            <span className="text-lime-500">Than Just Fitness</span>
          </h1>
          
          <p className="text-lg text-neutral-300 max-w-xl border-l-4 border-lime-500 pl-6 py-2">
            Combine strength, flexibility, and endurance in a community that values well-rounded health and supportive growth.
          </p>
          
          <div className="flex items-center gap-4 pt-8">
            <button className="bg-lime-500 text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-lime-400 transition-all">
              Start Now
            </button>
            <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Join Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
