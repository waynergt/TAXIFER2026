import { useState } from 'react';
import { Play, X, Youtube } from 'lucide-react';

// --- TUS VIDEOS ---
const videoList = [
  { 
    id: 'IWtoAr3_lWQ', 
    title: 'Invitación Desfile Hípico', 
    description: 'La tradición que nos une. ¡Te esperamos!' 
  },
  { 
    id: 'op4Iom3rJys', 
    title: 'Invitación al Gran Rodeo', 
    description: 'Adrenalina y emoción en la Plaza de Toros.' 
  },
  { 
    id: '3uTAd5hl7GE', 
    title: 'Nuestras Bellezas Taxistecas', 
    description: 'Conoce a las candidatas de #TAXIFER2026.' 
  },
  { 
    id: 'JeEoFVtSZIM', 
    title: 'Invitación Taxistecos Ausentes', 
    description: 'Un mensaje especial para nuestros hermanos lejanos.' 
  },
  { 
    id: 'c1ZmbKVhMXo', 
    title: 'Velada de Coronación', 
    description: 'La noche de gala y glamour.' 
  },
];

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 animate-enter">
      
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">
          <Youtube size={16} />
          <span>Videoteca Oficial</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Videos <span className="text-red-600">Destacados</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Disfruta de los mejores momentos, invitaciones y reportajes de nuestra 
          <span className="font-bold text-slate-900"> Taxifer 2026</span>.
        </p>
      </div>

      {/* Grid de Videos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoList.map((video) => (
          <div 
            key={video.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer"
            onClick={() => setSelectedVideo(video.id)}
          >
            {/* Portada (Usamos hqdefault que es más seguro que maxresdefault) */}
            <div className="relative aspect-video overflow-hidden bg-slate-200">
              <img 
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                alt={video.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Botón Play Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Info del Video */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL DE REPRODUCCIÓN --- */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-red-500 transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}