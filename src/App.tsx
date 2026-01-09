import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Program from './pages/Program';
import Gallery from './pages/Gallery';
// 1. IMPORTAMOS EL NUEVO COMPONENTE FOOTER
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
        </Routes>
      </main>
      
      {/* 2. AQUÍ COLOCAMOS EL COMPONENTE (Reemplazando el código viejo) */}
      <Footer />
      <BackToTopBtn />
      
    </div>
  );
}

export default App;