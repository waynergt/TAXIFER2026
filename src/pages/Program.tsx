import { useState } from 'react';

// 1. DEFINIMOS EL TIPO DE DATO (Para solucionar el error de "any")
interface EventData {
  day: string;
  time: string;
  title: string;
  location: string;
  mediaType: string;
  mediaUrl: string;
}

const events = [
  { day: '09 Ene', time: '08:00 PM', title: 'Velada de Coronación', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/public/flyers/velada.jpeg' },
  { day: '10 Ene', time: '08:00 AM', title: 'Misa de Acción de Gracia e Inauguración de la Feria', location: 'Plaza Municipal' },
  { day: '10 Ene', time: '10:00 AM', title: 'Tradicional Desfile Hípico', location: 'Recorriendo las calles principales', mediaType: 'video', mediaUrl: '/public/videos/desfile.jpeg' },
  { day: '10 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo', mediaType: 'video', mediaUrl: '/public/videos/cef.mp4' },
  { day: '11 Ene', time: '09:00 AM', title: 'Cuadrangular de Futbol "MASTER ORO"', location: 'Estadio Municipal', mediaType: 'image', mediaUrl: '/public/flyers/master oro.png' },
  { day: '12 Ene', time: '09:00 AM', title: 'Tradicional COPA 12 DE ENERO', location: 'Estadio Municipal', mediaType: 'image', mediaUrl: '/public/flyers/copa12.png' },
  { day: '12 Ene', time: '07:00 PM', title: 'Baile Social "CHECHA Y SU INDIA MAYA" (Traje Formal)', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/public/flyers/baile social.jpeg' },
  { day: '13 Ene', time: '04:00 PM', title: 'Cuadrangular de Baloncesto (Masculino y Femenino', location: 'Salón Municipal', mediaType: 'image', mediaUrl: '/public/flyers/baloncesto.png' },
  { day: '14 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo', mediaType: 'video', mediaUrl: '/public/videos/cef.mp4' },
  { day: '15 Ene', time: '07:00 PM', title: 'Concierto con "Malacates Trebol Shop y La Sonora de Melky Fernández del Salvador"', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '09:00 AM', title: 'Caravana Con La Paticipación del Grupo de Motoristas', location: 'Recorriendo las calles principales' },
  { day: '16 Ene', time: '11:00 AM', title: 'Entrega de Equipo Medico Para Personas Necesitadas', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '12:00 PM', title: 'Almuerzo Para Personas de la Tercera Edad', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '07:00 PM', title: 'Concierto con "NICHO Y SUS CACHORROS" y "GRUPO LA REPUBLICA DEL SALVADOR"', location: 'Estadio Municipal' },
  // Agrega más aquí
];

export default function Program() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <> 
    {/* 1. ABRIMOS FRAGMENTO (<>) PARA TENER DOS BLOQUES SEPARADOS */}

      {/* BLOQUE 1: EL CONTENIDO DE LA PÁGINA (Con animación) */}
      <div className="pt-24 pb-12 px-4 min-h-screen bg-slate-50 animate-enter">
        <div className="max-w-4xl mx-auto">
          {/* ... Todo tu código del título y la lista de eventos ... */}
          {/* (No cambies nada aquí adentro, solo asegúrate de cerrar este div antes del modal) */}
           <div className="text-center mb-16">
              {/* ... código del título ... */}
           </div>
           <div className="space-y-6">
              {/* ... el map de los eventos ... */}
              {events.map((evt, idx) => (
                 // ... tus tarjetas de eventos ...
                 // (Resumido para no llenar la pantalla, usa tu código actual)
                 <div key={idx} className="...">
                    {/* ... contenido tarjeta ... */}
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                      {evt.mediaUrl ? (
                        <button onClick={() => setSelectedEvent(evt)} className="...">
                          Ver Info
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400 italic px-2">Próximamente</span>
                      )}
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div> 
      {/* AQUÍ CERRAMOS EL DIV PRINCIPAL "animate-enter" */}


      {/* BLOQUE 2: EL MODAL (AFUERA DEL DIV ANIMADO) */}
      {/* Al estar afuera, 'fixed inset-0' funcionará perfecto y cubrirá toda la pantalla sin scroll */}
      {selectedEvent && selectedEvent.mediaUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} // Refuerzo para móviles
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col">
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

    </> // 3. CERRAMOS EL FRAGMENTO
  );
}