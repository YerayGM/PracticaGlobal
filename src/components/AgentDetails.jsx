const AgentDetails = ({ agent }) => {
  return (
    <div className="mt-2">
      <img className="w-full rounded-lg" src={agent.fullPortrait} alt={agent.displayName} />
      <p className="mt-2 text-gray-700">{agent.description}</p>
      <h3 className="mt-4 font-semibold">Abilities:</h3>
      <ul className="list-disc list-inside">
        {agent.abilities.map(ability => (
          <li key={ability.slot}>
            <strong>{ability.displayName}:</strong> {ability.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentDetails;