import { motion } from "motion/react";
import { Sparkles, Heart, Star, Zap } from "lucide-react";

export function KidFriendlyExplanation() {
  const features = [
    {
      icon: "🔤",
      title: "Learn Your ABCs",
      description: "Match big and small letters!",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "👀",
      title: "See & Read Words",
      description: "Practice important words every day",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "🔊",
      title: "Hear Letter Sounds",
      description: "Listen and learn how letters sound",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: "✏️",
      title: "Spell New Words",
      description: "Build words one letter at a time",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: "⭐",
      title: "Earn Rewards",
      description: "Get stars, badges, and level up!",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "🌱",
      title: "Save the Planet",
      description: "No paper needed - it's all on screen!",
      color: "from-teal-400 to-green-500"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="text-6xl mb-4"
        >
          📚
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          What is Literacy Starter Kit?
        </h1>
        <p className="text-xl text-gray-600">
          A fun app that helps you learn to read and write!
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-blue-300 transition-all"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                delay: index * 0.3,
              }}
              className="text-5xl mb-3"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
            <div className={`mt-3 h-1 bg-gradient-to-r ${feature.color} rounded-full`} />
          </motion.div>
        ))}
      </div>

      {/* Fun Facts Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            Why Kids Love It!
            <Heart className="w-8 h-8 fill-white" />
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <Star className="w-6 h-6 fill-yellow-300" />, text: "Fun games and challenges" },
              { icon: <Zap className="w-6 h-6 fill-yellow-300" />, text: "See your score right away" },
              { icon: <Heart className="w-6 h-6 fill-pink-300" />, text: "Works on tablet, phone, or computer" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                {item.icon}
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Simple Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 bg-blue-50 rounded-2xl p-8 text-center"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>In simple words:</strong> This app makes learning fun! You can practice your letters,
          read new words, listen to sounds, and spell words - all while playing fun games.
          The more you practice, the more stars and badges you earn! 🌟
        </p>
      </motion.div>
    </div>
  );
}
