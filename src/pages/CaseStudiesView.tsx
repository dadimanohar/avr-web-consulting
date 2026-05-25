import React, { useState } from 'react';
import { AreaChart, TrendingUp, CheckCircle2, Layout, HelpCircle, BarChart3, Scale, ChevronRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

export function CaseStudiesView() {
  const [activeTab, setActiveTab] = useState<'seo' | 'ai-visibility' | 'ppc'>('seo');
  const selectedCase = CASE_STUDIES.find(c => c.category === activeTab) || CASE_STUDIES[0];

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Client Performance Case Inquiries
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore actual, expert-validated results delivering top list ranks and generative citation recommendations to our startup and corporate partners.
        </p>
      </div>

      {/* Categories Toggle Switcher */}
      <div className="flex justify-center border-b border-slate-800 pb-4">
        <div className="flex space-x-2 bg-navy-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-brand-blue-500 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Organic SEO Successes
          </button>
          <button
            onClick={() => setActiveTab('ai-visibility')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ai-visibility'
                ? 'bg-brand-blue-500 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Generative AEO placements
          </button>
          <button
            onClick={() => setActiveTab('ppc')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ppc'
                ? 'bg-brand-blue-500 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Paid PPC returns
          </button>
        </div>
      </div>

      {/* Core Case Showcase */}
      <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8">
        
        {/* Title metadata */}
        <div className="space-y-3 border-b border-indigo-950 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[10px] font-mono text-brand-blue-500 font-bold uppercase tracking-widest bg-brand-blue-500/10 border border-brand-blue-500/20 px-3 py-1 rounded-full">
              Category: {selectedCase.category === 'seo' ? 'Traditional Optimization' : selectedCase.category === 'ai-visibility' ? 'AI SEO Placement' : 'PPC Analytics'}
            </span>
            <span className="text-xs font-mono text-slate-500">Duration Period: {selectedCase.duration}</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white tracking-tight">
            {selectedCase.title}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans">
            Client Profile: <strong>{selectedCase.clientName}</strong>, within <strong>{selectedCase.industry}</strong> sector.
          </p>
        </div>

        {/* Metrics Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedCase.metrics.map((metric, i) => (
            <div key={i} className="bg-[#05070c] border border-slate-850 p-6 rounded-xl text-center space-y-1">
              <span className="text-3xl font-display font-bold text-brand-blue-500 leading-none">
                {metric.value}
              </span>
              <p className="text-slate-200 text-xs font-semibold tracking-tight">{metric.label}</p>
              <p className="text-slate-500 text-[10px] font-mono leading-relaxed">{metric.subtext}</p>
            </div>
          ))}
        </div>

        {/* Multi-tier Explanation rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          <div className="space-y-3 bg-[#05070c]/50 p-5 rounded-xl border border-slate-850">
            <h4 className="text-rose-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <span>The Strategic Challenge</span>
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{selectedCase.challenge}</p>
          </div>

          <div className="space-y-3 bg-[#05070c]/50 p-5 rounded-xl border border-slate-850">
            <h4 className="text-brand-blue-500 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <span>Implemented Solutions Workflow</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{selectedCase.solution}</p>
          </div>

          <div className="space-y-3 bg-[#05070c]/50 p-5 rounded-xl border border-slate-850">
            <h4 className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <span>Ultimate Business Impact</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{selectedCase.impactResult}</p>
          </div>
        </div>

        {/* Traditional before vs after performance matrix mock-up to build EEAT trust */}
        <div className="border-t border-slate-800 pt-8 mt-4 space-y-4">
          <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2">
            <Scale className="w-4 h-4 text-brand-blue-500" />
            <span>Operational Before vs After comparative checkpoints</span>
          </h4>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#05070c]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-navy-900/50 text-slate-400 font-mono">
                  <th className="py-3 px-4">Performance Checkpoint</th>
                  <th className="py-3 px-4">Prior Configuration State</th>
                  <th className="py-3 px-4 text-emerald-400">Optimized State under AVR Campaigns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                {selectedCase.category === 'seo' ? (
                  <>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Page Interactive Paint Load Delay</td>
                      <td className="py-3 px-4">7.3 Seconds (Failed Core Web Vitals)</td>
                      <td className="py-3 px-4 text-emerald-400">1.4 Seconds (Passed rating metrics)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Active Local Directory Indexes</td>
                      <td className="py-3 px-4">Sparse listings with NAP Address conflicts</td>
                      <td className="py-3 px-4 text-emerald-400">35+ Monitored registries correctly aligned</td>
                    </tr>
                  </>
                ) : selectedCase.category === 'ai-visibility' ? (
                  <>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Conversational Recommendations Placements</td>
                      <td className="py-3 px-4">Zero citations/references across LLM queries</td>
                      <td className="py-3 px-4 text-emerald-400">34+ verified citations under contextual prompts</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Data Microtags compliance</td>
                      <td className="py-3 px-4">Raw HTML descriptions (No structured data)</td>
                      <td className="py-3 px-4 text-emerald-400">100% full validated JSON-LD microdata sets</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Leads Acquisition Spend</td>
                      <td className="py-3 px-4">High Cost-Per-Click levels (broad bids leakage)</td>
                      <td className="py-3 px-4 text-emerald-400">Acquisition budget and CPC sliced by 48%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Campaign Landing Speed</td>
                      <td className="py-3 px-4">Low conversion templates (high bounce rates)</td>
                      <td className="py-3 px-4 text-emerald-400">A/B tested action flow units yielding +8.4% conversion</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
