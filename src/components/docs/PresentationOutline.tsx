export function PresentationOutline() {
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        PowerPoint Presentation Outline
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Ready-to-use slide content for your Literacy Starter Kit presentation
      </p>

      <div className="space-y-8">
        {/* Slide 1 */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-8 shadow-lg">
          <div className="text-sm font-bold mb-2">SLIDE 1</div>
          <h2 className="text-3xl font-bold mb-4">Literacy Starter Kit</h2>
          <p className="text-xl mb-4">An Interactive Digital Learning Platform</p>
          <div className="text-sm opacity-90 space-y-1">
            <p>[Your Name]</p>
            <p>[Class/Grade]</p>
            <p>[School Name]</p>
            <p>[Date]</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 2</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction: Why This Project?</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-bold">Education is evolving</p>
                <p className="text-sm">Digital tools enhance traditional learning methods</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <div>
                <p className="font-bold">Sustainability matters</p>
                <p className="text-sm">Reducing paper waste in education</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-bold">Engagement is key</p>
                <p className="text-sm">Interactive learning increases motivation and retention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 3</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="font-bold text-red-800 mb-2">Traditional literacy learning faces challenges:</p>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Paper waste:</strong> Worksheets need constant reprinting for practice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Limited engagement:</strong> Static materials don't captivate digital-native learners</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Delayed feedback:</strong> Students wait for teacher review before knowing results</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Accessibility issues:</strong> Physical materials not available to all students</span>
            </li>
          </ul>
        </div>

        {/* Slide 4 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 4</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Goal & Objectives</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-bold text-green-800">Create a sustainable, engaging digital platform for literacy development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Eliminate paper waste</p>
              <p className="text-gray-600">Reusable digital surfaces</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Increase engagement</p>
              <p className="text-gray-600">Interactive, game-like activities</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Provide instant feedback</p>
              <p className="text-gray-600">Real-time correctness indicators</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Track progress</p>
              <p className="text-gray-600">Automated performance monitoring</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Ensure accessibility</p>
              <p className="text-gray-600">Works on any device</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-800 mb-1">✓ Support learning</p>
              <p className="text-gray-600">Multi-sensory approach</p>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 5</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Target Users</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-2">Primary Users:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span>👶</span>
                  <span><strong>Early Elementary Students (Ages 5-8):</strong> Building foundational literacy skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📖</span>
                  <span><strong>Struggling Readers:</strong> Additional practice in supportive environment</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-2">Secondary Users:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span>👨‍🏫</span>
                  <span><strong>Teachers:</strong> Supplementary classroom tool and literacy centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>👨‍👩‍👧</span>
                  <span><strong>Parents:</strong> Home learning support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🎓</span>
                  <span><strong>Tutors:</strong> Intervention and progress monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 6 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 6</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <p className="font-bold text-gray-800">Interactive Activities</p>
                  <p className="text-sm text-gray-600">4 literacy skill areas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔊</span>
                <div>
                  <p className="font-bold text-gray-800">Audio Support</p>
                  <p className="text-sm text-gray-600">Text-to-speech for all content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-gray-800">Instant Feedback</p>
                  <p className="text-sm text-gray-600">Real-time correctness indicators</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-bold text-gray-800">Progress Tracking</p>
                  <p className="text-sm text-gray-600">Scores, accuracy, streaks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-bold text-gray-800">Responsive Design</p>
                  <p className="text-sm text-gray-600">Works on all devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <div>
                  <p className="font-bold text-gray-800">Sustainable</p>
                  <p className="text-sm text-gray-600">Zero paper waste</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 7</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Section: 4 Activities</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🔤</div>
              <h3 className="font-bold text-blue-800 mb-1">Letter Recognition</h3>
              <p className="text-sm text-gray-700">Hear and identify letters</p>
              <p className="text-xs text-gray-600 mt-2">Develops: Visual recognition, auditory discrimination</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-3xl mb-2">👁️</div>
              <h3 className="font-bold text-green-800 mb-1">Sight Words</h3>
              <p className="text-sm text-gray-700">See, remember, type words</p>
              <p className="text-xs text-gray-600 mt-2">Develops: Instant recognition, visual memory</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🔊</div>
              <h3 className="font-bold text-purple-800 mb-1">Phonics</h3>
              <p className="text-sm text-gray-700">Match sounds to words</p>
              <p className="text-xs text-gray-600 mt-2">Develops: Sound-letter correspondence, rhyming</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-3xl mb-2">✏️</div>
              <h3 className="font-bold text-orange-800 mb-1">Spelling</h3>
              <p className="text-sm text-gray-700">Listen and spell correctly</p>
              <p className="text-xs text-gray-600 mt-2">Develops: Spelling accuracy, letter sequencing</p>
            </div>
          </div>
        </div>

        {/* Slide 8 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 8</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Progress Tracking & Motivation</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <p className="font-bold text-gray-800 mb-2">Real-Time Statistics</p>
              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                <div>
                  <p className="text-xs text-gray-600">Score</p>
                  <p className="text-xl font-bold text-blue-600">125</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Accuracy</p>
                  <p className="text-xl font-bold text-green-600">87%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Attempts</p>
                  <p className="text-xl font-bold text-purple-600">143</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Streak</p>
                  <p className="text-xl font-bold text-orange-600">12</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-800 mb-2">Immediate Feedback:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Visual color-coded responses</li>
                  <li>✓ Audio encouragement</li>
                  <li>✓ Correct answer display</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-2">Gamification:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>🏆 Growing score totals</li>
                  <li>🔥 Streak rewards</li>
                  <li>📈 Visible improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <div className="text-sm font-bold text-blue-600 mb-2">SLIDE 9</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Expected Impact</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <p className="font-bold text-gray-800 mb-1">Educational</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Improved skill acquisition</li>
                <li>Increased engagement</li>
                <li>Enhanced retention</li>
                <li>More practice volume</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <p className="font-bold text-gray-800 mb-1">Environmental</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Zero paper consumption</li>
                <li>Reduced carbon footprint</li>
                <li>Sustainable practices</li>
                <li>Scalable without waste</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">♿</div>
              <p className="font-bold text-gray-800 mb-1">Accessibility</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Universal device access</li>
                <li>No material costs</li>
                <li>Audio support included</li>
                <li>Independent learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 10 */}
        <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-lg p-8 shadow-lg">
          <div className="text-sm font-bold mb-2 opacity-90">SLIDE 10</div>
          <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
          <div className="space-y-4 text-lg">
            <p>
              ✓ <strong>Sustainable</strong> - Eliminates paper waste through digital learning
            </p>
            <p>
              ✓ <strong>Effective</strong> - Research-based activities with immediate feedback
            </p>
            <p>
              ✓ <strong>Engaging</strong> - Interactive, game-like experience motivates learners
            </p>
            <p>
              ✓ <strong>Accessible</strong> - Works on any device, anywhere, anytime
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/30">
            <p className="text-center text-xl font-bold">
              The Literacy Starter Kit: Building Better Readers, Building a Better Future
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">📝 Presentation Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Slide 1:</strong> Introduce yourself and the project title. Mention it's a digital literacy platform.</li>
            <li><strong>Slide 2:</strong> Explain why digital literacy tools are relevant today. Connect to sustainability and engagement.</li>
            <li><strong>Slide 3:</strong> Emphasize the real problems - paper waste, lack of engagement, delayed feedback.</li>
            <li><strong>Slide 4:</strong> Show how your project solves these problems with specific objectives.</li>
            <li><strong>Slide 5:</strong> Identify who benefits from this platform - students, teachers, parents.</li>
            <li><strong>Slide 6:</strong> Highlight the key technical and educational features that make it work.</li>
            <li><strong>Slide 7:</strong> Describe each of the 4 activities briefly. Consider showing the live demo if possible!</li>
            <li><strong>Slide 8:</strong> Explain how progress tracking and gamification keep students motivated.</li>
            <li><strong>Slide 9:</strong> Discuss the broader impact on education, environment, and accessibility.</li>
            <li><strong>Slide 10:</strong> Conclude with a strong summary and memorable closing statement.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700 italic">
            Tip: Practice your presentation timing - aim for 8-12 minutes total. Leave 2-3 minutes for questions!
          </p>
        </div>
      </div>
    </div>
  );
}
