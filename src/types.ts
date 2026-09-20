export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  certifications: string[];
  bio: string;
  image: string;
  contactNumber?: string;
}

export interface ClassScheduleItem {
  id: string;
  time: string;
  category: 'Morning' | 'Evening';
  title: string;
  trainer: string;
  intensity: 'High' | 'Medium' | 'All Levels';
  focus: string;
  days: string[]; // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  description: string;
}

export interface GymReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  verified: boolean;
  memberSince?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'equipment' | 'floor' | 'training' | 'transformations';
  imageUrl: string;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface TrialPass {
  passId: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredSlot: string;
  goal: string;
  bookingDate: string;
  status: 'confirmed' | 'pending';
}

export interface BmiResult {
  bmi: number;
  category: string;
  recommendation: string;
  targetCalories: number;
  dailyProtein: number;
}
