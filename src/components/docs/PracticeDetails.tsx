export function PracticeDetails() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Practice Section: Detailed Activity Documentation
      </h1>

      <div className="prose prose-sm max-w-none">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Practice Hub Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The Practice Hub serves as the central interactive learning environment within the Literacy Starter Kit. It provides a structured, user-friendly interface where students can access four distinct literacy activities, each designed to develop specific foundational reading and writing skills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The hub features intuitive sidebar navigation, real-time progress tracking, and a consistent interface design across all activities to minimize cognitive load and maximize focus on learning.
          </p>
        </section>

        {/* Navigation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Sidebar Navigation System
          </h2>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3">Design & Functionality</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The sidebar provides quick access to all four literacy activities through a vertical navigation menu that includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Color-Coded Buttons:</strong> Each activity has a distinct color scheme for instant visual recognition:
              <ul className="list-circle pl-6 mt-1">
                <li>Letter Recognition - Blue gradient</li>
                <li>Sight Words - Green gradient</li>
                <li>Phonics - Purple gradient</li>
                <li>Spelling - Orange gradient</li>
              </ul>
            </li>
            <li><strong>Icon Identification:</strong> Each activity features a recognizable emoji icon (🔤, 👁️, 🔊, ✏️) for non-readers or emerging readers</li>
            <li><strong>Active State Indicators:</strong> The currently selected activity is highlighted with brighter colors and shadow effects</li>
            <li><strong>Compact Progress Display:</strong> A mini progress tracker shows overall statistics without leaving the practice area</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Responsive Behavior</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Desktop/Laptop:</strong> Sidebar remains persistently visible on the left side of the screen</li>
            <li><strong>Tablet:</strong> Sidebar can be toggled to maximize activity space when needed</li>
            <li><strong>Mobile Phones:</strong> Hamburger menu collapses sidebar; activity name shown in header for context</li>
            <li><strong>Smart Boards:</strong> Larger touch targets ensure easy selection in classroom environments</li>
          </ul>
        </section>

        {/* Activity 1: Letter Recognition */}
        <section className="mb-8">
          <div className="bg-blue-50 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">🔤</span>
              Activity 1: Letter Recognition
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>A random letter from the alphabet is selected</li>
              <li>The letter name is spoken aloud using text-to-speech technology</li>
              <li>Four letter options are displayed as large, clickable buttons</li>
              <li>Student clicks the letter they heard</li>
              <li>Immediate feedback is provided (correct/incorrect)</li>
              <li>If correct, a new question automatically appears after 1.5 seconds</li>
              <li>If incorrect, the student can try again after seeing feedback</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Audio Replay:</strong> Large speaker button allows unlimited replays of the letter name</li>
              <li><strong>Visual Feedback:</strong> Correct answers turn green with checkmark; incorrect shown in red</li>
              <li><strong>Scoring Display:</strong> Four stat panels show Score, Accuracy %, Attempts, and Streak</li>
              <li><strong>Auto-Progression:</strong> Successful answers automatically advance to next question</li>
              <li><strong>Random Generation:</strong> Questions are randomly generated ensuring variety</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Auditory discrimination of letter names</li>
              <li>Visual recognition of uppercase letter forms</li>
              <li>Letter-sound correspondence awareness (foundation for phonics)</li>
              <li>Quick recall and identification abilities</li>
              <li>Alphabet knowledge mastery</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Scoring & Feedback</h3>
            <p className="text-gray-700 mb-2">
              <strong>Correct Answer:</strong> +1 to score, accuracy recalculated, streak incremented, green visual feedback, positive audio ("Correct!")
            </p>
            <p className="text-gray-700">
              <strong>Incorrect Answer:</strong> Streak resets to 0, accuracy recalculated, red visual feedback, encouraging audio ("Try again!"), opportunity to retry same question
            </p>
          </div>
        </section>

        {/* Activity 2: Sight Words */}
        <section className="mb-8">
          <div className="bg-green-50 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">👁️</span>
              Activity 2: Sight Words
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>A high-frequency sight word is randomly selected from a curated list</li>
              <li>The word is displayed prominently in large text</li>
              <li>The word is spoken aloud using text-to-speech</li>
              <li>After 3 seconds, the word disappears (memory challenge)</li>
              <li>Student types the word they saw and heard into a text input field</li>
              <li>Submit button checks the spelling</li>
              <li>Feedback indicates correctness and shows the correct spelling if needed</li>
              <li>New word automatically appears after correct answer</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Audio Button:</strong> "Hear Word" button replays the word pronunciation</li>
              <li><strong>Show/Hide Toggle:</strong> Button allows students to reveal word if they need to see it again</li>
              <li><strong>Auto-Hide Timer:</strong> Word automatically hides after 3 seconds to create memory challenge</li>
              <li><strong>Text Input Field:</strong> Large, clear input box for typing answers</li>
              <li><strong>Case-Insensitive Checking:</strong> Accepts correct answers in any case</li>
              <li><strong>Immediate Validation:</strong> Submit button disabled until student types something</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Instant word recognition (sight vocabulary)</li>
              <li>Visual memory and word recall</li>
              <li>Correct spelling of high-frequency words</li>
              <li>Reading fluency foundation (automatic word recognition reduces cognitive load)</li>
              <li>Keyboard/typing familiarity</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Word List</h3>
            <p className="text-gray-700 mb-2">
              The activity includes 40 high-frequency words commonly found in early reading materials, including: the, and, a, to, said, in, he, I, of, it, was, you, they, on, she, is, for, at, his, but, that, with, all, we, can, are, up, had, my, her, what, there, out, this, have, went, be, like, some, so.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Scoring & Feedback</h3>
            <p className="text-gray-700 mb-2">
              <strong>Correct Answer:</strong> Green feedback with checkmark, "Perfect! You got it right!" message, automatic progression to next word after 2 seconds
            </p>
            <p className="text-gray-700">
              <strong>Incorrect Answer:</strong> Red feedback showing the correct spelling, "Not quite. The word was: [word]" message, word becomes visible again for learning, streak resets
            </p>
          </div>
        </section>

        {/* Activity 3: Phonics */}
        <section className="mb-8">
          <div className="bg-purple-50 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">🔊</span>
              Activity 3: Phonics
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>A word family (rhyming pattern) is randomly selected (e.g., -at, -og, -in)</li>
              <li>A word from that family is chosen and spoken aloud</li>
              <li>The word family pattern is displayed prominently (e.g., "-at family")</li>
              <li>Four word options are shown as buttons, including the target word and three distractors from other families</li>
              <li>Student clicks the word that matches what they heard</li>
              <li>Immediate feedback confirms or corrects their choice</li>
              <li>Tip box reminds student to listen for the specific word family sound</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Audio Replay:</strong> Large speaker icon button replays the spoken word</li>
              <li><strong>Word Family Display:</strong> Visual reminder of the phoneme pattern being practiced</li>
              <li><strong>Strategic Options:</strong> Wrong answers come from different word families to ensure focus on sound patterns</li>
              <li><strong>Visual Highlighting:</strong> Correct answer turns green upon selection</li>
              <li><strong>Educational Tip:</strong> Contextual reminder to focus on the word family sound</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Word Families Included</h3>
            <div className="bg-white rounded p-4 mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
                <div><strong>-at:</strong> cat, bat, hat, mat</div>
                <div><strong>-og:</strong> dog, log, fog, hog</div>
                <div><strong>-in:</strong> pin, bin, win, tin</div>
                <div><strong>-ed:</strong> bed, red, led, fed</div>
                <div><strong>-un:</strong> sun, run, fun, bun</div>
                <div><strong>-op:</strong> top, hop, mop, pop</div>
                <div><strong>-ig:</strong> big, dig, pig, wig</div>
                <div><strong>-et:</strong> net, pet, wet, set</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Sound-letter correspondence and phonemic awareness</li>
              <li>Word family recognition and rhyming pattern identification</li>
              <li>Decoding skills (blending onset and rime)</li>
              <li>Phonological processing and manipulation</li>
              <li>Foundation for word attack strategies in reading</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Scoring & Feedback</h3>
            <p className="text-gray-700 mb-2">
              <strong>Correct Answer:</strong> Green highlighting, "Fantastic! You heard the sound correctly!" with checkmark, automatic progression
            </p>
            <p className="text-gray-700">
              <strong>Incorrect Answer:</strong> "Listen again! Try to hear the -[phoneme] sound" with encouragement to retry, correct answer revealed in green after delay
            </p>
          </div>
        </section>

        {/* Activity 4: Spelling */}
        <section className="mb-8">
          <div className="bg-orange-50 rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">✏️</span>
              Activity 4: Spelling
            </h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>A spelling word is randomly selected from an age-appropriate vocabulary list</li>
              <li>The word is spoken aloud clearly</li>
              <li>Visual letter blanks appear showing how many letters are in the word</li>
              <li>A hint button is available providing a contextual clue about the word's meaning</li>
              <li>Student types their spelling attempt into a text input field</li>
              <li>Clicking "Check Spelling" validates the answer</li>
              <li>Feedback shows correctness and displays the proper spelling if incorrect</li>
              <li>Letters appear in the blanks when answered correctly</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Audio Replay:</strong> Speaker button replays the word pronunciation clearly and slowly</li>
              <li><strong>Letter Blanks:</strong> Visual representation showing word length provides scaffold support</li>
              <li><strong>Hint System:</strong> Toggle button reveals/hides meaning-based hints (e.g., "A red or green fruit" for "apple")</li>
              <li><strong>Answer Reveal:</strong> Upon correct answer, letters fill in the blanks as visual reinforcement</li>
              <li><strong>Large Text Input:</strong> Center-aligned input field for easy typing</li>
              <li><strong>Case-Insensitive:</strong> Accepts answers in any letter case</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Spelling Word List</h3>
            <p className="text-gray-700 mb-2">
              The activity includes 20 common vocabulary words with accompanying hints:
            </p>
            <div className="bg-white rounded p-4 mb-4 text-sm text-gray-700">
              <div className="grid md:grid-cols-2 gap-2">
                <div>• apple - A red or green fruit</div>
                <div>• book - You read this</div>
                <div>• chair - You sit on this</div>
                <div>• door - You open this to enter</div>
                <div>• elephant - Large animal with trunk</div>
                <div>• flower - A colorful plant</div>
                <div>• garden - Where plants grow</div>
                <div>• house - Where you live</div>
                <div>• island - Land surrounded by water</div>
                <div>• jump - To leap up</div>
                <div>• kite - Flies in the wind</div>
                <div>• lion - King of the jungle</div>
                <div>• moon - You see this at night</div>
                <div>• nurse - Helps sick people</div>
                <div>• orange - A citrus fruit</div>
                <div>• pencil - You write with this</div>
                <div>• queen - A royal female leader</div>
                <div>• rainbow - Colorful arc in sky</div>
                <div>• school - Where you learn</div>
                <div>• tiger - A striped wild cat</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Skills Developed</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Correct spelling of common vocabulary words</li>
              <li>Letter sequencing and proper order</li>
              <li>Sound-to-letter mapping and phonetic strategies</li>
              <li>Vocabulary comprehension and word meaning</li>
              <li>Visual memory for spelling patterns</li>
              <li>Self-correction and spelling awareness</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Scoring & Feedback</h3>
            <p className="text-gray-700 mb-2">
              <strong>Correct Answer:</strong> "Perfect! You spelled it correctly!" with green checkmark, letters fill in blanks animation, automatic progression after 2 seconds
            </p>
            <p className="text-gray-700">
              <strong>Incorrect Answer:</strong> "Not quite. The correct spelling is: [word]" shown with the proper spelling, streak resets, student can try next word
            </p>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Responsive Design Across Devices
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">📱 Smartphones (Portrait)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                <li>Sidebar collapses to hamburger menu to maximize content area</li>
                <li>Stacked layouts for stat panels and options</li>
                <li>Large, thumb-friendly touch targets (minimum 48x48px)</li>
                <li>Simplified navigation with clear back/menu buttons</li>
                <li>Single-column layouts prevent horizontal scrolling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">📱 Tablets (Landscape/Portrait)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                <li>Toggle sidebar for flexible space management</li>
                <li>2-column grid layouts where appropriate</li>
                <li>Touch-optimized interactive elements</li>
                <li>Maintains visual hierarchy and clear focal points</li>
                <li>Comfortable text sizes for reading at arm's length</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">💻 Laptops & Desktops</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                <li>Persistent sidebar navigation on left</li>
                <li>Multi-column layouts utilize screen width efficiently</li>
                <li>Hover states provide additional interaction feedback</li>
                <li>Keyboard navigation support for accessibility</li>
                <li>Optimal content width prevents excessive line length</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">🖥️ Smart Boards (Classroom)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                <li>Extra-large touch targets for whole-class interaction</li>
                <li>High contrast colors visible from distance</li>
                <li>Larger text sizes for classroom visibility</li>
                <li>Simple, uncluttered interfaces reduce cognitive load</li>
                <li>Full-screen mode option for presentation contexts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-800 mb-3 text-center">Practice Section Summary</h3>
            <p className="text-sm text-gray-700 text-center">
              The Practice Hub provides a comprehensive, engaging, and accessible platform for literacy skill development. Through four carefully designed activities with consistent interfaces, immediate feedback, progress tracking, and multi-device responsiveness, students receive effective, sustainable literacy practice that adapts to their learning needs and environments.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
