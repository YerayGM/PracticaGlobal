import { useState, useEffect } from 'react';
import AgentCard from './AgentCard';

const AgentsList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then(response => response.json())
      .then(data => setAgents(data.data))
      .catch(error => console.error('Error fetching agents', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {agents.map(agent => (
        <AgentCard key={agent.uuid} agent={agent} />
      ))}
    </div>
  );
};

export default AgentsList;