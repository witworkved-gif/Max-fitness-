import { MembershipPlan, Trainer, ClassScheduleItem, GymReview, GalleryItem, Facility } from '../types';

export const GYM_DETAILS = {
  name: 'Max Fitness Gym',
  tagline: 'Your Body Is The Reflection Of Your Daily Habits',
  proprietor: 'Shripad Sugare',
  phone: '7768965260',
  formattedPhone: '+91 77689 65260',
  whatsappNumber: '917768965260',
  address: 'Near Inner Ring Road, Solapur, Maharashtra 413006',
  googleMapsUrl: 'https://maps.google.com/?q=Max+Fitness+Gym+Inner+Ring+Road+Solapur',
  googleRating: 4.8,
  totalReviews: 184,
  timings: {
    morning: '5:30 AM – 10:00 AM',
    evening: '5:00 PM – 10:00 PM',
    sunday: '6:00 AM – 10:00 AM (Special Batch / Recovery)',
  },
  services: [
    'Weight Training',
    'Cardiovascular Conditioning',
    'Diet & Nutrition Consultation',
    'Personal Training & Transformation',
    'Strength & Hypertrophy',
    'Functional Training & Core',
  ]
};

export const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: '1 Month Starter',
    duration: '1 Month',
    price: 1200,
    originalPrice: 1500,
    tag: 'Flexible',
    features: [
      'Full Gym Floor & Equipment Access',
      'Morning (5:30-10 AM) & Evening (5-10 PM) Entry',
      'Initial Fitness Assessment',
      'Basic Workout Routine Card',
      'Locker & Clean Changing Room Access',
    ],
    idealFor: 'Beginners trying out the gym atmosphere in Solapur'
  },
  {
    id: 'quarterly',
    name: '3 Months Transformation',
    duration: '3 Months',
    price: 3000,
    originalPrice: 4000,
    tag: 'Most Popular',
    isPopular: true,
    features: [
      'Everything in Starter Plan',
      'Personalized Diet & Nutrition Chart by Coach Shripad',
      'Body Composition & Fat % Tracking every 2 weeks',
      'Cardio & Strength Split Plan',
      'WhatsApp Trainer Support for Form Correction',
      '1 Free Guest Pass for a Friend',
    ],
    idealFor: 'Committed individuals targeting 5-10 kg fat loss or muscle gain'
  },
  {
    id: 'half-yearly',
    name: '6 Months Muscle & Strength',
    duration: '6 Months',
    price: 5200,
    originalPrice: 7500,
    tag: 'Great Value',
    features: [
      'Complete Access for 6 Months',
      'Customized Progressive Overload Program',
      'Bi-weekly Diet Revision & Macro Breakdown',
      'Dedicated Hypertrophy / Powerlifting Coaching',
      'Free Gym Shaker Bottle & Wrist Wraps',
      'Flexible 15-Day Membership Freeze Option',
    ],
    idealFor: 'Fitness enthusiasts aiming for serious body transformation'
  },
  {
    id: 'yearly',
    name: '12 Months Elite Annual',
    duration: '12 Months',
    price: 8500,
    originalPrice: 14000,
    tag: 'Best Savings',
    features: [
      '365 Days Unlimited Access (Morning & Evening)',
      'Quarterly Diet & Supplement Consultation with Experts',
      'Priority Trainer Guidance on all major lifts',
      '30-Day Membership Freeze on Travel/Exam',
      'Exclusive Max Fitness Gym Solapur T-Shirt',
      '2 Complimentary 1-on-1 Personal Training Sessions',
      'Unlimited Guest Passes (3 per quarter)',
    ],
    idealFor: 'Lifelong fitness warriors seeking the most cost-effective deal'
  },
  {
    id: 'personal-training',
    name: '1-on-1 Personal Training',
    duration: 'Per Month (Add-on)',
    price: 3500,
    originalPrice: 5000,
    tag: 'Guaranteed Results',
    features: [
      'Dedicated 1-on-1 session with Senior Coach Shripad Sugare',
      'Daily workout supervision & spotter assistance',
      'Rigorous diet chart with meal-by-meal calorie count',
      'Injury prevention & posture biomechanics alignment',
      'Daily WhatsApp accountability & progress photos review',
    ],
    idealFor: 'Rapid bridal transformations, competitive lifters, or complete newcomers needing 100% supervision'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'shripad-sugare',
    name: 'Shripad Sugare',
    role: 'Founder & Head Strength Coach',
    experience: '10+ Years Experience',
    specialization: ['Bodybuilding & Hypertrophy', 'Olympic Barbell Form', 'Diet & Nutrition Consulting', 'Extreme Fat Loss'],
    certifications: ['Certified Master Fitness Trainer (ISSA)', 'Sports Nutrition Specialist', 'Solapur District Powerlifting Coach'],
    bio: 'Proprietor of Max Fitness Gym. Shripad has mentored over 1,200 Solapur residents—from students to working professionals—helping them achieve peak physical conditioning through disciplined daily habits.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    contactNumber: '7768965260'
  },
  {
    id: 'rohit-kulkarni',
    name: 'Rohit Kulkarni',
    role: 'Senior Strength & Conditioning Coach',
    experience: '6 Years Experience',
    specialization: ['Powerlifting (Squat/Bench/Deadlift)', 'Athletic Conditioning', 'Muscle Mass Building'],
    certifications: ['K11 Academy Certified Personal Trainer', 'CPR & First Aid Certified'],
    bio: 'Specialist in heavy progressive lifts and corrective biomechanics. Rohit ensures lifters of all ages master injury-free technique on the gym floor.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'snehal-patil',
    name: 'Snehal Patil',
    role: 'Women Fitness & Functional Mobility Coach',
    experience: '5 Years Experience',
    specialization: ['Women Weight Loss & Tone', 'HIIT & Core Stability', 'Postural Alignment'],
    certifications: ['Certified Functional Training Specialist', 'ACE Fitness Coach'],
    bio: 'Leads our dedicated morning and evening women batches. Passionate about empowering women in Solapur to embrace strength training and functional health.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dr-amit-jadhav',
    name: 'Dr. Amit Jadhav',
    role: 'Consultant Clinical & Sports Nutritionist',
    experience: '8 Years Experience',
    specialization: ['Personalized Macro Diet Charts', 'Diabetic & Thyroid Fitness', 'Natural Supplementation Advice'],
    certifications: ['M.Sc. Sports Nutrition', 'Certified Clinical Nutritionist'],
    bio: 'Provides science-backed dietary guidance tailored to Maharashtrian diets, ensuring members achieve sustainable fat loss and muscle retention without extreme starvation.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
  }
];

export const CLASS_SCHEDULES: ClassScheduleItem[] = [
  {
    id: 's1',
    time: '5:30 AM – 6:45 AM',
    category: 'Morning',
    title: 'Early Bird Heavy Iron & Hypertrophy',
    trainer: 'Shripad Sugare',
    intensity: 'High',
    focus: 'Chest, Shoulders & Triceps',
    days: ['Mon', 'Wed', 'Fri'],
    description: 'Start your morning in Solapur with serious compound lifting, heavy presses, and progressive overload.'
  },
  {
    id: 's2',
    time: '6:45 AM – 8:00 AM',
    category: 'Morning',
    title: 'Back, Lats & Deadlift Power Hour',
    trainer: 'Rohit Kulkarni',
    intensity: 'High',
    focus: 'Back & Biceps Thickness',
    days: ['Tue', 'Thu', 'Sat'],
    description: 'Master pull-ups, barbell rows, and deadlifts with correct spinal bracing and grip strength.'
  },
  {
    id: 's3',
    time: '8:00 AM – 9:00 AM',
    category: 'Morning',
    title: 'Women Fitness & Functional Tone',
    trainer: 'Snehal Patil',
    intensity: 'Medium',
    focus: 'Full Body Sculpt & Glutes/Core',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    description: 'A motivating, women-friendly batch focusing on metabolic resistance, kettlebells, and core stamina.'
  },
  {
    id: 's4',
    time: '9:00 AM – 10:00 AM',
    category: 'Morning',
    title: 'Cardio Blitz & Fat Shredding',
    trainer: 'Rohit Kulkarni',
    intensity: 'High',
    focus: 'Cardio, Stair Climber & Core HIIT',
    days: ['Mon', 'Wed', 'Fri'],
    description: 'High-calorie burn session combining treadmill sprints, battle ropes, and abdominal circuits.'
  },
  {
    id: 's5',
    time: '5:00 PM – 6:15 PM',
    category: 'Evening',
    title: 'After-College & Youth Strength Batch',
    trainer: 'Shripad Sugare',
    intensity: 'All Levels',
    focus: 'Foundational Lifts & Posture',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    description: 'Targeted coaching for students and young lifters learning barbell mechanics and muscle symmetry.'
  },
  {
    id: 's6',
    time: '6:15 PM – 7:30 PM',
    category: 'Evening',
    title: 'Leg Day & Squat Crucible',
    trainer: 'Shripad Sugare & Rohit',
    intensity: 'High',
    focus: 'Quads, Hamstrings & Calves',
    days: ['Tue', 'Fri'],
    description: 'Intense lower-body session with hack squats, leg press pyramids, and walking lunges.'
  },
  {
    id: 's7',
    time: '7:30 PM – 8:45 PM',
    category: 'Evening',
    title: 'Peak Hour Muscle Build & Spotter Assistance',
    trainer: 'All Coaches on Floor',
    intensity: 'High',
    focus: 'Hypertrophy & Max Pumps',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    description: 'High-energy prime batch with active spotting, dumbbell stations, and cable crossovers.'
  },
  {
    id: 's8',
    time: '8:45 PM – 10:00 PM',
    category: 'Evening',
    title: 'Late Night Grinders & Core Conditioning',
    trainer: 'Shripad Sugare',
    intensity: 'Medium',
    focus: 'Calisthenics, Core & Recovery',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    description: 'For busy professionals and business owners wrapping up their day in Solapur with a focused workout.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Max Fitness Storefront & Entrance',
    category: 'floor',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    description: 'Our iconic entrance at Inner Ring Road, Solapur featuring our official motto banner.'
  },
  {
    id: 'g2',
    title: 'Heavy Free Weights & Dumbbell Rack',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    description: 'Precision iron weights, rubber hex dumbbells up to 40kg, and Olympic barbells.'
  },
  {
    id: 'g3',
    title: 'Squat Racks & Powerlifting Platforms',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    description: 'Heavy duty cages with safety spotter arms for bench press and deep squats.'
  },
  {
    id: 'g4',
    title: 'Cardio Endurance Zone',
    category: 'floor',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop',
    description: 'Commercial treadmills, spin cycles, and elliptical trainers with digital feedback.'
  },
  {
    id: 'g5',
    title: '1-on-1 Personal Training Session',
    category: 'training',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    description: 'Coach Shripad guiding strict form on bicep preacher curls and dumbbell rows.'
  },
  {
    id: 'g6',
    title: 'Functional Turf & Core Area',
    category: 'training',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    description: 'Battle ropes, kettlebells, medicine balls, and plyo boxes for athletic stamina.'
  },
  {
    id: 'g7',
    title: 'Cable Crossover & Lat Pulldown Stations',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1000&auto=format&fit=crop',
    description: 'Smooth multi-station pulleys for chest flyes, tricep pushdowns, and cable lateral raises.'
  },
  {
    id: 'g8',
    title: '12-Week 14kg Fat Loss Transformation',
    category: 'transformations',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    description: 'Consistent strength training and Shripad Sir’s diet plan yielded visible abs in 90 days.'
  },
  {
    id: 'g9',
    title: 'Solapur Powerlifting & Strength Gains',
    category: 'transformations',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
    description: 'From struggling with an empty bar to 140kg deadlifts with flawless mechanics.'
  }
];

export const GYM_REVIEWS: GymReview[] = [
  {
    id: 'r1',
    name: 'Abhishek Deshmukh',
    rating: 5,
    date: '1 week ago',
    comment: 'Best gym in Solapur near Inner Ring Road! Shripad Sugare sir is very attentive and guides everyone personally on posture and form. I lost 8 kg in 2 months on his diet plan. Atmosphere is full of pure motivation and serious lifters.',
    tag: 'Weight Loss Transformation',
    verified: true,
    memberSince: 'Member since 2023'
  },
  {
    id: 'r2',
    name: 'Pooja Kulkarni',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Very safe and welcoming environment for women. Snehal ma’am and Shripad sir give great encouragement. The gym is clean, machines are well maintained, and morning 8 AM batch is super convenient. 4.8 rating is well deserved!',
    tag: 'Women Fitness',
    verified: true,
    memberSince: 'Member since 2024'
  },
  {
    id: 'r3',
    name: 'Vikram Gaikwad',
    rating: 5,
    date: '1 month ago',
    comment: 'Solapur madhe saglyat bhari gym ahe! Heavy dumbbells, Olympic plates, squat rack, and cable machines all top notch. Shripad bhau pays personal attention without forcing extra PT charges. Highly recommended to all fitness lovers.',
    tag: 'Strength & Hypertrophy',
    verified: true,
    memberSince: 'Member since 2022'
  },
  {
    id: 'r4',
    name: 'Rahul Rathod',
    rating: 5,
    date: '2 months ago',
    comment: 'The slogan on the board "Your Body Is The Reflection Of Your Daily Habits" is totally true here. Morning 5:30 am timing is a boon for early office workers. Great crowd, energetic music, and genuine guidance.',
    tag: 'Daily Habit & Routine',
    verified: true,
    memberSince: 'Member since 2023'
  },
  {
    id: 'r5',
    name: 'Sameer Inamdar',
    rating: 4,
    date: '3 months ago',
    comment: 'Great gym floor, plenty of free weights, and honest pricing. Shripad sir gave me a practical diet plan without costly fancy supplements. Solapur locals should definitely take the free trial.',
    tag: 'Value & Guidance',
    verified: true,
    memberSince: 'Member since 2024'
  }
];

export const GYM_FACILITIES: Facility[] = [
  {
    id: 'f1',
    title: 'Heavy Duty Weight Training',
    description: 'Comprehensive iron plates, Olympic standard barbells, squat cages, incline/decline benches, and dumbbells ranging from 2.5kg to 40kg.',
    iconName: 'Dumbbell',
    highlights: ['Multi-grip pull-up bars', 'Dual cable crossover station', 'T-bar row & Hack squat']
  },
  {
    id: 'f2',
    title: 'Cardio & Stamina Zone',
    description: 'High-end motorized treadmills, spin cycling bikes, and cross-trainers configured for fat incineration and cardiovascular endurance.',
    iconName: 'Flame',
    highlights: ['Heart rate tracking displays', 'Dedicated HIIT circuits', 'Warmup & cool-down area']
  },
  {
    id: 'f3',
    title: 'Personalized Diet Consultation',
    description: 'Customized nutritional roadmaps designed around affordable, traditional Maharashtrian whole foods with precise protein and calorie targets.',
    iconName: 'Apple',
    highlights: ['No starvation diets', 'Custom vegetarian & non-veg options', 'Macro nutrient education']
  },
  {
    id: 'f4',
    title: 'Certified Floor Trainers',
    description: 'Experienced coaching led by Proprietor Shripad Sugare. Constant form supervision to ensure zero injuries and optimal hypertrophy.',
    iconName: 'Users',
    highlights: ['Spotting on all heavy lifts', 'Postural correction', 'Progress tracking logs']
  },
  {
    id: 'f5',
    title: 'Clean Hygiene & Lockers',
    description: 'Sanitized workout stations, dedicated member storage lockers, clean washrooms, and continuous air circulation for uninterrupted workouts.',
    iconName: 'ShieldCheck',
    highlights: ['Clean change rooms', 'Safe locker facilities', 'RO purified drinking water']
  },
  {
    id: 'f6',
    title: 'Flexible Morning & Evening Batches',
    description: 'Operational from early 5:30 AM to late night 10:00 PM to accommodate students, shift workers, and business professionals seamlessly.',
    iconName: 'Clock',
    highlights: ['5:30 AM – 10:00 AM Morning', '5:00 PM – 10:00 PM Evening', 'Sunday recovery batches']
  }
];

export const FAQS = [
  {
    question: 'Where is Max Fitness Gym located in Solapur?',
    answer: 'We are situated Near Inner Ring Road, Solapur, Maharashtra 413006. Easily accessible with ample bike and car parking.'
  },
  {
    question: 'What are the gym operating hours?',
    answer: 'We are open Monday to Saturday in two convenient slots: Morning 5:30 AM to 10:00 AM, and Evening 5:00 PM to 10:00 PM. Sunday has a special recovery batch from 6:00 AM to 10:00 AM.'
  },
  {
    question: 'Is there a free trial pass available for new members?',
    answer: 'Yes! You can book a Free 1-Day Trial Pass directly through our website or via WhatsApp at 7768965260 to experience our equipment and floor atmosphere.'
  },
  {
    question: 'Do you provide diet and nutrition plans with the membership?',
    answer: 'Yes, our 3-month, 6-month, and annual plans include customized diet consultations led by Head Coach Shripad Sugare to optimize your fat loss or muscle building results.'
  },
  {
    question: 'Are there separate batches or trainers for female members?',
    answer: 'Yes, we have certified female trainer Coach Snehal Patil and dedicated women-friendly batches in both morning (8:00 AM) and evening slots with full privacy and encouragement.'
  },
  {
    question: 'How do I pay or contact the gym directly?',
    answer: 'You can directly call or message on WhatsApp at 7768965260 (Prop: Shripad Sugare). We accept UPI (GPay, PhonePe, Paytm), cash, and direct bank transfers.'
  }
];
