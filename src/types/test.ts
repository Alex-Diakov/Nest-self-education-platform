/**
 * Testing, assessment, rubrics, and diagnostic engine types
 */

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface QuestionChoice {
  id: string;
  text: string;
  codeSnippet?: string;
}

export interface AssessmentQuestion {
  id: string;
  prompt: string;
  codeContext?: string;
  choices: QuestionChoice[];
  correctChoiceId: string;
  explanation: string;
  skillDomain: string;
  weight: number;
}

export interface AssessmentTest {
  id: string;
  slug: string;
  title: string;
  domain: string;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  timeLimitMinutes: number;
  questionCount: number;
  passingScorePercent: number;
  overview: string;
  prerequisites: string[];
  skillsTested: string[];
  questions: AssessmentQuestion[];
}

export interface UserAssessmentResult {
  testId: string;
  testTitle: string;
  completedAt: string;
  scorePercent: number;
  correctAnswersCount: number;
  totalQuestions: number;
  passed: boolean;
  timeSpentSeconds: number;
  domainBreakdown: {
    domain: string;
    percentage: number;
  }[];
  certificateId: string;
}
