import React, { useState } from 'react';
import { Target, ArrowRight, ShieldCheck, HelpCircle, Briefcase, ChevronRight } from 'lucide-react';
import { INDUSTRY_DATA } from '../data';

export function IndustriesView() {
  const [activeInd, setActiveInd] = useState(INDUSTRY_DATA[0].id);
  const selectedInd = INDUSTRY_DATA.find(i => i.id === activeInd) || INDUSTRY_DATA[0];

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Industries We Future-Proof
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          From fast-growing SaaS setups to multi-branch medical clinics, discover how we build hyper-targeted campaigns tailored to your specific market guidelines.
        </p>
      </div>

      {/* Primary Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Selector List */}
        <div className="lg:col-span-4 bg-navy-900 border border-slate-800 rounded-xl p-4 space-y-1">
          <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 block px-2 mb-2">
            Sector Categories
          </span>
          {INDUSTRY_DATA.map((ind) => {
            const isSelected = ind.id === activeInd;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveInd(ind.id)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-blue-500 text-white font-semibold shadow-lg' 
                    : 'hover:bg-slate-850/50 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm tracking-tight">{ind.title.replace("SEO Agency for ", "").replace(" SEO Services", "").replace(" Organic SEO", "").replace(" Specialist", "")}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'text-slate-500'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side Content Display */}
        <div className="lg:col-span-8 bg-navy-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <span className="text-[10px] font-mono text-brand-blue-500 font-bold uppercase tracking-widest block">
              Industry Focus Module
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {selectedInd.title}
            </h2>
            <p className="text-brand-blue-200 text-xs sm:text-sm font-mono italic">
              &quot;{selectedInd.subtitle}&quot;
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {selectedInd.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Challenges Block */}
            <div className="bg-[#05070c] border border-slate-800 p-4 rounded-xl space-y-3">
              <h4 className="text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                Primary Sector Challenges
              </h4>
              <ul className="space-y-2">
                {selectedInd.challenges.map((chal, i) => (
                  <li key={i} className="text-slate-400 text-xs leading-relaxed flex items-start space-x-2">
                    <span className="text-rose-500 shrink-0 select-none">•</span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Block */}
            <div className="bg-brand-blue-500/5 border border-brand-blue-500/10 p-4 rounded-xl space-y-3">
              <h4 className="text-brand-blue-500 text-xs font-mono font-bold uppercase tracking-wider">
                Our Specialized Solutions
              </h4>
              <ul className="space-y-2">
                {selectedInd.solutions.map((sol, i) => (
                  <li key={i} className="text-slate-300 text-xs leading-relaxed flex items-start space-x-2">
                    <span className="text-brand-blue-500 shrink-0 select-none">•</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Badge */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start space-x-3">
            <ShieldCheck className="text-emerald-400 w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Proven Campaign Result</h4>
              <p className="text-slate-200 text-xs leading-relaxed">
                {selectedInd.results}
              </p>
            </div>
          </div>

          {/* Target Entities / Keywords section */}
          <div className="border-t border-slate-800 pt-6 space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Primary Semantic Target Keywords (Optimized Nodes)
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedInd.keywordsUsed.map((kw, i) => (
                <span 
                  key={i} 
                  className="bg-[#05070c] border border-slate-800 text-slate-400 px-3 py-1 rounded text-[11px] font-mono hover:text-white transition-colors cursor-default"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
