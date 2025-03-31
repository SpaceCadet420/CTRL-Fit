import React from 'react';

interface SaveOutfitProps {
  onSave: () => void;
}

const SaveOutfit: React.FC<SaveOutfitProps> = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
    >
      Save Outfit
    </button>
  );
};

export default SaveOutfit;
