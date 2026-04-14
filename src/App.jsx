import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Ambassadors from './components/Ambassadors';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <Ambassadors />
      <Team />
      <FAQ />
      <Sponsors />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
