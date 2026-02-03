import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, Lock } from 'lucide-react';
import { getAchievements } from '../utils/achievements';

interface AchievementsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AchievementsPanel({ isOpen, onClose }: AchievementsPanelProps) {
  const achievements = getAchievements();
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-sm opacity-90">
                Unlocked: {unlockedCount} / {achievements.length}
              </div>
              <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white h-full rounded-full"
                />
              </div>
            </div>

            {/* Achievements List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-lg p-4 border-2 ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={achievement.unlocked ? {
                        rotate: [0, -10, 10, -10, 10, 0],
                      } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className={`text-4xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}
                    >
                      {achievement.unlocked ? achievement.icon : <Lock className="w-10 h-10 text-gray-400" />}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`font-bold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                        {achievement.name}
                      </h3>
                      <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      
                      {/* Progress Bar */}
                      {!achievement.unlocked && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}/{achievement.requirement}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min((achievement.progress / achievement.requirement) * 100, 100)}%` }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full rounded-full"
                            />
                          </div>
                        </div>
                      )}

                      {achievement.unlocked && (
                        <div className="mt-2 flex items-center gap-1 text-yellow-600 text-sm font-medium">
                          <Trophy className="w-4 h-4" />
                          Unlocked!
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
