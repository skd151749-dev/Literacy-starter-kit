import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Check, CheckCircle, ArrowRight } from 'lucide-react';
import { createProfile, AVATAR_OPTIONS } from '../utils/profile';
import { saveStudyReport } from '../utils/studyReport';

interface ProfileSetupProps {
  onComplete: () => void;
}

export function ProfileSetup({ onComplete }: ProfileSetupProps) {
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);
  const [step, setStep] = useState<'cover' | 'username' | 'avatar'>('cover');
  
  // Cover page form data
  const [formData, setFormData] = useState({
    subject: "",
    studentName: "",
    classGrade: "",
    teacherName: "",
    schoolName: "",
    academicYear: ""
  });

  const handleCoverSubmit = () => {
    if (formData.studentName.trim()) {
      // Save the study report
      saveStudyReport({
        ...formData,
        submissionDate: new Date().toISOString()
      });
      // Pre-fill username with student name
      setUsername(formData.studentName);
      setStep('username');
    } else {
      alert("Please enter at least your name before continuing!");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (username.trim()) {
      createProfile(username.trim(), selectedAvatar);
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center z-50 overflow-y-auto">
      {/* Kid-Friendly Decorative Illustrations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Balloons */}
        <motion.div
          className="absolute"
          style={{ left: '3%', top: '10%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-24 md:w-28 md:h-36 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-90 shadow-2xl" />
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/50 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 w-0.5 h-10 bg-gray-700" />
          </div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ right: '5%', top: '8%' }}
          animate={{
            y: [0, -50, 0],
            x: [0, -12, 0],
            rotate: [0, -7, 7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="w-20 h-24 md:w-28 md:h-36 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-90 shadow-2xl" />
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/50 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 w-0.5 h-10 bg-gray-700" />
          </div>
        </motion.div>

        <motion.div
          className="absolute hidden md:block"
          style={{ left: '8%', bottom: '15%' }}
          animate={{
            y: [0, -35, 0],
            x: [0, 10, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <div className="w-24 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-90 shadow-2xl" />
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/50 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 w-0.5 h-10 bg-gray-700" />
          </div>
        </motion.div>

        {/* Sparkling Stars */}
        <motion.div
          className="absolute"
          style={{ left: '12%', top: '20%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-5xl md:text-6xl drop-shadow-2xl">⭐</div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ right: '15%', top: '30%' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="text-4xl md:text-5xl drop-shadow-2xl">⭐</div>
        </motion.div>

        <motion.div
          className="absolute hidden md:block"
          style={{ left: '20%', bottom: '25%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="text-5xl drop-shadow-2xl">✨</div>
        </motion.div>

        <motion.div
          className="absolute hidden lg:block"
          style={{ right: '10%', bottom: '20%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <div className="text-6xl drop-shadow-2xl">✨</div>
        </motion.div>

        {/* Happy Hearts */}
        <motion.div
          className="absolute"
          style={{ left: '25%', top: '15%' }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl md:text-5xl drop-shadow-lg">💖</div>
        </motion.div>

        <motion.div
          className="absolute hidden md:block"
          style={{ right: '25%', bottom: '30%' }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="text-4xl drop-shadow-lg">💙</div>
        </motion.div>

        {/* Cute Rainbow */}
        <motion.div
          className="absolute hidden lg:block"
          style={{ right: '3%', bottom: '10%' }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-7xl drop-shadow-xl">🌈</div>
        </motion.div>

        {/* Smiling Clouds */}
        <motion.div
          className="absolute"
          style={{ left: '35%', top: '5%' }}
          animate={{
            x: [0, 30, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-5xl md:text-6xl opacity-80 drop-shadow-lg">☁️</div>
        </motion.div>

        <motion.div
          className="absolute hidden md:block"
          style={{ right: '30%', top: '12%' }}
          animate={{
            x: [0, -25, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        >
          <div className="text-6xl opacity-70 drop-shadow-lg">☁️</div>
        </motion.div>

        {/* Playful Music Notes */}
        <motion.div
          className="absolute"
          style={{ left: '15%', bottom: '10%' }}
          animate={{
            y: [0, -30, -10, -30, 0],
            x: [0, 10, 5, 10, 0],
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl md:text-5xl drop-shadow-md">🎵</div>
        </motion.div>

        <motion.div
          className="absolute hidden md:block"
          style={{ right: '20%', bottom: '8%' }}
          animate={{
            y: [0, -25, -8, -25, 0],
            x: [0, -12, -6, -12, 0],
            rotate: [0, -12, 12, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="text-4xl drop-shadow-md">🎶</div>
        </motion.div>

        {/* Cute Book */}
        <motion.div
          className="absolute hidden lg:block"
          style={{ left: '5%', top: '45%' }}
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-6xl drop-shadow-xl">📚</div>
        </motion.div>

        {/* Happy Sun */}
        <motion.div
          className="absolute hidden md:block"
          style={{ right: '8%', top: '18%' }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-7xl drop-shadow-2xl">🌞</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] shadow-2xl md:my-8 overflow-y-auto"
      >
        {/* Cover Page Step */}
        {step === 'cover' && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-center"
          >
            {/* Decorative Header */}
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Literacy Starter Kit
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              An Interactive Digital Learning Platform for Early Literacy Development
            </p>

            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 mx-auto"></div>

            {/* Editable Fields */}
            <div className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="e.g., Computer Science / Educational Technology"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={formData.studentName}
                  onChange={(e) => handleChange('studentName', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class/Grade</label>
                <input 
                  type="text" 
                  placeholder="e.g., Grade 10 / Class XII"
                  value={formData.classGrade}
                  onChange={(e) => handleChange('classGrade', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teacher's Name</label>
                <input 
                  type="text" 
                  placeholder="Teacher Name"
                  value={formData.teacherName}
                  onChange={(e) => handleChange('teacherName', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input 
                  type="text" 
                  placeholder="School Name"
                  value={formData.schoolName}
                  onChange={(e) => handleChange('schoolName', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                <input 
                  type="text" 
                  placeholder="e.g., 2024-2025"
                  value={formData.academicYear}
                  onChange={(e) => handleChange('academicYear', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCoverSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-6"
              >
                Continue to Profile Setup
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-sm text-gray-500">
              Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        )}

        {/* Username Step */}
        {step === 'username' && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="text-center mb-6">
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
                className="inline-block text-6xl mb-4"
              >
                🎓
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome, {formData.studentName}!
              </h2>
              <p className="text-gray-600">Let's set up your learning profile</p>
            </div>

            <label className="block mb-2 font-medium text-gray-700">
              Choose your username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && username.trim() && setStep('avatar')}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
              autoFocus
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => username.trim() && setStep('avatar')}
              disabled={!username.trim()}
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </motion.button>
          </motion.div>
        )}

        {/* Avatar Step */}
        {step === 'avatar' && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="text-center mb-6">
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
                className="inline-block text-6xl mb-4"
              >
                {selectedAvatar}
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Almost there!
              </h2>
              <p className="text-gray-600">Pick your favorite avatar</p>
            </div>

            <label className="block mb-4 font-medium text-gray-700 text-center">
              Choose your avatar
            </label>
            <div className="grid grid-cols-5 gap-3 mb-6">
              {AVATAR_OPTIONS.map((avatar) => (
                <motion.button
                  key={avatar}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`aspect-square text-3xl rounded-xl transition-all ${
                    selectedAvatar === avatar
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg scale-110'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {avatar}
                </motion.button>
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('username')}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Start Learning
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Progress Dots */}
        <div className="mt-6 flex justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${step === 'cover' ? 'bg-blue-500' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'username' ? 'bg-blue-500' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'avatar' ? 'bg-blue-500' : 'bg-gray-300'}`} />
        </div>
      </motion.div>
    </div>
  );
}