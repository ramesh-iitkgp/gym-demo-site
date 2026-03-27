import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 top-0 left-0 border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-lime-500 p-1.5 rounded-lg">
            <Dumbbell className="w-6 h-6 text-black stroke-[2]" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">Gym Name</span>
        </a>

        <div className="hidden lg:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#" className="text-white hover:text-lime-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-lime-500 transition-colors">About Us</a>
          <a href="#classes" className="hover:text-lime-500 transition-colors">Classes</a>
          <a href="#pricing" className="hover:text-lime-500 transition-colors">Pricing</a>
          <a href="#schedule" className="hover:text-lime-500 transition-colors">Timetable</a>
        </div>

        <div className="hidden md:block">
          <a href="#" className="border border-white/20 hover:bg-lime-500 hover:text-black hover:border-lime-500 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all">
            Join Now
          </a>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col items-center py-6 gap-6 text-sm font-medium uppercase tracking-widest text-white/80">
            <a href="#" className="text-white hover:text-lime-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-lime-500 transition-colors">About Us</a>
            <a href="#classes" className="hover:text-lime-500 transition-colors">Classes</a>
            <a href="#pricing" className="hover:text-lime-500 transition-colors">Pricing</a>
            <a href="#schedule" className="hover:text-lime-500 transition-colors">Timetable</a>
            <a href="#" className="border border-white/20 hover:bg-lime-500 hover:text-black hover:border-lime-500 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all mt-4">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
