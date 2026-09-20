// Shared types for the application

export interface ProjectData {
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Archived';
  date: Date;
  stack: string[];
  github?: string;
}

export interface SocialLinks {
  portfolio: string;
  linkedin: string;
  github: string;
  email: string;
}
