import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Valorant Guide</h1>
      <p className="mb-4">Explora los agentes, los paquetes y las clasificaciones competitivas de Valorant.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/agents" className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700">
          <h2 className="text-2xl font-bold">Agentes</h2>
          <p>Descubre los agentes jugables y sus habilidades.</p>
        </Link>
        <Link to="/bundles" className="bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700">
          <h2 className="text-2xl font-bold">Paquetes</h2>
          <p>Explora los paquetes disponibles en la tienda.</p>
        </Link>
        <Link to="/competitive-tiers" className="bg-red-600 text-white p-4 rounded-lg shadow-md hover:bg-red-700">
          <h2 className="text-2xl font-bold">Clasificaciones Competitivas</h2>
          <p>Consulta las clasificaciones competitivas actuales.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;