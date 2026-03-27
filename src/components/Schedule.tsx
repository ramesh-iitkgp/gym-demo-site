import React from 'react';
import { Clock } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-24 bg-white text-black" id="schedule">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Our Schedule</span>
          <h2 className="text-4xl font-bold text-black tracking-tight">Check Our Classes Schedule</h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-7 gap-1 bg-black p-1 border border-black">
            <div className="bg-black text-lime-500 p-4 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Monday</div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Tuesday</div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Wednesday</div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Thursday</div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Friday</div>
            <div className="bg-neutral-900 text-white p-4 font-bold text-center uppercase text-sm flex items-center justify-center">Saturday</div>

            <div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">8:00 AM</div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Manny Sulliles</span>
            </div>
            <div className="bg-neutral-900 p-4"></div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Kate Johnson</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Boxing</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">John Hard</span>
            </div>

            <div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">10:00 AM</div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Kata Jimon</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
            </div>
            <div className="bg-neutral-900 p-4"></div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Hanny Johnes</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Power Yoga</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Zahra Sharif</span>
            </div>
            
            <div className="bg-neutral-900 text-white p-4 text-xs font-bold flex items-center justify-center">12:00 PM</div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Boxing</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">John Hard</span>
            </div>
            <div className="bg-neutral-900 p-4"></div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Katie Johnson</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Aerobics</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Mancy Jahiles</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Weight Lifting</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Desert Antony</span>
            </div>
            <div className="bg-neutral-800 hover:bg-lime-500 hover:text-black group p-4 flex flex-col items-center justify-center transition-colors cursor-pointer">
              <span className="text-white group-hover:text-black font-bold text-sm">Cardio</span>
              <span className="text-neutral-500 group-hover:text-black/70 text-xs">Katie Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
