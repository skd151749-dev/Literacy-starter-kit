import { useState, useEffect } from 'react';
import { Volume2, CheckCircle, XCircle, Star, Lightbulb } from 'lucide-react';
import { updateProgress } from '../../utils/progress';

const SPELLING_WORDS = [
  { word: 'apple', hint: 'A red or green fruit' },
  { word: 'book', hint: 'You read this' },
  { word: 'chair', hint: 'You sit on this' },
  { word: 'door', hint: 'You open this to enter a room' },
  { word: 'elephant', hint: 'A large animal with a trunk' },
  { word: 'flower', hint: 'A colorful plant' },
  { word: 'garden', hint: 'A place where plants grow' },
  { word: 'house', hint: 'A place where you live' },
  { word: 'island', hint: 'Land surrounded by water' },
  { word: 'jump', hint: 'To leap up' },
  { word: 'kite', hint: 'Flies in the wind' },
  { word: 'lion', hint: 'The king of the jungle' },
  { word: 'moon', hint: 'You see this at night' },
  { word: 'nurse', hint: 'Helps sick people' },
  { word: 'orange', hint: 'A citrus fruit' },
  { word: 'pencil', hint: 'You write with this' },
  { word: 'queen', hint: 'A royal female leader' },
  { word: 'rainbow', hint: 'Colorful arc in the sky' },
  { word: 'school', hint: 'Where you learn' },
  { word: 'tiger', hint: 'A striped wild cat' },
];

export function Spelling() {
  const [currentWordObj, setCurrentWordObj] = useState(SPELLING_WORDS[0]);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    generateWord();
  }, []);

  const generateWord = () => {
    setFeedback(null);
    setUserInput('');
    setShowHint(false);
    const wordObj = SPELLING_WORDS[Math.floor(Math.random() * SPELLING_WORDS.length)];
    setCurrentWordObj(wordObj);
    speakWord(wordObj.word);
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.6;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setAttempts(attempts + 1);
    const isCorrect = userInput.toLowerCase().trim() === currentWordObj.word.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback('correct');
      updateProgress('spelling', true);
      speakWord('Perfect spelling!');
      setTimeout(() => {
        generateWord();
      }, 2000);
    } else {
      setStreak(0);
      setFeedback('incorrect');
      updateProgress('spelling', false);
      setTimeout(() => {
        setFeedback(null);
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
          <div className="text-2xl font-bold text-orange-600">{score}</div>
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
          <div className="text-2xl font-bold text-green-600">{streak}</div>
        </div>
      </div>

      {/* Activity Area */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h3 className="text-xl text-gray-700 text-center mb-6">
          Listen to the word and spell it correctly:
        </h3>

        {/* Audio and Hint */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            onClick={() => speakWord(currentWordObj.word)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-8 hover:shadow-xl transition-shadow group"
          >
            <Volume2 className="w-16 h-16 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>

          {showHint && (
            <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Hint:</strong> {currentWordObj.hint}
              </p>
            </div>
          )}
        </div>

        {/* Letter Blanks Visual */}
        <div className="flex justify-center gap-2 mb-8">
          {currentWordObj.word.split('').map((_, index) => (
            <div
              key={index}
              className="w-12 h-16 border-b-4 border-orange-300 flex items-center justify-center"
            >
              {feedback === 'correct' && (
                <span className="text-2xl font-bold text-orange-600">
                  {currentWordObj.word[index]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your answer here..."
              disabled={feedback !== null}
              className="px-4 py-3 text-xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 disabled:bg-gray-100"
              autoFocus
            />
            <button
              type="submit"
              disabled={feedback !== null || !userInput.trim()}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg font-medium"
            >
              Check Spelling
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
              Perfect! You spelled it correctly!
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6" />
              Not quite. The correct spelling is: <strong>{currentWordObj.word}</strong>
            </>
          )}
        </div>
      )}

      {/* Activity Description */}
      <div className="mt-8 bg-orange-50 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-2">About Spelling</h4>
        <p className="text-sm text-gray-700 mb-3">
          This activity helps learners practice spelling common words by listening to the word and typing the correct spelling. Visual letter blanks show how many letters are in the word, and hints are available for support.
        </p>
        <div className="text-sm text-gray-700">
          <strong>Skills Developed:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Correct spelling of common words</li>
            <li>Letter sequencing and order</li>
            <li>Sound-to-letter mapping</li>
            <li>Vocabulary building and comprehension</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
