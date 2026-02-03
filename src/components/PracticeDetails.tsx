export function PracticeDetails() {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-4">
        Practice Section: Detailed Overview
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          The Practice Section is the interactive learning hub of the Literacy Starter Kit, designed to provide comprehensive literacy skill development through four carefully crafted activity modules. Each activity targets specific learning objectives while maintaining high engagement through gamification, immediate feedback, and adaptive difficulty.
        </p>
      </section>

      {/* Navigation Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Sidebar Navigation</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed mb-3">
            The Practice Section features an intuitive sidebar navigation system that allows students to easily access and switch between activities:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Visual Icons:</strong> Each activity has a distinct icon for easy recognition</li>
            <li><strong>Clear Labels:</strong> Activity names are displayed in child-friendly language</li>
            <li><strong>Progress Indicators:</strong> Visual badges show completion status and mastery levels</li>
            <li><strong>Active State:</strong> Highlighted display of the current activity</li>
            <li><strong>Responsive Design:</strong> Navigation adapts to different screen sizes (horizontal tabs on mobile, vertical sidebar on larger screens)</li>
          </ul>
        </div>
      </section>

      {/* Activity 1: Letter Recognition */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Activity 1: Letter Recognition</h2>
          <p className="text-blue-700 italic">Building the foundation of literacy</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📚 How It Works</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Letter Recognition presents students with engaging exercises to identify and match letters. The activity includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Uppercase and lowercase letter identification</li>
              <li>Multiple-choice selection from letter options</li>
              <li>Matching exercises connecting uppercase to lowercase</li>
              <li>Letter tracing guides (visual demonstrations)</li>
              <li>Randomized letter presentation to ensure comprehensive practice</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Key Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Audio Support:</strong> Click any letter to hear its name pronounced clearly</li>
              <li><strong>Visual Highlighting:</strong> Correct answers are highlighted with cheerful animations</li>
              <li><strong>Colorful Design:</strong> Each letter displayed in vibrant, contrasting colors for easy visibility</li>
              <li><strong>Smart Randomization:</strong> Questions presented in varied order to prevent pattern memorization</li>
              <li><strong>Hint System:</strong> Optional hints available for students who need support</li>
              <li><strong>Multi-sensory Learning:</strong> Combines visual, auditory, and kinesthetic elements</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Letter identification (recognizing individual letters)</li>
              <li>Visual discrimination (distinguishing between similar letters like b/d, p/q)</li>
              <li>Alphabet knowledge (understanding letter names and forms)</li>
              <li>Uppercase/lowercase correspondence (matching capital and small letters)</li>
              <li>Visual memory (remembering letter shapes and forms)</li>
              <li>Attention to detail (noticing subtle differences in letter formation)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📊 Scoring System</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>+10 points for each correct letter identification</li>
              <li>+5 bonus points for consecutive correct answers (streak bonus)</li>
              <li>Accuracy percentage displayed in real-time</li>
              <li>Progress bar showing completion through the alphabet</li>
              <li>Stars awarded based on overall performance (1-3 stars per session)</li>
              <li>Historical high scores saved for motivation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">💬 Feedback & Encouragement</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Correct Answers:</strong> Cheerful animations, confetti effects, positive sounds, messages like "Excellent!", "You're amazing!", "Perfect!"</li>
              <li><strong>Incorrect Answers:</strong> Gentle prompts like "Let's try again!", highlighting the correct option, audio repetition of the correct letter</li>
              <li><strong>Completion:</strong> Celebratory animation, summary of performance, encouragement to practice again</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activity 2: Sight Words */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Activity 2: Sight Words</h2>
          <p className="text-green-700 italic">Instant recognition for reading fluency</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📚 How It Works</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Sight Words focuses on teaching high-frequency words that appear repeatedly in reading materials. The activity includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Flashcard-style word presentation with visual and audio support</li>
              <li>Word-to-image matching exercises</li>
              <li>Fill-in-the-blank sentences using sight words</li>
              <li>Timed recognition challenges for building speed</li>
              <li>Graduated difficulty levels (easy, medium, advanced word lists)</li>
              <li>Spaced repetition algorithm focusing on challenging words</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Key Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Curated Word Lists:</strong> Age-appropriate sight words from Dolch and Fry lists (the, and, is, you, of, to, etc.)</li>
              <li><strong>Visual Context:</strong> Words paired with relevant images for better retention</li>
              <li><strong>Audio Pronunciation:</strong> Hear each word spoken clearly</li>
              <li><strong>Sentence Integration:</strong> See words used in simple, meaningful sentences</li>
              <li><strong>Adaptive Learning:</strong> System identifies struggling words and provides extra practice</li>
              <li><strong>Progress Tracking:</strong> Visual word bank showing learning, practicing, and mastered words</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Instant word recognition (reading words automatically without decoding)</li>
              <li>Reading fluency (smooth, natural reading pace)</li>
              <li>Vocabulary expansion (understanding word meanings)</li>
              <li>Sentence comprehension (understanding how words work in context)</li>
              <li>Visual memory (remembering word shapes and patterns)</li>
              <li>Reading confidence (building success with common words)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📊 Scoring System</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>+15 points for quick recognition (under 3 seconds)</li>
              <li>+10 points for correct but slower recognition</li>
              <li>+20 bonus points for completing a word set without errors</li>
              <li>Mastery levels: Learning (0-40%), Practicing (41-80%), Mastered (81-100%)</li>
              <li>Speed and accuracy both tracked for comprehensive assessment</li>
              <li>Weekly goals and achievement milestones</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">💬 Feedback & Encouragement</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Quick Recognition:</strong> "Lightning fast!", star animations, speed badges</li>
              <li><strong>Correct Answers:</strong> Positive reinforcement, word added to "mastered" collection</li>
              <li><strong>Needs Practice:</strong> Word moved to practice list, extra repetitions scheduled</li>
              <li><strong>Milestones:</strong> Celebration when 10, 25, 50, 100 words mastered</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activity 3: Phonics */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold text-purple-800 mb-2">Activity 3: Phonics</h2>
          <p className="text-purple-700 italic">Connecting sounds to letters</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📚 How It Works</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Phonics teaches the relationship between sounds and letters through interactive exercises:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Sound identification exercises (hear sound, select letter)</li>
              <li>Letter sound production (see letter, hear its sound)</li>
              <li>Sound blending activities (combining sounds to make words)</li>
              <li>Word segmentation (breaking words into individual sounds)</li>
              <li>Rhyming word games (identifying words that sound similar)</li>
              <li>Word family practice (cat, hat, mat, sat family groups)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Key Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>High-Quality Audio:</strong> Clear pronunciation of individual letter sounds and blended words</li>
              <li><strong>Visual Sound Representation:</strong> Animations showing how sounds blend together</li>
              <li><strong>Interactive Exercises:</strong> Drag letters to build words, tap to hear sounds</li>
              <li><strong>Beginning/Ending Sounds:</strong> Focused practice on initial and final phonemes</li>
              <li><strong>Vowel Emphasis:</strong> Special attention to short and long vowel sounds</li>
              <li><strong>Progressive Patterns:</strong> From simple CVC words (cat) to complex patterns (blend, float)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Phonemic awareness (hearing and manipulating sounds in words)</li>
              <li>Sound-letter correspondence (connecting sounds to written symbols)</li>
              <li>Decoding skills (sounding out unfamiliar words)</li>
              <li>Word building (constructing words from individual sounds)</li>
              <li>Auditory discrimination (distinguishing between similar sounds)</li>
              <li>Spelling patterns (recognizing common letter combinations)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📊 Scoring System</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>+10 points for correct sound identification</li>
              <li>+15 points for successful word blending</li>
              <li>+20 points for completing word family sets</li>
              <li>Accuracy tracked by phonics pattern type</li>
              <li>Progress through phonics scope and sequence</li>
              <li>Bonus points for applying patterns to new words</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">💬 Feedback & Encouragement</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Correct Sounds:</strong> Audio confirmation, visual sound wave animations</li>
              <li><strong>Blending Success:</strong> Animated word assembly, celebration sounds</li>
              <li><strong>Pattern Mastery:</strong> Badges for mastering specific phonics patterns</li>
              <li><strong>Encouragement:</strong> "You're a phonics expert!", "Listen to you blend!"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activity 4: Spelling */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold text-orange-800 mb-2">Activity 4: Spelling</h2>
          <p className="text-orange-700 italic">Mastering letter sequences</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📚 How It Works</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Spelling activities guide students through word formation with various interactive methods:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Letter tile arrangement to build words</li>
              <li>Drag-and-drop spelling exercises</li>
              <li>Fill-in missing letter activities</li>
              <li>Word scramble challenges</li>
              <li>Typing/selection-based spelling</li>
              <li>Picture-prompted spelling (see image, spell word)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Key Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Interactive Letter Tiles:</strong> Colorful, draggable letters that snap into place</li>
              <li><strong>Visual Clues:</strong> Images representing words to spell</li>
              <li><strong>Audio Support:</strong> Hear the word and individual letter sounds</li>
              <li><strong>Progressive Difficulty:</strong> From 3-letter words to complex multi-syllable words</li>
              <li><strong>Hint System:</strong> Reveal one letter at a time if needed</li>
              <li><strong>Letter-by-Letter Validation:</strong> Immediate feedback as each letter is placed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🎯 Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Letter sequence recognition (understanding correct letter order)</li>
              <li>Phonetic spelling (spelling words based on sounds)</li>
              <li>Visual memory (remembering word patterns)</li>
              <li>Fine motor skills (through dragging, clicking, typing)</li>
              <li>Word formation (understanding how letters combine)</li>
              <li>Spelling patterns (recognizing common endings, prefixes)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📊 Scoring System</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>+20 points for spelling without hints</li>
              <li>+10 points for spelling with minimal hints</li>
              <li>+30 bonus points for consecutive correct spellings (streak)</li>
              <li>Extra points for difficult words (5+ letters)</li>
              <li>Time bonuses for quick, accurate spelling</li>
              <li>Perfect round bonuses (all words spelled correctly)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">💬 Feedback & Encouragement</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Each Correct Letter:</strong> Green checkmark, satisfying sound</li>
              <li><strong>Incorrect Letter:</strong> Gentle shake, hint to try again</li>
              <li><strong>Word Completion:</strong> Celebration animation, word added to spelling list</li>
              <li><strong>Encouragement:</strong> "Perfect spelling!", "You're a spelling champion!"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Responsive Design Across Devices</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📱 Tablets</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Optimized touch targets (minimum 44x44px)</li>
              <li>Larger interactive elements for easy tapping</li>
              <li>Portrait and landscape orientation support</li>
              <li>Ideal for individual student use</li>
              <li>Perfect for take-home practice</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📱 Smartphones</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Vertical layout with stacked navigation</li>
              <li>Simplified interface for smaller screens</li>
              <li>One-handed operation where possible</li>
              <li>Perfect for practice on-the-go</li>
              <li>Quick review sessions anywhere</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">💻 Laptops/Desktops</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Full-featured interface with all options visible</li>
              <li>Keyboard shortcuts for efficiency</li>
              <li>Mouse and keyboard interaction support</li>
              <li>Split-screen capabilities for teacher monitoring</li>
              <li>Detailed analytics and reporting views</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📺 Smart Boards</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Extra-large display mode for classroom visibility</li>
              <li>Group activity features</li>
              <li>Multi-touch support for collaborative learning</li>
              <li>Teacher control panel for guided lessons</li>
              <li>Whole-class engagement activities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>Practice Section Detailed Overview - Literacy Starter Kit</p>
      </div>
    </div>
  );
}
