const AgentDetails = ({ agent }) => {
  return (
    <div className="mt-2">
      <h3 className="mt-4 font-semibold">Habilidades:</h3>
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