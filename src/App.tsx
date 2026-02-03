import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PracticeHub } from "./components/PracticeHub";
import { Documentation } from "./components/Documentation";
import { ProfileSetup } from "./components/ProfileSetup";
import { ProfileButton } from "./components/ProfileButton";
import { HeroSection } from "./components/HeroSection";
import { PracticeBlogSection } from "./components/PracticeBlogSection";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";
import { KidPlayingFooter } from "./components/KidPlayingFooter";
import { getUserProfile } from "./utils/profile";
import { BookOpen, FileText, Home, Sparkles } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<
    "home" | "practice" | "docs"
  >("home");
  const [selectedActivity, setSelectedActivity] = useState<string | undefined>(undefined);
  const [showProfileSetup, setShowProfileSetup] = useState(!getUserProfile());

  const handleNavigateToPractice = (activityId?: string) => {
    // Map activity names to IDs
    const activityMap: Record<string, string> = {
      'Letter Recognition': 'letters',
      'Sight Words': 'sight-words',
      'Phonics': 'phonics',
      'Spelling': 'spelling',
      'Guess the Picture': 'guess-picture'
    };
    
    setSelectedActivity(activityId ? activityMap[activityId] : undefined);
    setCurrentView("practice");
  };

  if (showProfileSetup) {
    return <ProfileSetup onComplete={() => setShowProfileSetup(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Header with Glassmorphism */}
      <header className="backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Literacy Starter Kit
                </h1>
                <p className="text-sm text-gray-600">
                  Interactive Learning Platform
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <nav className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView("home")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentView === "home"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView("practice")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentView === "practice"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Practice</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView("docs")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentView === "docs"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white/80"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Documentation</span>
                </motion.button>
              </nav>
              <ProfileButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {currentView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage setCurrentView={setCurrentView} onNavigateToPractice={handleNavigateToPractice} />
            </motion.div>
          )}
          {currentView === "practice" && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PracticeHub 
                onBackToHome={() => setCurrentView("home")} 
                initialActivity={selectedActivity as any}
              />
            </motion.div>
          )}
          {currentView === "docs" && (
            <motion.div
              key="docs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Documentation />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer - Show different footers based on current view */}
      {currentView === "home" && (
        <Footer onNavigateToPractice={handleNavigateToPractice} />
      )}
      {/* Removed footer from practice view - full screen now */}
    </div>
  );
}

function HomePage({
  setCurrentView,
  onNavigateToPractice
}: {
  setCurrentView: (view: "home" | "practice" | "docs") => void;
  onNavigateToPractice: (activityId?: string) => void;
}) {
  const activities = [
    {
      title: "Letter Recognition",
      description: "Match uppercase and lowercase letters",
      icon: "🔤",
      image: "https://images.unsplash.com/photo-1759678444821-565ff103465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXIlMjBhbHBoYWJldCUyMGxlYXJuaW5nJTIwa2lkc3xlbnwxfHx8fDE3Njk0ODI0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-400 to-cyan-500",
      delay: 0.2
    },
    {
      title: "Sight Words",
      description: "Learn and practice common sight words",
      icon: "👀",
      image: "https://images.unsplash.com/photo-1659059094440-e38380ed9c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdodCUyMHdvcmRzJTIwZmxhc2hjYXJkcyUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTQ4MjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-green-400 to-emerald-500",
      delay: 0.3
    },
    {
      title: "Phonics",
      description: "Discover letter sounds and blends",
      icon: "🔊",
      image: "https://images.unsplash.com/photo-1688078958172-0e344001e8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uaWNzJTIwc291bmRzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY5NDgyNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-400 to-pink-500",
      delay: 0.4
    },
    {
      title: "Spelling",
      description: "Build words letter by letter",
      icon: "✏️",
      image: "https://images.unsplash.com/photo-1769072385024-c962e061c523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVsbGluZyUyMGJlZSUyMGtpZHMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5NDgyNDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-orange-400 to-red-500",
      delay: 0.5
    },
    {
      title: "Guess the Picture",
      description: "Guess hidden pictures with hints",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1622617759627-d727ddba9066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWN0dXJlJTIwcHV6emxlJTIwZ2FtZSUyMGtpZHM8ZW58MXx8fHwxNzY5NTE0NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-pink-400 to-rose-500",
      delay: 0.6,
      new: true
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection onStartLearning={() => setCurrentView("practice")} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Literacy Starter Kit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An interactive, sustainable learning platform designed
            to help young learners develop essential literacy
            skills through engaging activities.
          </p>
        </motion.div>

        {/* 4 Activities Section - New Illustrated Cards */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
               Choose Your Adventure!
            </h3>
            <p className="text-lg text-gray-600">
              Click any activity to start learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {activities.slice(0, 4).map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: activity.delay }}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigateToPractice(activity.title)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-400">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                    
                    {/* Icon Badge */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: index * 0.2,
                      }}
                      className="absolute top-3 right-3 text-5xl"
                    >
                      {activity.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {activity.description}
                    </p>
                    <motion.div
                      className={`bg-gradient-to-r ${activity.color} text-white text-center py-2 rounded-lg font-bold text-sm shadow-md`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Start Learning →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Activity - Featured */}
          <div className="mb-8">
            {activities.slice(4).map((activity, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: activity.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigateToPractice(activity.title)}
                className="group cursor-pointer max-w-3xl mx-auto relative"
              >
                {/* NEW Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    NEW!
                  </motion.div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-pink-400">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                      
                      {/* Icon Badge */}
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl drop-shadow-lg"
                      >
                        {activity.icon}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8">
                      <h4 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 mb-6 text-lg">
                        {activity.description}
                      </p>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li>✨ Interactive image guessing game</li>
                        <li>🎯 Hint system with blur reveal</li>
                        <li>🌐 Bilingual: English & Khmer</li>
                        <li>🏆 Score tracking & achievements</li>
                      </ul>
                      <motion.div
                        className={`bg-gradient-to-r ${activity.color} text-white text-center py-3 rounded-xl font-bold text-lg shadow-md inline-block px-8`}
                        whileHover={{ scale: 1.05 }}
                      >
                        Try it Now →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCurrentView("practice")}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-blue-500 relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity"
            />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Start Practicing
              </h3>
              <p className="text-gray-600 mb-4">
                Access interactive literacy activities including
                Letter Recognition, Sight Words, Phonics, and
                Spelling exercises.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Audio & Text-to-Speech Support</li>
                <li>✓ Real-time Feedback & Scoring</li>
                <li>✓ Progress Tracking & Streaks</li>
                <li>✓ Fully Responsive Design</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCurrentView("docs")}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-purple-500 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 opacity-0 hover:opacity-100 transition-opacity"
            />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Project Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Complete project report, summaries, presentation
                outlines, and all materials needed for school
                submission.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Full Detailed Report</li>
                <li>✓ Quick Summary Version</li>
                <li>✓ Teacher-Friendly Overview</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Literacy Starter Kit?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌱",
                title: "Sustainable Learning",
                description: "Reduces paper waste by providing reusable digital learning surfaces for practice activities.",
                delay: 0.5
              },
              {
                emoji: "🎯",
                title: "Engaging & Interactive",
                description: "Game-like activities with immediate feedback keep learners motivated and engaged.",
                delay: 0.6
              },
              {
                emoji: "📱",
                title: "Accessible Anywhere",
                description: "Works on tablets, phones, laptops, and smart boards for flexible learning environments.",
                delay: 0.7
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item.delay }}
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: index * 0.2,
                  }}
                >
                  {item.emoji}
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Practice Blog Section */}
      <PracticeBlogSection onNavigateToPractice={(activityId) => onNavigateToPractice(activityId)} />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}