export function Summary() {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-4">
        Literacy Starter Kit: Executive Summary
      </h1>

      {/* Quick Overview */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Project at a Glance</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Project Name:</strong> Literacy Starter Kit
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Category:</strong> Educational Technology / Interactive Learning Platform
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Target Users:</strong> Young learners (ages 4-8), teachers, parents
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Purpose:</strong> Digital platform for early literacy development with focus on sustainability
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          The Literacy Starter Kit is an interactive digital learning platform designed to make early literacy education engaging, effective, and environmentally sustainable. By replacing traditional paper-based worksheets with reusable digital activities, this project combines educational excellence with environmental responsibility.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Problem & Solution</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">The Problem</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Traditional worksheets lack engagement</li>
              <li>Excessive paper waste in education</li>
              <li>No immediate feedback for students</li>
              <li>Difficulty tracking progress</li>
              <li>Limited accessibility features</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Our Solution</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Interactive, gamified activities</li>
              <li>100% digital, reusable platform</li>
              <li>Real-time feedback system</li>
              <li>Comprehensive progress tracking</li>
              <li>Audio support and text-to-speech</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="font-semibold text-gray-800">Four Interactive Activities</h3>
              <p className="text-gray-700 text-sm">Letter Recognition, Sight Words, Phonics, and Spelling—each targeting specific literacy skills</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔊</span>
            <div>
              <h3 className="font-semibold text-gray-800">Audio & Text-to-Speech</h3>
              <p className="text-gray-700 text-sm">Built-in pronunciation support making learning accessible for all students</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h3 className="font-semibold text-gray-800">Scoring & Streaks</h3>
              <p className="text-gray-700 text-sm">Gamification elements including points, badges, and daily practice streaks</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
              <p className="text-gray-700 text-sm">Detailed analytics for teachers and parents to monitor student development</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h3 className="font-semibold text-gray-800">Eco-Friendly</h3>
              <p className="text-gray-700 text-sm">Reduces paper waste by 75-90% compared to traditional worksheet-based learning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold text-gray-800">Responsive Design</h3>
              <p className="text-gray-700 text-sm">Works on tablets, phones, laptops, and smart boards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Overview */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Practice Activities Overview</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="border-l-4 border-blue-500 bg-gray-50 p-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Letter Recognition</h3>
            <p className="text-gray-700 text-sm">Identify and match uppercase/lowercase letters with audio support</p>
          </div>
          <div className="border-l-4 border-green-500 bg-gray-50 p-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Sight Words</h3>
            <p className="text-gray-700 text-sm">Master high-frequency words for improved reading fluency</p>
          </div>
          <div className="border-l-4 border-purple-500 bg-gray-50 p-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Phonics</h3>
            <p className="text-gray-700 text-sm">Connect sounds to letters through blending and segmentation exercises</p>
          </div>
          <div className="border-l-4 border-orange-500 bg-gray-50 p-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Spelling</h3>
            <p className="text-gray-700 text-sm">Build words using interactive letter tiles and drag-drop activities</p>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Expected Impact</h2>
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Educational Benefits</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>20-30% improvement in literacy skill retention</li>
              <li>Increased student engagement and motivation</li>
              <li>Personalized learning at individual pace</li>
              <li>Improved accessibility for diverse learners</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Environmental Impact</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>75-90% reduction in paper-based worksheets</li>
              <li>Lower carbon footprint vs. printed materials</li>
              <li>Cost savings for schools and families</li>
              <li>Promotes sustainable education practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Technical Implementation</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Built with modern web technologies including React for interactive components, TypeScript for reliability, and Tailwind CSS for responsive design. The platform uses Web Audio API for text-to-speech functionality and local storage for progress tracking, ensuring privacy and offline capability.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          The Literacy Starter Kit demonstrates how technology can enhance education while promoting sustainability. By combining engaging interactive activities with environmental responsibility, this project creates a comprehensive literacy learning experience that benefits students, teachers, parents, and the planet. The platform transforms traditional literacy education into an exciting, effective, and eco-friendly journey that prepares young learners for academic success.
        </p>
      </section>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">Key Takeaways</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-sm text-gray-700">Interactive Activities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">75-90%</div>
            <div className="text-sm text-gray-700">Paper Waste Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
            <div className="text-sm text-gray-700">Reusable & Sustainable</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>Executive Summary - Literacy Starter Kit</p>
        <p className="mt-1">Ready for submission and presentation</p>
      </div>
    </div>
  );
}
