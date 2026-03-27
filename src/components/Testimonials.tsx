import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-3 block">Testimonial</span>
          <h2 className="text-4xl font-bold text-black tracking-tight">What Our Clients Says</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-black p-8 relative">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-2 border-lime-500" />
                <div>
                  <h4 className="text-white font-bold">Scott Swanson</h4>
                  <span className="text-lime-500 text-xs">Our Client</span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-6">"Phasellus accumsan pretium gsasew sdaerop sadof wrea fafe fast! thoucus. afaer asdr Aliquare porttitor, congue Ultricies stertentum tortor ipsum"</p>
              <div className="flex text-yellow-500 text-xs gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-8 h-1 bg-lime-500"></div>
          <div className="w-4 h-1 bg-black"></div>
          <div className="w-4 h-1 bg-black"></div>
        </div>
      </div>
    </section>
  );
}
