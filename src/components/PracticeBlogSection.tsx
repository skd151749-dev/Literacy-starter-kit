import { motion } from "motion/react";
import { BookOpen, Pencil, Mic, Trophy, Clock, Users, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PracticeBlogSectionProps {
  onNavigateToPractice?: (activityId?: string) => void;
}

export function PracticeBlogSection({ onNavigateToPractice }: PracticeBlogSectionProps) {
  const activities = [
    {
      title: "Letter Recognition Challenge",
      description: "Match uppercase and lowercase letters in this fun, timed activity!",
      image: "https://images.unsplash.com/photo-1659059094440-e38380ed9c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBob25pY3MlMjBhbHBoYWJldCUyMGNhcmRzfGVufDF8fHx8MTc2OTM5MDUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      participants: 127,
      duration: "5 min",
      tag: "Popular",
      activityName: "Letter Recognition"
    },
    {
      title: "Creative Writing Practice",
      description: "Draw and write your own stories with guided exercises.",
      image: "https://images.unsplash.com/photo-1620679047904-e9f69e47c373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdyaXRpbmclMjBsZXR0ZXJzJTIwcHJhY3RpY2V8ZW58MXx8fHwxNzY5MzkwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Pencil,
      color: "from-purple-500 to-pink-500",
      participants: 94,
      duration: "10 min",
      tag: "New",
      activityName: "Sight Words"
    },
    {
      title: "Phonics Sound Match",
      description: "Listen and match sounds with letters. Audio-powered learning!",
      image: "https://images.unsplash.com/photo-1727768351795-2390d19b2b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcmVhZGluZyUyMGRyYXdpbmclMjBsZWFybmluZ3xlbnwxfHx8fDE3NjkzOTA1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Mic,
      color: "from-green-500 to-emerald-500",
      participants: 156,
      duration: "7 min",
      tag: "Featured",
      activityName: "Phonics"
    }
  ];

  const guestChallenges = [
    {
      title: "Weekly Spelling Bee",
      description: "Compete with learners worldwide!",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      badge: "🏆",
      difficulty: "Hard",
      difficultyIcon: "⭐⭐⭐"
    },
    {
      title: "Daily Sight Words",
      description: "Learn 5 new words every day",
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500",
      badge: "📚",
      difficulty: "Easy",
      difficultyIcon: "⭐"
    },
    {
      title: "Story Creation Contest",
      description: "Share your creative stories",
      icon: Sparkles,
      color: "from-pink-400 to-purple-500",
      badge: "✨",
      difficulty: "Medium",
      difficultyIcon: "⭐⭐"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-5 py-2 mb-4 border border-blue-200">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Practice Blog</span>
          </div>
          <h2 
            onClick={onNavigateToPractice}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-blue-600 transition-colors"
          >
            Learning Activities & Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore engaging practice exercises and join fun guest challenges!
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => onNavigateToPractice?.(activity.activityName)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Tag Badge */}
                <div className="absolute top-3 right-3">
                  <span className="backdrop-blur-md bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {activity.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-3 left-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {activity.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{activity.participants}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guest Challenges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border-2 border-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="text-5xl mb-4"
              >
                🎯
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Guest Challenges
              </h3>
              <p className="text-white/90 text-lg">
                Join special activities and earn amazing rewards!
              </p>
            </div>

            {/* Challenge Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {guestChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <div className="text-4xl mb-3">{challenge.badge}</div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {challenge.title}
                  </h4>
                  <p className="text-white/80 text-sm mb-3">
                    {challenge.description}
                  </p>
                  {/* Difficulty Indicator */}
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">{challenge.difficultyIcon} {challenge.difficulty}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNavigateToPractice}
                className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Explore All Challenges →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}