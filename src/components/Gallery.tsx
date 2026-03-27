import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
          <div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Couple Fitness Workout</div>
        </div>
        <div className="h-64 relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
          <div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Cardio Workout</div>
        </div>
        <div className="h-64 relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider">Weight Loss Program</div>
          <div className="absolute bottom-[-20px] left-4 text-lg font-bold text-white group-hover:bottom-12 transition-all duration-300 opacity-0 group-hover:opacity-100">Fitness Workout</div>
        </div>
      </div>
    </section>
  );
}
