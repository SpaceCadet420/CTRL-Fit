import React from 'react';

interface BuffCardProps {
  name: string;
  description: string;
  effect: string;
  isUsed: boolean;
  onUse: () => void;
}

const BuffCard: React.FC<BuffCardProps> = ({ name, description, effect, isUsed, onUse }) => {
  return (
    <div className={`p-4 border rounded ${isUsed ? 'opacity-50' : ''}`}>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{description}</p>
      <p className="text-green-500">Effect: {effect}</p>
      <button
        onClick={onUse}
        className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
        disabled={isUsed}
      >
        {isUsed ? 'Used' : 'Use Buff'}
      </button>
    </div>
  );
};

export default BuffCard;
