import React from 'react';

interface DropSelectorProps {
  drops: { name: string; id: string }[];
  selectedDrop: string;
  onSelectDrop: (id: string) => void;
}

const DropSelector: React.FC<DropSelectorProps> = ({ drops, selectedDrop, onSelectDrop }) => {
  return (
    <div className="flex justify-center my-4">
      {drops.map((drop) => (
        <button
          key={drop.id}
          onClick={() => onSelectDrop(drop.id)}
          className={`mx-2 px-4 py-2 rounded ${selectedDrop === drop.id ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          {drop.name}
        </button>
      ))}
    </div>
  );
};

export default DropSelector;
