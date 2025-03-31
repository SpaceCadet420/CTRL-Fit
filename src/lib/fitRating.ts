export function calculateFitScore(selectedItems: Record<string, string>): number {
  let score = 0;
  const categories = ['hat', 'top', 'bottom', 'shoes', 'accessory'];

  categories.forEach(category => {
    if (selectedItems[category]) {
      score += 20;
    }
  });

  if (categories.every(category => selectedItems[category])) {
    score += 10; // Bonus for full outfit
  }

  return score;
}
