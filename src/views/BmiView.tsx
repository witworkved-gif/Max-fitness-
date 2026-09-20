import React, { useState } from 'react';
import { Calculator, Flame, MessageCircle, Sparkles, Scale, HeartPulse, Check, Info } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';
import { BmiResult } from '../types';

export const BmiView: React.FC = () => {
  const [weight, setWeight] = useState<string>('72');
  const [height, setHeight] = useState<string>('174');
  const [age, setAge] = useState<string>('24');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'loss' | 'muscle' | 'maintain'>('muscle');
  const [activity, setActivity] = useState<'moderate' | 'heavy'>('moderate');

  const [result, setResult] = useState<BmiResult | null>(() => calculateBmi(72, 174, 24, 'male', 'muscle', 'moderate'));

  function calculateBmi(
    w: number,
    h: number,
    a: number,
    g: 'male' | 'female',
    goalType: 'loss' | 'muscle' | 'maintain',
    act: 'moderate' | 'heavy'
  ): BmiResult | null {
    if (!w || !h || w <= 0 || h <= 0) return null;

    const heightInMeters = h / 100;
    const bmiVal = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));

    let cat = 'Normal Weight';
    let rec = 'Maintain your solid strength training routine and balanced nutrition.';

    if (bmiVal < 18.5) {
      cat = 'Underweight';
      rec = 'Focus on caloric surplus with healthy complex carbs, paneer/eggs, and progressive overload weight training.';
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      cat = 'Healthy / Fit Range';
      rec = 'Great foundation! Focus on lean muscle hypertrophy, progressive overload, and 1.6g protein/kg.';
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      cat = 'Overweight';
      rec = 'Combine barbell strength training with 20 minutes daily cardio and a modest 400 kcal deficit.';
    } else {
      cat = 'Obese';
      rec = 'Consult Coach Shripad for a supervised joint-friendly cardio and strength regime plus custom diet plan.';
    }

    // BMR formula (Mifflin-St Jeor)
    let bmr = 10 * w + 6.25 * h - 5 * a + (g === 'male' ? 5 : -161);
    let tdee = act === 'heavy' ? bmr * 1.55 : bmr * 1.375;

    let targetCalories = Math.round(tdee);
    if (goalType === 'loss') targetCalories -= 450;
    if (goalType === 'muscle') targetCalories += 300;

    // Daily protein target
    const dailyProtein = Math.round(w * (goalType === 'muscle' ? 1.8 : 1.4));

    return {
      bmi: bmiVal,
      category: cat,
      recommendation: rec,
      targetCalories,
      dailyProtein,
    };
  }

  const handleCompute = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age) || 25;
    setResult(calculateBmi(w, h, a, gender, goal, activity));
  };

  const handleSendToWhatsApp = () => {
    if (!result) return;
    const text = `Hello Coach Shripad Sugare! I calculated my fitness metrics on Max Fitness Gym website:
- Weight: ${weight} kg
- Height: ${height} cm
- BMI: ${result.bmi} (${result.category})
- Primary Goal: ${goal === 'loss' ? 'Fat Loss' : goal === 'muscle' ? 'Muscle Building' : 'Maintenance'}
- Caloric Target: ~${result.targetCalories} kcal
- Recommended Protein: ${result.dailyProtein}g

Could you please prepare a personalized Maharashtrian gym diet plan for me?`;

    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Fitness Assessment</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          BMI & Daily Macro Calculator
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Accurately calculate your Body Mass Index, recommended daily calories, and protein target. Send your numbers directly to Coach Shripad Sugare on WhatsApp for custom diet adjustments.
        </p>
      </div>

      {/* 2-Column Calculator Form & Live Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Input Form */}
        <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left shadow-xl">
          <h3 className="text-xl font-bold text-white font-['Outfit'] mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-500" />
            Enter Your Physical Metrics
          </h3>

          <form onSubmit={handleCompute} className="space-y-4">
            
            {/* Gender and Goal */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="male">Male (Lifter)</option>
                  <option value="female">Female (Lifter)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Target Fitness Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as 'loss' | 'muscle' | 'maintain')}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="muscle">Muscle Gain & Hypertrophy</option>
                  <option value="loss">Fat Loss & Leaning Out</option>
                  <option value="maintain">Weight Maintenance</option>
                </select>
              </div>
            </div>

            {/* Weight, Height, Age */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Weight (kg)</label>
                <input
                  type="number"
                  required
                  min="30"
                  max="200"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Height (cm)</label>
                <input
                  type="number"
                  required
                  min="100"
                  max="230"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Age (years)</label>
                <input
                  type="number"
                  required
                  min="12"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Training Frequency</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as 'moderate' | 'heavy')}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
              >
                <option value="moderate">Moderate (Gym 3-4 days a week)</option>
                <option value="heavy">Intense (Gym 5-6 days a week + heavy lifts)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                Recalculate Metrics
              </button>
            </div>

          </form>
        </div>

        {/* Right: Calculated Outcome Card */}
        <div className="lg:col-span-5 bg-neutral-900 border-2 border-red-600/60 rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-6">
          {result ? (
            <>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2.5 py-0.5 rounded border border-red-800/40">
                  YOUR PERSONAL PROFILE
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-5xl font-black text-white font-['Outfit']">{result.bmi}</span>
                  <div>
                    <p className="text-sm font-bold text-emerald-400">{result.category}</p>
                    <p className="text-xs text-neutral-400">Body Mass Index</p>
                  </div>
                </div>
              </div>

              {/* Target Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>Daily Calories</span>
                  </div>
                  <p className="text-2xl font-black text-white font-['Outfit']">~{result.targetCalories}</p>
                  <p className="text-[10px] text-neutral-400">kcal / day target</p>
                </div>

                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <HeartPulse className="w-3.5 h-3.5 text-red-500" />
                    <span>Protein Target</span>
                  </div>
                  <p className="text-2xl font-black text-white font-['Outfit']">{result.dailyProtein}g</p>
                  <p className="text-[10px] text-neutral-400">grams protein / day</p>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-400" />
                  Coach Advice:
                </p>
                <p className="text-neutral-300 leading-relaxed">{result.recommendation}</p>
              </div>

              {/* Direct WhatsApp Consultation Button */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Custom Diet from Coach Shripad on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                Direct to Coach Shripad Sugare: {GYM_DETAILS.phone}
              </p>
            </>
          ) : (
            <p className="text-sm text-neutral-400">Please enter valid weight and height.</p>
          )}
        </div>

      </div>

      {/* Common Solapur High-Protein Foods Guide */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left space-y-4">
        <h4 className="text-lg font-bold text-white font-['Outfit']">
          Recommended Maharashtrian Diet Staples
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-amber-400">Eggs & Omelettes</p>
            <p className="text-neutral-400">6g protein per whole egg. Fast digesting, budget-friendly staple for morning lifters.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-amber-400">Fresh Paneer & Curd</p>
            <p className="text-neutral-400">18g protein per 100g paneer. High casein protein, perfect vegetarian dinner choice.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-amber-400">Sprouts & Matki Usal</p>
            <p className="text-neutral-400">Rich in micronutrients, plant protein, and clean fiber for gut health and stamina.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-amber-400">Jowar Bhakri & Dal</p>
            <p className="text-neutral-400">Slow-release complex carbs that fuel intense deadlifts and squats without fat accumulation.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
