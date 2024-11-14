
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Places from './components/Places';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      {/* <Places /> */}
      <Footer />
    </div>
  );
}

export default App;
