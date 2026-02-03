import { useEffect, useState } from 'react';
import { Trophy, TrendingUp, Calendar } from 'lucide-react';
import { getProgress, getTotalStats } from '../utils/progress';

interface ProgressTrackerProps {
  compact?: boolean;
}

export function ProgressTracker({ compact = false }: ProgressTrackerProps) {
  const [stats, setStats] = useState(getTotalStats());

  useEffect(() => {
    // Update stats every second to reflect changes
    const interval = setInterval(() => {
      setStats(getTotalStats());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
        <h3 className="font-bold text-sm text-gray-800 mb-3 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-600" />
          Your Progress
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Score:</span>
            <span className="font-bold text-blue-600">{stats.totalCorrect}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Accuracy:</span>
            <span className="font-bold text-green-600">{stats.accuracy}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Best Streak:</span>
            <span className="font-bold text-orange-600">{stats.bestStreak}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-600" />
        Progress Tracker
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Total Correct</div>
          <div className="text-3xl font-bold text-blue-600">{stats.totalCorrect}</div>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Accuracy</div>
          <div className="text-3xl font-bold text-green-600">{stats.accuracy}%</div>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Best Streak</div>
          <div className="text-3xl font-bold text-orange-600">{stats.bestStreak}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800">Activity Breakdown</h3>
        {(['letters', 'sight-words', 'phonics', 'spelling'] as const).map((activity) => {
          const progress = getProgress(activity);
          const name = activity === 'letters' ? 'Letter Recognition' :
                       activity === 'sight-words' ? 'Sight Words' :
                       activity === 'phonics' ? 'Phonics' : 'Spelling';
          const color = activity === 'letters' ? 'blue' :
                        activity === 'sight-words' ? 'green' :
                        activity === 'phonics' ? 'purple' : 'orange';
          
          return (
            <div key={activity} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">{name}</span>
                <span className={`text-${color}-600 font-bold`}>
                  {progress.correct}/{progress.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${color}-600 h-2 rounded-full transition-all`}
                  style={{ width: `${progress.accuracy}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {progress.accuracy}% accuracy
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
