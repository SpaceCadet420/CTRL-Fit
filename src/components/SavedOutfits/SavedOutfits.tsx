import React from 'react';

interface SavedOutfitsProps {
  outfits: Record<string, string>[];
  onLoad: (outfit: Record<string, string>) => void;
}

const SavedOutfits: React.FC<SavedOutfitsProps> = ({ outfits, onLoad }) => {
  return (
    <div className="flex space-x-4 overflow-x-scroll mt-4">
      {outfits.map((outfit, index) => (
        <div
          key={index}
          className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
          onClick={() => onLoad(outfit)}
        >
          <span className="text-sm">Outfit {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default SavedOutfits;
