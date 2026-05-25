import React, { useState } from 'react';
import { MapPin, Map, Phone, Mail, Clock, HelpCircle, Navigation, Info, ShieldCheck } from 'lucide-react';
import { CITY_LANDING_DATA, COMPANY_CONTACT } from '../data';

export function CityLandingView() {
  const [activeCityId, setActiveCityId] = useState(CITY_LANDING_DATA[0].id);
  const selectedCity = CITY_LANDING_DATA.find(c => c.id === activeCityId) || CITY_LANDING_DATA[0];

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          GEO SEO City Landing Placements
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Select an active Indian metropolitan node below to explore our hyper-localized citation structures, neighbor-specific organic search strategies, and MAP verification workflows.
        </p>
      </div>

      {/* City Switcher Row */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-slate-800 pb-6">
        {CITY_LANDING_DATA.map((city) => {
          const isSelected = city.id === activeCityId;
          return (
            <button
              key={city.id}
              onClick={() => setActiveCityId(city.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border outline-none cursor-pointer ${
                isSelected 
                  ? 'bg-brand-blue-500 border-brand-blue-500 text-white shadow-lg' 
                  : 'bg-navy-900 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{city.cityName}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Container layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Hand: Local insights, challenges, and keywords */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <span className="text-[10px] font-mono text-brand-blue-500 font-bold uppercase tracking-widest block">
              Active Regional Gateway: {selectedCity.cityName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {selectedCity.metaTitle.split('|')[0]}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-mono leading-relaxed">
              Target Meta-Description: {selectedCity.metaDescription}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {selectedCity.introText}
          </p>

          {/* Local challenges alerts */}
          <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-xl space-y-2">
            <h4 className="text-rose-400 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2">
              <Info className="w-4 h-4 text-rose-500" />
              <span>{selectedCity.cityName} Market Competitor Friction</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              {selectedCity.localChallenges} Our custom manual citation protocols and map verification audits prune contradictory entries to boost search confidence scores.
            </p>
          </div>

          {/* Regional business details (NAP card) with strict details */}
          <div className="bg-[#05070c] border border-slate-800 p-5 rounded-xl space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-brand-blue-500" />
              <span>Regional Citation Validation (NAP Schema)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="space-y-2">
                <p className="text-slate-400"><strong>Organization:</strong> {COMPANY_CONTACT.businessName}</p>
                <p className="text-slate-400"><strong>Certified Phone:</strong> {COMPANY_CONTACT.phone}</p>
                <p className="text-slate-400"><strong>Regional Office:</strong> Vizag-Andhra Pradesh Headquarters</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400"><strong>Support Email:</strong> {COMPANY_CONTACT.email}</p>
                <p className="text-slate-400"><strong>Hours:</strong> Mon - Sat: 9:00 AM - 6:30 PM (IST)</p>
                <span className="inline-block text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-medium">Verified NAP Registry</span>
              </div>
            </div>
          </div>

          {/* Selected City specific FAQs */}
          {selectedCity.faqs && selectedCity.faqs.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-white text-sm font-semibold flex items-center space-x-1.5">
                <HelpCircle className="w-4.5 h-4.5 text-indigo-400" />
                <span>Frequently Asked Questions for {selectedCity.cityName} Brands</span>
              </h4>
              <div className="space-y-3">
                {selectedCity.faqs.map((faq, index) => (
                  <div key={index} className="bg-navy-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <span className="text-white text-xs font-semibold block">Q: {faq.question}</span>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Hand side: Local Visualized Map and Local Keywords badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-navy-900 border border-slate-800 p-4 rounded-2xl space-y-4">
            <h3 className="text-white font-display font-semibold text-sm flex items-center space-x-2">
              <Map className="text-brand-blue-500 w-4.5 h-4.5" />
              <span>Visakhapatnam HQ - Primary Map Gateway</span>
            </h3>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Our central operations are based in Andhra Pradesh, powering campaigns for metro cities like {selectedCity.cityName}. Explore our verified location details:
            </p>

            {/* Embedded maps iframe using correct secure URL with referrer policies */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-800 bg-[#05070c] relative">
              <iframe
                title="AVR Web Consulting Headquarters Map"
                src={COMPANY_CONTACT.googleMapsEmbed}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-3 bg-[#05070c] border border-slate-800 rounded-lg space-y-1">
              <span className="text-[10px] font-mono text-slate-500 block">HEADQUARTERS ADDRESS</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {COMPANY_CONTACT.address}
              </p>
            </div>
          </div>

          {/* Regional semantic grounding codes */}
          <div className="bg-[#05070c] border border-slate-800 p-4 rounded-xl space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              {selectedCity.cityName} Grounding Semantic Directives
            </h4>
            <ul className="space-y-2">
              {selectedCity.localKeywords.map((kw, i) => (
                <li key={i} className="text-slate-400 text-xs font-mono leading-relaxed flex items-center space-x-2">
                  <ShieldCheck className="text-brand-blue-500 w-3.5 h-3.5 shrink-0" />
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
