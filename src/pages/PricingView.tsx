import React, { useState } from 'react';
import { Check, HelpCircle, AlertCircle, Sparkles, TrendingUp, ShieldCheck, Zap, DollarSign } from 'lucide-react';
import { PRICING_PLANS } from '../data';

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
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Transparent, Affordable Packages
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          No hidden service contracts or opaque onboarding setups. Choose from our specialized traditional SEO, AEO, and PPC marketing tiers.
        </p>
      </div>

      {/* Pricing Category Toggles */}
      <div className="flex justify-center border-b border-slate-800 pb-4">
        <div className="flex space-x-2 bg-navy-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveCategory('seo')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'seo'
                ? 'bg-brand-blue-500 text-white shadow'
                : 'text-slate-400 hover:text-slate-205'
            }`}
          >
            Traditional SEO Tiers
          </button>
          <button
            onClick={() => setActiveCategory('ai-seo')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'ai-seo'
                ? 'bg-brand-blue-500 text-white shadow'
                : 'text-slate-400 hover:text-slate-205'
            }`}
          >
            AI SEO &amp; AEO Tiers
          </button>
          <button
            onClick={() => setActiveCategory('ppc')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'ppc'
                ? 'bg-brand-blue-500 text-white shadow'
                : 'text-slate-400 hover:text-slate-205'
            }`}
          >
            Paid ADS Tiers
          </button>
        </div>
      </div>

      {/* Plan Card Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch max-w-6xl mx-auto">
        {filteredPlans.map((plan) => (
          <div 
            key={plan.id}
            className={`bg-navy-900 border rounded-2xl p-6 flex flex-col justify-between relative transition-all ${
              plan.popular 
                ? 'border-brand-blue-500 shadow-xl shadow-brand-blue-500/10 scale-100' 
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div className="space-y-6">
              <div className="space-y-2 border-b border-slate-850 pb-4">
                <h3 className="text-white font-display font-semibold text-base sm:text-lg">{plan.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{plan.description}</p>
              </div>

              {/* Price Segment */}
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-slate-500 text-xs">/ {plan.period}</span>
              </div>

              {/* Features checklists */}
              <ul className="space-y-3 pt-2">
                {plan.features.map((feat, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs leading-normal text-slate-300">
                    <Check className="text-brand-blue-500 w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-850">
              <span className="text-[10px] text-slate-500 block text-center uppercase font-mono tracking-wider">
                Non-Binding Contractual Commitment • Cancel Anytime
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive campaign cost planner */}
      <section className="bg-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
        <div className="border-b border-indigo-950 pb-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight flex items-center space-x-2">
            <Sparkles className="text-brand-blue-500 w-5 h-5 animate-pulse" />
            <span>Interactive Campaign Investment Planner</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Build your personalized, custom monthly package and estimate coordinates pricing and features instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Controls side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-medium">
                <span className="text-slate-400">TARGET SEO KEYWORDS COUNT:</span>
                <span className="text-brand-blue-500">{keywordsCount} Keywords</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={keywordsCount}
                onChange={(e) => setKeywordsCount(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer outline-none accent-brand-blue-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5 Keywords (Starter)</span>
                <span>50 Keywords (Enterprise)</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-medium text-slate-400 block">OPTIMIZATION DEPTH LEVEL:</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTierSelection('standard')}
                  className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer outline-none transition-all ${
                    tierSelection === 'standard'
                      ? 'bg-brand-blue-500/10 border-brand-blue-500 text-white'
                      : 'bg-navy-900 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  Standard On-Page
                </button>
                <button
                  onClick={() => setTierSelection('advanced')}
                  className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer outline-none transition-all ${
                    tierSelection === 'advanced'
                      ? 'bg-brand-blue-500/10 border-brand-blue-500 text-white'
                      : 'bg-navy-900 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  Advanced AI + AEO Setup
                </button>
              </div>
            </div>

            {/* Checkbox for guest blogging */}
            <label className="flex items-center space-x-3 bg-[#05070c] p-3 rounded-lg border border-slate-850 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeGuestBlogging}
                onChange={(e) => setIncludeGuestBlogging(e.target.checked)}
                className="w-4 h-4 rounded text-brand-blue-500 outline-none border-slate-700 accent-brand-blue-500"
              />
              <div className="space-y-0.5">
                <span className="text-xs font-medium text-slate-200 block">Include Premium Guest Posting Contributions (+2 posts/mo)</span>
                <span className="text-[10px] text-slate-500 leading-none">Manual white-hat outreaches to relevant niche publishers.</span>
              </div>
            </label>
          </div>

          {/* Pricing visualization side */}
          <div className="bg-[#05070c] border border-slate-850 rounded-2xl p-6 text-center space-y-4">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">ESTIMATED INVESTMENT</span>
            
            <div className="flex flex-col items-center">
              <div className="flex items-baseline font-display text-4xl sm:text-5xl font-bold text-white">
                <span className="text-brand-blue-500">$</span>
                <span>{calculatePlannerCost()}</span>
              </div>
              <span className="text-xs text-slate-500 font-mono mt-1">/ Month (Invoiced Monthly)</span>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-2 text-left text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-500 w-3.5 h-3.5" />
                <span>{keywordsCount} Primary intent keywords tracked</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-500 w-3.5 h-3.5" />
                <span>{tierSelection === 'advanced' ? 'Complete Answer Engine Optimization (AEO)' : 'On-Page schema validations active'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-emerald-500 w-3.5 h-3.5" />
                <span>{includeGuestBlogging ? 'Vouched editorial manual backlinks' : 'Standard link building protocols'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
