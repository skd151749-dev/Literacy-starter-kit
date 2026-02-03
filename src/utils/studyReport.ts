export interface StudyReportData {
  subject: string;
  studentName: string;
  classGrade: string;
  teacherName: string;
  schoolName: string;
  academicYear: string;
  submissionDate: string;
  progressData?: {
    letterRecognition: number;
    sightWords: number;
    phonics: number;
    spelling: number;
    totalScore: number;
    streak: number;
    level: number;
  };
}

const STUDY_REPORT_KEY = 'literacy_study_report';

export function saveStudyReport(data: StudyReportData): void {
  try {
    localStorage.setItem(STUDY_REPORT_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save study report:', error);
  }
}

export function getStudyReport(): StudyReportData | null {
  try {
    const data = localStorage.getItem(STUDY_REPORT_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load study report:', error);
    return null;
  }
}

export function clearStudyReport(): void {
  try {
    localStorage.removeItem(STUDY_REPORT_KEY);
  } catch (error) {
    console.error('Failed to clear study report:', error);
  }
}

export function updateStudyReportProgress(progressData: StudyReportData['progressData']): void {
  const report = getStudyReport();
  if (report) {
    report.progressData = progressData;
    saveStudyReport(report);
  }
}
