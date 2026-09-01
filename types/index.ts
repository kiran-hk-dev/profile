export interface Profile {
  name: string;
  title: string;
  experience: string;
  location: string;
  openTo: string[];
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  resumePath: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  usage: "Daily" | "Regular" | "Working knowledge";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: SkillItem[];
}

export interface ExperienceEntry {
  role: string;
  duration: string;
  summary: string;
  responsibilities: {
    text: string;
    tech: string[];
  }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  devopsContributions: string[];
  architecture: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export interface PipelineStage {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
}
