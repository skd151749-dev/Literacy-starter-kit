// Level and XP System
export interface Level {
  level: number;
  xp: number;
  xpToNext: number;
  title: string;
}

const LEVEL_STORAGE_KEY = 'literacy-level-data';

const LEVEL_TITLES = [
  'Beginner', 'Learner', 'Student', 'Scholar', 
  'Expert', 'Master', 'Champion', 'Legend',
  'Hero', 'Genius', 'Prodigy', 'Savant'
];

export function calculateLevel(xp: number): Level {
  let level = 1;
  let totalXpNeeded = 0;
  
  // Each level requires 100 * level XP
  while (totalXpNeeded + (100 * level) <= xp) {
    totalXpNeeded += 100 * level;
    level++;
  }
  
  const xpInCurrentLevel = xp - totalXpNeeded;
  const xpToNext = 100 * level;
  const title = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  
  return { level, xp: xpInCurrentLevel, xpToNext, title };
}

export function addXP(amount: number): Level {
  if (typeof window === 'undefined') return calculateLevel(0);
  
  const stored = localStorage.getItem(LEVEL_STORAGE_KEY);
  const currentXP = stored ? parseInt(stored, 10) : 0;
  const newXP = currentXP + amount;
  
  localStorage.setItem(LEVEL_STORAGE_KEY, newXP.toString());
  return calculateLevel(newXP);
}

export function getCurrentLevel(): Level {
  if (typeof window === 'undefined') return calculateLevel(0);
  
  const stored = localStorage.getItem(LEVEL_STORAGE_KEY);
  const xp = stored ? parseInt(stored, 10) : 0;
  return calculateLevel(xp);
}

export function getTotalXP(): number {
  if (typeof window === 'undefined') return 0;
  
  const stored = localStorage.getItem(LEVEL_STORAGE_KEY);
  return stored ? parseInt(stored, 10) : 0;
}
