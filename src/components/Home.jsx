import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1>
            <DotLottieReact
              src="https://lottie.host/2cf78759-4b64-4d39-b198-088117ed61a9/bTJeqc2IQP.lottie"
              loop
              autoplay
            />
          </h1>
          <h1 className="text-5xl font-extrabold text-white mb-6 animate-fade-in-down">
            Bienvenido a <span className="text-valorant-red">Valorant</span> Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Domina el juego con información detallada sobre agentes, paquetes y el sistema competitivo de Valorant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            to="/agents" 
            className="group relative bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl p-8 shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-noise opacity-20 rounded-2xl" />
            <div className="relative z-10">
              <div className="mb-6 text-blue-300 group-hover:text-blue-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Agentes</h2>
              <p className="text-gray-200 group-hover:text-white transition-colors text-lg">
                Descubre las habilidades únicas y tácticas de cada agente.
              </p>
            </div>
          </Link>

          <Link 
            to="/bundles" 
            className="group relative bg-gradient-to-br from-green-800 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-green-900/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-noise opacity-20 rounded-2xl" />
            <div className="relative z-10">
              <div className="mb-6 text-green-300 group-hover:text-green-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-8 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Paquetes</h2>
              <p className="text-gray-200 group-hover:text-white transition-colors text-lg">
                Explora las colecciones exclusivas y contenido premium disponible.
              </p>
            </div>
          </Link>

          <Link 
            to="/competitive-tiers" 
            className="group relative bg-gradient-to-br from-red-800 to-red-600 rounded-2xl p-8 shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-noise opacity-20 rounded-2xl" />
            <div className="relative z-10">
              <div className="mb-6 text-red-300 group-hover:text-red-100 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4l1.41 1.41L13.83 9H20v2h-6.17l3.58 3.59L16 16l-6-6 6-6zM4 4h2v16H4V4z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Clasificaciones</h2>
              <p className="text-gray-200 group-hover:text-white transition-colors text-lg">
                Conoce el sistema de rangos y estrategias para subir de nivel.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;