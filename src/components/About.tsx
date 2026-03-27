import React from 'react';
import { Play } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white text-black" id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-2 block">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Welcome To Our <br /> Fitness Gym</h2>
          </div>
          
          <p className="text-neutral-600 leading-relaxed">
            Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet color feugiat. 
            <br /><br />
            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.
          </p>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Trainer" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-lg leading-none">Denis Robinson</h4>
                <span className="text-neutral-500 text-sm">Dur Dasch</span>
              </div>
            </div>
            <button className="bg-lime-500 text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all">
              Explore More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="h-full bg-neutral-100 rounded-none overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="h-full bg-neutral-100 rounded-none overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="col-span-2 h-[240px] bg-neutral-100 rounded-none overflow-hidden relative group -mt-20 z-10 mx-8 border-4 border-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-lime-500/90 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 fill-black text-black ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
