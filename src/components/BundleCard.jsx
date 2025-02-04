const BundleCard = ({ bundle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 transform hover:scale-105">
      <img className="w-full rounded-lg" src={bundle.displayIcon} alt={bundle.displayName} />
      <h2 className="text-xl font-semibold mt-2">{bundle.displayName}</h2>
      <p className="text-gray-700 mt-2">{bundle.description}</p>
    </div>
  );
};

export default BundleCard;