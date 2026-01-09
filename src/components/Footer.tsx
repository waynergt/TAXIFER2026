const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 animate-enter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Identidad */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 tracking-tighter">
              TAXIFER <span className="text-orange-500">2026</span>
            </h3>
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
              La feria oficial del pueblo. Celebrando nuestras tradiciones, 
              cultura y deporte en honor a nuestro santo patrón.
            </p>
          </div>

          {/* Columna 2: Contacto Municipal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span>📍</span> Palacio Municipal, Taxisco, Santa Rosa
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> recepcionmunicipal2024@munitaxisco.gob.gt
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Síguenos</h4>
            <div className="flex space-x-4">
              {/* Botón Facebook */}
              <a href="https://www.facebook.com/tumunitaxisco" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Botón TikTok */}
<a href="https://www.tiktok.com/@munitaxisco.2024" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition-colors">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
</a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria y Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Municipalidad de Taxisco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;