import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 p-4 shadow-md">
        <ul className="flex justify-around text-white">
          <li><Link to="/">Agentes</Link></li>
          <li><Link to="/bundles">Paquetes</Link></li>
          <li><Link to="/competitive-tiers">Tier Competitivo</Link></li>
          <li><Link to="/search">Buscar</Link></li>
        </ul>
      </nav>
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;