import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';
import VisitCounter from '../components/VisitCounter';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center pt-32 pb-32 bg-navy-900 overflow-hidden animate-enter">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-orange-500 font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
          Feria Titular de Taxisco
        </h2>
        
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 animate-fade-in-up">
          {/* 1. Logo Taxifer 2026 */}
          <img 
            src="/logo-taxifer.png" 
            alt="Logo Taxifer 2026" 
            className="h-20 md:h-32 lg:h-40 object-contain drop-shadow-lg transition-transform hover:scale-105"
          />

          {/* 2. Línea Divisoria Vertical (CORREGIDO AQUÍ: bg-linear-to-b) */}
          <div className="h-16 md:h-28 w-0.5 rounded-full bg-linear-to-b from-orange-500 to-yellow-400 opacity-90"></div>

          {/* 3. Logo Municipalidad */}
          <img 
            src="/logo-muni.png" 
            alt="Logo Municipalidad de Taxisco" 
            className="h-20 md:h-32 lg:h-40 object-contain drop-shadow-lg transition-transform hover:scale-105"
          />
        </div>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          Celebremos juntos la tradición, la cultura y la alegría de nuestro pueblo. 
          ¡Te esperamos para vivir momentos inolvidables!
        </p>

        {/* CUENTA REGRESIVA */}
        <div className="mt-4">
          <p className="text-orange-200 text-sm font-semibold tracking-widest uppercase mb-2">
            Faltan para la gran inauguración
          </p>
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-gray-200 mt-8">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="text-orange-500" />
            <span>09 - 16 de Enero, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="text-orange-500" />
            <span>Taxisco, Santa Rosa</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/programa"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Ver Programa
          </Link>
          <Link 
            to="/galeria"
            className="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-bold rounded-full border border-navy-700 transition-all"
          >
            Galería de Fotos
          </Link>
        </div>

        {/* CONTADOR DE VISITAS */}
        <div className="mt-10 flex justify-center">
          <VisitCounter />
        </div>

      </div>
      
      {/* Footer sutil */}
      <div className="absolute bottom-8 w-full text-center text-gray-500 text-sm">
        <p>Organiza: Municipalidad de Taxisco</p>
      </div>
    </div>
  );
}