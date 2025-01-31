export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  price: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}