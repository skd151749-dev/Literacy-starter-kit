import { useState } from 'react';
import { FileText, Download, BookOpen, Sparkles, Award, Save } from 'lucide-react';
import { FullReport } from './docs/FullReport';
import { KidFriendlyExplanation } from './docs/KidFriendlyExplanation';
import { BenefitsAtAGlance } from './docs/BenefitsAtAGlance';
import { StudyReport } from './StudyReport';
import { ImageWithFallback } from './figma/ImageWithFallback';

type DocSection = 'full' | 'kidfriendly' | 'benefits' | 'report';

export function Documentation() {
  const [activeSection, setActiveSection] = useState<DocSection>('report');

  const sections = [
    { id: 'report' as DocSection, name: 'My Study Report', icon: Save },
    { id: 'full' as DocSection, name: 'Full Report', icon: FileText },
    { id: 'kidfriendly' as DocSection, name: 'What Is This App?', icon: Sparkles },
    { id: 'benefits' as DocSection, name: 'At-a-Glance Benefits', icon: Award },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Project Documentation</h1>
        <p className="text-gray-600">Complete documentation ready for school submission</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-4 sticky top-4">
            <h3 className="font-bold text-gray-800 mb-4">Sections</h3>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                );
              })}
            </nav>

            <button
              onClick={handlePrint}
              className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Print/Save PDF
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white rounded-xl shadow-md">
            {activeSection === 'report' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">My Study Report</h2>
                <p className="text-gray-600 mb-6">
                  View and download your personalized study report with progress tracking
                </p>
                <StudyReport />
              </div>
            )}
            {activeSection === 'full' && <FullReport />}
            {activeSection === 'kidfriendly' && <KidFriendlyExplanation />}
            {activeSection === 'benefits' && <BenefitsAtAGlance />}
          </div>

          {/* Footer with Children Learning Stickers */}
          <div className="mt-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow-md p-8">
            {/* Top Row - Learning Activities */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwcmVhZGluZyUyMGJvb2tzfGVufDF8fHx8MTc3MDAwMzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children learning and reading"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763310225537-f7161d5c93e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3R1ZHlpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcwMDAzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kids studying in classroom"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677091430647-1e7641a5354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHdyaXRpbmclMjBhbHBoYWJldHxlbnwxfHx8fDE3NzAwMDM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Child writing alphabet"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574758324765-a29c77fb9c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTk2NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy children playing and learning"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcmVhZGluZyUyMGJvb2tzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDAzNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kids reading colorful books"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758612898181-d7c92f0e21d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHN0dWRlbnQlMjB3cml0aW5nJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzcwMDAzNjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Child student writing in notebook"
                className="w-full h-24 rounded-xl object-cover shadow-md hover:scale-105 transition-transform"
              />
            </div>

            {/* Middle Section - Fun Icons */}
            <div className="flex items-center justify-center gap-6 mb-6 text-5xl">
              <span className="animate-bounce">📚</span>
              <span className="animate-pulse">✏️</span>
              <span className="animate-bounce">🎨</span>
              <span className="animate-pulse">📖</span>
              <span className="animate-bounce">🌟</span>
              <span className="animate-pulse">🎯</span>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Empowering Young Learners Through Interactive Education
              </h3>
              <p className="text-gray-600 text-sm">
                Making learning fun, engaging, and accessible for every child 🌈
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">🎮</div>
                <p className="text-sm font-semibold text-gray-700">Interactive Games</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-sm font-semibold text-gray-700">Progress Tracking</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">🌱</div>
                <p className="text-sm font-semibold text-gray-700">Eco-Friendly</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">💡</div>
                <p className="text-sm font-semibold text-gray-700">Fun Learning</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}