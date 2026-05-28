import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, HelpCircle, AlertCircle, Sparkles, TrendingUp, ShieldCheck, Zap, DollarSign, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';

// Custom reusable Spotlight Card for Pricing
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`spotlight-container glass-effect-card rounded-2xl relative overflow-hidden ${className}`}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as React.CSSProperties}
    >
      <div className="spotlight-layer absolute inset-0 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

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
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-brand-blue-500/20 selection:text-white">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-brand-blue-500/10 border border-brand-blue-500/20 px-3.5 py-1.5 rounded-full select-none">
          <Sparkles className="text-brand-blue-500 w-3.5 h-3.5" />
          <span className="text-[10px] font-mono font-bold text-brand-blue-500 uppercase tracking-widest">
            CLEAR OUTCOME PRICING TACTICS
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-premium font-extrabold text-white tracking-tight">
          Value-First Marketing Tiers
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          We operate with 100% manual safe work integrations. No opaque pricing lockins, no set-up surcharges—just transparent specialized tactics.
        </p>
      </div>

      {/* Pricing Category Toggles with fluid highlight background */}
      <div className="flex justify-center">
        <div className="relative flex space-x-1 bg-navy-900 border border-slate-900/80 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveCategory('seo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'seo' ? 'text-white bg-brand-blue-500/20 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Traditional SEO
          </button>
          
          <button
            onClick={() => setActiveCategory('ai-seo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'ai-seo' ? 'text-white bg-brand-blue-500/20 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Answer Engines Optimized
          </button>
          
          <button
            onClick={() => setActiveCategory('ppc')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer relative z-10 outline-none ${
              activeCategory === 'ppc' ? 'text-white bg-brand-blue-500/20 shadow' : 'text-slate-400 hover:text-white'
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                <SpotlightCard 
                  className={`flex flex-col justify-between relative p-6 h-full ${
                    plan.popular ? 'border-brand-blue-500/40 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue-500 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-blue-400/30">
                      RECOMMENDED SPEC
                    </div>
                  )}

                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="space-y-2 border-b border-slate-900 pb-4">
                        <h3 className="text-white font-premium font-bold text-lg">{plan.name}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{plan.description}</p>
                      </div>

                      {/* Price segment */}
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-4xl font-display font-extrabold text-white">{plan.price}</span>
                        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">/ {plan.period}</span>
                      </div>

                      {/* Feature Item Loop */}
                      <ul className="space-y-3.5 pt-2">
                        {plan.features.map((feat, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs text-slate-350">
                            <Check className="text-brand-blue-500 w-4 h-4 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-900/80 mt-6 mt-auto">
                      <span className="text-[9px] text-slate-500 block text-center uppercase font-mono tracking-wider font-semibold">
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
      <section className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl pointer-events-none" />
        
        <SpotlightCard className="p-6 sm:p-10 space-y-8 relative z-10">
          <div className="border-b border-slate-900 pb-5">
            <h2 className="text-xl sm:text-2xl font-premium font-bold text-white tracking-tight flex items-center space-x-2">
              <Sparkles className="text-brand-blue-500 w-5 h-5 animate-pulse" />
              <span>Interactive Campaign Investment Planner</span>
            </h2>
            <p className="text-slate-450 text-xs mt-1 leading-relaxed">
              Synthesize and customize your tailored month-to-month marketing specifications to project direct investments instantly below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Control Form Side */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-slate-400">
                  <span>TARGET HIGH-INTENT KEYWORDS:</span>
                  <span className="text-brand-blue-500 font-bold bg-brand-blue-500/10 px-2 py-0.5 rounded border border-brand-blue-500/20">{keywordsCount} Terms</span>
                </div>
                
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={keywordsCount}
                  onChange={(e) => setKeywordsCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer outline-none accent-brand-blue-500 range-slider"
                />
                
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>5 Keywords</span>
                  <span>25 Keywords</span>
                  <span>50 Keywords (Enterprise)</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block uppercase">OPTIMIZATION LAYER SPREAD:</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTierSelection('standard')}
                    className={`p-3.5 rounded-xl border text-xs font-bold font-sans cursor-pointer outline-none transition-all ${
                      tierSelection === 'standard'
                        ? 'bg-brand-blue-500/10 border-brand-blue-500 text-white font-semibold'
                        : 'bg-navy-950/40 border-slate-900 hover:border-slate-850 text-slate-400 font-normal'
                    }`}
                  >
                    Standard Local SEO
                  </button>
                  <button
                    onClick={() => setTierSelection('advanced')}
                    className={`p-3.5 rounded-xl border text-xs font-bold font-sans cursor-pointer outline-none transition-all ${
                      tierSelection === 'advanced'
                        ? 'bg-brand-blue-500/10 border-brand-blue-500 text-white font-semibold'
                        : 'bg-navy-950/40 border-slate-900 hover:border-slate-850 text-slate-400 font-normal'
                    }`}
                  >
                    Advanced AI + AEO Setup
                  </button>
                </div>
              </div>

              {/* Guest posting trigger check box */}
              <label className="flex items-start space-x-3 bg-[#030712]/50 p-3.5 rounded-xl border border-slate-900 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeGuestBlogging}
                  onChange={(e) => setIncludeGuestBlogging(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-blue-500 border-slate-800 focus:ring-0 cursor-pointer accent-brand-blue-500 mt-0.5"
                />
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-slate-200 block">Include Premium Guest Posting Outreaches (+2 posts/mo)</span>
                  <span className="text-[10px] text-slate-500 leading-tight block">Custom white-hat manual outreaches to industry domains.</span>
                </div>
              </label>

            </div>

            {/* Price Preview Frame with micro animated key change transitions */}
            <div className="bg-[#030712] border border-slate-900/80 rounded-2xl p-6 text-center flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">MONTHLY RETAINER ESTIMATE</span>
                
                <div className="py-2">
                  <div className="inline-flex items-baseline font-display text-5xl sm:text-6xl font-extrabold text-white">
                    <span className="text-brand-blue-500 mr-0.5">$</span>
                    <motion.span
                      key={calculatePlannerCost()}
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    >
                      {calculatePlannerCost()}
                    </motion.span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1 uppercase tracking-wider font-semibold">Invoiced monthly • No upfront contracts</span>
                </div>

                <div className="border-t border-slate-950 pt-4 space-y-2.5 text-left text-[11px] text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
                    <span>{keywordsCount} High-intent primary indexing terms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{tierSelection === 'advanced' ? 'Complete Answer Engine (AEO) integration logs' : 'Basic Local schema markup files'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
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
                  className="w-full py-3 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-semibold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow shadow-brand-blue-500/10"
                >
                  <span>Lock in Retainer Plan Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

    </div>
  );
}
