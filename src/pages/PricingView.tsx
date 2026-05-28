import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, HelpCircle, AlertCircle, Sparkles, TrendingUp, ShieldCheck, Zap, DollarSign, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { SpotlightCard } from './HomeView';

export function PricingView() {
  const [activeCategory, setActiveCategory] = useState<'seo' | 'ai-seo' | 'ppc'>('seo');
  
  // Custom Campaign Investment Planner state
  const [keywordsCount, setKeywordsCount] = useState(15);
  const [tierSelection, setTierSelection] = useState<'standard' | 'advanced'>('standard');
  const [includeGuestBlogging, setIncludeGuestBlogging] = useState(true);

  const filteredPlans = PRICING_PLANS.filter(p => p.category === activeCategory);

  // Dynamic Planner Calculation Logics
  const calculatePlannerCost = () => {
    let base = tierSelection === 'advanced' ? 180 : 90;
    let keywordSurcharge = Math.max(0, keywordsCount - 10) * 8; // $8 per excess keyword
    let guestBlogCost = includeGuestBlogging ? 40 : 0; // $40 for guest blogging
    return base + keywordSurcharge + guestBlogCost;
  };

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-blue-100 selection:text-blue-900">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
          <span>Clear Outcome Pricing Tactics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-premium font-extrabold text-slate-900 tracking-tight leading-none text-center">
          Value-First Marketing Tiers
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-xl mx-auto">
          We operate with 100% manual safe work integrations. No opaque pricing lockins, no set-up surcharges—just transparent specialized tactics.
        </p>
      </div>

      {/* Pricing Category Toggles with fluid highlight background */}
      <div className="flex justify-center">
        <div className="relative flex space-x-1 bg-slate-50 border border-slate-200 p-1.5 rounded-2xl shadow-inner">
          <button
            onClick={() => setActiveCategory('seo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'seo' ? 'text-blue-700 bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Traditional SEO
          </button>
          
          <button
            onClick={() => setActiveCategory('ai-seo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'ai-seo' ? 'text-blue-700 bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Answer Engines Optimized
          </button>
          
          <button
            onClick={() => setActiveCategory('ppc')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'ppc' ? 'text-blue-700 bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Paid Social Tiers
          </button>
        </div>
      </div>

      {/* Plan Card Blocks inside AnimatePresence for smooth transitions */}
      <div className="min-h-[460px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                <SpotlightCard 
                  className={`flex flex-col justify-between relative p-6 h-full bg-white border ${
                    plan.popular ? 'border-blue-400 shadow-blue-500/5 shadow-xl bg-gradient-to-b from-white to-blue-50/25' : 'border-slate-200/80 shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md shadow-blue-500/10">
                      RECOMMENDED SPEC
                    </div>
                  )}

                  <div className="space-y-6 flex-grow flex flex-col justify-between pt-2">
                    <div className="space-y-6">
                      <div className="space-y-2 border-b border-slate-200/60 pb-4">
                        <h3 className="text-slate-900 font-premium font-extrabold text-lg">{plan.name}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-semibold">{plan.description}</p>
                      </div>

                      {/* Price segment */}
                      <div className="flex items-baseline space-x-1.5 pt-2">
                        <span className="text-4xl font-display font-extrabold text-slate-950">{plan.price}</span>
                        <span className="text-slate-400 text-[10px] font-mono font-extrabold uppercase tracking-wider">/ {plan.period}</span>
                      </div>

                      {/* Feature Item Loop */}
                      <ul className="space-y-3.5 pt-2">
                        {plan.features.map((feat, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs text-slate-600 font-semibold font-sans">
                            <Check className="text-emerald-600 w-4 h-4 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-200/60 mt-6 mt-auto">
                      <span className="text-[9px] text-slate-400 block text-center uppercase font-mono tracking-widest font-extrabold">
                        Strict Non-Binding Outlines • Swap Plan Anytime
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dynamic calculator tool */}
      <section className="relative max-w-4xl mx-auto pt-6">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl pointer-events-none" />
        
        <SpotlightCard className="p-6 sm:p-10 space-y-8 relative z-10 bg-white border border-slate-200 shadow-md">
          <div className="border-b border-slate-200/60 pb-5">
            <h2 className="text-xl sm:text-2xl font-premium font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <Sparkles className="text-blue-600 w-5 h-5 animate-pulse" />
              <span>Interactive Campaign Investment Planner</span>
            </h2>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed font-semibold">
              Synthesize and customize your tailored month-to-month marketing specifications to project direct investments instantly below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Control Form Side */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono font-extrabold tracking-widest text-slate-400">
                  <span>TARGET KEYWORD LIST DEPTH:</span>
                  <span className="text-blue-600 font-extrabold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">{keywordsCount} Terms</span>
                </div>
                
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={keywordsCount}
                  onChange={(e) => setKeywordsCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer outline-none accent-blue-600 range-slider"
                />
                
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span>5 Keywords</span>
                  <span>25 Keywords</span>
                  <span>50 Keywords (Enterprise)</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-extrabold tracking-widest text-slate-400 block uppercase">OPTIMIZATION LAYER SPREAD:</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTierSelection('standard')}
                    className={`p-3.5 rounded-xl border text-xs font-bold font-sans cursor-pointer outline-none transition-all ${
                      tierSelection === 'standard'
                        ? 'bg-blue-50 border-blue-400 text-blue-700 shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50 text-slate-500 font-semibold'
                    }`}
                  >
                    Standard Local SEO
                  </button>
                  <button
                    onClick={() => setTierSelection('advanced')}
                    className={`p-3.5 rounded-xl border text-xs font-bold font-sans cursor-pointer outline-none transition-all ${
                      tierSelection === 'advanced'
                        ? 'bg-blue-50 border-blue-400 text-blue-700 shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50 text-slate-500 font-semibold'
                    }`}
                  >
                    Advanced AI + AEO Setup
                  </button>
                </div>
              </div>

              {/* Guest posting trigger check box */}
              <label className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeGuestBlogging}
                  onChange={(e) => setIncludeGuestBlogging(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-0 cursor-pointer accent-blue-600 mt-0.5"
                />
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-800 block">Include Premium Guest Posting Outreaches (+2 posts/mo)</span>
                  <span className="text-[10px] text-slate-400 leading-tight block font-semibold">Custom manual outreach to real niche domains.</span>
                </div>
              </label>

            </div>

            {/* Price Preview Frame with micro animated key change transitions */}
            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 text-center flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-extrabold block">MONTHLY PLAN INVESTMENT RETAINER</span>
                
                <div className="py-2">
                  <div className="inline-flex items-baseline font-display text-5xl sm:text-6xl font-extrabold text-white">
                    <span className="text-blue-500 mr-0.5">$</span>
                    <motion.span
                      key={calculatePlannerCost()}
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    >
                      {calculatePlannerCost()}
                    </motion.span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1.5 uppercase tracking-widest font-bold">Invoiced monthly • No lock-in contracts</span>
                </div>

                <div className="border-t border-slate-900 pt-4 space-y-2.5 text-left text-[11px] text-slate-400 font-semibold font-sans">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{keywordsCount} High-intent primary indexing terms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{tierSelection === 'advanced' ? 'Complete Answer Engine (AEO) integration logs' : 'Basic Local schema markup files'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{includeGuestBlogging ? 'Verified editorial manual outreaches included' : 'Standard local link profiling'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact-view-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-blue-500/10"
                >
                  <span>Lock in Retainer Plan Options</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

    </div>
  );
}
