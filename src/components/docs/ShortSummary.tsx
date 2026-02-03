export function ShortSummary() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Literacy Starter Kit: Project Summary
      </h1>

      <div className="prose prose-sm max-w-none">
        {/* Overview */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Literacy Starter Kit is an interactive web-based platform designed to support early literacy development through engaging digital activities. The platform addresses environmental concerns by eliminating paper waste while providing unlimited, reusable practice opportunities for foundational reading and writing skills. Built using modern web technologies (React, TypeScript, Tailwind CSS), it offers four core literacy activities with audio support, real-time feedback, and comprehensive progress tracking.
          </p>
        </section>

        {/* Problem & Solution */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Problem & Solution
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-3">
            <h3 className="font-bold text-gray-800 mb-2">The Problem:</h3>
            <p className="text-gray-700 text-sm">
              Traditional literacy education relies heavily on paper worksheets, creating significant waste. Students need repeated practice, but copying materials is resource-intensive. Additionally, static worksheets lack engagement factors like immediate feedback, audio support, and progress tracking that enhance modern learning.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-bold text-gray-800 mb-2">The Solution:</h3>
            <p className="text-gray-700 text-sm">
              A digital platform providing unlimited, engaging literacy practice without paper waste. Interactive activities with text-to-speech support, instant feedback, gamification elements (scoring, streaks), and automatic progress tracking create an effective, sustainable learning environment accessible on any device.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-2">🔤 Letter Recognition</h3>
              <p className="text-sm text-gray-700">
                Students hear a letter and select it from visual options, developing auditory discrimination and visual recognition skills.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-2">👁️ Sight Words</h3>
              <p className="text-sm text-gray-700">
                High-frequency words are shown and spoken, then hidden. Students type from memory, building instant word recognition.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-bold text-purple-800 mb-2">🔊 Phonics</h3>
              <p className="text-sm text-gray-700">
                Word family activities teach sound-letter relationships and rhyming patterns through listening and matching exercises.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-bold text-orange-800 mb-2">✏️ Spelling</h3>
              <p className="text-sm text-gray-700">
                Students spell words they hear, with visual cues and hints available. Develops spelling accuracy and sound-to-letter mapping.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-800 mb-2">Additional Features:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
              <li>✓ Text-to-Speech Audio Support</li>
              <li>✓ Immediate Visual Feedback</li>
              <li>✓ Score & Streak Tracking</li>
              <li>✓ Accuracy Percentages</li>
              <li>✓ Progress Dashboard</li>
              <li>✓ Fully Responsive Design</li>
              <li>✓ Zero Paper Waste</li>
              <li>✓ Unlimited Practice</li>
            </ul>
          </div>
        </section>

        {/* Target Users */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Target Users
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>• Primary:</strong> Early elementary students (ages 5-8) and struggling readers needing literacy skill development</li>
            <li><strong>• Secondary:</strong> Teachers for classroom instruction, parents for home support, tutors for intervention programs</li>
          </ul>
        </section>

        {/* Technical Approach */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Technical Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Built with <strong>React</strong> and <strong>TypeScript</strong> for robust, maintainable code. <strong>Tailwind CSS</strong> ensures responsive, attractive design across devices. <strong>Web Speech API</strong> provides native text-to-speech functionality. <strong>Local Storage</strong> tracks progress without requiring server infrastructure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Design prioritizes accessibility, usability for young learners (large buttons, clear typography), and performance on various devices including tablets, smartphones, laptops, and classroom smart boards.
          </p>
        </section>

        {/* Expected Impact */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Expected Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">📚 Educational</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Improved skill acquisition</li>
                <li>• Increased engagement</li>
                <li>• Enhanced retention</li>
                <li>• More practice volume</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">🌱 Environmental</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zero paper consumption</li>
                <li>• Reduced carbon footprint</li>
                <li>• Sustainable practices</li>
                <li>• Scalable without waste</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">♿ Accessibility</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Universal device access</li>
                <li>• No material costs</li>
                <li>• Audio support included</li>
                <li>• Independent learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Literacy Starter Kit successfully combines educational effectiveness with environmental responsibility. By providing engaging, interactive literacy activities with comprehensive feedback and progress tracking, it addresses modern educational needs while eliminating paper waste. The platform demonstrates how thoughtful technology application can enhance learning outcomes, increase accessibility, and promote sustainability simultaneously. It serves as both a practical educational tool and a model for future digital learning resources.
          </p>
        </section>

        {/* Metadata Box */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-gray-800 mb-3 text-center">Quick Project Facts</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div><strong>Project Type:</strong> Web Application</div>
            <div><strong>Primary Technology:</strong> React + TypeScript</div>
            <div><strong>Target Age:</strong> 5-8 years old</div>
            <div><strong>Activities Included:</strong> 4 core literacy skills</div>
            <div><strong>Environmental Impact:</strong> 100% paper-free</div>
            <div><strong>Accessibility:</strong> Multi-device support</div>
            <div><strong>Progress Tracking:</strong> Automatic & persistent</div>
            <div><strong>Cost:</strong> Zero consumable materials</div>
          </div>
        </div>
      </div>
    </div>
  );
}
