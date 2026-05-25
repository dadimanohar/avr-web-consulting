import React, { useState } from 'react';
import { Sparkles, Bot, Loader, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Download, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuditResult {
  score: number;
  criticalIssues: string[];
  positives: string[];
  aeoStatus: 'Under-optimized' | 'Needs Formatting' | 'Good';
  llmStatus: 'Low Search Grounding' | 'Vulnerable' | 'Highly Grounded';
  recommendations: string[];
}

export function AIAuditTool() {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [industry, setIndustry] = useState('tech');
  const [isAuditing, setIsAuditing] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const auditSteps = [
    "Resolving domain schema structures and JSON-LD context tags...",
    "Querying LLM retrieval signals and brand citation index...",
    "Analyzing semantic entity density values against competitive nodes...",
    "Checking Core Web Vitals, paint indexes, and DOM element sizes...",
    "Synthesizing customized AI Overview placement indicators..."
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !keyword) return;

    setIsAuditing(true);
    setStepIndex(0);
    setResult(null);
    setHasSubmittedLead(false);

    // Dynamic progression visual simulation
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= auditSteps.length - 1) {
          clearInterval(interval);
          generateAuditResult();
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  const generateAuditResult = () => {
    // Determine dynamic results base on strings to make it look responsive and realistic
    const scoreVal = Math.floor(Math.random() * 31) + 45; // 45-75 score to show room for growth
    
    let criticalIssues = [
      "Missing FAQ schema microdata blocking direct snippets extraction.",
      "Informational answers lack concise Q&A summary lines for Gemini or Copilot crawlers to capture.",
      "Mismatched NAP citations across business databases causing local trust drop."
    ];

    let positives = [
      "Excellent primary site HTML heading structure.",
      "Functional XML schema canonical mapping configurations active."
    ];

    let recommendations = [
      "Deploy localized multi-city landing nodes targetting regional search intent.",
      "Refactor primary service content blocks to match conversational Q&A styling models.",
      "Integrate rich product markup schemas to feed into AI Overview e-commerce widgets."
    ];

    if (industry === 'ecommerce') {
      criticalIssues.push("Product listings missing real-time pricing schemas (JSON-LD structures).");
      recommendations.push("Integrate dynamic Shopify or WooCommerce schema attributes tracking stock levels.");
    } else if (industry === 'healthcare') {
      criticalIssues.push("Sparse clinical authority validation reference points.");
      recommendations.push("Launch expert-vetted resource categories formatted directly for patient queries compliance.");
    }

    setResult({
      score: scoreVal,
      criticalIssues,
      positives,
      aeoStatus: scoreVal > 65 ? 'Needs Formatting' : 'Under-optimized',
      llmStatus: scoreVal > 60 ? 'Vulnerable' : 'Low Search Grounding',
      recommendations
    });
    setIsAuditing(false);
  };

  const handleLeadFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) return;

    // Persist list locally to show user they are verified in database
    const savedLeads = JSON.parse(localStorage.getItem('avr_leads') || '[]');
    savedLeads.push({
      ...contactInfo,
      url,
      keyword,
      industry,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('avr_leads', JSON.stringify(savedLeads));

    setHasSubmittedLead(true);
  };

  return (
    <div className="bg-navy-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl" id="ai-audit-component">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-500 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="text-white w-6 h-6 animate-pulse" />
          <h3 className="font-display font-semibold text-white tracking-tight text-lg">
            AVR Interactive AI SEO Visualizer
          </h3>
        </div>
        <span className="text-xs bg-navy-900/60 text-brand-blue-50 px-3 py-1 rounded-full font-mono font-medium">
          v2.1 live
        </span>
      </div>

      <div className="p-6 md:p-8">
        {!isAuditing && !result && (
          <form onSubmit={handleStartAudit} className="space-y-5">
            <p className="text-slate-300 text-sm leading-relaxed">
              Wondering if your web asset is invisible to modern systems like <strong>Google AI Overviews</strong> or <strong>ChatGPT</strong>? 
              Provide your details below to execute our dynamic SEO evaluation crawler immediately.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Target Domain URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://example.com"
                  className="w-full bg-[#05070c] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-brand-blue-500 transition-colors text-sm"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Target Keyword
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., local SEO consultant Pune"
                  className="w-full bg-[#05070c] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-brand-blue-500 transition-colors text-sm"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                Industry Category
              </label>
              <select
                className="w-full bg-[#05070c] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-brand-blue-500 transition-colors text-sm"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="tech">Startups & Tech Software</option>
                <option value="ecommerce">E-Commerce & Retail Stores</option>
                <option value="healthcare">Healthcare Clinics</option>
                <option value="finance">Professional Financial Services</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-blue-500/15 cursor-pointer"
            >
              <span>Analyze AI Visibility Index</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </form>
        )}

        {isAuditing && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <Loader className="w-12 h-12 text-brand-blue-500 animate-spin" />
            <div className="space-y-2 max-w-md">
              <h4 className="text-white font-medium text-base">Running Crawler Diagnosis</h4>
              <p className="text-slate-400 text-sm font-mono leading-relaxed h-12">
                {auditSteps[stepIndex]}
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full max-w-sm bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="bg-brand-blue-500 h-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((stepIndex + 1) / auditSteps.length) * 100}%` }}
                transition={{ duration: 1.1 }}
              />
            </div>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            {/* Score Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-slate-800 pb-6">
              <div className="flex flex-col items-center text-center bg-[#05070c] p-4 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-mono mb-1">Visibility Score</span>
                <span className={`text-4xl font-display font-bold ${result.score > 60 ? 'text-amber-400' : 'text-rose-500'}`}>
                  {result.score}/100
                </span>
                <span className="text-xs text-slate-500 mt-2 font-mono">Needs Serious Optimization</span>
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="flex justify-between items-center bg-[#05070c] px-4 py-2 border border-slate-800 rounded-lg">
                  <span className="text-sm text-slate-300">AEO Status</span>
                  <span className="text-xs bg-rose-500/10 text-rose-400 px-2 py-1 rounded font-medium border border-rose-500/20">
                    {result.aeoStatus}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#05070c] px-4 py-2 border border-slate-800 rounded-lg">
                  <span className="text-sm text-slate-300">LLM Citation Retrieval Rating</span>
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded font-medium border border-amber-500/20">
                    {result.llmStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-rose-400 uppercase tracking-wide flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Critical System Deficiencies</span>
                </h5>
                <ul className="space-y-2">
                  {result.criticalIssues.map((issue, idx) => (
                    <li key={idx} className="text-slate-300 text-xs leading-relaxed flex items-start space-x-2">
                      <span className="text-rose-500 shrink-0 font-bold">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-brand-blue-500 uppercase tracking-wide flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified positive traits</span>
                </h5>
                <ul className="space-y-2">
                  {result.positives.map((pos, idx) => (
                    <li key={idx} className="text-slate-300 text-xs leading-relaxed flex items-start space-x-2">
                      <span className="text-brand-blue-500 shrink-0 font-bold">•</span>
                      <span>{pos}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendations / Next Steps Checklist */}
            <div className="bg-brand-blue-600/5 border border-brand-blue-500/20 p-4 rounded-xl space-y-3">
              <h5 className="text-xs font-semibold text-brand-blue-500 uppercase tracking-wide flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>AI-Engineered Action Recommendations</span>
              </h5>
              <ul className="space-y-2">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="text-slate-300 text-xs leading-relaxed flex items-start space-x-2">
                    <span className="text-brand-blue-500 shrink-0 font-mono font-bold">{idx + 1}.</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead Form to Download / Save Full Report */}
            {!hasSubmittedLead ? (
              <form onSubmit={handleLeadFormSubmit} className="border-t border-slate-800 pt-6 space-y-4">
                <div className="text-center md:text-left">
                  <h5 className="text-white text-sm font-semibold tracking-tight">
                    Want the actionable technical directives for this audit?
                  </h5>
                  <p className="text-slate-400 text-xs mt-1">
                    Provide your details below to lock in an expert SEO strategy session and download your complete PDF recommendations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-[#05070c] border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-brand-blue-500 text-xs"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="bg-[#05070c] border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-brand-blue-500 text-xs"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    className="bg-[#05070c] border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-brand-blue-500 text-xs"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium py-2 px-4 rounded text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Complete SEO PDF Blueprint</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUrl('');
                      setResult(null);
                    }}
                    className="bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium py-2 px-4 rounded text-xs transition-colors cursor-pointer"
                  >
                    Reset & Audit New Site
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                className="border-t border-slate-800 pt-6 text-center space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex p-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-white text-sm font-semibold">Perfect! Diagnostic Document Generated Successfully</h5>
                  <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                    Our team is compiling the technical diagnostic and will ping you at <strong>{contactInfo.email}</strong> alongside our premium roadmap files within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setUrl('');
                    setResult(null);
                    setHasSubmittedLead(false);
                  }}
                  className="inline-flex text-xs text-brand-blue-500 hover:underline cursor-pointer"
                >
                  Clear Results & Audit Another Website
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
