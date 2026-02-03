import { useState } from 'react';
import { motion } from 'motion/react';
import { LetterRecognition } from './activities/LetterRecognition';
import { SightWords } from './activities/SightWords';
import { Phonics } from './activities/Phonics';
import { Spelling } from './activities/Spelling';
import { GuessPicture } from './activities/GuessPictureSimple';
import { ProgressTracker } from './ProgressTracker';
import { LevelDisplay } from './LevelDisplay';
import { AchievementsPanel } from './AchievementsPanel';
import { Menu, X, Trophy, Star, Target, Zap, Award, ArrowLeft, Home } from 'lucide-react';
import { getAchievements, getUnlockedCount, getTotalAchievements } from '../utils/achievements';

type Activity = 'letters' | 'sight-words' | 'phonics' | 'spelling' | 'guess-picture';

interface PracticeHubProps {
  onBackToHome?: () => void;
  initialActivity?: Activity;
}

export function PracticeHub({ onBackToHome, initialActivity = 'letters' }: PracticeHubProps) {
  const [currentActivity, setCurrentActivity] = useState<Activity>(initialActivity);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Changed to false for better mobile experience
  const [showAchievements, setShowAchievements] = useState(false);

  const activities = [
    { id: 'letters' as Activity, name: 'Letter Recognition', icon: '🔤', color: 'from-blue-500 to-blue-600' },
    { id: 'sight-words' as Activity, name: 'Sight Words', icon: '👁️', color: 'from-green-500 to-green-600' },
    { id: 'phonics' as Activity, name: 'Phonics', icon: '🔊', color: 'from-purple-500 to-purple-600' },
    { id: 'spelling' as Activity, name: 'Spelling', icon: '✏️', color: 'from-orange-500 to-orange-600' },
    { id: 'guess-picture' as Activity, name: 'Guess the Picture', icon: '🖼️', color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <div className="flex h-screen">
      {/* Achievements Panel */}
      <AchievementsPanel isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar - Mobile Sliding + Desktop Always Visible */}
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-64 h-full bg-white/90 backdrop-blur-lg shadow-lg transition-transform duration-300 flex flex-col border-r border-gray-200/50`}
      >
        <div className="p-4 border-b border-gray-200/50">
          <h2 className="font-bold text-gray-800">Practice Activities</h2>
          <p className="text-xs text-gray-500 mt-1">Select an activity to begin</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {activities.map((activity) => (
            <motion.button
              key={activity.id}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentActivity(activity.id);
                setSidebarOpen(false); // Close sidebar on mobile after selecting
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                currentActivity === activity.id
                  ? `bg-gradient-to-r ${activity.color} text-white shadow-md`
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl">{activity.icon}</span>
              <span className="font-medium text-sm">{activity.name}</span>
            </motion.button>
          ))}
        </nav>

        <div className="p-4 space-y-3 border-t border-gray-200/50">
          <LevelDisplay compact />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAchievements(!showAchievements)}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg p-3 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-bold">Achievements</span>
              </div>
              <span className="text-xs opacity-90">
                {getUnlockedCount()}/{getTotalAchievements()}
              </span>
            </div>
          </motion.button>
          
          <ProgressTracker compact />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-blue-50/30">
        {/* Back to Home Button - Desktop */}
        {onBackToHome && (
          <div className="hidden lg:block bg-white/90 backdrop-blur-lg p-4 border-b border-gray-200/50">
            <motion.button
              whileHover={{ scale: 1.02, x: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBackToHome}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <Home className="w-4 h-4" />
              <span className="font-medium text-sm">Back to Home</span>
            </motion.button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden bg-white/90 backdrop-blur-lg p-4 border-b border-gray-200/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
            {onBackToHome && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onBackToHome}
                className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600"
              >
                <Home className="w-5 h-5" />
              </motion.button>
            )}
          </div>
          <h3 className="font-bold text-gray-800">
            {activities.find((a) => a.id === currentActivity)?.name}
          </h3>
        </div>

        {/* Activity Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          {currentActivity === 'letters' && <LetterRecognition />}
          {currentActivity === 'sight-words' && <SightWords />}
          {currentActivity === 'phonics' && <Phonics />}
          {currentActivity === 'spelling' && <Spelling />}
          {currentActivity === 'guess-picture' && <GuessPicture />}
        </div>
      </div>
    </div>
  );
}