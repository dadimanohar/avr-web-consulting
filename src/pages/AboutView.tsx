import React from 'react';
import { ShieldCheck, Award, Users, FileCheck2, User, Globe, Trophy, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data';

export function AboutView() {
  const coreValues = [
    {
      title: "Data and Entity Honesty",
      desc: "Our search specialists do not guess or rely on mock metrics. Every strategy is built around factual schema coordinates and clean on-page semantic formatting."
    },
    {
      title: "100% Quality Manual Safeguards",
      desc: "We avoid dangerous, automated link-scheme software. We pitch niche publishers directly, ensuring brand links reside inside authentic editorial assets."
    },
    {
      title: "Radical Transparent Pricing",
      desc: "No hidden service fees, bloated consultation surcharges, or opaque pricing. We outline exactly what features are included in every affordable package up front."
    }
  ];

  const teamMembers = [
    {
      name: "Ravi Kumar",
      role: "Principal SEO Architect & Founder",
      bio: "Ravi founded AVR Web Consulting back in 2015 with a strict objective: delivering robust search visibility to growing ventures. He specializes in advanced global SEO structures and multi-regional semantic indexing.",
      avatar: "RK"
    },
    {
      name: "Ananya Rao",
      role: "Director of Technical & Enterprise Strategy",
      bio: "With over 9 years in web optimization, Ananya manages Core Web Vitals profiling, schema deployments, and multi-city geographic content targeting structures for mid-market clients.",
      avatar: "AR"
    },
    {
      name: "Vikas Reddy",
      role: "Head of AI Optimization & Research",
      bio: "Vikas conducts active audits on Large Language Model retrieval mechanics, formatting structured site code to capture high-priority citations on ChatGPT, Copilot, and Google AI Overviews.",
      avatar: "VR"
    }
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1 bg-brand-blue-500/10 border border-brand-blue-500/20 px-3 py-1.5 rounded-full">
          <Award className="text-brand-blue-500 w-4 h-4 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-brand-blue-500 uppercase tracking-widest">
            Expertise • Experience • Authoritative • Trust
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          The Story Behind AVR Web Consulting
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Pioneering high-ROI digital visibility and AI-driven Answer Engine Optimization for businesses nationwide and abroad.
        </p>
      </div>

      {/* Grid: Main Narrative and Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
            Our Mission: Empowering Brands to Survive and Dominate the Shift in Modern Search
          </h2>
          
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Founded in 2015 in Visakhapatnam, Andhra Pradesh, India, <strong>AVR Web Consulting</strong> established a mission to eliminate low-value, automated, spammy SEO practices that compromise corporate authority. Our team built a foundation around clean code speed engineering, GMB map verification, and reputable manual digital outreach.
            </p>
            <p>
              As generative artificial intelligence tools began synthesizing search results natively via <strong>Google AI Overviews</strong> and conversational LLMs, we recognized that classical keyword-stuffing was dead.
            </p>
            <p>
              We upgraded our entire operational setup, integrating **AEO, LLMO, and RAG optimization methods**. Today, we operate as a leading hybrid agency—ensuring our clients rank at the top of Google list results and maintain priority recommendations when prospective clients query conversational AI engines.
            </p>
          </div>

          {/* Core Values Cards Mini Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-navy-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <span className="text-brand-blue-500 font-bold hover:text-white transition-colors duration-200">2015</span>
              <p className="text-slate-400 text-xs">Year Founded in Visakhapatnam</p>
            </div>
            <div className="bg-navy-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <span className="text-emerald-400 font-bold">100%</span>
              <p className="text-slate-400 text-xs">Manual Vetted Citations</p>
            </div>
            <div className="bg-navy-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <span className="text-amber-400 font-bold">Semrush</span>
              <p className="text-slate-400 text-xs">Agency Partner Credentials</p>
            </div>
          </div>
        </div>

        {/* Credentials and Certifications Side */}
        <div className="lg:col-span-5 bg-navy-900 border border-slate-800 p-6 rounded-2xl space-y-6">
          <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
            <Trophy className="text-brand-blue-500 w-5 h-5" />
            <span>Certified Search authority</span>
          </h3>

          <p className="text-slate-400 text-xs leading-relaxed">
            Our processes align with strict Google guidelines and performance criteria verified by the top digital marketing platforms.
          </p>

          <div className="space-y-4">
            {COMPANY_CONTACT.certifications.map((certs, index) => (
              <div key={index} className="flex items-start space-x-3 bg-[#05070c] p-3 rounded-lg border border-slate-800">
                <ShieldCheck className="text-brand-blue-500 w-4 h-4 shrink-0 mt-0.5 animate-pulse" />
                <span className="text-slate-200 text-xs font-medium">{certs}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-3">
            <h4 className="text-white font-display font-semibold text-sm">Professional Associations</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              We maintain professional developer associations for WordPress, Shopify, and Semrush systems ensuring our clients retain standard technology frameworks.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Row */}
      <section className="bg-navy-900/40 border border-slate-800 p-8 rounded-2xl hover:border-brand-blue-500/30 transition-all space-y-8">
        <h3 className="text-xl font-display font-semibold text-white tracking-tight text-center">
          Our Operational Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-white font-medium text-sm flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-brand-blue-500 rounded-full" />
                <span>{val.title}</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Profiles section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">
            Meet Our Senior Strategists
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Work directly with trusted digital marketing authorities who build your strategy manually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#05070c] border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition-all space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-850 pb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-display font-bold flex items-center justify-center">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="text-white font-display font-semibold text-sm sm:text-base">{member.name}</h4>
                  <p className="text-indigo-400 text-[10px] sm:text-xs font-mono">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
