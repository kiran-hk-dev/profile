export interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  realWorld?: string;
  commands?: string[];
  followUp?: string[];
  difficulty: "beginner" | "intermediate" | "advanced" | "senior";
}

export interface JenkinsStage {
  id: string;
  name: string;
  description: string;
  whatHappens: string;
  commands: string[];
  commonErrors: string[];
  troubleshooting: string;
}

export interface JenkinsArchitectureData {
  controller: { name: string; purpose: string; responsibilities: string[] };
  agents: { name: string; purpose: string; responsibilities: string[]; types: string[] };
  integrations: { service: string; purpose: string }[];
}

export interface SetupStep {
  step: number;
  title: string;
  explanation: string;
  commands: string[];
}

export interface ProjectWalkthrough {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Senior";
  technologies: string[];
  architecture: string[];
  steps: {
    title: string;
    explanation: string;
    commands: string[];
    expectedOutput?: string;
    diagram?: string;
  }[];
}

export interface DevOpsCommand {
  command: string;
  category: string;
  description: string;
  expectedOutput: string;
}
