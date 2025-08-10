import React from 'react';
import './index.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;