import { Link } from 'react-router-dom';

const AgentCard = ({ agent }) => {
  return (
    <Link
      to={`/agent/${agent.uuid}`}
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-red-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50"
    >
      {/* Imagen del agente con efecto hover */}
      <div className="relative h-80 overflow-hidden">
        <img
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={agent.fullPortrait}
          alt={agent.displayName}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Nombre del agente */}
        <h3 className="text-3xl font-extrabold text-white mb-2">
          {agent.displayName}
        </h3>

        {/* Descripción del agente */}
        <p className="text-gray-300 line-clamp-3 text-lg leading-relaxed">
          {agent.description}
        </p>

        {/* Rol del agente (si está disponible) */}
        {agent.role && (
          <div className="mt-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full">
              {agent.role.displayName}
            </span>
          </div>
        )}

        {/* Efecto de borde al hacer hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/30 rounded-2xl transition-all duration-300 pointer-events-none" />
      </div>

      {/* Indicador de hover (opcional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default AgentCard;