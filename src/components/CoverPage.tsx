import { BookOpen } from 'lucide-react';

export function CoverPage() {
  return (
    <div className="p-12 flex flex-col items-center justify-center min-h-[800px] text-center">
      {/* Decorative Border */}
      <div className="border-4 border-blue-600 rounded-lg p-12 w-full max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-6 rounded-full">
            <BookOpen className="w-16 h-16 text-blue-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Literacy Starter Kit
        </h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-700 mb-12 italic">
          An Interactive Digital Learning Platform for Early Literacy Development
        </p>

        {/* Project Details */}
        <div className="space-y-4 text-left bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Subject:</span>
            <span className="text-gray-600">Computer Science / Educational Technology</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Student Name:</span>
            <span className="text-gray-600">[Your Name Here]</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Class/Grade:</span>
            <span className="text-gray-600">[Your Class/Grade]</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Teacher's Name:</span>
            <span className="text-gray-600">[Teacher Name]</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">School:</span>
            <span className="text-gray-600">[School Name]</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Academic Year:</span>
            <span className="text-gray-600">2025-2026</span>
          </div>
          
          <div className="grid grid-cols-[140px,1fr] gap-2">
            <span className="font-semibold text-gray-700">Date:</span>
            <span className="text-gray-600">January 21, 2026</span>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 mt-12">
        A sustainable, eco-friendly approach to literacy education
      </p>
    </div>
  );
}
