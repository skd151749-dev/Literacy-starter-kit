type ActivityType = 'letters' | 'sight-words' | 'phonics' | 'spelling';

interface ActivityProgress {
  correct: number;
  total: number;
  accuracy: number;
}

const STORAGE_KEY = 'literacy-progress';

function getStoredProgress(): Record<ActivityType, { correct: number; total: number }> {
  if (typeof window === 'undefined') return getDefaultProgress();
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getDefaultProgress();
    }
  }
  return getDefaultProgress();
}

function getDefaultProgress(): Record<ActivityType, { correct: number; total: number }> {
  return {
    'letters': { correct: 0, total: 0 },
    'sight-words': { correct: 0, total: 0 },
    'phonics': { correct: 0, total: 0 },
    'spelling': { correct: 0, total: 0 },
  };
}

function saveProgress(progress: Record<ActivityType, { correct: number; total: number }>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateProgress(activity: ActivityType, isCorrect: boolean) {
  const progress = getStoredProgress();
  progress[activity].total += 1;
  if (isCorrect) {
    progress[activity].correct += 1;
  }
  saveProgress(progress);
}

export function getProgress(activity: ActivityType): ActivityProgress {
  const progress = getStoredProgress();
  const data = progress[activity];
  const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
  
  return {
    correct: data.correct,
    total: data.total,
    accuracy,
  };
}

export function getTotalStats() {
  const progress = getStoredProgress();
  let totalCorrect = 0;
  let totalAttempts = 0;
  
  Object.values(progress).forEach((activity) => {
    totalCorrect += activity.correct;
    totalAttempts += activity.total;
  });
  
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  
  // Best streak is stored separately
  const bestStreak = parseInt(localStorage.getItem('best-streak') || '0');
  
  // Track activities played
  const activitiesPlayed = (Object.keys(progress) as ActivityType[]).filter(
    key => progress[key].total > 0
  );
  
  return {
    totalCorrect,
    totalAttempts,
    accuracy,
    bestStreak,
    activitiesPlayed,
  };
}

export function resetProgress() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('best-streak');
}