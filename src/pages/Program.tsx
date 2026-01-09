import { useState } from 'react';

// 1. INTERFACE (Con signos ? para evitar errores si falta foto)
interface EventData {
  day: string;
  time: string;
  title: string;
  location: string;
  mediaType?: string; // Opcional
  mediaUrl?: string;  // Opcional
}

// 2. DATOS REALES (Corregí las rutas quitando '/public')
const events: EventData[] = [
  { day: '09 Ene', time: '08:00 PM', title: 'Velada de Coronación', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/flyers/velada.jpeg' },
  { day: '10 Ene', time: '08:00 AM', title: 'Misa de Acción de Gracia e Inauguración de la Feria', location: 'Plaza Municipal' },
  { day: '10 Ene', time: '10:00 AM', title: 'Tradicional Desfile Hípico', location: 'Recorriendo las calles principales', mediaType: 'video', mediaUrl: '/videos/desfile.mp4' },
  { day: '10 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo', mediaType: 'video', mediaUrl: '/videos/cef.mp4' },
  { day: '11 Ene', time: '09:00 AM', title: 'Cuadrangular de Futbol "MASTER ORO"', location: 'Estadio Municipal', mediaType: 'image', mediaUrl: '/flyers/master oro.png' },
  { day: '12 Ene', time: '09:00 AM', title: 'Tradicional COPA 12 DE ENERO', location: 'Estadio Municipal', mediaType: 'image', mediaUrl: '/flyers/copa12.png' },
  { day: '12 Ene', time: '07:00 PM', title: 'Baile Social "CHECHA Y SU INDIA MAYA" (Traje Formal)', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/flyers/baile social.jpeg' },
  { day: '13 Ene', time: '04:00 PM', title: 'Cuadrangular de Baloncesto (Masculino y Femenino)', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/flyers/baloncesto.png' },
  { day: '14 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo', mediaType: 'video', mediaUrl: '/videos/cef.mp4' },
  { day: '15 Ene', time: '07:00 PM', title: 'Concierto con "Malacates Trebol Shop y La Sonora de Melky Fernández del Salvador"', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '09:00 AM', title: 'Caravana Con La Paticipación del Grupo de Motoristas', location: 'Recorriendo las calles principales' },
  { day: '16 Ene', time: '11:00 AM', title: 'Entrega de Equipo Medico Para Personas Necesitadas', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '12:00 PM', title: 'Almuerzo Para Personas de la Tercera Edad', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '07:00 PM', title: 'Concierto con "NICHO Y SUS CACHORROS" y "GRUPO LA REPUBLICA DEL SALVADOR"', location: 'Estadio Municipal' },
];

export default function Program() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <>
      {/* --- BLOQUE 1: CONTENIDO DE LA PÁGINA --- */}
      <div className="pt-24 pb-12 px-4 min-h-screen bg-slate-50 animate-enter">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Programa General de Actividades</h1>
            <div className="h-0.5 w-36 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">Haz clic en "Ver Info" para ver los detalles.</p>
          </div>

          <div className="space-y-6">
            {events.map((evt, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="shrink-0 bg-slate-900 text-white p-4 rounded-xl text-center w-full md:w-28">
                  <p className="text-sm font-medium text-orange-500 uppercase">{evt.day.split(' ')[1]}</p>
                  <p className="text-3xl font-bold">{evt.day.split(' ')[0]}</p>
                </div>
                
                <div className="grow w-full">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full mb-2">
                    {evt.time}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-gray-500 mt-1 flex items-center gap-2">
                    📍 {evt.location}
                  </p>
                </div>
                
                {/* BOTÓN: Solo aparece si hay mediaUrl */}
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  {evt.mediaUrl ? (
                    <button 
                      onClick={() => setSelectedEvent(evt)}
                      className="w-full md:w-auto px-4 py-2 text-sm font-medium text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap"
                    >
                      Ver Info
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400 italic px-2">
                      
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BLOQUE 2: MODAL (FUERA DE LA ANIMACIÓN) --- */}
      {selectedEvent && selectedEvent.mediaUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col">
              {/* Contenedor Multimedia */}
              <div className="bg-black flex justify-center items-center min-h-80 max-h-[80vh]">
                {selectedEvent.mediaType === 'video' ? (
                  <video 
                    src={selectedEvent.mediaUrl} 
                    controls 
                    autoPlay 
                    className="max-h-[70vh] w-full object-contain"
                  >
                    Tu navegador no soporta videos.
                  </video>
                ) : (
                  <img 
                    src={selectedEvent.mediaUrl} 
                    alt={selectedEvent.title} 
                    className="max-h-[70vh] w-full object-contain"
                  />
                )}
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-slate-900">{selectedEvent.title}</h3>
                <p className="text-gray-500 mt-2 flex items-center gap-2">
                  📅 {selectedEvent.day} - ⏰ {selectedEvent.time}
                </p>
                <p className="text-gray-500 flex items-center gap-2">
                  📍 {selectedEvent.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}