export interface KajianMetadata {
  date?: string;
  time?: string;
  location?: string;
  dresscode?: string;
  organizer?: string;
}

export interface Kajian {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  fullNarration?: string[];
  keyPoints?: string[];
  metadata?: KajianMetadata;
  image: string;
  imageAlt: string;
  action: string;
  href: string;
  isNew?: boolean;
}
