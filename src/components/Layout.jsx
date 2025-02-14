import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <nav className="bg-blue-800 p-5 shadow-lg">
        <ul className="flex justify-center space-x-6 text-lg font-semibold">
          <li><Link to="/" className="hover:text-indigo-400 transition duration-300">Inicio</Link></li>
          <li><Link to="/agents" className="hover:text-indigo-400 transition duration-300">Agentes</Link></li>
          <li><Link to="/bundles" className="hover:text-indigo-400 transition duration-300">Paquetes</Link></li>
          <li><Link to="/competitive-tiers" className="hover:text-indigo-400 transition duration-300">Clasificaciones</Link></li>
          <li><Link to="/search" className="hover:text-indigo-400 transition duration-300">Buscar</Link></li>
        </ul>
      </nav>
      <main className="flex-grow p-6 bg-gray-800 rounded-lg shadow-inner">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
