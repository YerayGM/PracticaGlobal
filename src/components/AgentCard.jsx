// src/components/AgentCard.js
import { useState } from 'react';
import AgentDetails from './AgentDetails';

const AgentCard = ({ agent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition duration-300 transform hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{agent.displayName}</h2>
      {isOpen && <AgentDetails agent={agent} />}
    </div>
  );
};

export default AgentCard;