import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Download, Star, Sparkles, Trophy } from "lucide-react";
import { getUserProfile } from "../utils/profile";

interface CertificateGeneratorProps {
  learnerName: string;
}

export function CertificateGenerator({ learnerName }: CertificateGeneratorProps) {
  const [showCertificate, setShowCertificate] = useState(false);
  const profile = getUserProfile();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {!showCertificate ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCertificate(true)}
          className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3"
        >
          <Award className="w-6 h-6" />
          Generate Achievement Certificate
          <Sparkles className="w-6 h-6" />
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Certificate Preview */}
            <div className="relative bg-white border-8 border-double border-yellow-500 rounded-2xl p-12 shadow-2xl overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-6xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }}
                  >
                    ⭐
                  </div>
                ))}
              </div>

              {/* Certificate Content */}
              <div className="relative z-10 text-center">
                {/* Header */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="mb-6"
                >
                  <Trophy className="w-20 h-20 mx-auto text-yellow-500" />
                </motion.div>

                <h1 className="text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Certificate of Achievement
                </h1>

                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8 rounded-full" />

                {/* Recipient Info */}
                <p className="text-xl text-gray-600 mb-4">This certificate is proudly presented to</p>
                
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-2">
                    {profile && (
                      <span className="text-6xl">{profile.avatar}</span>
                    )}
                    <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" style={{ fontFamily: 'Georgia, serif' }}>
                      {learnerName}
                    </h2>
                    {profile && (
                      <span className="text-6xl">{profile.avatar}</span>
                    )}
                  </div>
                  <div className="h-1 bg-gray-300 w-3/4 mx-auto rounded-full" />
                </div>

                {/* Achievement Details */}
                <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                  For successfully completing literacy learning activities and demonstrating
                  outstanding dedication to developing essential reading and writing skills
                  through the <strong>Literacy Starter Kit</strong> program.
                </p>

                {/* Stats */}
                {profile && (
                  <div className="flex justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-500 mb-1">
                        <Star className="w-6 h-6 fill-yellow-500" />
                        <span className="text-3xl font-bold text-gray-800">{profile.level}</span>
                      </div>
                      <p className="text-sm text-gray-600">Level Achieved</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-purple-500 mb-1">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-3xl font-bold text-gray-800">{profile.xp}</span>
                      </div>
                      <p className="text-sm text-gray-600">Total XP Earned</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-blue-500 mb-1">
                        <Trophy className="w-6 h-6" />
                        <span className="text-3xl font-bold text-gray-800">{profile.achievements.length}</span>
                      </div>
                      <p className="text-sm text-gray-600">Badges Earned</p>
                    </div>
                  </div>
                )}

                {/* Date */}
                <p className="text-lg text-gray-600 mb-8">
                  Awarded on <strong>{currentDate}</strong>
                </p>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-12 mt-12">
                  <div>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <p className="font-semibold text-gray-800">Devid Sokun</p>
                      <p className="text-sm text-gray-600">Lead Developer & Designer</p>
                    </div>
                  </div>
                  <div>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <p className="font-semibold text-gray-800">Pheakna Choun</p>
                      <p className="text-sm text-gray-600">Developer & Researcher</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-xs text-gray-500">
                  <p>Norton University | Department of Computer Studies</p>
                  <p>Literacy Starter Kit Project 2026</p>
                </div>
              </div>

              {/* Corner Decorations */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 border-4 border-yellow-400"
                  style={{
                    [i < 2 ? 'top' : 'bottom']: '1rem',
                    [i % 2 === 0 ? 'left' : 'right']: '1rem',
                  }}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Print / Save as PDF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCertificate(false)}
                className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-300 transition-all"
              >
                Close Preview
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
