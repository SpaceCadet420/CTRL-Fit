export function saveOutfit(outfit: Record<string, string>): void {
  const savedOutfits = JSON.parse(localStorage.getItem('savedOutfits') || '[]');
  savedOutfits.push(outfit);
  localStorage.setItem('savedOutfits', JSON.stringify(savedOutfits));
}

export function loadOutfits(): Record<string, string>[] {
  return JSON.parse(localStorage.getItem('savedOutfits') || '[]');
}
