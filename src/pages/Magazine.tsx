
import { BookOpen } from 'lucide-react'; // Asegúrate de tener instalado lucide-react o usa otro ícono

export default function Magazine() {
  return (
    <div className="pt-32 pb-12 px-4 min-h-screen bg-slate-50 animate-enter">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
            <BookOpen size={16} />
            <span>Edición Especial 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Revista <span className="text-orange-500">Digital</span>
          </h1>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre la historia, los personajes y todos los detalles de nuestra feria en esta edición interactiva.
          </p>
        </div>

        {/* Contenedor de la Revista (Tu código Embed) */}
        <div className="bg-white p-2 md:p-4 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Aquí inicia el código que me diste adaptado a React */}
          <div style={{ position: 'relative', paddingTop: 'max(60%,326px)', height: 0, width: '100%' }}>
            <iframe 
              allow="clipboard-write" 
              sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" 
              allowFullScreen={true} 
              style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, right: 0, top: 0, bottom: 0 }} 
              src="https://e.issuu.com/embed.html?backgroundColor=%23263d64&backgroundColorFullscreen=%23263d64&logoImageUrl=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1OV349NaGeAE8gv11bu2-oea6PCgNv-aa%2Fview%3Fusp%3Dsharing&pubId=6fdc84df444f7e12ed625270c875ff46&themeSecondaryColor=%231a193d"
              title="Revista Taxifer 2026"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}