import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // CAMBIO: Usamos counterapi.dev que es más estable
    // La estructura es: /v1/{tu-namespace}/{tu-key}/up
    fetch('https://api.counterapi.dev/v1/taxifer2026/visits/up')
      .then((response) => {
        if (!response.ok) throw new Error("Error en la API");
        return response.json();
      })
      .then((data) => {
        // Nota: Esta API devuelve 'count', la anterior devolvía 'value'
        setVisits(data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.error("No se pudo cargar el contador:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  // Si carga o da error, mostramos un número base o nada para que no se vea feo
  if (loading) return null;
  if (error) return null; 

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg text-white text-sm font-medium animate-fade-in mt-6 hover:bg-white/20 transition-colors cursor-default">
      <Eye size={16} className="text-orange-400" />
      <span>
        {visits ? visits.toLocaleString() : '1'} Visitas
      </span>
    </div>
  );
}