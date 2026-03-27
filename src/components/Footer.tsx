import React from 'react';
import { Dumbbell, Clock, MapPin, Phone, Mail, Send, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="bg-lime-500 p-1.5 rounded-lg">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Gym Name</span>
          </a>
          <p className="text-sm mb-6 leading-relaxed">Etiam suscipit fringilla scelerisque malesuada urna nec edis.</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-lime-500"><Clock className="w-4 h-4" /></div>
              <div>
                <div className="text-white font-medium">Monday - Friday</div>
                <div className="text-xs">7:00am - 10:00pm</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-lime-500"><Clock className="w-4 h-4" /></div>
              <div>
                <div className="text-white font-medium">Saturday - Sunday</div>
                <div className="text-xs">7:00am - 2:00pm</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Our Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-lime-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-lime-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-lime-500 transition-colors">Classes</a></li>
            <li><a href="#" className="hover:text-lime-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-lime-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
              <span>Address Placeholder, City, State, ZIP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-lime-500 shrink-0" />
              <span>Mob no Placeholder</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lime-500 shrink-0" />
              <span>info@gymname.com <br /> support@gymname.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Our Newsletter</h4>
          <form className="flex mb-6">
            <input type="email" placeholder="Email Address" className="bg-white px-4 py-2 w-full text-black text-sm focus:outline-none rounded-l" />
            <button className="bg-lime-500 px-3 py-2 rounded-r hover:bg-lime-400 transition-colors"><Send className="w-4 h-4 text-black" /></button>
          </form>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-black hover:bg-white transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-neutral-900 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <p>Copyright © 2026 <span className="text-lime-500">Gym Name</span>. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}
