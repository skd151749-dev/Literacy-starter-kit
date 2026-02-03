import { motion } from "motion/react";
import { Check, Star, Zap, Heart, Shield, Sparkles, BookOpen, Users, TrendingUp } from "lucide-react";

export function BenefitsAtAGlance() {
  const benefits = [
    {
      category: "For Young Learners",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      items: [
        { icon: "🎮", text: "Engaging game-like activities keep children motivated" },
        { icon: "⭐", text: "Instant feedback helps build confidence" },
        { icon: "🏆", text: "Rewards system (badges, levels, XP) encourages practice" },
        { icon: "🔊", text: "Audio support helps with pronunciation and comprehension" }
      ]
    },
    {
      category: "For Parents & Teachers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      items: [
        { icon: "📊", text: "Track progress with detailed analytics and streaks" },
        { icon: "🎯", text: "4 core literacy activities aligned with early learning goals" },
        { icon: "⏰", text: "Short 5-10 minute sessions perfect for attention spans" },
        { icon: "🔒", text: "Safe, ad-free environment designed for children" }
      ]
    },
    {
      category: "Educational Impact",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      items: [
        { icon: "📚", text: "Covers Letter Recognition, Sight Words, Phonics, and Spelling" },
        { icon: "🎨", text: "Multi-sensory learning (visual, auditory, interactive)" },
        { icon: "🔄", text: "Adaptive difficulty levels grow with the learner" },
        { icon: "✅", text: "Reinforces learning through repetition and variety" }
      ]
    },
    {
      category: "Practical Advantages",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      items: [
        { icon: "🌱", text: "Reduces paper waste - eco-friendly digital learning" },
        { icon: "📱", text: "Works on tablets, phones, laptops, and smart boards" },
        { icon: "🌐", text: "Access anywhere, anytime - no installation needed" },
        { icon: "💰", text: "Free educational tool for schools and families" }
      ]
    }
  ];

  const keyHighlights = [
    {
      icon: Check,
      title: "Evidence-Based",
      description: "Activities based on proven literacy education methods",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Immediate Results",
      description: "Real-time feedback accelerates learning",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      title: "Child-Centered",
      description: "Designed specifically for ages 4-6 learners",
      color: "text-pink-600"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "No ads, no data collection, child-safe platform",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-5 py-3 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600 font-semibold">Quick Reference Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Benefits At-a-Glance
        </h1>
        <p className="text-xl text-gray-600">
          Everything parents and teachers need to know about Literacy Starter Kit
        </p>
      </motion.div>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {keyHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-5 text-center border-2 border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3 ${highlight.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm">
                {highlight.title}
              </h3>
              <p className="text-xs text-gray-600">
                {highlight.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Benefits Categories */}
      <div className="space-y-8">
        {benefits.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
              </div>

              {/* Benefits List */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <p className="text-gray-700 text-sm pt-1">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl"
      >
        <div className="text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Perfect For</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-2">🏠</div>
              <p className="font-semibold">Home Learning</p>
              <p className="text-sm text-white/80 mt-1">Supplement school education</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🏫</div>
              <p className="font-semibold">Classroom Use</p>
              <p className="text-sm text-white/80 mt-1">Interactive literacy centers</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <p className="font-semibold">Extra Practice</p>
              <p className="text-sm text-white/80 mt-1">Targeted skill development</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 text-center text-gray-600"
      >
        <p className="text-sm">
          <strong>Questions?</strong> Contact the development team: devid.sokun13@gmail.com or pheaknaa12062005@gmail.com
        </p>
      </motion.div>
    </div>
  );
}
