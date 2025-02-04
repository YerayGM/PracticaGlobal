// src/components/AgentsList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import AgentCard from './AgentCard';

const AgentsList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then(response => setAgents(response.data.data))
      .catch(error => console.error('Error fetching agents', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map(agent => (
        <AgentCard key={agent.uuid} agent={agent} />
      ))}
    </div>
  );
};

export default AgentsList;