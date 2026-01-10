import { useState, useEffect, useCallback } from 'react';
import { Camera, X, ZoomIn, User, Calendar, Award, ChevronLeft, ChevronRight, Loader2, FolderOpen, ArrowLeft } from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---
interface Photo {
  id: number;
  src: string;
  name: string;
  role: string;
  year: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

// --- TUS DATOS ---
const galleryData: Category[] = [
  {
    id: 'banio',
    title: "Traje de Baño",
    description: "Elegancia y confianza de Nuestras Representantes.",
    coverImage: '/banio/Beberly/003.jpg',
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
    id: 'blanco',
    title: "Traje Blanco",
    description: "Pureza y glamour de Nuestras Representantes.",
    coverImage: '/blanco/Beberly/008.jpg',
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
    id: 'vaquero',
    title: "Estilo Vaquero",
    description: "Nuestras Representantes en traje vaquero.",
    coverImage: '/vaquero/Beberly/014.jpg',
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
      { id: 72, src: '/vaquero/Britney/IMG_9701.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 73, src: '/vaquero/Britney/IMG_9708.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 74, src: '/vaquero/Britney/IMG_9715.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 75, src: '/vaquero/Britney/IMG_9721.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 76, src: '/vaquero/Britney/IMG_9724.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 77, src: '/vaquero/Britney/IMG_9737.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      { id: 78, src: '/vaquero/Britney/IMG_9922.jpg', name: 'Britney Sheyen Pérez López', role: 'Señorita Taxistecos Ausentes', year: '2026-2027' },
      
    ]
  },
  // --- NUEVA CATEGORÍA AGREGADA ---
  {
    id: 'coronacion',
    title: "Velada de Coronación",
    description: "La noche mágica donde brilló la belleza y elegancia.",
    coverImage: '/coronacion/portada.jpg', // ¡Asegúrate de tener esta imagen o cámbiala por una real!
    photos: [
      // Agrega aquí tus fotos de coronación siguiendo el mismo formato
      // { id: 100, src: '/coronacion/foto1.jpg', name: 'Candidata', role: 'Participante', year: '2026' },
    ]
  },
];

// --- COMPONENTE INTERNO ---
const GalleryItem = ({ image, onClick, photoIdx }: { image: Photo, onClick: (p:number) => void, photoIdx: number }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      // CORRECCIÓN AQUÍ: Cambiamos [3/4] por 3/4
      className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-slate-200 aspect-3/4"
      onClick={() => onClick(photoIdx)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300 animate-pulse z-10">
          <Loader2 className="animate-spin text-slate-400" size={24} />
        </div>
      )}
      <img 
        src={image.src} 
        alt={image.name} 
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transform group-hover:scale-110 group-hover:opacity-75 transition-all duration-700 ease-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center z-20 bg-black/40">
        <ZoomIn className="mb-2 text-orange-500 drop-shadow-md" size={32} />
        <h3 className="font-bold text-lg text-white drop-shadow-md">{image.name}</h3>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

  const openCategory = (category: Category) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToCategories = () => {
    setActiveCategory(null);
    setCurrentPhotoIndex(null);
  };

  const openPhotoModal = (idx: number) => {
    setCurrentPhotoIndex(idx);
  };

  const closePhotoModal = useCallback(() => {
    setCurrentPhotoIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (currentPhotoIndex === null || !activeCategory) return;
    const nextIdx = (currentPhotoIndex + 1) % activeCategory.photos.length;
    setCurrentPhotoIndex(nextIdx);
  }, [currentPhotoIndex, activeCategory]);

  const prevPhoto = useCallback(() => {
    if (currentPhotoIndex === null || !activeCategory) return;
    const prevIdx = (currentPhotoIndex - 1 + activeCategory.photos.length) % activeCategory.photos.length;
    setCurrentPhotoIndex(prevIdx);
  }, [currentPhotoIndex, activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentPhotoIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closePhotoModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhotoIndex, nextPhoto, prevPhoto, closePhotoModal]);

  const currentPhoto = (activeCategory && currentPhotoIndex !== null) 
    ? activeCategory.photos[currentPhotoIndex] 
    : null;

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 animate-enter">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
            <Camera size={16} />
            <span>Momentos Inolvidables</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Galería Oficial
          </h1>
          {!activeCategory && (
            <p className="text-gray-500 max-w-2xl mx-auto text-lg animate-fade-in">
              Selecciona una carpeta para ver las fotos.
            </p>
          )}
        </div>

        {!activeCategory && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {galleryData.map((category) => (
              <div 
                key={category.id}
                onClick={() => openCategory(category)}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                  <img 
                    src={category.coverImage} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Carpeta";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <FolderOpen size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{category.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{category.description}</p>
                  <p className="text-orange-500 text-xs font-bold mt-4 uppercase tracking-widest">
                    {category.photos.length} Fotos
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory && (
          <div className="max-w-7xl mx-auto animate-fade-in">
            <button 
              onClick={backToCategories}
              className="mb-8 flex items-center gap-2 text-slate-600 hover:text-orange-600 font-medium transition-colors bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md"
            >
              <ArrowLeft size={20} />
              Volver a Carpetas
            </button>

            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">{activeCategory.title}</h2>
              <p className="text-gray-500">{activeCategory.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {activeCategory.photos.map((image, idx) => (
                <GalleryItem 
                  key={image.id}
                  image={image}
                  photoIdx={idx}
                  onClick={openPhotoModal}
                />
              ))}
            </div>
            
            {activeCategory.photos.length === 0 && (
               <div className="text-center py-20 bg-slate-100 rounded-xl border border-dashed border-slate-300">
                  <p className="text-slate-400">Próximamente agregaremos fotos a esta sección.</p>
               </div>
            )}
          </div>
        )}
      </div>

      {currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col animate-fade-in"
          onClick={closePhotoModal}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <div 
            className="w-full bg-white px-4 py-3 md:py-4 flex items-center justify-between shadow-lg shrink-0 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 text-center md:text-left">
               <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
                 <User className="text-orange-500 shrink-0" size={20} />
                 <span className="truncate">{currentPhoto.name}</span>
               </h3>
               <div className="flex items-center justify-center md:justify-start gap-4 mt-1 text-xs md:text-sm text-gray-600">
                 <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full">
                   <Award size={14} className="text-orange-500" />
                   {currentPhoto.role}
                 </span>
                 <span className="flex items-center gap-1 font-semibold">
                   <Calendar size={14} className="text-gray-400" />
                   {currentPhoto.year}
                 </span>
               </div>
            </div>

            <button 
               className="ml-4 p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-full transition-colors"
               onClick={closePhotoModal}
            >
              <X size={28} />
            </button>
          </div>

          <div 
            className="flex-1 w-full relative flex items-center justify-center p-2 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
             <button 
               className="absolute left-2 md:left-8 text-white/70 hover:text-white hover:scale-110 p-2 bg-black/40 rounded-full hover:bg-orange-500 transition-all z-10"
               onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
             >
               <ChevronLeft size={36} />
             </button>

             <img 
               src={currentPhoto.src} 
               alt={currentPhoto.name} 
               className="max-h-full max-w-full object-contain drop-shadow-2xl"
             />

             <button 
               className="absolute right-2 md:right-8 text-white/70 hover:text-white hover:scale-110 p-2 bg-black/40 rounded-full hover:bg-orange-500 transition-all z-10"
               onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
             >
               <ChevronRight size={36} />
             </button>
          </div>
        </div>
      )}
    </>
  );
}