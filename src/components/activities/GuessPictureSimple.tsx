import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, Trophy, Star, ArrowRight, Volume2, Zap, Target } from "lucide-react";

type Difficulty = "easy" | "hard";

interface GameData {
  image: string;
  correctAnswer: string;
  options: string[];
  category: string;
  difficulty: Difficulty;
}

// Shuffle function to randomize answer positions
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// EASY LEVEL - Simple, familiar objects (Ages 3-5)
const easyLevels: GameData[] = [
  {
    image: "https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0ODE3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Dog",
    options: ["Dog", "Cat", "Bird", "Fish"],
    category: "Animals",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1538393362382-95cfe47eaa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aG9sZSUyMGdyZWVuJTIwYXBwbGUlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5ODcxNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Apple",
    options: ["Apple", "Lime", "Pear", "Kiwi"],
    category: "Fruits",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBjYXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk1MTkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Cat",
    options: ["Cat", "Dog", "Rabbit", "Mouse"],
    category: "Animals",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1769102502969-4eda88a84e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBiYWxsJTIwdG95fGVufDF8fHx8MTc2OTU2NDE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Ball",
    options: ["Ball", "Box", "Toy", "Cup"],
    category: "Toys",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1662563843950-8cdb1db65970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzdW5mbG93ZXIlMjBibG9vbSUyMGNsb3NlfGVufDF8fHx8MTc2OTU2NDk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Sunflower",
    options: ["Sunflower", "Rose", "Tulip", "Daisy"],
    category: "Flowers",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1748449871769-ff06d19a4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBncmVlbiUyMGxlYWYlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2OTg3NDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Leaf",
    options: ["Leaf", "Flower", "Branch", "Grass"],
    category: "Nature",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY5NTYzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Book",
    options: ["Book", "Pencil", "Paper", "Bag"],
    category: "School",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1717348304122-a2a7bcd4fc04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjYXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc2OTU2MzczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Car",
    options: ["Car", "Truck", "Bus", "Train"],
    category: "Vehicles",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBiYW5hbmElMjBmcnVpdHxlbnwxfHx8fDE3Njk1MDg2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Banana",
    options: ["Banana", "Mango", "Lemon", "Corn"],
    category: "Fruits",
    difficulty: "easy"
  },
  {
    image: "https://images.unsplash.com/photo-1558898268-9afca916a69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZmlzaCUyMHN3aW1taW5nfGVufDF8fHx8MTc2OTU2NDIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Fish",
    options: ["Fish", "Shark", "Dolphin", "Turtle"],
    category: "Animals",
    difficulty: "easy"
  }
];

// HARD LEVEL - Challenging items (Ages 7+)
const hardLevels: GameData[] = [
  {
    image: "https://images.unsplash.com/photo-1674195380727-1109c745fa08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBwYXJyb3QlMjBtYWNhdyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTg3MTY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Parrot",
    options: ["Parrot", "Eagle", "Owl", "Chicken"],
    category: "Animals",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1769489023741-ce72d8bacbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBmcnVpdCUyMHdob2xlfGVufDF8fHx8MTc2OTU2NDIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Orange",
    options: ["Orange", "Peach", "Apple", "Tomato"],
    category: "Fruits",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1762245832994-f0892a7f7c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGhvbWUlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk1NjQyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "House",
    options: ["House", "School", "Hospital", "Store"],
    category: "Buildings",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1575276970982-642152075726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzY2hvb2wlMjBidXN8ZW58MXx8fHwxNzY5NDk4MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Bus",
    options: ["Bus", "Van", "Car", "Truck"],
    category: "Vehicles",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1554137283-798d59268645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMGFuaW1hbCUyMHRydW5rfGVufDF8fHx8MTc2OTU2NDIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Elephant",
    options: ["Elephant", "Rhino", "Hippo", "Buffalo"],
    category: "Animals",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1700147390896-389657782cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjBjb2xvcmZ1bCUyMHdpbmdzfGVufDF8fHx8MTc2OTQ4OTMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Butterfly",
    options: ["Butterfly", "Dragonfly", "Bee", "Moth"],
    category: "Insects",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1709392975966-6e76d0452436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjBjaGVlc2V8ZW58MXx8fHwxNzY5NTY0MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Pizza",
    options: ["Pizza", "Burger", "Sandwich", "Pasta"],
    category: "Food",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1628887067605-5171efd812e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBtdXNpY2FsJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3Njk0ODM0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Guitar",
    options: ["Guitar", "Violin", "Piano", "Drum"],
    category: "Music",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1578185926358-7e064647af0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3VibGUlMjByYWluYm93JTIwYnJpZ2h0JTIwc2t5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzY5ODczMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Rainbow",
    options: ["Rainbow", "Sunset", "Cloud", "Lightning"],
    category: "Weather",
    difficulty: "hard"
  },
  {
    image: "https://images.unsplash.com/photo-1764350270468-ffc35d2bd024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaWNlJTIwY3JlYW0lMjBjb25lJTIwZGVzc2VydHxlbnwxfHx8fDE3Njk4NzE2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    correctAnswer: "Ice Cream",
    options: ["Ice Cream", "Popsicle", "Cake", "Yogurt"],
    category: "Desserts",
    difficulty: "hard"
  }
];

// Combine all levels
const gameData: GameData[] = [...easyLevels, ...hardLevels];

export function GuessPicture() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [blurLevel, setBlurLevel] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const currentGame = gameData[currentRound];

  useEffect(() => {
    setBlurLevel(difficulty === "hard" ? 20 : 0);
    if (currentGame) {
      setShuffledOptions(shuffleArray(currentGame.options));
    }
  }, [difficulty, currentRound, currentGame]);

  const handleHint = () => {
    if (blurLevel > 0) {
      setBlurLevel(Math.max(0, blurLevel - 10));
      setHintsUsed(hintsUsed + 1);
      
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Hint revealed!");
        utterance.lang = "en-US";
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === currentGame.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const points = blurLevel === 20 ? 10 : blurLevel > 10 ? 7 : blurLevel > 0 ? 5 : 3;
      setScore(score + points);
      
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Correct! Well done!");
        utterance.lang = "en-US";
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }

      setTimeout(() => {
        handleNextRound();
      }, 2000);
    }
  };

  const handleTryAgain = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
  };

  const handleNextRound = () => {
    if (currentRound < gameData.length - 1) {
      setCurrentRound(currentRound + 1);
      setBlurLevel(difficulty === "hard" ? 20 : 0);
      setShowFeedback(false);
      setSelectedAnswer(null);
    } else {
      setGameComplete(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentRound(0);
    setScore(0);
    setHintsUsed(0);
    setBlurLevel(difficulty === "hard" ? 20 : 0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setGameComplete(false);
  };

  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (gameComplete) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-lg w-full text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: 3,
            }}
            className="text-7xl mb-4"
          >
            🎉
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Game Complete!
          </h2>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-5 mb-5">
            <div className="text-base mb-1">Your Final Score</div>
            <div className="text-5xl font-bold">{score}</div>
            <div className="text-sm mt-1 opacity-90">
              Hints: {hintsUsed}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlayAgain}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
          >
            <Star className="w-5 h-5" />
            Play Again
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-3 md:p-4 overflow-auto">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-3 w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                Guess the Picture
              </h1>
              <p className="text-xs text-gray-600">Can you guess what's in the picture?</p>
            </div>

            {/* Difficulty Selector */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setDifficulty("easy");
                  setShowFeedback(false);
                  setSelectedAnswer(null);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 ${
                  difficulty === "easy"
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Target className="w-3 h-3" />
                Easy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setDifficulty("hard");
                  setShowFeedback(false);
                  setSelectedAnswer(null);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 ${
                  difficulty === "hard"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Zap className="w-3 h-3" />
                Hard
              </motion.button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-2 text-center">
              <div className="text-xs opacity-90">Round</div>
              <div className="text-base font-bold">{currentRound + 1}/{gameData.length}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-2 text-center">
              <div className="text-xs opacity-90">Score</div>
              <div className="text-base font-bold">{score}</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-2 text-center">
              <div className="text-xs opacity-90">Hints</div>
              <div className="text-base font-bold">{hintsUsed}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="max-w-2xl mx-auto w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRound}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-xl p-3 md:p-4"
          >
            {/* Category Badge */}
            <div className="flex justify-center mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full font-bold text-xs flex items-center gap-1.5">
                <Trophy className="w-3 h-3" />
                {currentGame.category}
              </div>
            </div>

            {/* Image Container */}
            <div className="relative mb-2 rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200 aspect-video">
              <motion.img
                src={currentGame.image}
                alt="Guess this!"
                className="w-full h-full object-cover"
                style={{
                  filter: `blur(${blurLevel}px)`,
                }}
                animate={{
                  filter: `blur(${blurLevel}px)`,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Blur Indicator */}
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
                {blurLevel > 0 ? `🌫️ ${blurLevel}%` : "✨ Clear"}
              </div>
            </div>

            {/* Hint Button */}
            {blurLevel > 0 && !showFeedback && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleHint}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-2"
              >
                <Lightbulb className="w-4 h-4" />
                Need a Hint?
              </motion.button>
            )}

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-2">
              {shuffledOptions.map((option, index) => (
                <motion.button
                  key={`${currentRound}-${option}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: showFeedback ? 1 : 1.03 }}
                  whileTap={{ scale: showFeedback ? 1 : 0.97 }}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  disabled={showFeedback}
                  className={`p-2.5 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-between ${
                    showFeedback
                      ? option === currentGame.correctAnswer
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white scale-105"
                        : option === selectedAnswer
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                        : "bg-gray-200 text-gray-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl"
                  }`}
                >
                  <span>{option}</span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(option);
                    }}
                    className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </motion.div>
                  {showFeedback && option === currentGame.correctAnswer && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-lg ml-1"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}</div>

            {/* Feedback */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-2"
                >
                  <div className={`p-3 rounded-xl text-center ${
                    isCorrect
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  }`}>
                    <motion.div
                      animate={{
                        rotate: isCorrect ? [0, 10, -10, 0] : 0,
                        scale: isCorrect ? [1, 1.2, 1] : [1, 1.1, 1],
                      }}
                      transition={{ duration: 0.5, repeat: isCorrect ? 0 : Infinity, repeatDelay: 0.3 }}
                      className="text-3xl mb-1"
                    >
                      {isCorrect ? "🎉" : "💪"}
                    </motion.div>
                    <div className="text-lg font-bold mb-1">
                      {isCorrect ? "Correct!" : "Try Again!"}
                    </div>
                    {isCorrect && (
                      <div className="text-xs opacity-90">
                        Moving to next picture...
                      </div>
                    )}
                  </div>

                  {!isCorrect && (
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleTryAgain}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 rounded-xl font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 mt-2 border-2 border-white/30"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Try Again
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}