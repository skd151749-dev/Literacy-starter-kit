import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { CertificateGenerator } from "../CertificateGenerator";
import { StudyReport } from "../StudyReport";
import { saveStudyReport } from "../../utils/studyReport";

export function CoverPage() {
  const [formData, setFormData] = useState({
    subject: "",
    studentName: "",
    classGrade: "",
    teacherName: "",
    schoolName: "",
    academicYear: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.studentName.trim()) {
      // Save the study report
      saveStudyReport({
        ...formData,
        submissionDate: new Date().toISOString()
      });
      setIsSubmitted(true);
    } else {
      alert("Please enter at least your name before submitting!");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-12 min-h-[800px] flex flex-col justify-center items-center text-center">
      {/* Decorative Header */}
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
        <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Literacy Starter Kit
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        An Interactive Digital Learning Platform for Early Literacy Development
      </p>

      {/* Divider */}
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-12"></div>

      {/* Editable Fields */}
      <div className="max-w-md w-full space-y-6 text-left bg-gray-50 rounded-lg p-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
          <input 
            type="text" 
            placeholder="e.g., Computer Science / Educational Technology"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Student Name *</label>
          <input 
            type="text" 
            placeholder="Your Name"
            value={formData.studentName}
            onChange={(e) => handleChange('studentName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Class/Grade</label>
          <input 
            type="text" 
            placeholder="e.g., Grade 10 / Class XII"
            value={formData.classGrade}
            onChange={(e) => handleChange('classGrade', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Teacher's Name</label>
          <input 
            type="text" 
            placeholder="Teacher Name"
            value={formData.teacherName}
            onChange={(e) => handleChange('teacherName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">School Name</label>
          <input 
            type="text" 
            placeholder="School Name"
            value={formData.schoolName}
            onChange={(e) => handleChange('schoolName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Academic Year</label>
          <input 
            type="text" 
            placeholder="e.g., 2024-2025"
            value={formData.academicYear}
            onChange={(e) => handleChange('academicYear', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        {!isSubmitted ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Submit Information
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-green-700 font-semibold">Information Submitted!</span>
          </motion.div>
        )}
      </div>

      {/* Certificate Generator - Shows after submission */}
      {isSubmitted && formData.studentName && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 w-full max-w-4xl"
        >
          <CertificateGenerator learnerName={formData.studentName} />
        </motion.div>
      )}

      {/* Footer */}
      <div className="mt-12 text-sm text-gray-500">
        Date of Submission: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
}