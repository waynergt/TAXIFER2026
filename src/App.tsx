import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Program from './pages/Program';
import Gallery from './pages/Gallery';
import Magazine from './pages/Magazine';
// 1. IMPORTANTE: IMPORTAR LA PÁGINA DE VIDEOS
import Videos from './pages/Videos'; 

import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programa" element={<Program />} />
          <Route path="/galeria" element={<Gallery />} />
          {/* 2. IMPORTANTE: LA RUTA DE VIDEOS */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/revista" element={<Magazine />} />
        </Routes>
      </main>
      
      <Footer />
      <BackToTopBtn />
      
    </div>
  );
}

export default App;