import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, CheckCircle, XCircle, Star, Trophy, Zap, Clock, Target } from 'lucide-react';
import { updateProgress } from '../../utils/progress';
import { addXP, getCurrentLevel } from '../../utils/levels';
import { checkAchievements } from '../../utils/achievements';
import { AchievementNotification } from '../AchievementNotification';
import type { Achievement } from '../../utils/achievements';
import { getTotalStats } from '../../utils/progress';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type Difficulty = 'easy' | 'medium' | 'hard';

interface DifficultySettings {
  options: number;
  timeLimit: number | null;
  xpMultiplier: number;
}

const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultySettings> = {
  easy: { options: 4, timeLimit: null, xpMultiplier: 1 },
  medium: { options: 6, timeLimit: 15, xpMultiplier: 1.5 },
  hard: { options: 8, timeLimit: 10, xpMultiplier: 2 },
};

export function LetterRecognition() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [currentLetter, setCurrentLetter] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    generateQuestion();
  }, [difficulty]);

  // Timer effect
  useEffect(() => {
    if (timeLeft === null || timeLeft === 0 || feedback !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          handleTimeout();
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, feedback]);

  const generateQuestion = () => {
    setFeedback(null);
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    setCurrentLetter(letter);

    const settings = DIFFICULTY_SETTINGS[difficulty];
    const wrongOptions = LETTERS.filter((l) => l !== letter)
      .sort(() => Math.random() - 0.5)
      .slice(0, settings.options - 1);

    const allOptions = [letter, ...wrongOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);

    if (settings.timeLimit) {
      setTimeLeft(settings.timeLimit);
    }
  };

  const handleTimeout = () => {
    setStreak(0);
    setFeedback('incorrect');
    updateProgress('letters', false);
    speakLetter('Time\'s up! Try the next one.');
    localStorage.setItem('best-streak', Math.max(streak, parseInt(localStorage.getItem('best-streak') || '0')).toString());
    setTimeout(() => {
      generateQuestion();
    }, 2000);
  };

  const speakLetter = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleAnswer = (selectedLetter: string) => {
    setAttempts(attempts + 1);
    const isCorrect = selectedLetter === currentLetter;

    if (isCorrect) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setFeedback('correct');
      updateProgress('letters', true);
      createParticles();

      // Add XP based on difficulty
      const settings = DIFFICULTY_SETTINGS[difficulty];
      const xpGained = Math.round(10 * settings.xpMultiplier);
      const prevLevel = getCurrentLevel();
      const newLevel = addXP(xpGained);
      
      // Check for level up
      if (newLevel.level > prevLevel.level) {
        setShowLevelUp(true);
        setTimeout(() => setShowLevelUp(false), 3000);
      }

      // Update best streak
      const bestStreak = Math.max(newStreak, parseInt(localStorage.getItem('best-streak') || '0'));
      localStorage.setItem('best-streak', bestStreak.toString());

      // Check achievements
      const stats = getTotalStats();
      const unlockedAchievements = checkAchievements(stats);
      if (unlockedAchievements.length > 0) {
        setNewAchievement(unlockedAchievements[0]);
      }

      speakLetter('Correct!');
      setTimeout(() => {
        generateQuestion();
      }, 1500);
    } else {
      setStreak(0);
      setFeedback('incorrect');
      updateProgress('letters', false);
      localStorage.setItem('best-streak', Math.max(streak, parseInt(localStorage.getItem('best-streak') || '0')).toString());
      speakLetter('Try again!');
      setTimeout(() => {
        setFeedback(null);
      }, 1500);
    }
  };

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
  const settings = DIFFICULTY_SETTINGS[difficulty];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Achievement Notification */}
      <AchievementNotification
        achievement={newAchievement}
        onClose={() => setNewAchievement(null)}
      />

      {/* Level Up Notification */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl">
              <div className="bg-white rounded-xl p-8 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <Star className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Level Up!</h2>
                <p className="text-gray-600">You've reached Level {getCurrentLevel().level}!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Difficulty Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
        role="region"
        aria-label="Difficulty selector"
      >
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Difficulty Level</h3>
              <p className="text-xs text-gray-500">Choose your challenge level</p>
            </div>
            <div className="flex gap-2" role="group" aria-label="Difficulty levels">
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
                <motion.button
                  key={level}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDifficulty(level)}
                  onKeyDown={(e) => e.key === 'Enter' && setDifficulty(level)}
                  aria-label={`Set difficulty to ${level}`}
                  aria-pressed={difficulty === level}
                  tabIndex={0}
                  className={`px-6 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    difficulty === level
                      ? level === 'easy'
                        ? 'bg-green-500 text-white shadow-lg focus:ring-green-400'
                        : level === 'medium'
                        ? 'bg-yellow-500 text-white shadow-lg focus:ring-yellow-400'
                        : 'bg-red-500 text-white shadow-lg focus:ring-red-400'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                  <span className="ml-1 text-xs opacity-75">
                    {level === 'easy' && '(4 options)'}
                    {level === 'medium' && '(6 options, 15s)'}
                    {level === 'hard' && '(8 options, 10s)'}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8" role="region" aria-label="Game statistics">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-md"
        >
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <Target className="w-4 h-4" />
            Score
          </div>
          <div className="text-2xl font-bold text-blue-600">{score}</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-md"
        >
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            Accuracy
          </div>
          <div className="text-2xl font-bold text-green-600">{accuracy}%</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-4 shadow-md"
        >
          <div className="text-sm text-gray-600">Attempts</div>
          <div className="text-2xl font-bold text-purple-600">{attempts}</div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 shadow-md text-white"
        >
          <div className="text-sm flex items-center gap-1">
            <Star className="w-4 h-4" />
            Streak
          </div>
          <motion.div
            key={streak}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold"
          >
            {streak}🔥
          </motion.div>
        </motion.div>
        {settings.timeLimit && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`rounded-lg p-4 shadow-md ${
              timeLeft !== null && timeLeft <= 5
                ? 'bg-red-500 text-white'
                : 'bg-white'
            }`}
          >
            <div className={`text-sm flex items-center gap-1 ${timeLeft !== null && timeLeft <= 5 ? 'text-white' : 'text-gray-600'}`}>
              <Clock className="w-4 h-4" />
              Time
            </div>
            <motion.div
              key={timeLeft}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className={`text-2xl font-bold ${timeLeft !== null && timeLeft <= 5 ? 'text-white' : 'text-indigo-600'}`}
            >
              {timeLeft ?? settings.timeLimit}s
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Question Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden"
      >
        {/* Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 0, x: '50%', y: '50%' }}
            animate={{
              opacity: 0,
              scale: 2,
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            transition={{ duration: 1 }}
            className="absolute text-2xl pointer-events-none"
          >
            ⭐
          </motion.div>
        ))}

        <h3 className="text-xl text-gray-700 text-center mb-6">
          Click on the letter you hear:
        </h3>

        {/* Letter Display & Audio */}
        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => speakLetter(currentLetter)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                speakLetter(currentLetter);
              }
            }}
            aria-label={`Play sound for letter ${currentLetter}`}
            aria-pressed="false"
            role="button"
            tabIndex={0}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-8 hover:shadow-2xl transition-shadow relative group focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl"
            />
            <Volume2 className="w-16 h-16 group-hover:scale-110 transition-transform relative z-10" />
          </motion.button>
        </div>

        {/* Answer Options */}
        <div className={`grid gap-4 ${options.length <= 4 ? 'grid-cols-2 md:grid-cols-4' : options.length <= 6 ? 'grid-cols-3 md:grid-cols-6' : 'grid-cols-4 md:grid-cols-8'}`} role="group" aria-label="Letter options">
          {options.map((letter, index) => (
            <motion.button
              key={letter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(letter)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAnswer(letter);
                }
                // Arrow key navigation
                if (e.key === 'ArrowRight' && index < options.length - 1) {
                  const nextButton = e.currentTarget.parentElement?.children[index + 1] as HTMLButtonElement;
                  nextButton?.focus();
                }
                if (e.key === 'ArrowLeft' && index > 0) {
                  const prevButton = e.currentTarget.parentElement?.children[index - 1] as HTMLButtonElement;
                  prevButton?.focus();
                }
              }}
              disabled={feedback !== null}
              aria-label={`Select letter ${letter}`}
              aria-pressed={feedback === 'correct' && letter === currentLetter ? 'true' : 'false'}
              tabIndex={0}
              className={`aspect-square rounded-xl text-3xl md:text-5xl font-bold transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                feedback === 'correct' && letter === currentLetter
                  ? 'bg-green-500 text-white scale-105 shadow-lg'
                  : feedback === 'incorrect' && letter === currentLetter
                  ? 'bg-green-100 text-green-700'
                  : feedback !== null
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 hover:shadow-lg hover:from-blue-200 hover:to-purple-200'
              }`}
            >
              {letter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`flex items-center justify-center gap-3 p-4 rounded-lg text-lg font-medium ${
              feedback === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {feedback === 'correct' ? (
              <>
                <CheckCircle className="w-6 h-6" />
                Excellent! That's correct! +{Math.round(10 * settings.xpMultiplier)} XP
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6" />
                Try again! Listen carefully.
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Activity Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-blue-50 rounded-lg p-6"
      >
        <h4 className="font-bold text-gray-800 mb-2">About Letter Recognition</h4>
        <p className="text-sm text-gray-700 mb-3">
          This activity helps learners identify letters by their names and sounds. Click the speaker button to hear the letter, then select the correct letter from the options provided.
        </p>
        <div className="text-sm text-gray-700">
          <strong>Skills Developed:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Letter identification and recognition</li>
            <li>Auditory discrimination</li>
            <li>Visual recognition of uppercase letters</li>
            <li>Memory and recall abilities</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}