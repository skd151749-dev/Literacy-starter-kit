import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, LogOut, Settings, Star, Sparkles } from 'lucide-react';
import { getUserProfile, AVATAR_OPTIONS, updateProfile } from '../utils/profile';

export function ProfileButton() {
  const [profile, setProfile] = useState(getUserProfile());
  const [showMenu, setShowMenu] = useState(false);
  const [showEditAvatar, setShowEditAvatar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfile(getUserProfile());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!profile) return null;

  const handleAvatarChange = (newAvatar: string) => {
    updateProfile({ avatar: newAvatar });
    setProfile(getUserProfile());
    setShowEditAvatar(false);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out? Your progress will be saved.')) {
      localStorage.removeItem('literacy-user-profile');
      window.location.reload();
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all border-2 border-blue-300/50"
      >
        {/* Animated Avatar */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="text-4xl"
        >
          {profile.avatar}
        </motion.div>
        <div className="hidden md:flex flex-col items-start">
          <span className="font-bold text-gray-800 text-sm">Welcome back!</span>
          <span className="font-bold text-blue-600">{profile.username}</span>
        </div>
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 z-10"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden z-20 min-w-[280px]"
            >
              <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-6xl"
                  >
                    {profile.avatar}
                  </motion.div>
                  <div className="flex-grow">
                    <div className="font-bold text-white text-xl">{profile.username}</div>
                    <div className="flex items-center gap-2 text-yellow-300 font-semibold">
                      <Star className="w-4 h-4 fill-yellow-300" />
                      <span>Level {profile.level} Explorer</span>
                    </div>
                    <div className="mt-2 bg-white/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(profile.xp % 100)}%` }}
                        className="h-full bg-yellow-300"
                      />
                    </div>
                    <div className="text-white/90 text-xs mt-1">
                      {profile.xp % 100} / 100 XP
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button
                  onClick={() => {
                    setShowEditAvatar(true);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700"
                >
                  <Settings className="w-4 h-4" />
                  Change Avatar
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50 transition-colors text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEditAvatar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEditAvatar(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 z-50 max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Choose a new avatar
              </h3>
              <div className="grid grid-cols-5 gap-3 mb-4">
                {AVATAR_OPTIONS.map((avatar) => (
                  <motion.button
                    key={avatar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAvatarChange(avatar)}
                    className={`aspect-square text-3xl rounded-xl transition-all ${
                      profile.avatar === avatar
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {avatar}
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => setShowEditAvatar(false)}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}