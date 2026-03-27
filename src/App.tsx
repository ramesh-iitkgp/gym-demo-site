/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import StatsAndAppointment from './components/StatsAndAppointment';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-neutral-300 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Trainers />
      <Pricing />
      <Gallery />
      <StatsAndAppointment />
      <Testimonials />
      <AppDownload />
      <Blog />
      <Footer />
    </div>
  );
}
