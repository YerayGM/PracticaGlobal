import image from '../IMG/image.png';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-6 text-center mt-10 shadow-lg">
      <p className="text-lg font-semibold">&copy; 2025 Valorant Guide. Todos los derechos reservados.</p>
      <div className="mt-2 flex justify-center items-center space-x-4">
        <a href="/privacy-policy" className="text-indigo-300 hover:text-indigo-400 transition duration-300">Política de Privacidad</a>
        <span>|</span>
        <a href="/terms-of-service" className="text-indigo-300 hover:text-indigo-400 transition duration-300">Términos de Servicio</a>
      </div>
      <div className="mt-4">
        <img src={image} alt="Footer Image" className="w-20 h-auto mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
