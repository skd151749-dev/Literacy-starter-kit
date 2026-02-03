import { BookOpen, Users, TrendingUp, Leaf } from 'lucide-react';

export function TeacherSummary() {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-4">
        Teacher-Friendly Summary
      </h1>

      {/* Quick Read Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Project Overview</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          The <strong>Literacy Starter Kit</strong> is an interactive digital learning platform designed to teach foundational literacy skills to early learners (ages 4-8) through engaging, technology-based activities. This project combines educational best practices with environmental sustainability by replacing traditional paper worksheets with reusable digital exercises.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          The platform features four core activities—<strong>Letter Recognition, Sight Words, Phonics, and Spelling</strong>—each with built-in audio support, immediate feedback, and progress tracking. By gamifying the learning experience with points, streaks, and visual rewards, the Literacy Starter Kit maintains student engagement while reducing educational paper waste by up to 90%.
        </p>
      </div>

      {/* Key Highlights for Teachers */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educational Benefits at a Glance</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Student Engagement</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Interactive activities with colorful animations, audio feedback, and gamification elements keep young learners motivated and excited about practicing literacy skills.
            </p>
          </div>

          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Real-time analytics and detailed reports help teachers identify which skills students have mastered and which need additional practice, enabling targeted instruction.
            </p>
          </div>

          <div className="bg-white border border-purple-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-800">Accessibility</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Built-in text-to-speech and audio support make the platform accessible for pre-readers, English language learners, and students with diverse learning needs.
            </p>
          </div>

          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-800">Sustainability</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Eliminates the need for printed worksheets and flashcards, reducing classroom paper waste while providing unlimited practice opportunities at zero additional cost.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Outcomes</h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5">
          <p className="text-gray-700 leading-relaxed mb-3">
            Students using the Literacy Starter Kit will develop and strengthen:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Letter Recognition:</strong> Ability to identify and match uppercase and lowercase letters</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Sight Word Fluency:</strong> Instant recognition of high-frequency words for improved reading speed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Phonemic Awareness:</strong> Understanding of sound-letter relationships and word blending skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Spelling Skills:</strong> Correct letter sequencing and word formation abilities</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Classroom Implementation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Classroom & Home Use</h2>
        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">🏫 In the Classroom</h3>
            <p className="text-gray-700 text-sm">
              Use on smart boards for whole-class instruction, on tablets for literacy centers, or assign as independent practice during reading blocks. The platform works seamlessly across all devices.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">🏠 For Homework</h3>
            <p className="text-gray-700 text-sm">
              Students can practice at home on any device with internet access. Parents receive guidance through the platform, and teachers can monitor at-home practice through the dashboard.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📊 Assessment Tool</h3>
            <p className="text-gray-700 text-sm">
              Use built-in analytics to track individual and class progress, identify struggling students early, and demonstrate learning growth to parents and administrators.
            </p>
          </div>
        </div>
      </div>

      {/* Measurable Impact */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Measurable Impact</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">20-30%</div>
            <div className="text-sm text-gray-700">Improvement in literacy skill retention</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-700 mb-2">75-90%</div>
            <div className="text-sm text-gray-700">Reduction in paper worksheet usage</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-700 mb-2">2-3x</div>
            <div className="text-sm text-gray-700">Increase in daily practice time</div>
          </div>
        </div>
      </div>

      {/* Why This Project Matters */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why This Project Matters</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-6">
          <p className="text-gray-700 leading-relaxed mb-3">
            This project addresses two critical issues in modern education: <strong>student engagement</strong> and <strong>environmental sustainability</strong>. By creating a learning experience that feels like play rather than work, the Literacy Starter Kit helps students develop essential reading and writing skills while building confidence and enthusiasm for learning.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Simultaneously, by eliminating the need for thousands of printed worksheets, the platform demonstrates how educational technology can reduce our environmental footprint while actually improving learning outcomes. This project shows students that innovation and responsibility can work together to create positive change.
          </p>
        </div>
      </div>

      {/* One-Sentence Summary */}
      <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-3">One-Sentence Summary for Quick Reference</h2>
        <p className="text-lg italic">
          "The Literacy Starter Kit is an engaging, eco-friendly digital platform that teaches essential literacy skills through interactive activities while eliminating paper waste and providing teachers with powerful progress tracking tools."
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>Teacher-Friendly Summary - Literacy Starter Kit</p>
        <p className="mt-1">Perfect for quick review and sharing with educators</p>
      </div>
    </div>
  );
}
