import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandsCarousel from './components/BrandsCarousel';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Policies from './pages/Policies';
import Mision from './pages/Misionvision';
import QualityPolicy from './pages/QualityPolicy';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga asíncrona
    setTimeout(() => {
        setLoading(false);
    }, 2000); // Simulación de tiempo de carga

    // Lógica adicional para cargar datos, etc.
  }, []);

  return (
    <Router>
      <div className="flex-col">
        <Header />
        <div className="App">
        {loading ? (
                <Loader />
        ) : (
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Mision" element={<Mision />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Policies" element={<Policies />} />
            <Route path="/QualityPolicy" element={<QualityPolicy />} />
          </Routes>
        </main>
        )}
        </div>
        <BrandsCarousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;