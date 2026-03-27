import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 bg-white text-black" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Pricing Table</span>
          <h2 className="text-4xl font-bold text-black tracking-tight">Choose Your Pricing Plan</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-neutral-900 h-[500px] relative group overflow-hidden border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
              <div className="text-center w-full">
                <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Standard Plan</h3>
                <div className="text-lime-500 text-5xl font-bold mb-1">$35<span className="text-base text-neutral-400 font-normal">/Month</span></div>
              </div>
              
              <ul className="space-y-4 text-neutral-400 text-sm text-center">
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Unlimited club access</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Group attendance</li>
                <li className="flex items-center justify-center gap-2 text-neutral-600"><Check className="w-4 h-4" /> Gym Visits</li>
                <li className="flex items-center justify-center gap-2 text-neutral-600"><Check className="w-4 h-4" /> Visits to the bath complex</li>
                <li className="flex items-center justify-center gap-2 text-neutral-600"><Check className="w-4 h-4" /> Gym, fight club</li>
              </ul>

              <button className="w-full border border-neutral-700 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all">Join Now</button>
            </div>
          </div>

          <div className="bg-lime-500 h-[500px] relative group overflow-hidden shadow-2xl scale-105 z-10">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" />
            <div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
              <div className="text-center w-full">
                <h3 className="text-black text-lg font-bold uppercase tracking-wider mb-6">Premium Plan</h3>
                <div className="text-black text-5xl font-bold mb-1">$45<span className="text-base text-black/60 font-normal">/Month</span></div>
              </div>
              
              <ul className="space-y-4 text-black text-sm text-center font-medium">
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-black" /> Unlimited club access</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-black" /> Group attendance</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-black" /> Gym Visits</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-black" /> Visits to the bath complex</li>
                <li className="flex items-center justify-center gap-2 text-black/40"><Check className="w-4 h-4" /> Gym, fight club</li>
              </ul>

              <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Join Now</button>
            </div>
          </div>

          <div className="bg-neutral-900 h-[500px] relative group overflow-hidden border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 p-8 flex flex-col items-center h-full justify-between">
              <div className="text-center w-full">
                <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6">Platinum Plan</h3>
                <div className="text-lime-500 text-5xl font-bold mb-1">$55<span className="text-base text-neutral-400 font-normal">/Month</span></div>
              </div>
              
              <ul className="space-y-4 text-neutral-400 text-sm text-center">
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Unlimited club access</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Group attendance</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Gym Visits</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Visits to the bath complex</li>
                <li className="flex items-center justify-center gap-2"><Check className="w-4 h-4 text-lime-500" /> Gym, fight club</li>
              </ul>

              <button className="w-full border border-neutral-700 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
