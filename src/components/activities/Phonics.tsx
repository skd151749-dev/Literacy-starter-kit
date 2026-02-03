import { useState, useEffect } from 'react';
import { Volume2, CheckCircle, XCircle, Star } from 'lucide-react';
import { updateProgress } from '../../utils/progress';

const PHONICS_PAIRS = [
  { sound: 'cat', phoneme: 'at', words: ['cat', 'bat', 'hat', 'mat'] },
  { sound: 'dog', phoneme: 'og', words: ['dog', 'log', 'fog', 'hog'] },
  { sound: 'pin', phoneme: 'in', words: ['pin', 'bin', 'win', 'tin'] },
  { sound: 'bed', phoneme: 'ed', words: ['bed', 'red', 'led', 'fed'] },
  { sound: 'sun', phoneme: 'un', words: ['sun', 'run', 'fun', 'bun'] },
  { sound: 'top', phoneme: 'op', words: ['top', 'hop', 'mop', 'pop'] },
  { sound: 'big', phoneme: 'ig', words: ['big', 'dig', 'pig', 'wig'] },
  { sound: 'net', phoneme: 'et', words: ['net', 'pet', 'wet', 'set'] },
];

export function Phonics() {
  const [currentPair, setCurrentPair] = useState(PHONICS_PAIRS[0]);
  const [currentWord, setCurrentWord] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    setFeedback(null);
    const pair = PHONICS_PAIRS[Math.floor(Math.random() * PHONICS_PAIRS.length)];
    setCurrentPair(pair);

    const word = pair.words[Math.floor(Math.random() * pair.words.length)];
    setCurrentWord(word);

    // Generate wrong options from other word families
    const wrongWords = PHONICS_PAIRS.filter((p) => p.phoneme !== pair.phoneme)
      .flatMap((p) => p.words)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [word, ...wrongWords].sort(() => Math.random() - 0.5);
    setOptions(allOptions);

    speakWord(word);
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.6;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (selectedWord: string) => {
    setAttempts(attempts + 1);
    const isCorrect = selectedWord === currentWord;

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback('correct');
      updateProgress('phonics', true);
      speakWord('Excellent!');
      setTimeout(() => {
        generateQuestion();
      }, 1500);
    } else {
      setStreak(0);
      setFeedback('incorrect');
      updateProgress('phonics', false);
      speakWord('Try again!');
      setTimeout(() => {
        setFeedback(null);
      }, 1500);
    }
  };

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Score</div>
          <div className="text-2xl font-bold text-purple-600">{score}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Accuracy</div>
          <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-sm text-gray-600">Attempts</div>
          <div className="text-2xl font-bold text-green-600">{attempts}</div>
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
        <h3 className="text-xl text-gray-700 text-center mb-2">
          Listen to the word and click the matching word:
        </h3>
        <p className="text-center text-purple-600 font-medium mb-6">
          Word Family: <span className="text-2xl">-{currentPair.phoneme}</span>
        </p>

        {/* Audio Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => speakWord(currentWord)}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full p-8 hover:shadow-xl transition-shadow group"
          >
            <Volume2 className="w-16 h-16 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {options.map((word) => (
            <button
              key={word}
              onClick={() => handleAnswer(word)}
              disabled={feedback !== null}
              className={`p-6 rounded-xl text-3xl font-bold transition-all ${
                feedback === 'correct' && word === currentWord
                  ? 'bg-green-500 text-white scale-105 shadow-lg'
                  : feedback === 'incorrect' && word === currentWord
                  ? 'bg-green-100 text-green-700'
                  : feedback !== null
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800 hover:shadow-lg hover:scale-105'
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Phoneme Highlight */}
        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Tip:</strong> Listen for the <span className="text-purple-700 font-bold">-{currentPair.phoneme}</span> sound in the word!
          </p>
        </div>
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
              Fantastic! You heard the sound correctly!
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6" />
              Listen again! Try to hear the -{currentPair.phoneme} sound.
            </>
          )}
        </div>
      )}

      {/* Activity Description */}
      <div className="mt-8 bg-purple-50 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-2">About Phonics</h4>
        <p className="text-sm text-gray-700 mb-3">
          Phonics helps learners understand the relationship between letters and sounds. This activity focuses on word families (rhyming patterns) where learners identify words that share the same ending sounds.
        </p>
        <div className="text-sm text-gray-700">
          <strong>Skills Developed:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Sound-letter correspondence</li>
            <li>Phonemic awareness and rhyming</li>
            <li>Word family recognition</li>
            <li>Decoding and blending skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
