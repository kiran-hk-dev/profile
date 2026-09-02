export interface Profile {
  name: string;
  title: string;
  experience: string;
  location: string;
  openTo: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  githubUsername: string;
  summary: string;
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  type: "full-time" | "freelance";
  summary: string;
  highlights: string[];
}

export interface ProjectArchitectureStep {
  label: string;
  detail?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  duration: string;
  description: string;
  role: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    cloud?: string[];
    devops?: string[];
    monitoring?: string[];
    security?: string[];
  };
  features: { title: string; items: string[] }[];
  contributions: { title: string; items: string[] }[];
  architecture: ProjectArchitectureStep[];
  kpis: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  tech: string[];
}
