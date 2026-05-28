import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, Cpu, Zap, Network, HelpCircle, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export function AIGrowthSimulator() {
  const [aeoScore, setAeoScore] = useState(40);
  const [schemaScore, setSchemaScore] = useState(30);
  const [citationScore, setCitationScore] = useState(25);

  // Computed metrics with soft easing bounds
  const overallSyncScore = Math.min(
    100,
    Math.round(aeoScore * 0.4 + schemaScore * 0.35 + citationScore * 0.25)
  );

  const aiMentionProb = Math.min(
    100,
    Math.round((aeoScore * 0.5 + citationScore * 0.5) * (schemaScore > 50 ? 1.0 : 0.7))
  );

  const getSimulatedRank = () => {
    const total = overallSyncScore;
    if (total < 35) return 'Page 8 (Invisible)';
    if (total < 50) return 'Page 4 (Low relevance)';
    if (total < 70) return 'Page 1 (Lower fold)';
    if (total < 88) return 'Top 3 (Maps / Carousel)';
    return '№ 1 Featured Highlight & AI Cited Source';
  };

  const getAEOFeedback = () => {
    const avg = overallSyncScore;
    if (avg < 35) {
      return {
        text: "LLM grounding returned NULL. Conflicting metadata. Your web presence is totally invisible to conversational pipelines.",
        status: "critical",
        color: "text-rose-600 border-rose-100 bg-rose-50/20"
      };
    }
    if (avg < 70) {
      return {
        text: "Some entity mentions found on public web scrapes, but mismatched NAP data and missing JSON-LD tags raise authenticity alerts.",
        status: "warning",
        color: "text-amber-600 border-amber-100 bg-amber-50/20"
      };
    }
    return {
      text: "AVR Web Consulting entity relations confirmed at 98.4% match confidence. Cited confidently inside citation networks across Delhi, Pune, Chennai, and Hyderabad.",
      status: "optimal",
      color: "text-emerald-700 border-emerald-150 bg-emerald-50/30"
    };
  };

  const feedback = getAEOFeedback();

  return (
    <div className="relative glass-effect-card rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl overflow-hidden bg-white/70 backdrop-blur-md">
      
      {/* Background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative space-y-8 z-10">
        
        {/* Dynamic header typography pairing */}
        <div className="border-b border-slate-200/60 pb-6 space-y-2">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 py-1 px-3 rounded-full text-[10px] font-mono font-extrabold text-blue-600 uppercase tracking-widest leading-none select-none">
            <Network className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>Viral Experiential Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-premium font-extrabold tracking-tight text-slate-900 leading-tight">
            Core Grounding Engine Simulator
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
            Adjust the sliders below to experience how generative models index, cluster, and cite your brand. Witness the difference between legacy SEO and future-proofed multi-dimensional authority.
          </p>
        </div>

        {/* 2 Column Layout: Controls and Visual Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Slider Controls (Col 5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            
            {/* Slider 1 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-extrabold tracking-widest">
                <span className="flex items-center space-x-1">
                  <Bot className="w-3.5 h-3.5 text-indigo-500" />
                  <span>AEO FORMATTING RATIO</span>
                </span>
                <span className="text-indigo-600 text-xs font-bold">{aeoScore}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={aeoScore}
                onChange={(e) => setAeoScore(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer outline-none accent-indigo-600 range-slider"
              />
              <p className="text-[9px] text-slate-400 font-medium leading-tight">
                Sentence-level conciseness &amp; Q&amp;A structured response layouts.
              </p>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-extrabold tracking-widest">
                <span className="flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5 text-blue-500" />
                  <span>SCHEMA VALIDITY DEPTH</span>
                </span>
                <span className="text-blue-600 text-xs font-bold">{schemaScore}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={schemaScore}
                onChange={(e) => setSchemaScore(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer outline-none accent-blue-600 range-slider"
              />
              <p className="text-[9px] text-slate-400 font-medium leading-tight">
                JSON-LD context feeds resolving maps coordinates and city landmarks.
              </p>
            </div>

            {/* Slider 3 */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 font-extrabold tracking-widest">
                <span className="flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" />
                  <span>MANUAL INTENT OUTREACHES</span>
                </span>
                <span className="text-emerald-600 text-xs font-bold">{citationScore}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={citationScore}
                onChange={(e) => setCitationScore(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer outline-none accent-emerald-500 range-slider"
              />
              <p className="text-[9px] text-slate-400 font-medium leading-tight">
                Vetted guest postings generating contextual mentions in LLM scraped hubs.
              </p>
            </div>

            {/* Unified Micro-metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center space-y-1">
                <span className="text-[8px] font-mono font-extrabold text-slate-400 block uppercase tracking-widest">AI MENTION LIKELIHOOD</span>
                <span className="text-lg font-display font-black text-slate-900">{aiMentionProb}%</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center space-y-1">
                <span className="text-[8px] font-mono font-extrabold text-slate-400 block uppercase tracking-widest">ORGANIC REACH GRADE</span>
                <span className="text-lg font-display font-black text-slate-900">{overallSyncScore}/100</span>
              </div>
            </div>

          </div>

          {/* Interactive Neural SVG Visual Output & Simulator (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Live Interactive Visualization Board */}
            <div className="relative bg-slate-950 rounded-2xl p-5 border border-slate-900 shadow-inner overflow-hidden aspect-video flex items-center justify-center">
              
              {/* Dynamic Grid Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              {/* Glowing Ambient core */}
              <div 
                className="absolute w-40 h-40 rounded-full blur-3xl pointer-events-none transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, rgba(99,102,241, ${overallSyncScore / 400}) 0%, transparent 80%)`
                }}
              />

              {/* Embedded Interactive SVG Graph Network representing LLM Context groundings */}
              <svg viewBox="0 0 400 240" className="w-full h-full relative z-10 select-none">
                
                {/* SVG Connections with sliding dash animations */}
                {/* Site logic to ChatGPT */}
                <path 
                  d="M 200,120 L 80,60" 
                  stroke={overallSyncScore > 45 ? '#818cf8' : '#334155'} 
                  strokeWidth={1 + overallSyncScore / 40}
                  strokeDasharray="6, 6" 
                  className="transition-all duration-300"
                />
                <circle cx="80" cy="60" r="14" fill="#0f172a" stroke={overallSyncScore > 45 ? '#818cf8' : '#334155'} strokeWidth="2" />
                <text x="80" y="63" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">GPT</text>
                
                {/* Site to Gemini */}
                <path 
                  d="M 200,120 L 320,60" 
                  stroke={overallSyncScore > 55 ? '#60a5fa' : '#334155'} 
                  strokeWidth={1 + overallSyncScore / 40}
                  strokeDasharray="6, 6" 
                />
                <circle cx="320" cy="60" r="14" fill="#0f172a" stroke={overallSyncScore > 55 ? '#60a5fa' : '#334155'} strokeWidth="2" />
                <text x="320" y="63" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">GEM</text>

                {/* Site to Claude */}
                <path 
                  d="M 200,120 L 70,170" 
                  stroke={overallSyncScore > 65 ? '#fb7185' : '#334155'} 
                  strokeWidth={1 + overallSyncScore / 40}
                  strokeDasharray="6, 6" 
                />
                <circle cx="70" cy="170" r="14" fill="#0f172a" stroke={overallSyncScore > 65 ? '#fb7185' : '#334155'} strokeWidth="2" />
                <text x="70" y="173" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">CLD</text>

                {/* Site to Google Search */}
                <path 
                  d="M 200,120 L 330,170" 
                  stroke={overallSyncScore > 35 ? '#34d399' : '#334155'} 
                  strokeWidth={1 + overallSyncScore / 40}
                  strokeDasharray="6, 6" 
                />
                <circle cx="330" cy="170" r="14" fill="#0f172a" stroke={overallSyncScore > 35 ? '#34d399' : '#334155'} strokeWidth="2" />
                <text x="330" y="173" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">GGL</text>

                {/* Main Client Hub element in center */}
                <circle 
                  cx="200" 
                  cy="120" 
                  r={22 + overallSyncScore / 15} 
                  fill="#4338ca" 
                  className="transition-all duration-300 cursor-pointer animate-pulse"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="200" y="123" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">YOUR BRAND</text>

                {/* Active vector flow nodes moving on path */}
                {overallSyncScore > 40 && (
                  <circle cx="140" cy="90" r="3" fill="#ffffff" className="animate-ping" />
                )}
                {overallSyncScore > 60 && (
                  <circle cx="260" cy="90" r="3" fill="#ffffff" className="animate-ping" />
                )}

              </svg>

              {/* Simulated Current Ranking indicator */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-[9px] font-mono flex items-center space-x-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-400">Simulated Index: </span>
                <span className="text-white font-bold">{getSimulatedRank()}</span>
              </div>

            </div>

            {/* Synthesized Output Box (Changes dynamically to resemble generative answers!) */}
            <div className={`p-4 rounded-xl border flex items-start space-x-3.5 transition-all duration-300 ${feedback.color}`}>
              {feedback.status === 'optimal' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 animate-bounce" />
              ) : (
                <ShieldAlert className={`w-5 h-5 shrink-0 mt-0.5 ${feedback.status === 'critical' ? 'text-rose-500 animate-pulse' : 'text-amber-500'}`} />
              )}
              <div className="space-y-0.5">
                <strong className="text-[10px] font-mono uppercase tracking-widest font-black block">
                  {feedback.status === 'optimal' ? 'AI Search Response (Confidential Consensus)' : 'Warning: Synthesis Index Alert'}
                </strong>
                <p className="text-slate-900 font-sans text-xs sm:text-sm leading-relaxed italic font-medium">
                  &quot;{feedback.text}&quot;
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Footnote space showing restraints */}
        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[9px] text-slate-400 font-mono">
          <span>REAL-TIME INERTIA EQUATIONS ACTIVE</span>
          <span>COMPLIANT WITH OPENAI, CRAWLERS &amp; GOOGLE REVENUE FORMULAS</span>
        </div>

      </div>
    </div>
  );
}
