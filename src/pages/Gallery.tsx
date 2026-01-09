import { useState, useEffect, useCallback } from 'react';
import { Camera, X, ZoomIn, User, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---
interface Photo {
  id: number;
  src: string;
  name: string;
  role: string;
  year: string;
}

interface Category {
  title: string;
  description: string;
  photos: Photo[];
}

// --- TUS DATOS (INTACTOS) ---
const galleryData: Category[] = [
  {
    title: "Traje de Baño",
    description: "Elegancia y confianza en la pasarela de verano.",
    photos: [
      { id: 1, src: '/banio/Beberly/003.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 2, src: '/banio/Beberly/IMG_8449.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 3, src: '/banio/Beberly/IMG_8453.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 4, src: '/banio/Beberly/IMG_8461.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 5, src: '/banio/Beberly/IMG_8465.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 6, src: '/banio/Roci/004.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 7, src: '/banio/Roci/IMG_8414.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 8, src: '/banio/Roci/IMG_8426.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 9, src: '/banio/Roci/IMG_8433.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 10, src: '/banio/Roci/IMG_8443.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 11, src: '/banio/Roci/IMG_8444.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 12, src: '/banio/Roci/N003.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 13, src: '/banio/Judith/_MG_0414.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 14, src: '/banio/Judith/002.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 15, src: '/banio/Judith/IMG_8475.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 16, src: '/banio/Judith/IMG_8479.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 17, src: '/banio/Judith/IMG_8490.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 18, src: '/banio/Judith/N005.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 19, src: '/banio/Mackensí/005.jpg', name: 'Brianna Mackensí Nicole Vásquez', role: 'Señorita Deportes', year: '2026-2027' },
      { id: 20, src: '/banio/Mackensí/N001.jpg', name: 'Brianna Mackensí Nicole Vásquez', role: 'Señorita Deportes', year: '2026-2027' },
      { id: 21, src: '/banio/Glendy/N002.jpg', name: 'Glendy Nineth Montepeque Barillas', role: 'Señorita Turismo', year: '2026-2027' },
      { id: 22, src: '/banio/Glendy/001.jpg', name: 'Glendy Nineth Montepeque Barillas', role: 'Señorita Turismo', year: '2026-2027' },
      { id: 23, src: '/banio/Britney/006.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 24, src: '/banio/Britney/IMG_8508.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 25, src: '/banio/Britney/IMG_8526.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 26, src: '/banio/Britney/IMG_8532.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 27, src: '/banio/Britney/N004.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
    ]
  },
  {
    title: "Traje Blanco",
    description: "Pureza y glamour en una noche inolvidable.",
    photos: [
      { id: 28, src: '/blanco/Beberly/008.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 29, src: '/blanco/Roci/_MG_0433.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 30, src: '/blanco/Roci/_MG_0455.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 31, src: '/blanco/Roci/_MG_0481.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 32, src: '/blanco/Roci/_MG_0512.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 33, src: '/blanco/Roci/_MG_0582.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 34, src: '/blanco/Judith/_MG_0454.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 35, src: '/blanco/Judith/_MG_0490.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 36, src: '/blanco/Judith/_MG_0491.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 37, src: '/blanco/Judith/009.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 38, src: '/blanco/Mackensí/010.jpg', name: 'Brianna Mackensí Nicole Vásquez', role: 'Señorita Deportes', year: '2026-2027' },
      { id: 39, src: '/blanco/Glendy/001.jpg', name: 'Glendy Nineth Montepeque Barillas', role: 'Señorita Turismo', year: '2026-2027' },
      { id: 40, src: '/blanco/Britney/_MG_0435.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 41, src: '/blanco/Britney/_MG_0440.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 42, src: '/blanco/Britney/_MG_0585.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
    ]
  },
  {
    title: "Estilo Vaquero",
    description: "Tradición y alegría en nuestro desfile hípico.",
    photos: [
      { id: 43, src: '/vaquero/Beberly/014.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 44, src: '/vaquero/Beberly/IMG_9537.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 45, src: '/vaquero/Beberly/IMG_9548.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 46, src: '/vaquero/Beberly/IMG_9580.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 47, src: '/vaquero/Beberly/IMG_9582.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 48, src: '/vaquero/Beberly/IMG_9597.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 49, src: '/vaquero/Beberly/IMG_9886.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 50, src: '/vaquero/Beberly/IMG_9889.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 51, src: '/vaquero/Beberly/IMG_9895.jpg', name: 'Beberlyn Mishell Avila Villagran', role: 'Señorita Flor de la Feria', year: '2026-2027' },
      { id: 52, src: '/vaquero/Roci/015.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 53, src: '/vaquero/Roci/IMG_9759.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 54, src: '/vaquero/Roci/IMG_9767.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 55, src: '/vaquero/Roci/IMG_9770.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 56, src: '/vaquero/Roci/IMG_9795.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 57, src: '/vaquero/Roci/IMG_9808.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 58, src: '/vaquero/Roci/IMG_9962.jpg', name: 'Estefany Rocio Ventura Morales', role: 'Señorita Simpatía', year: '2026-2027' },
      { id: 59, src: '/vaquero/Judith/017.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 60, src: '/vaquero/Judith/IMG_9635.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 61, src: '/vaquero/Judith/IMG_9684.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 62, src: '/vaquero/Judith/IMG_9692.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 63, src: '/vaquero/Judith/IMG_9696.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 64, src: '/vaquero/Judith/IMG_9697.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 65, src: '/vaquero/Judith/IMG_9901.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 66, src: '/vaquero/Judith/IMG_9903.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 67, src: '/vaquero/Judith/IMG_9905.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 68, src: '/vaquero/Judith/IMG_9909.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 69, src: '/vaquero/Judith/IMG_9915.jpg', name: 'Judit Samanta Pineda Contreras', role: 'Señorita Novia del Ganadero', year: '2026-2027' },
      { id: 70, src: '/vaquero/Mackensí/013.jpg', name: 'Brianna Mackensí Nicole Vásquez', role: 'Señorita Deportes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/016.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9701.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9708.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9715.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9721.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9724.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9737.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 71, src: '/vaquero/Britney/IMG_9922.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      
    ]
  },
];

export default function Gallery() {
  const [currentIndexes, setCurrentIndexes] = useState<{ catIdx: number, photoIdx: number } | null>(null);

  const openModal = (catIdx: number, photoIdx: number) => {
    setCurrentIndexes({ catIdx, photoIdx });
  };

  const closeModal = useCallback(() => {
    setCurrentIndexes(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (!currentIndexes) return;
    const { catIdx, photoIdx } = currentIndexes;
    const category = galleryData[catIdx];
    const nextIdx = (photoIdx + 1) % category.photos.length;
    setCurrentIndexes({ catIdx, photoIdx: nextIdx });
  }, [currentIndexes]);

  const prevPhoto = useCallback(() => {
    if (!currentIndexes) return;
    const { catIdx, photoIdx } = currentIndexes;
    const category = galleryData[catIdx];
    const prevIdx = (photoIdx - 1 + category.photos.length) % category.photos.length;
    setCurrentIndexes({ catIdx, photoIdx: prevIdx });
  }, [currentIndexes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentIndexes) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndexes, nextPhoto, prevPhoto, closeModal]);

  const currentPhoto = currentIndexes 
    ? galleryData[currentIndexes.catIdx].photos[currentIndexes.photoIdx] 
    : null;

  return (
    <> {/* 1. ABRIMOS FRAGMENTO */}
      
      {/* BLOQUE DE LA PÁGINA (CON ANIMACIÓN) */}
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 animate-enter">
        {/* Encabezado */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
            <Camera size={16} />
            <span>Momentos Inolvidables</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Galería Oficial
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Revive los mejores momentos de <span className="font-bold text-slate-900">Taxifer 2026</span>. 
            Una colección de alegría, cultura y desarrollo.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="max-w-7xl mx-auto space-y-20">
          {galleryData.map((category, catIdx) => (
            <section key={catIdx} className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                <p className="text-gray-500">{category.description}</p>
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {category.photos.map((image, photoIdx) => (
                  <div 
                    key={image.id} 
                    className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-slate-900"
                    onClick={() => openModal(catIdx, photoIdx)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.name} 
                      className="w-full h-auto transform group-hover:scale-110 group-hover:opacity-75 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                      <ZoomIn className="mb-2 text-orange-500 drop-shadow-md" size={32} />
                      <h3 className="font-bold text-lg text-white drop-shadow-md">{image.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div> {/* 2. CERRAMOS EL DIV DE LA PÁGINA AQUÍ, ANTES DEL MODAL */}

      {/* --- MODAL (AHORA FUERA DEL CONTENEDOR ANIMADO) --- */}
      {currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeModal}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} // 3. ESTILO FIJO AGREGADO
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-orange-500 transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
          >
            <X size={28} />
          </button>

          {/* Flechas de Navegación */}
          <button 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/40 rounded-full hover:bg-orange-500"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/40 rounded-full hover:bg-orange-500"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight size={32} />
          </button>

          {/* Contenedor Principal Ajustado al 100% de la pantalla sin scroll */}
          <div 
            className="flex flex-col items-center justify-center w-full h-full p-2 md:p-4"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* IMAGEN: Máximo 75% de la altura para dejar espacio al texto */}
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.name} 
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
            />

            {/* INFORMACIÓN: Pegada justo debajo */}
            <div className="mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:px-6 md:py-3 text-center w-full max-w-lg shrink-0">
              <h3 className="text-lg md:text-xl font-bold text-white flex items-center justify-center gap-2">
                <User className="text-orange-500" size={20} />
                {currentPhoto.name}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3 mt-1 text-sm">
                <span className="flex items-center gap-1 text-gray-300 font-medium">
                  <Award size={14} className="text-orange-400" />
                  {currentPhoto.role}
                </span>
                <span className="text-gray-500">|</span>
                <span className="flex items-center gap-1 text-gray-300">
                  <Calendar size={14} className="text-orange-400" />
                  {currentPhoto.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

    </> // 4. CERRAMOS EL FRAGMENTO
  );
}