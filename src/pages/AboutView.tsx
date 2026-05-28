import React from 'react';
import { ShieldCheck, Award, Users, FileCheck2, User, Globe, Trophy, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data';
import { SpotlightCard } from './HomeView';

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
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          <Award className="w-4.5 h-4.5 text-blue-600 animate-pulse" />
          <span>India's Pioneer EEAT Agency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none">
          The Story Behind AVR Web Consulting
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
          Pioneering high-ROI digital visibility and AI-driven Answer Engine Optimization for businesses nationwide and abroad.
        </p>
      </div>

      {/* Grid: Main Narrative and Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl sm:text-2xl font-premium font-semibold text-slate-900 tracking-tight">
            Our Mission: Empowering Brands to Survive and Dominate the Shift in Modern Search
          </h2>
          
          <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-medium">
            <p>
              Founded in 2015 in Visakhapatnam, Andhra Pradesh, India, <strong>AVR Web Consulting</strong> established a mission to eliminate low-value, automated, spammy SEO practices that compromise corporate authority. Our team built a foundation around clean code speed engineering, GMB map verification, and reputable manual digital outreach.
            </p>
            <p>
              As generative artificial intelligence tools began synthesizing search results natively via <strong>Google AI Overviews</strong> and conversational LLMs, we recognized that classical keyword-stuffing was dead.
            </p>
            <p>
              We upgraded our entire operational setup, integrating <strong>AEO, LLMO, and RAG optimization methods</strong>. Today, we operate as a leading hybrid agency—ensuring our clients rank at the top of Google list results and maintain priority recommendations when prospective clients query conversational AI engines.
            </p>
          </div>

          {/* Core Values Cards Mini Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="text-blue-600 font-extrabold text-lg block">2015</span>
              <p className="text-slate-550 text-[11px] font-bold">Year Founded in Visakhapatnam</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="text-emerald-600 font-extrabold text-lg block">100%</span>
              <p className="text-slate-550 text-[11px] font-bold">Manual Vetted Citations</p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="text-purple-600 font-extrabold text-lg block">SEMrush</span>
              <p className="text-slate-550 text-[11px] font-bold">Agency Partner Credentials</p>
            </div>
          </div>
        </div>

        {/* Credentials and Certifications Side */}
        <div className="lg:col-span-5 bg-white border border-slate-200/80 p-6 rounded-2xl space-y-6 shadow-sm">
          <h3 className="text-slate-950 font-display font-bold text-base flex items-center space-x-2">
            <Trophy className="text-blue-600 w-5 h-5" />
            <span>Certified Search Authority</span>
          </h3>

          <p className="text-slate-550 text-xs leading-relaxed font-semibold">
            Our processes align with strict Google guidelines and performance criteria verified by the top digital marketing platforms.
          </p>

          <div className="space-y-4">
            {COMPANY_CONTACT.certifications.map((certs, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 shadow-sm shadow-slate-100/5">
                <ShieldCheck className="text-emerald-600 w-4.5 h-4.5 shrink-0 mt-0.5 animate-pulse" />
                <span className="text-slate-700 text-xs font-semibold leading-relaxed">{certs}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-250/60 pt-6 space-y-3">
            <h4 className="text-slate-950 font-display font-semibold text-sm">Professional Associations</h4>
            <p className="text-slate-605 text-xs leading-relaxed font-medium">
              We maintain professional developer associations for WordPress, Shopify, and Semrush systems ensuring our clients retain standard technology frameworks.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Row */}
      <section className="bg-indigo-50/25 border border-slate-200/80 p-8 rounded-2xl hover:border-blue-500/30 transition-all space-y-8 shadow-sm">
        <h3 className="text-xl font-premium font-extrabold text-slate-900 tracking-tight text-center">
          Our Operational Standards &amp; Quality Codes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-slate-900 font-bold text-sm flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-sm shadow-blue-500/10" />
                <span>{val.title}</span>
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Profiles section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-premium font-extrabold text-slate-900 tracking-tight">
            Meet Our Senior Strategists
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-semibold">
            Work directly with trusted digital marketing authorities who build your strategy manually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <SpotlightCard key={index} className="p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-display font-bold flex items-center justify-center">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="text-slate-900 font-display font-bold text-sm sm:text-base leading-none mb-1">{member.name}</h4>
                  <p className="text-blue-605 text-[10px] sm:text-xs font-mono font-bold">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-550 text-xs leading-relaxed font-medium font-sans">
                {member.bio}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
}
