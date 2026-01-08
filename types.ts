
export interface Resource {
  title: string;
  url: string;
  type: 'youtube' | 'documentation' | 'article';
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Foundation' | 'Tools' | 'Coding' | 'Advanced';
  resources: Resource[];
  completed: boolean;
}

export interface JobRole {
  title: string;
  description: string;
  salaryRange: string;
  requiredSkills: string[];
  demand: 'High' | 'Medium' | 'Emerging';
}

export interface RoadmapModule {
  title: string;
  skills: Skill[];
}
