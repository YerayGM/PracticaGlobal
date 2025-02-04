import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-around text-white">
          <li><Link to="/">Agents</Link></li>
          <li><Link to="/bundles">Bundles</Link></li>
          <li><Link to="/competitive-tiers">Competitive Tiers</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;