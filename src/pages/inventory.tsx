import React from 'react';
import BuffCard from '../components/Inventory/BuffCard';

const mockBuffs = [
  { name: "Speed Boost", description: "Increases speed by 20%", effect: "+50 XP", isUsed: false },
  { name: "Strength Potion", description: "Increases strength by 30%", effect: "+50 XP", isUsed: false },
  { name: "Wisdom Elixir", description: "Increases wisdom by 25%", effect: "+50 XP", isUsed: false },
];

const Inventory: React.FC = () => {
  const [buffs, setBuffs] = React.useState(mockBuffs);

  const handleUseBuff = (index: number) => {
    setBuffs((prevBuffs) => {
      const newBuffs = [...prevBuffs];
      if (!newBuffs[index].isUsed) {
        newBuffs[index].isUsed = true;
        // Apply the effect, e.g., +50 XP
        // This is where you would integrate with the XP system
      }
      return newBuffs;
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Inventory</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {buffs.map((buff, index) => (
          <BuffCard
            key={index}
            name={buff.name}
            description={buff.description}
            effect={buff.effect}
            isUsed={buff.isUsed}
            onUse={() => handleUseBuff(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
