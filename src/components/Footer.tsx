import { motion } from "motion/react";
import { BookOpen, Heart, Mail, Github } from "lucide-react";

interface FooterProps {
  onNavigateToPractice?: (activityId?: string) => void;
}

export function Footer({ onNavigateToPractice }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const activities = [
    { name: "Letter Recognition", icon: "🔤" },
    { name: "Sight Words", icon: "👀" },
    { name: "Phonics", icon: "🔊" },
    { name: "Spelling", icon: "✏️" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Literacy Starter Kit</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              An interactive educational platform designed to help young learners develop
              essential literacy skills through engaging, sustainable activities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {activities.map((activity, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => onNavigateToPractice?.(activity.name)}
                  className="text-white/70 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>{activity.icon}</span>
                  <span>{activity.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                📚 Norton University<br />
                Department of Computer Studies<br />
                College of Science
              </p>
              <p>
                📍 Phnom Penh, Cambodia
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/60 text-center md:text-left">
              © {currentYear} Literacy Starter Kit. Created by Devid Sokun & Pheakna Choun.
            </p>

            {/* Made with love */}
            <motion.div
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>for young learners</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}