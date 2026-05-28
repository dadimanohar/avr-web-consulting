import React, { useState } from 'react';
import { AreaChart, TrendingUp, CheckCircle2, Layout, HelpCircle, BarChart3, Scale, ChevronRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { SpotlightCard } from './HomeView';

export function CaseStudiesView() {
  const [activeTab, setActiveTab] = useState<'seo' | 'ai-visibility' | 'ppc'>('seo');
  const selectedCase = CASE_STUDIES.find(c => c.category === activeTab) || CASE_STUDIES[0];

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          Proven Success Cases
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none text-center">
          Client Performance Case Inquiries
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
          Explore actual, expert-validated results delivering top list ranks and generative citation recommendations to our startup and corporate partners.
        </p>
      </div>

      {/* Categories Toggle Switcher */}
      <div className="flex justify-center border-b border-slate-200/60 pb-6">
        <div className="flex space-x-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Organic SEO Successes
          </button>
          <button
            onClick={() => setActiveTab('ai-visibility')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ai-visibility'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Generative AEO Placements
          </button>
          <button
            onClick={() => setActiveTab('ppc')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'ppc'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Paid PPC Returns
          </button>
        </div>
      </div>

      {/* Core Case Showcase */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Title metadata */}
        <div className="space-y-3 border-b border-slate-200/60 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[10px] font-mono text-blue-600 font-extrabold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              Category: {selectedCase.category === 'seo' ? 'Traditional Optimization' : selectedCase.category === 'ai-visibility' ? 'AI SEO Placement' : 'PPC Analytics'}
            </span>
            <span className="text-xs font-mono text-slate-400 font-bold">Duration Period: {selectedCase.duration}</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-premium font-extrabold text-slate-900 tracking-tight">
            {selectedCase.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-sans font-medium">
            Client Profile: <strong className="text-slate-800">{selectedCase.clientName}</strong>, within <strong className="text-slate-800">{selectedCase.industry}</strong> sector.
          </p>
        </div>

        {/* Metrics Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedCase.metrics.map((metric, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center space-y-1.5 shadow-sm shadow-slate-100/10">
              <span className="text-3xl font-display font-extrabold text-blue-600 leading-none block">
                {metric.value}
              </span>
              <p className="text-slate-800 text-xs font-bold tracking-tight">{metric.label}</p>
              <p className="text-slate-400 text-[10px] font-mono font-semibold-wider leading-relaxed">{metric.subtext}</p>
            </div>
          ))}
        </div>

        {/* Multi-tier Explanation rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          <div className="space-y-3 bg-red-50/20 p-5 rounded-2xl border border-red-100/80 shadow-sm shadow-red-500/5">
            <h4 className="text-red-700 text-xs font-mono font-extrabold uppercase tracking-widest flex items-center space-x-1.5">
              <span>The Strategic Challenge</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">{selectedCase.challenge}</p>
          </div>

          <div className="space-y-3 bg-blue-50/20 p-5 rounded-2xl border border-blue-100/80 shadow-sm shadow-blue-500/5">
            <h4 className="text-blue-700 text-xs font-mono font-extrabold uppercase tracking-widest flex items-center space-x-1.5">
              <span>Implemented Solutions Workflow</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed font-semibold">{selectedCase.solution}</p>
          </div>

          <div className="space-y-3 bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100/80 shadow-sm shadow-emerald-500/5">
            <h4 className="text-emerald-700 text-xs font-mono font-extrabold uppercase tracking-widest flex items-center space-x-1.5">
              <span>Ultimate Business Impact</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed font-semibold">{selectedCase.impactResult}</p>
          </div>
        </div>

        {/* Traditional before vs after performance matrix mock-up to build EEAT trust */}
        <div className="border-t border-slate-200/60 pt-8 mt-4 space-y-4">
          <h4 className="text-slate-800 text-xs font-mono font-extrabold uppercase tracking-widest flex items-center space-x-1.5">
            <Scale className="w-4 h-4 text-blue-600" />
            <span>Operational Before vs After Comparative Checkpoints</span>
          </h4>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-mono font-bold">
                  <th className="py-3.5 px-5">Performance Checkpoint</th>
                  <th className="py-3.5 px-5">Prior Configuration State</th>
                  <th className="py-3.5 px-5 text-emerald-600">Optimized State under AVR Campaigns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700 font-semibold">
                {selectedCase.category === 'seo' ? (
                  <>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Page Interactive Paint Load Delay</td>
                      <td className="py-3.5 px-5">7.3 Seconds (Failed Core Web Vitals)</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">1.4 Seconds (Passed rating metrics)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Active Local Directory IndexesState</td>
                      <td className="py-3.5 px-5">Sparse listings with NAP Address conflicts State</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">35+ Monitored registries correctly aligned</td>
                    </tr>
                  </>
                ) : selectedCase.category === 'ai-visibility' ? (
                  <>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Conversational Recommendations Placements</td>
                      <td className="py-3.5 px-5">Zero citations/references across LLM queries</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">34+ verified citations under contextual prompts</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Data Microtags compliance</td>
                      <td className="py-3.5 px-5">Raw HTML descriptions (No structured data)</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">100% full validated JSON-LD microdata sets</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Leads Acquisition Spend</td>
                      <td className="py-3.5 px-5">High Cost-Per-Click levels (broad bids leakage)</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">Acquisition budget and CPC sliced by 48%</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold text-slate-800">Campaign Landing Speed</td>
                      <td className="py-3.5 px-5">Low conversion templates (high bounce rates)</td>
                      <td className="py-3.5 px-5 text-emerald-600 font-bold">A/B tested action flow units yielding +8.4% conversion</td>
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
