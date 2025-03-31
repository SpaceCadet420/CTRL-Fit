import React from 'react';
import Avatar from '../components/Avatar/Avatar';
import SwipeZone from '../components/SwipeZone/SwipeZone';
import FitRating from '../components/FitRating/FitRating';
import SaveOutfit from '../components/SaveOutfit/SaveOutfit';
import SavedOutfits from '../components/SavedOutfits/SavedOutfits';
import DropSelector from '../components/DropSelector';
import { calculateFitScore } from '../lib/fitRating';
import { calculateXP, applyXPBuff } from '../lib/xpSystem';
import { saveOutfit, loadOutfits } from '../lib/saveSystem';
import { drops } from '../lib/dropData';

const Home: React.FC = () => {
  const [selectedItems, setSelectedItems] = React.useState({
    hat: '',
    top: '',
    bottom: '',
    shoes: '',
    accessory: '',
  });
  const [xp, setXP] = React.useState(0);
  const [savedOutfits, setSavedOutfits] = React.useState<Record<string, string>[]>([]);
  const [selectedDrop, setSelectedDrop] = React.useState(drops[0].id);

  React.useEffect(() => {
    const outfits = loadOutfits();
    setSavedOutfits(outfits);
  }, []);

  React.useEffect(() => {
    const handleXPBuff = (event: Event) => {
      const customEvent = event as CustomEvent;
      setXP((currentXP) => currentXP + customEvent.detail.amount);
    };

    window.addEventListener('xpBuffApplied', handleXPBuff as EventListener);
    return () => {
      window.removeEventListener('xpBuffApplied', handleXPBuff as EventListener);
    };
  }, []);

  const handleSelectItem = (item: { category: string; image: string }) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [item.category]: item.image,
    }));
  };

  const handleSaveOutfit = () => {
    saveOutfit(selectedItems);
    setSavedOutfits(loadOutfits());
  };

  const handleLoadOutfit = (outfit: Record<string, string>) => {
    setSelectedItems(outfit);
  };

  const fitScore = calculateFitScore(selectedItems);

  React.useEffect(() => {
    setXP((currentXP) => calculateXP(fitScore, currentXP));
  }, [fitScore]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <DropSelector drops={drops} selectedDrop={selectedDrop} onSelectDrop={setSelectedDrop} />
      <Avatar {...selectedItems} />
      <FitRating score={fitScore} xp={xp} />
      <SaveOutfit onSave={handleSaveOutfit} />
      <SavedOutfits outfits={savedOutfits} onLoad={handleLoadOutfit} />
      <SwipeZone onSelectItem={handleSelectItem} selectedDrop={selectedDrop} />
    </div>
  );
};

export default Home;
