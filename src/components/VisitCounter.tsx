import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usamos countapi.xyz que es un servicio gratuito para contar hits
    // El namespace 'taxifer2026' y key 'visits' aseguran que sea único para tu web
    fetch('https://api.countapi.xyz/hit/taxifer2026/visits')
      .then((response) => response.json())
      .then((data) => {
        setVisits(data.value);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener visitas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return null; // No muestra nada mientras carga para no verse feo

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm text-slate-600 text-sm font-medium animate-fade-in mt-6">
      <Eye size={16} className="text-orange-500" />
      <span>
        {visits ? visits.toLocaleString() : '0'} Visitas
      </span>
    </div>
  );
}