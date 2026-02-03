import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getStudyReport, clearStudyReport, type StudyReportData } from '../utils/studyReport';
import { getTotalStats, getProgress } from '../utils/progress';
import { getCurrentLevel } from '../utils/levels';
import { Download, FileText, Trash2, Award, Star, Target, TrendingUp, Printer } from 'lucide-react';

export function StudyReport() {
  const [report, setReport] = useState<StudyReportData | null>(null);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = () => {
    const savedReport = getStudyReport();
    if (savedReport) {
      // Update with current progress data
      const stats = getTotalStats();
      const level = getCurrentLevel();
      
      // Get individual activity scores
      const letterStats = getProgress('letters');
      const sightWordsStats = getProgress('sight-words');
      const phonicsStats = getProgress('phonics');
      const spellingStats = getProgress('spelling');
      
      savedReport.progressData = {
        letterRecognition: letterStats.correct || 0,
        sightWords: sightWordsStats.correct || 0,
        phonics: phonicsStats.correct || 0,
        spelling: spellingStats.correct || 0,
        totalScore: stats.totalCorrect || 0,
        streak: stats.bestStreak || 0,
        level: level.level
      };
      setReport(savedReport);
    }
  };

  const handleClearReport = () => {
    if (window.confirm('Are you sure you want to clear your study report? This action cannot be undone.')) {
      clearStudyReport();
      setReport(null);
      setShowReport(false);
    }
  };

  const handlePrintPDF = () => {
    // Temporarily show the report if it's hidden
    const wasHidden = !showReport;
    if (wasHidden) {
      setShowReport(true);
    }
    
    // Wait for the DOM to update before printing
    setTimeout(() => {
      window.print();
      
      // Restore the previous state after printing
      if (wasHidden) {
        setTimeout(() => setShowReport(false), 100);
      }
    }, 100);
  };

  const handleDownloadReport = () => {
    if (!report) return;
    
    // Create a formatted text version of the report
    const reportText = `
╔═══════════════════════════════════════════════════════════════╗
║          LITERACY STARTER KIT - STUDY REPORT                  ║
║          An Interactive Digital Learning Platform              ║
╚═══════════════════════════════════════════════════════════════╝

📋 STUDENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:               ${report.studentName}
Class/Grade:        ${report.classGrade || 'N/A'}
School:             ${report.schoolName || 'N/A'}
Teacher:            ${report.teacherName || 'N/A'}
Subject:            ${report.subject || 'N/A'}
Academic Year:      ${report.academicYear || 'N/A'}
Submission Date:    ${new Date(report.submissionDate).toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}


📊 LEARNING PROGRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 Current Level:        ${report.progressData?.level || 0}
🎯 Total Score:          ${report.progressData?.totalScore || 0} points
🔥 Current Streak:       ${report.progressData?.streak || 0} days


🎓 ACTIVITY SCORES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔤 Letter Recognition:   ${report.progressData?.letterRecognition || 0} points
👀 Sight Words:          ${report.progressData?.sightWords || 0} points
🔊 Phonics:              ${report.progressData?.phonics || 0} points
✏️  Spelling:             ${report.progressData?.spelling || 0} points


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report Generated: ${new Date().toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

© ${new Date().getFullYear()} Literacy Starter Kit
Empowering Young Learners Through Interactive Education 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Create a blob and download
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `study-report-${report.studentName.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!report) {
    return (
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
        <FileText className="w-12 h-12 text-blue-400 mx-auto mb-3" />
        <p className="text-gray-700 font-medium mb-1">No Study Report Yet</p>
        <p className="text-sm text-gray-600">
          Complete the Cover Page form in Documentation to create your study report
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Study Report Saved</h3>
              <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReport(!showReport)}
            className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-gray-700"
          >
            {showReport ? 'Hide Report' : 'View Report'}
          </motion.button>
        </div>

        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
          >
            <Download className="w-4 h-4" />
            Download Report
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrintPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
          >
            <Printer className="w-4 h-4" />
            Print Report
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClearReport}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
          >
            <Trash2 className="w-4 h-4" />
            Clear Report
          </motion.button>
        </div>
      </motion.div>

      {showReport && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          id="study-report-content"
          className="bg-white rounded-xl shadow-lg p-8 space-y-6 relative overflow-hidden print-preserve-colors"
        >
          {/* Cute Kid-Friendly Decorations */}
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <div className="text-9xl">🌟</div>
          </div>
          <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
            <div className="text-8xl">🎨</div>
          </div>
          <div className="absolute top-1/2 right-4 opacity-15 pointer-events-none hidden md:block">
            <div className="text-7xl">🎈</div>
          </div>
          <div className="absolute top-20 left-4 opacity-15 pointer-events-none hidden md:block">
            <div className="text-6xl">⭐</div>
          </div>

          {/* Header */}
          <div className="text-center border-4 border-double border-purple-400 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-blue-50 relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">LITERACY STARTER KIT - STUDY REPORT</h2>
            <p className="text-sm text-gray-600">An Interactive Digital Learning Platform</p>
          </div>

          {/* Student Information */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 border-b-2 border-purple-300 pb-2">
              <div className="text-4xl">📋</div>
              <h3 className="text-xl font-bold text-gray-800">STUDENT INFORMATION</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Name:</span>
                <span className="text-gray-800">{report.studentName}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Class/Grade:</span>
                <span className="text-gray-800">{report.classGrade || 'N/A'}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">School:</span>
                <span className="text-gray-800">{report.schoolName || 'N/A'}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Teacher:</span>
                <span className="text-gray-800">{report.teacherName || 'N/A'}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Subject:</span>
                <span className="text-gray-800">{report.subject || 'N/A'}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Academic Year:</span>
                <span className="text-gray-800">{report.academicYear || 'N/A'}</span>
              </div>
              <div className="flex items-baseline gap-2 md:col-span-2">
                <span className="font-semibold text-gray-700 min-w-[120px]">Submission Date:</span>
                <span className="text-gray-800">{new Date(report.submissionDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>

          {/* Learning Progress */}
          {report.progressData && (
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 border-b-2 border-blue-300 pb-2">
                <div className="text-4xl">📊</div>
                <h3 className="text-xl font-bold text-gray-800">LEARNING PROGRESS</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-700">Current Level:</span>
                  </div>
                  <p className="text-3xl font-bold text-purple-700">{report.progressData.level}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-700">Total Score:</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-700">{report.progressData.totalScore} <span className="text-lg">points</span></p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-gray-700">Current Streak:</span>
                  </div>
                  <p className="text-3xl font-bold text-orange-700">{report.progressData.streak} <span className="text-lg">days</span></p>
                </div>
              </div>
            </div>
          )}

          {/* Activity Scores */}
          {report.progressData && (
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 border-b-2 border-green-300 pb-2">
                <div className="text-4xl">🎓</div>
                <h3 className="text-xl font-bold text-gray-800">ACTIVITY SCORES</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: 'Letter Recognition', score: report.progressData.letterRecognition, icon: '🔤', color: 'from-blue-50 to-blue-100', textColor: 'text-blue-700', borderColor: 'border-blue-200' },
                  { name: 'Sight Words', score: report.progressData.sightWords, icon: '👀', color: 'from-green-50 to-green-100', textColor: 'text-green-700', borderColor: 'border-green-200' },
                  { name: 'Phonics', score: report.progressData.phonics, icon: '🔊', color: 'from-purple-50 to-purple-100', textColor: 'text-purple-700', borderColor: 'border-purple-200' },
                  { name: 'Spelling', score: report.progressData.spelling, icon: '✏️', color: 'from-orange-50 to-orange-100', textColor: 'text-orange-700', borderColor: 'border-orange-200' }
                ].map((activity, index) => (
                  <div key={index} className={`flex items-center justify-between bg-gradient-to-br ${activity.color} rounded-lg p-4 border-2 ${activity.borderColor}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{activity.icon}</span>
                      <span className="font-semibold text-gray-700">{activity.name}:</span>
                    </div>
                    <span className={`font-bold ${activity.textColor} text-2xl`}>
                      {activity.score} <span className="text-base">points</span>
                    </span>
                  </div>
                ))}\n              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t-2 border-gray-300 pt-4 text-center text-sm text-gray-600 relative z-10">
            <p className="font-semibold mb-1">Report Generated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <p className="text-xs mt-2">© {new Date().getFullYear()} Literacy Starter Kit</p>
            <p className="text-xs text-gray-500">Empowering Young Learners Through Interactive Education 🌟</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}