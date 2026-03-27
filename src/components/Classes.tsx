import React from 'react';
import { Dumbbell, HeartPulse, Zap } from 'lucide-react';

export default function Classes() {
  return (
    <section className="py-24 bg-neutral-950" id="classes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Our Class</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">Fitness Classes For Every Goal</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-4">
                <Dumbbell className="w-10 h-10 text-lime-500 mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Weight Lifting <br /> Classes</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
              </div>
              
              <div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
                <span>Class Full</span>
                <span>65%</span>
              </div>
              <div className="w-full h-1 bg-neutral-700">
                <div className="h-full bg-lime-500 w-[65%]"></div>
              </div>
            </div>
          </div>

          <div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-4">
                <HeartPulse className="w-10 h-10 text-lime-500 mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Cardio Strength <br /> Classes</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
              </div>
              
              <div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
                <span>Class Full</span>
                <span>70%</span>
              </div>
              <div className="w-full h-1 bg-neutral-700">
                <div className="h-full bg-lime-500 w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className="group relative h-[450px] overflow-hidden bg-neutral-900 border border-white/5">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-4">
                <Zap className="w-10 h-10 text-lime-500 mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Power Yoga <br /> Classes</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">Suspendisse nisl libero, cursus ac magna sit amet, fermentum imperdiet nisl.</p>
              </div>
              
              <div className="w-full flex justify-between text-xs font-bold text-white uppercase mb-1">
                <span>Class Full</span>
                <span>90%</span>
              </div>
              <div className="w-full h-1 bg-neutral-700">
                <div className="h-full bg-lime-500 w-[90%]"></div>
              </div>
            </div>
          </div>
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
