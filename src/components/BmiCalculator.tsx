import React, { useState } from 'react';
import { Calculator, MessageCircle, Activity, HeartPulse, Scale, Flame } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(172);
  const [weight, setWeight] = useState<number>(70);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'maintenance'>('fat_loss');

  // Calculations
  const heightInMeters = height / 100;
  const bmi = heightInMeters > 0 ? Number((weight / (heightInMeters * heightInMeters)).toFixed(1)) : 0;

  let bmiCategory = 'Normal';
  let categoryColor = 'text-emerald-400';
  let categoryBg = 'bg-emerald-950/60 border-emerald-800';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    categoryColor = 'text-amber-400';
    categoryBg = 'bg-amber-950/60 border-amber-800';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = 'Healthy Weight';
    categoryColor = 'text-emerald-400';
    categoryBg = 'bg-emerald-950/60 border-emerald-800';
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Overweight';
    categoryColor = 'text-amber-500';
    categoryBg = 'bg-amber-950/60 border-amber-800';
  } else {
    bmiCategory = 'Obese';
    categoryColor = 'text-red-400';
    categoryBg = 'bg-red-950/60 border-red-800';
  }

  // Basic BMR estimation using Harris-Benedict formula
  const bmr = gender === 'male'
    ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

  // Maintenance calories with moderate activity factor 1.4
  const maintenanceCalories = Math.round(bmr * 1.4);

  let targetCalories = maintenanceCalories;
  let targetProtein = Math.round(weight * 1.8); // 1.8g per kg bodyweight
  let recommendedPlan = '3 Months Transformation Plan';

  if (goal === 'fat_loss') {
    targetCalories = Math.round(maintenanceCalories - 450);
    recommendedPlan = '3 Months Transformation or Cardio & Strength Routine';
  } else if (goal === 'muscle_gain') {
    targetCalories = Math.round(maintenanceCalories + 350);
    targetProtein = Math.round(weight * 2.0);
    recommendedPlan = '6 Months Muscle & Hypertrophy Routine with Heavy Iron';
  } else {
    recommendedPlan = '1-Month or 3-Month General Fitness Plan';
  }

  const handleShareOnWhatsApp = () => {
    const text = `Hello Coach Shripad Sugare! I calculated my fitness metrics on the Max Fitness Solapur website:
- Weight: ${weight} kg, Height: ${height} cm
- BMI: ${bmi} (${bmiCategory})
- Goal: ${goal === 'fat_loss' ? 'Fat Loss' : goal === 'muscle_gain' ? 'Muscle Gain' : 'General Fitness'}
- Target Calories: ~${targetCalories} kcal / day
- Recommended Plan: ${recommendedPlan}

Can you please suggest a custom workout split and diet chart for me at the gym?`;

    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="bmi-calculator" className="py-20 bg-neutral-950 text-neutral-100 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Health Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Calculate Your BMI & Daily Calorie Target
          </h2>
          <p className="text-base text-neutral-300">
            Get an instant personalized breakdown of your body mass index, recommended caloric target, and suggested workout focus at Max Fitness Solapur.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Gender toggle */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'male'
                      ? 'bg-red-600 border-red-500 text-white shadow-md'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Male Lifter
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'female'
                      ? 'bg-red-600 border-red-500 text-white shadow-md'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Female Lifter
                </button>
              </div>

              {/* Height slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-neutral-300">
                  <span>Height: {height} cm ({Math.floor(height / 30.48)}&apos;{Math.round((height % 30.48) / 2.54)}&quot;)</span>
                  <span className="text-neutral-400">120 - 220 cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-950 rounded-lg"
                />
              </div>

              {/* Weight slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-neutral-300">
                  <span>Current Weight: {weight} kg</span>
                  <span className="text-neutral-400">40 - 150 kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-950 rounded-lg"
                />
              </div>

              {/* Age slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-neutral-300">
                  <span>Age: {age} Years</span>
                  <span className="text-neutral-400">15 - 75 Years</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-950 rounded-lg"
                />
              </div>

              {/* Fitness Goal Selection */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-semibold text-neutral-300">Primary Fitness Goal:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'fat_loss', label: 'Fat Loss', desc: 'Lean & Cut' },
                    { id: 'muscle_gain', label: 'Muscle Gain', desc: 'Bulk & Heavy' },
                    { id: 'maintenance', label: 'Tone / Fitness', desc: 'Maintain & Active' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        goal === g.id
                          ? 'bg-neutral-800 border-red-500 text-white shadow-sm'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <p className="text-xs font-bold">{g.label}</p>
                      <p className="text-[10px] text-neutral-400">{g.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Output Column */}
            <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your BMI Score</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${categoryBg} ${categoryColor}`}>
                    {bmiCategory}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white font-['Outfit']">{bmi}</span>
                  <span className="text-xs text-neutral-400">kg/m²</span>
                </div>

                {/* Metric Summary Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl">
                    <p className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-red-500" /> Target Calories
                    </p>
                    <p className="text-lg font-bold text-white mt-0.5">{targetCalories} <span className="text-[10px] font-normal text-neutral-400">kcal/day</span></p>
                  </div>

                  <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl">
                    <p className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-amber-500" /> Target Protein
                    </p>
                    <p className="text-lg font-bold text-white mt-0.5">{targetProtein}g <span className="text-[10px] font-normal text-neutral-400">per day</span></p>
                  </div>
                </div>

                <div className="bg-neutral-900/90 border border-neutral-800 p-3.5 rounded-xl space-y-1">
                  <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Recommended Strategy:</p>
                  <p className="text-xs text-neutral-200">{recommendedPlan}</p>
                </div>
              </div>

              {/* Action Button: Send to Coach Shripad */}
              <button
                id="bmi-whatsapp-consult-btn"
                onClick={handleShareOnWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Shripad Sir&apos;s Diet Advice (WhatsApp)</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
