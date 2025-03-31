import React from 'react';

const mockItems = [
  { id: 1, name: "Snapback Hat", category: "hat", image: "/items/hat1.png" },
  { id: 2, name: "Bomber Jacket", category: "top", image: "/items/top1.png" },
  { id: 3, name: "Jeans", category: "bottom", image: "/items/bottom1.png" },
  { id: 4, name: "Sneakers", category: "shoes", image: "/items/shoes1.png" },
  { id: 5, name: "Watch", category: "accessory", image: "/items/accessory1.png" },
];

interface SwipeZoneProps {
  onSelectItem: (item: typeof mockItems[0]) => void;
}

const SwipeZone: React.FC<SwipeZoneProps> = ({ onSelectItem }) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {mockItems.map(item => (
        <div key={item.id} className="flex-none w-32 h-32 bg-gray-700 rounded-lg" onClick={() => onSelectItem(item)}>
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <p className="text-center text-white">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SwipeZone;
