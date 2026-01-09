import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Program from './pages/Program';
import Gallery from './pages/Gallery';
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';
import BackToTopBtn from './components/BackToTopBtn';
import Magazine from './pages/Magazine';

// NOTA: Borramos la importación de VisitCounter de aquí porque ya lo estás usando en Home.tsx
// y así evitamos el error de "definido pero nunca usado".

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
          <Route path="/revista" element={<Magazine />} />
        </Routes>
      </main>
      
      <Footer />
      <BackToTopBtn />
      
    </div>
  );
}

export default App;