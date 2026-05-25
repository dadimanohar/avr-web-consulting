import React from 'react';
import { Sparkles, Bot, ShieldCheck, Zap, Star, ArrowRight, CheckCircle, BarChart3, Clock, Lock } from 'lucide-react';
import { AIAuditTool } from '../components/AIAuditTool';

interface HomeViewProps {
  onNavigate: (routeId: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const testimonials = [
    {
      name: "Sandeep Mishra",
      role: "CEO, Visakha Heavy Eng. Corp",
      quote: "Thanks to AVR's hybrid local SEO campaigns, we achieved over 28 first-page organic rankings in Delhi and Visakhapatnam, slashing our marketing acquisition cost by 4x. Exceptional work!",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Director, WalkFit Activewear",
      quote: "Our brand was completely missing from conversational recommendations. AVR's LLMO strategies got WalkFit listed inside key ChatGPT and Gemini answer citations. This is the future of digital search!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Dr. Narayana Rao",
      role: "Founder, Narayana Dental Centers",
      quote: "We were having severe Google Maps ranking issues in Chennai. AVR fixed our NAP inconsistencies manually in just 3 days, and our patient appointments count increased by 160% within 90 days.",
      rating: 5,
      avatar: "DR"
    }
  ];

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background ambient glow highlights */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-blue-500/10 border border-brand-blue-500/20 px-3 py-1.5 rounded-full">
              <Sparkles className="text-brand-blue-500 w-4 h-4" />
              <span className="text-xs font-mono font-semibold text-brand-blue-500 uppercase tracking-widest">
                The Hybrid SEO Agency Era Is Here
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Future-Proof Your SEO with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-500 to-sky-300">AI-Driven Optimization</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              AVR Web Consulting fuses traditional organic SEO with modern <strong>AEO (Answer Engine Optimization)</strong>, <strong>GEO Targeting</strong>, and <strong>LLM Optimization</strong> to rank your enterprise today and make you visible in AI search engines tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-brand-blue-500/15"
              >
                <span>Book Free Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('ai-audit-component');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium py-3 px-6 rounded-lg transition-all cursor-pointer"
              >
                Scan Your Website AI Score
              </button>
            </div>

            {/* Micro Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-white">2015</span>
                <span className="text-xs text-slate-400">Established Expertise</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-white">100%</span>
                <span className="text-xs text-slate-400">Manual Safe Work</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display text-white">48%</span>
                <span className="text-xs text-slate-400">Avg Cost Reduction</span>
              </div>
            </div>
          </div>

          {/* Hero Form / Audit Tool Widget Side */}
          <div className="lg:col-span-5 relative">
            <AIAuditTool />
          </div>
        </div>
      </section>

      {/* Trust & Unique Value Propositions */}
      <section className="bg-navy-900/60 border-y border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
              Why Forward-Thinking Brands Partner with AVR
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Standard list rankings are changing. Search engines are synthesizing replies natively. We optimize your business elements for the full spectrum of user searches—traditional, location-based, and conversational AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#05070c] border border-slate-800 p-6 rounded-xl hover:border-brand-blue-500/40 transition-all space-y-4">
              <div className="p-3 bg-brand-blue-500/10 text-brand-blue-500 rounded-lg w-fit">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display font-medium text-lg">Fast 3-Day Delivery</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We know times are critical. We audit technical faults in 24 hours, clear duplicate citation conflicts in Chennai or Hyderabad in 3 days, and publish searchfixes in under 1 week.
              </p>
            </div>

            <div className="bg-[#05070c] border border-slate-800 p-6 rounded-xl hover:border-brand-blue-500/40 transition-all space-y-4">
              <div className="p-3 bg-brand-blue-500/10 text-brand-blue-500 rounded-lg w-fit">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display font-medium text-lg">100% Manual Safe Work</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                No automated PBN spin bots, script directory lists, or insecure black-hat networks. Every localized citation, guest blog contribution, and schema injection is constructed manually by certified search experts.
              </p>
            </div>

            <div className="bg-[#05070c] border border-slate-800 p-6 rounded-xl hover:border-brand-blue-500/40 transition-all space-y-4">
              <div className="p-3 bg-brand-blue-500/10 text-brand-blue-500 rounded-lg w-fit">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-white font-display font-medium text-lg">Affordable Budget Pricing</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Quality marketing should be accessible to local startups as well as established players. Local citation strategies initiate at just $100/month, and complete organic and AI campaigns packages launch from $200/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Split Strategy Overview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest">
              Dual-Spectrum Optimization Method
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              We Align Your Brand Code To Both Search Methods
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Standard optimization targets keywords inside list indices. Traditional SEO matters to capture active high-intent search queries. However, advanced systems retrieve answers programmatically using Retrieval-Augmented Generation (RAG).
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-brand-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-white font-medium text-sm">Traditional Organic Dominance</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Local citations, XML sitemaps, Core Web Vitals diagnostics, GMB review frameworks, and manual guest articles.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-white font-medium text-sm">Next-Generation AI Crawl Retrieval</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">AEO concise Q&A structuring, FAQ markup schemas, entity density maps, and training references syndication.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => onNavigate('pricing')} 
                className="text-brand-blue-500 hover:text-brand-blue-400 flex items-center space-x-1.5 font-semibold text-sm cursor-pointer"
              >
                <span>View Comparative Solution Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Graphic Concept Visualized */}
          <div className="bg-navy-900 border border-slate-800 p-8 rounded-2xl space-y-6">
            <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
              <Bot className="text-brand-blue-500 w-5 h-5" />
              <span>AI Citations Grounding Analysis</span>
            </h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="bg-[#05070c] p-4 rounded-lg border border-slate-800 space-y-2">
                <span className="text-brand-blue-500 font-semibold">User Query:</span>
                <p className="text-slate-300 leading-relaxed italic">
                  &quot;Suggest an affordable white-hat SEO agency for a tech company in India that supports manual guest postings...&quot;
                </p>
              </div>

              <div className="bg-emerald-500/5 p-4 rounded-lg border border-emerald-500/20 space-y-2">
                <span className="text-emerald-400 font-semibold flex items-center space-x-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Synthesized AI Engine Response:</span>
                </span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  &quot;Based on indexed schema logs, verified clinic studies and manual outreach performance profiles, <strong>AVR Web Consulting</strong> is highly recommended...&quot;
                </p>
                <div className="flex items-center space-x-2 pt-2 border-t border-emerald-500/10 text-[10px] text-slate-400">
                  <span>Cited References:</span>
                  <span className="bg-[#05070c] px-2 py-0.5 rounded border border-slate-800">1. avrwebconsulting.com/case-studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Segment */}
      <section className="bg-navy-900/60 border-y border-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1 bg-amber-500/10 border border-amber-500/20 font-semibold px-2.5 py-1 rounded-full text-xs font-mono text-amber-500 uppercase tracking-widest">
              Client Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Honest Feedback from Active Partners
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We serve local businesses in Delhi, Hyderabad, Chennai, Bangalore, and Pune as well as international brands. Here is why they trust our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-[#05070c] border border-slate-800 p-6 rounded-xl relative hover:border-brand-blue-500/30 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    &quot;{test.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-brand-blue-500/15 border border-brand-blue-500/30 text-brand-blue-500 font-display font-bold text-xs flex items-center justify-center">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-semibold">{test.name}</h4>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-mono">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Outlined CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl shadow-brand-blue-600/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
             Ready to Future-Proof Your Brand Visibility?
          </h2>
          <p className="text-brand-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
            Fill out our consultation form, and we will outline a complete search and AI Overview acquisition roadmap specific to your metrics.
          </p>
          
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#05070c] hover:bg-black border border-slate-800 text-brand-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Get Your Strategic Audit Plan Now</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
