import { motion } from "motion/react";
import { Sparkles, BookOpen, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onStartLearning: () => void;
}

export function HeroSection({ onStartLearning }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden rounded-2xl mb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688244653798-a779ad20cc7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYWxwaGFiZXQlMjBib29rcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2OTM5MDUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Children learning with colorful books and alphabet cards"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/75 to-pink-900/70" />
        
        {/* Animated Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 flex items-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30"
            >
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-white font-medium text-sm">
                Premium Educational Platform
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Joyful Learning
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Empower young learners with interactive literacy activities.
              Fun, engaging, and designed for ages 4–6.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: BookOpen, text: "4 Activities" },
                { icon: Zap, text: "Instant Feedback" },
                { icon: Star, text: "Gamification" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/20"
                >
                  <feature.icon className="w-4 h-4 text-yellow-300" />
                  <span className="text-white font-medium text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartLearning}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white font-bold text-lg rounded-full shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Start Learning Adventure
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <motion.path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgb(243, 244, 246)"
            initial={{ d: "M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z",
                "M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z",
                "M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
