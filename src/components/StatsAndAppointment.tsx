import React from 'react';

export default function StatsAndAppointment() {
  return (
    <section className="bg-black py-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Our Statics</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">We Are Best In <br /> Our Class</h2>
          </div>
          <p className="text-neutral-400">Suspendisse blandit smare sros veciula Vestibulum ante ipsum perenis in faucibus orci luctus et ultra pocusro cublia curan Sadulanetnporas lastus viverra efficitur.</p>
          
          <div className="space-y-6 pt-4">
            <div>
              <div className="flex justify-between text-white font-bold mb-2">
                <span>Client Satisfaction</span>
                <span>90%</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-full">
                <div className="h-full bg-lime-500 rounded-full w-[90%] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-white font-bold mb-2">
                <span>Support Customer</span>
                <span>80%</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-full">
                <div className="h-full bg-lime-500 rounded-full w-[80%] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-lime-500 text-3xl font-bold mb-8">Get Appointment</div>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" />
            <input type="tel" placeholder="Phone No." className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" />
            <input type="email" placeholder="Email Address" className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors" />
            <textarea rows={4} placeholder="Message" className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 text-sm focus:outline-none focus:border-lime-500 transition-colors"></textarea>
            <button className="w-full bg-lime-500 text-black font-bold uppercase tracking-widest py-4 text-sm hover:bg-lime-400 transition-colors">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
