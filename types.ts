export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface ResumeItem {
  id: string;
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  tags?: string[];
}

export interface ArtistProfile {
  name: string;
  altName: string;
  birthDate: string;
  birthPlace: string;
  titles: string[];
  summary: string;
}

export enum AppTab {
  RESUME = 'RESUME',
  STUDIO = 'STUDIO',
}

export interface AIEditState {
  originalImage: string | null;
  generatedImage: string | null;
  prompt: string;
  isLoading: boolean;
  error: string | null;
}