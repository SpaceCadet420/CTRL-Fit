export function calculateXP(score: number, currentXP: number): number {
  if (score === 110) {
    return currentXP + 50;
  }
  return currentXP;
}

export function applyXPBuff(amount: number) {
  const event = new CustomEvent('xpBuffApplied', { detail: { amount } });
  window.dispatchEvent(event);
}
