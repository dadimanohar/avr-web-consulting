import React, { useState } from 'react';
import { Target, ArrowRight, ShieldCheck, HelpCircle, Briefcase, ChevronRight } from 'lucide-react';
import { INDUSTRY_DATA } from '../data';
import { SpotlightCard } from './HomeView';

export function IndustriesView() {
  const [activeInd, setActiveInd] = useState(INDUSTRY_DATA[0].id);
  const selectedInd = INDUSTRY_DATA.find(i => i.id === activeInd) || INDUSTRY_DATA[0];

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          Sector Competence
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none text-center">
          Industries We Future-Proof
        </h1>
        <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-semibold">
          From fast-growing SaaS setups to multi-branch medical clinics, discover how we build hyper-targeted campaigns tailored to your specific market guidelines.
        </p>
      </div>

      {/* Primary Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Selector List */}
        <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-4 space-y-1 shadow-sm">
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block px-2 mb-2">
            Sector Categories
          </span>
          {INDUSTRY_DATA.map((ind) => {
            const isSelected = ind.id === activeInd;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveInd(ind.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex items-center justify-between cursor-pointer outline-none border-none ${
                  isSelected 
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/10' 
                    : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Briefcase className="w-4 h-4 shrink-0 font-bold" />
                  <span className="text-xs sm:text-sm tracking-tight font-sans font-semibold">{ind.title.replace("SEO Agency for ", "").replace(" SEO Services", "").replace(" Organic SEO", "").replace(" Specialist", "")}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side Content Display */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 border-b border-slate-150 pb-4">
            <span className="text-[10px] font-mono text-blue-600 font-extrabold uppercase tracking-widest block">
              Industry Focus Module
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-premium font-extrabold text-slate-900 tracking-tight leading-none pt-1">
              {selectedInd.title}
            </h2>
            <p className="text-blue-650 text-xs sm:text-sm font-mono italic font-bold">
              &quot;{selectedInd.subtitle}&quot;
            </p>
          </div>

          <p className="text-slate-650 text-sm leading-relaxed font-semibold">
            {selectedInd.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Challenges Block */}
            <div className="bg-red-50/20 border border-red-100 p-4 rounded-xl space-y-3 shadow-sm">
              <h4 className="text-red-700 text-xs font-mono font-extrabold uppercase tracking-widest leading-none">
                Primary Sector Challenges
              </h4>
              <ul className="space-y-2">
                {selectedInd.challenges.map((chal, i) => (
                  <li key={i} className="text-slate-600 text-xs leading-relaxed flex items-start space-x-2 font-medium">
                    <span className="text-red-500 shrink-0 select-none font-bold">•</span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Block */}
            <div className="bg-blue-50/20 border border-blue-100 p-4 rounded-xl space-y-3 shadow-sm">
              <h4 className="text-blue-700 text-xs font-mono font-extrabold uppercase tracking-widest leading-none">
                Our Specialized Solutions
              </h4>
              <ul className="space-y-2">
                {selectedInd.solutions.map((sol, i) => (
                  <li key={i} className="text-slate-600 text-xs leading-relaxed flex items-start space-x-2 font-semibold">
                    <span className="text-blue-500 shrink-0 select-none font-bold">•</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results Badge */}
          <div className="p-4 bg-emerald-50 border border-emerald-150 rounded-xl flex items-start space-x-3 shadow-sm shadow-emerald-500/5">
            <ShieldCheck className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-0.5">
              <h4 className="text-emerald-700 text-xs font-mono font-extrabold uppercase tracking-widest leading-none">Proven Campaign Result</h4>
              <p className="text-slate-700 text-xs leading-relaxed font-semibold pt-1">
                {selectedInd.results}
              </p>
            </div>
          </div>

          {/* Target Entities / Keywords section */}
          <div className="border-t border-slate-200/60 pt-6 space-y-3">
            <h4 className="text-slate-900 text-xs font-mono font-extrabold uppercase tracking-widest leading-none">
              Primary Semantic Target Keywords (Optimized Nodes)
            </h4>
            <div className="flex flex-wrap gap-2 pt-1 font-mono font-bold">
              {selectedInd.keywordsUsed.map((kw, i) => (
                <span 
                  key={i} 
                  className="bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1 rounded-lg text-[11px] hover:text-blue-600 hover:border-blue-400 hover:bg-white transition-colors cursor-default"
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
