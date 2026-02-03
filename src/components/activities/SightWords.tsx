import { useState, useEffect } from 'react';
import { Volume2, CheckCircle, XCircle, Star, RefreshCw } from 'lucide-react';
import { updateProgress } from '../../utils/progress';

const SIGHT_WORDS = [
  'the', 'and', 'a', 'to', 'said', 'in', 'he', 'I', 'of', 'it',
  'was', 'you', 'they', 'on', 'she', 'is', 'for', 'at', 'his', 'but',
  'that', 'with', 'all', 'we', 'can', 'are', 'up', 'had', 'my', 'her',
  'what', 'there', 'out', 'this', 'have', 'went', 'be', 'like', 'some', 'so',
];

export function SightWords() {
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    generateWord();
  }, []);

  const generateWord = () => {
    setFeedback(null);
    setUserInput('');
    setShowWord(true);
    const word = SIGHT_WORDS[Math.floor(Math.random() * SIGHT_WORDS.length)];
    setCurrentWord(word);
    speakWord(word);

    // Hide word after 3 seconds for memory challenge
    setTimeout(() => {
      setShowWord(false);
    }, 3000);
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.7;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setAttempts(attempts + 1);
    const isCorrect = userInput.toLowerCase().trim() === currentWord.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback('correct');
      updateProgress('sight-words', true);
      speakWord('Great job!');
      setTimeout(() => {
        generateWord();
      }, 2000);
    } else {
      setStreak(0);
      setFeedback('incorrect');
      updateProgress('sight-words', false);
      setTimeout(() => {
        setFeedback(null);
        setShowWord(true);
      }, 2000);
    }
  };

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Score</div>
          <div className="text-2xl font-bold text-green-600">{score}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Accuracy</div>
          <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Attempts</div>
          <div className="text-2xl font-bold text-purple-600">{attempts}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600 flex items-center gap-1">
            Streak <Star className="w-3 h-3" />
          </div>
          <div className="text-2xl font-bold text-orange-600">{streak}</div>
        </div>
      </div>

      {/* Activity Area */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h3 className="text-xl text-gray-700 text-center mb-6">
          Look at the word, listen, and type it:
        </h3>

        {/* Word Display */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div
            className={`min-w-[250px] h-32 rounded-xl flex items-center justify-center text-6xl font-bold transition-all ${
              showWord
                ? 'bg-gradient-to-br from-green-100 to-blue-100 text-gray-800'
                : 'bg-gray-100 text-gray-300'
            }`}
          >
            {showWord ? currentWord : '???'}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => speakWord(currentWord)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Volume2 className="w-5 h-5" />
              Hear Word
            </button>
            <button
              onClick={() => setShowWord(!showWord)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              {showWord ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type the word here..."
              disabled={feedback !== null}
              className="flex-1 px-4 py-3 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 disabled:bg-gray-100"
              autoFocus
            />
            <button
              type="submit"
              disabled={feedback !== null || !userInput.trim()}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Check
            </button>
          </div>
        </form>
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`flex items-center justify-center gap-3 p-4 rounded-lg text-lg font-medium ${
            feedback === 'correct'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {feedback === 'correct' ? (
            <>
              <CheckCircle className="w-6 h-6" />
              Perfect! You got it right!
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6" />
              Not quite. The word was: <strong>{currentWord}</strong>
            </>
          )}
        </div>
      )}

      {/* Activity Description */}
      <div className="mt-8 bg-green-50 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-2">About Sight Words</h4>
        <p className="text-sm text-gray-700 mb-3">
          Sight words are common words that readers should recognize instantly without sounding them out. This activity presents high-frequency words visually and auditorily, then challenges learners to recall and type them.
        </p>
        <div className="text-sm text-gray-700">
          <strong>Skills Developed:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Instant word recognition</li>
            <li>Visual memory and recall</li>
            <li>Spelling and typing skills</li>
            <li>Reading fluency foundation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
