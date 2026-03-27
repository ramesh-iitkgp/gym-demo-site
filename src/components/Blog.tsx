import React from 'react';

export default function Blog() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Our News</span>
          <h2 className="text-4xl font-bold text-black tracking-tight">Latest Blog Feed</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
            'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
          ].map((img, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden mb-6 h-64 bg-black">
                <div className="absolute top-4 left-4 bg-lime-500 text-black px-4 py-1 text-xs font-bold uppercase z-10">7 March 2021</div>
                <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              </div>
              <h3 className="text-xl font-bold text-black leading-tight mb-3 group-hover:text-lime-600 transition-colors">Going to the gym for the first time</h3>
              <p className="text-neutral-500 text-sm mb-4 line-clamp-3">Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.</p>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-black hover:text-lime-600 transition-colors">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
