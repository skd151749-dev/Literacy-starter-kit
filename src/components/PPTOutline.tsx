export function PPTOutline() {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-4">
        PowerPoint Presentation Outline
      </h1>

      <p className="text-gray-600 text-center mb-8 italic">
        Copy the content from each slide below to create your presentation
      </p>

      {/* Slide 1 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 1: Title Slide</h2>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-center text-gray-800">Literacy Starter Kit</h3>
          <p className="text-center text-lg text-gray-600">An Interactive Digital Learning Platform</p>
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>[Your Name]</p>
            <p>[Class/Grade] | [Teacher Name]</p>
            <p>[School Name]</p>
            <p>Academic Year 2025-2026</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600">
          <strong>Design Tip:</strong> Use a clean background with book/education imagery
        </div>
      </div>

      {/* Slide 2 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 2: Introduction</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">What is the Literacy Starter Kit?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Digital platform for early literacy education</li>
          <li>Interactive learning activities for ages 4-8</li>
          <li>Combines technology with proven teaching methods</li>
          <li>Sustainable alternative to paper-based learning</li>
        </ul>
        <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600">
          <strong>Visual Suggestion:</strong> Include icons representing digital learning and books
        </div>
      </div>

      {/* Slide 3 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-red-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 3: Problem Statement</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Challenges in Traditional Literacy Education</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Learning Issues:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>Limited student engagement</li>
              <li>No immediate feedback</li>
              <li>Inconsistent practice</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Environmental Issues:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>Excessive paper waste</li>
              <li>High material costs</li>
              <li>Single-use resources</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600">
          <strong>Visual Suggestion:</strong> Use contrasting colors or icons to show problems
        </div>
      </div>

      {/* Slide 4 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 4: Goals & Objectives</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Project Goals</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <p className="text-gray-700"><strong>Educational:</strong> Make literacy learning engaging and effective</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌱</span>
            <p className="text-gray-700"><strong>Environmental:</strong> Reduce educational paper waste</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <p className="text-gray-700"><strong>Tracking:</strong> Enable progress monitoring for teachers/parents</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">♿</span>
            <p className="text-gray-700"><strong>Accessibility:</strong> Provide audio support for all learners</p>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 5: Target Users</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Who Benefits?</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded">
            <h4 className="font-semibold text-blue-800 mb-1">👶 Students</h4>
            <p className="text-sm text-gray-700">Ages 4-8, early learners</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <h4 className="font-semibold text-green-800 mb-1">👨‍🏫 Teachers</h4>
            <p className="text-sm text-gray-700">Classroom & remote instruction</p>
          </div>
          <div className="bg-orange-50 p-3 rounded">
            <h4 className="font-semibold text-orange-800 mb-1">👨‍👩‍👧 Parents</h4>
            <p className="text-sm text-gray-700">Home learning support</p>
          </div>
          <div className="bg-purple-50 p-3 rounded">
            <h4 className="font-semibold text-purple-800 mb-1">🏫 Schools</h4>
            <p className="text-sm text-gray-700">Institutions seeking sustainability</p>
          </div>
        </div>
      </div>

      {/* Slide 6 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 6: Key Features</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Platform Highlights</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <span className="text-sm text-gray-700">4 Interactive Activities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔊</span>
            <span className="text-sm text-gray-700">Audio & Text-to-Speech</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span className="text-sm text-gray-700">Scoring & Streaks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span className="text-sm text-gray-700">Visual Feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">♻️</span>
            <span className="text-sm text-gray-700">Reusable Digital Surface</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📱</span>
            <span className="text-sm text-gray-700">Multi-Device Support</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600">
          <strong>Visual Suggestion:</strong> Use icons or screenshots of the platform
        </div>
      </div>

      {/* Slide 7 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-orange-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 7: Practice Section Activities</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Four Core Learning Modules</h3>
        <div className="space-y-2">
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <h4 className="font-semibold text-gray-800">1. Letter Recognition</h4>
            <p className="text-sm text-gray-600">Identify uppercase/lowercase letters with audio</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3 py-1">
            <h4 className="font-semibold text-gray-800">2. Sight Words</h4>
            <p className="text-sm text-gray-600">Master high-frequency words for fluency</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-3 py-1">
            <h4 className="font-semibold text-gray-800">3. Phonics</h4>
            <p className="text-sm text-gray-600">Connect sounds to letters through blending</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <h4 className="font-semibold text-gray-800">4. Spelling</h4>
            <p className="text-sm text-gray-600">Build words with interactive letter tiles</p>
          </div>
        </div>
      </div>

      {/* Slide 8 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-teal-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 8: Progress Tracking</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Monitoring Student Success</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Real-time Scoring:</strong> Immediate feedback on performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Streak System:</strong> Daily practice motivation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Achievement Badges:</strong> Celebrate milestones</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Detailed Analytics:</strong> Teacher/parent dashboards</span>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600">
          <strong>Visual Suggestion:</strong> Show sample progress charts or dashboard mockup
        </div>
      </div>

      {/* Slide 9 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-green-700 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 9: Expected Impact</h2>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Making a Difference</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">📈 Educational</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 20-30% skill improvement</li>
              <li>• Higher engagement</li>
              <li>• Personalized learning</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environmental</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 75-90% less paper waste</li>
              <li>• Lower carbon footprint</li>
              <li>• Cost savings</li>
            </ul>
          </div>
        </div>
        <div className="mt-3 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-lg">
            <p className="font-bold text-gray-800">Sustainable Education for a Better Future</p>
          </div>
        </div>
      </div>

      {/* Slide 10 */}
      <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="bg-blue-700 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-4">
          <h2 className="text-lg font-semibold">Slide 10: Conclusion</h2>
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Literacy Starter Kit</h3>
        <p className="text-center text-lg text-gray-700 mb-4 italic">
          "Transforming Literacy Education Through Technology and Sustainability"
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4">
          <p className="text-center text-gray-700">
            An innovative solution that makes learning engaging, effective, and environmentally responsible.
          </p>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p className="font-semibold mb-2">Thank You!</p>
          <p>Questions & Discussion</p>
        </div>
      </div>

      {/* Presentation Tips */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
        <h3 className="font-semibold text-yellow-900 mb-3">💡 Presentation Tips</h3>
        <ul className="space-y-2 text-sm text-yellow-900">
          <li><strong>Design:</strong> Use consistent colors (blues, greens for education/environment theme)</li>
          <li><strong>Fonts:</strong> Keep text large and readable (minimum 24pt for body text)</li>
          <li><strong>Images:</strong> Add relevant icons, screenshots, or illustrations to each slide</li>
          <li><strong>Practice:</strong> Aim for 30-45 seconds per slide (5-7 minute total presentation)</li>
          <li><strong>Engagement:</strong> Ask audience questions, show enthusiasm for the project</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>PowerPoint Outline - Literacy Starter Kit</p>
        <p className="mt-1">Copy each slide's content into your presentation software</p>
      </div>
    </div>
  );
}
