import { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';

// Datos de ejemplo (Reemplazarás los 'src' con tus fotos reales de /public)
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop', category: 'Desfile', title: 'Alegoría Tradicional' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=600&auto=format&fit=crop', category: 'Conciertos', title: 'Noche de Música' },
  { id: 3, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop', category: 'Feria', title: 'Juegos Mecánicos' },
  { id: 4, src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=600&auto=format&fit=crop', category: 'Cultura', title: 'Danzas Folclóricas' },
  { id: 5, src: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=600&auto=format&fit=crop', category: 'Desfile', title: 'Carrozas Reales' },
  { id: 6, src: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=600&auto=format&fit=crop', category: 'Conciertos', title: 'Escenario Principal' },
  { id: 7, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop', category: 'Feria', title: 'Noche de Luces' },
  { id: 8, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop', category: 'Cultura', title: 'Gastronomía Local' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 animate-enter">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
          <Camera size={16} />
          <span>Momentos Inolvidables</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Galería Oficial
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Revive los mejores momentos de <span className="font-bold text-slate-900">Taxifer 2026</span>. 
          Una colección de alegría, color y tradición.
        </p>
      </div>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.title} 
              className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
              <ZoomIn className="mb-2 text-orange-500" size={32} />
              <h3 className="font-bold text-lg">{image.title}</h3>
              <p className=" text-gray-300 uppercase tracking-wider text-xs mt-1">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-orange-500 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="rounded-lg shadow-2xl max-h-[85vh] object-contain border-2 border-slate-800"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <span className="text-orange-500 font-medium">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
