const events = [
  { day: '09 Ene', time: '08:00 PM', title: 'Velada de Coronación', location: 'Salón Municipal' },
  { day: '10 Ene', time: '08:00 AM', title: 'Misa de Acción de Gracia e Inauguración de la Feria', location: 'Plaza Municipal' },
  { day: '10 Ene', time: '10:00 AM', title: 'Tradicional Desfile Hípico', location: 'Recorriendo las calles principales' },
  { day: '10 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo' },
  { day: '11 Ene', time: '09:00 AM', title: 'Cuadrangular de Futbol "MASTER ORO"', location: 'Estadio Municipal' },
  { day: '12 Ene', time: '09:00 AM', title: 'Tradicional COPA 12 DE ENERO', location: 'Estadio Municipal' },
  { day: '12 Ene', time: '07:00 PM', title: 'Baile Social "CHECHA Y SU INDIA MAYA" (Traje Formal)', location: 'Salón Municipal' },
  { day: '13 Ene', time: '04:00 PM', title: 'Cuadrangular de Baloncesto (Masculino y Femenino', location: 'Salón Municipal' },
  { day: '14 Ene', time: '05:00 PM', title: 'CEF Rodeo', location: 'Plaza de Toros Hermanos Arévalo' },
  { day: '15 Ene', time: '07:00 PM', title: 'Concierto con "Malacates Trebol Shop y La Sonora de Melky Fernández del Salvador"', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '09:00 AM', title: 'Caravana Con La Paticipación del Grupo de Motoristas', location: 'Recorriendo las calles principales' },
  { day: '16 Ene', time: '11:00 AM', title: 'Entrega de Equipo Medico Para Personas Necesitadas', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '12:00 PM', title: 'Almuerzo Para Personas de la Tercera Edad', location: 'Estadio Municipal' },
  { day: '16 Ene', time: '07:00 PM', title: 'Concierto con "NICHO Y SUS CACHORROS" y "GRUPO LA REPUBLICA DEL SALVADOR"', location: 'Estadio Municipal' },
  // Agrega más aquí
];

export default function Program() {
  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-slate-50 animate-enter">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-navy-900 mb-4">Programa General de Actividades</h1>
          <div className="h-0.5 w-30 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">No te pierdas ninguna de nuestras actividades.</p>
        </div>

        <div className="space-y-6">
          {events.map((evt, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="shrink-0 bg-navy-900 text-white p-4 rounded-xl text-center min-w-25">
                <p className="text-sm font-medium text-orange-500 uppercase">{evt.day.split(' ')[1]}</p>
                <p className="text-3xl font-bold">{evt.day.split(' ')[0]}</p>
              </div>
              
              <div className="grow">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full mb-2">
                  {evt.time}
                </span>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-orange-600 transition-colors">
                  {evt.title}
                </h3>
                <p className="text-gray-500 mt-1 flex items-center gap-2">
                  📍 {evt.location}
                </p>
            </div>
          {/*   Botón Más Info (no funcional por ahora)     */}
              {/*<button className="px-4 py-2 text-sm font-medium text-navy-900 border border-navy-200 rounded-lg group-hover:bg-navy-900 group-hover:text-white transition-all">*/}
                {/*Más info*/}
              {/*</button>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}