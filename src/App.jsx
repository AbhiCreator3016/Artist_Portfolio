
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Exhibitions from '@/pages/Exhibitions';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import ArtworkDetail from '@/pages/ArtworkDetail';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
