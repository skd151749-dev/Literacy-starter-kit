import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Zap } from 'lucide-react';
import { getCurrentLevel, type Level } from '../utils/levels';

interface LevelDisplayProps {
  compact?: boolean;
}

export function LevelDisplay({ compact = false }: LevelDisplayProps) {
  const [level, setLevel] = useState<Level>(getCurrentLevel());

  useEffect(() => {
    const interval = setInterval(() => {
      setLevel(getCurrentLevel());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const progress = (level.xp / level.xpToNext) * 100;

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold">Level {level.level}</span>
          </div>
          <span className="text-xs opacity-90">{level.title}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-white h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-xs opacity-75 mt-1 text-center">
          {level.xp} / {level.xpToNext} XP
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
      />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm opacity-75 mb-1">Current Level</div>
            <div className="text-4xl font-bold flex items-center gap-2">
              <Star className="w-8 h-8" />
              {level.level}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold">{level.title}</div>
            <div className="text-sm opacity-75">Rank</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Experience
            </span>
            <span className="font-bold">
              {level.xp} / {level.xpToNext} XP
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-white h-full rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs opacity-75 text-center">
            {Math.round(progress)}% to Level {level.level + 1}
          </div>
        </div>
      </div>
    </div>
  );
}
