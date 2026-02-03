// Achievement System
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'score' | 'streak' | 'accuracy' | 'activity';
  category?: string;
  unlocked: boolean;
  progress: number;
}

const ACHIEVEMENT_STORAGE_KEY = 'literacy-achievements';

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_step', name: 'First Steps', description: 'Complete your first question', icon: '🎯', requirement: 1, type: 'score', unlocked: false, progress: 0 },
  { id: 'quick_learner', name: 'Quick Learner', description: 'Score 10 correct answers', icon: '⚡', requirement: 10, type: 'score', unlocked: false, progress: 0 },
  { id: 'dedicated', name: 'Dedicated Student', description: 'Score 50 correct answers', icon: '📚', requirement: 50, type: 'score', unlocked: false, progress: 0 },
  { id: 'scholar', name: 'Scholar', description: 'Score 100 correct answers', icon: '🎓', requirement: 100, type: 'score', unlocked: false, progress: 0 },
  { id: 'master', name: 'Literacy Master', description: 'Score 250 correct answers', icon: '👑', requirement: 250, type: 'score', unlocked: false, progress: 0 },
  { id: 'streak_5', name: 'On Fire', description: 'Achieve a 5-answer streak', icon: '🔥', requirement: 5, type: 'streak', unlocked: false, progress: 0 },
  { id: 'streak_10', name: 'Unstoppable', description: 'Achieve a 10-answer streak', icon: '💥', requirement: 10, type: 'streak', unlocked: false, progress: 0 },
  { id: 'streak_20', name: 'Legendary', description: 'Achieve a 20-answer streak', icon: '⭐', requirement: 20, type: 'streak', unlocked: false, progress: 0 },
  { id: 'perfectionist', name: 'Perfectionist', description: 'Achieve 90% accuracy with 20+ attempts', icon: '💯', requirement: 90, type: 'accuracy', unlocked: false, progress: 0 },
  { id: 'all_activities', name: 'Well Rounded', description: 'Try all 4 activities', icon: '🌟', requirement: 4, type: 'activity', unlocked: false, progress: 0 },
];

export function getAchievements(): Achievement[] {
  if (typeof window === 'undefined') return ACHIEVEMENTS;
  
  const stored = localStorage.getItem(ACHIEVEMENT_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return ACHIEVEMENTS;
    }
  }
  return ACHIEVEMENTS;
}

export function saveAchievements(achievements: Achievement[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(achievements));
}

export function checkAchievements(stats: {
  totalCorrect: number;
  bestStreak: number;
  accuracy: number;
  totalAttempts: number;
  activitiesPlayed: string[];
}): Achievement[] {
  const achievements = getAchievements();
  const newlyUnlocked: Achievement[] = [];

  achievements.forEach(achievement => {
    if (achievement.unlocked) return;

    let progress = 0;
    let shouldUnlock = false;

    switch (achievement.type) {
      case 'score':
        progress = stats.totalCorrect;
        shouldUnlock = stats.totalCorrect >= achievement.requirement;
        break;
      case 'streak':
        progress = stats.bestStreak;
        shouldUnlock = stats.bestStreak >= achievement.requirement;
        break;
      case 'accuracy':
        progress = stats.accuracy;
        shouldUnlock = stats.accuracy >= achievement.requirement && stats.totalAttempts >= 20;
        break;
      case 'activity':
        progress = stats.activitiesPlayed.length;
        shouldUnlock = stats.activitiesPlayed.length >= achievement.requirement;
        break;
    }

    achievement.progress = Math.min(progress, achievement.requirement);

    if (shouldUnlock) {
      achievement.unlocked = true;
      newlyUnlocked.push(achievement);
    }
  });

  saveAchievements(achievements);
  return newlyUnlocked;
}

export function getUnlockedCount(): number {
  return getAchievements().filter(a => a.unlocked).length;
}

export function getTotalAchievements(): number {
  return ACHIEVEMENTS.length;
}
