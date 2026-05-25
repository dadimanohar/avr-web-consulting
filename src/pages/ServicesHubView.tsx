import React, { useState } from 'react';
import { Eye, HelpCircle, Code, ShieldCheck, Scale, Compass, Layers, Globe, MapPin, Settings, Target, MessageSquareCode, Cpu, Network, Binary, Sparkles, TrendingUp, MessageSquareHeart, FileText, FileCheck2, ShoppingCart } from 'lucide-react';
import { SERVICE_DATA } from '../data';
import { ServiceItem } from '../types';

export function ServicesHubView() {
  const [activeHub, setActiveHub] = useState<'seo' | 'ai-seo' | 'ppc' | 'content' | 'web-dev'>('seo');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('seo-local');

  const hubsList = [
    { id: 'seo', name: 'Traditional SEO', count: 4, icon: Globe },
    { id: 'ai-seo', name: 'Advanced AI SEO', count: 5, icon: Cpu },
    { id: 'ppc', name: 'Paid Advertising', count: 2, icon: TrendingUp },
    { id: 'content', name: 'Content Marketing', count: 2, icon: FileText },
    { id: 'web-dev', name: 'Web Design & Dev', count: 2, icon: Code },
  ];

  const filteredServices = SERVICE_DATA.filter(s => s.hub === activeHub);
  const selectedService = SERVICE_DATA.find(s => s.id === selectedServiceId) || filteredServices[0];

  // Auto select first item of the hub when hub switches
  const handleHubChange = (hubId: 'seo' | 'ai-seo' | 'ppc' | 'content' | 'web-dev') => {
    setActiveHub(hubId);
    const related = SERVICE_DATA.filter(s => s.hub === hubId);
    if (related.length > 0) {
      setSelectedServiceId(related[0].id);
    }
  };

  // Icon dynamic selector helper
  const renderIcon = (iconName: string, cssClass: string = "w-5 h-5") => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Globe, MapPin, Settings, Target, MessageSquareCode, Cpu, Network, Binary, Sparkles, TrendingUp, MessageSquareHeart, FileText, FileCheck2, Code, ShoppingCart
    };
    const Tag = iconMap[iconName] || Globe;
    return <Tag className={cssClass} />;
  };

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          AVR Specialized Solutions Hub
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Navigate our multi-tier services including Global SEO, Answer Engine Optimization (AEO), Paid Social Ads, and custom SEO-First development platforms.
        </p>
      </div>

      {/* Hub selector tabs row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 border-b border-slate-800 pb-4">
        {hubsList.map((hub) => {
          const isSelected = activeHub === hub.id;
          const IconComponent = hub.icon;
          return (
            <button
              key={hub.id}
              onClick={() => handleHubChange(hub.id as any)}
              className={`p-3 rounded-lg text-left transition-all border outline-none cursor-pointer flex flex-col justify-between h-24 ${
                isSelected 
                  ? 'bg-brand-blue-500/10 border-brand-blue-500 text-white' 
                  : 'bg-navy-900 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isSelected ? 'text-brand-blue-500' : 'text-slate-500'}`} />
              <div>
                <span className="text-xs font-semibold block">{hub.name}</span>
                <span className="text-[10px] text-slate-500">{hub.count} Specialized Modules</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Primary Workspace layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Services lists */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-navy-900 border border-slate-800 p-4 rounded-xl space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400 block px-2">
              Available Modules
            </span>
            <div className="space-y-1">
              {filteredServices.map((service) => {
                const isCurrent = service.id === selectedService.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left px-3 py-3 rounded-md transition-all flex items-center space-x-3 cursor-pointer ${
                      isCurrent
                        ? 'bg-brand-blue-500 text-white shadow-lg'
                        : 'hover:bg-slate-850/50 text-slate-300'
                    }`}
                  >
                    {renderIcon(service.iconName, `w-4 h-4 ${isCurrent ? 'text-white' : 'text-brand-blue-500'}`)}
                    <span className="text-xs font-semibold tracking-tight">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Hub summary */}
          <div className="bg-[#05070c] border border-slate-800 p-4 rounded-xl space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">AEO and Citation Logic</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Every specialized module is designed in compliance with search indices and generative machine-readable scrapers, assuring maximum authority rankings.
            </p>
          </div>
        </div>

        {/* Right Side: Detailed Service Content Pane */}
        <div className="lg:col-span-8 bg-navy-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
          {/* Header segment */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-brand-blue-500/10 text-brand-blue-500 rounded-lg">
                {renderIcon(selectedService.iconName, "w-6 h-6 animate-pulse")}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-blue-500 uppercase tracking-widest block">
                  Module ID: {selectedService.id}
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
                  {selectedService.title}
                </h2>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedService.detailedContent}
            </p>
          </div>

          {/* Core specs check */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500">
                Key Deliverables
              </h4>
              <ul className="space-y-2.5">
                {selectedService.keySpecs.map((spec, index) => (
                  <li key={index} className="text-xs text-slate-300 leading-relaxed flex items-start space-x-2">
                    <span className="text-brand-blue-500 shrink-0 font-bold">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Expected Strategic Growth
              </h4>
              <ul className="space-y-2.5">
                {selectedService.benefits.map((ben, index) => (
                  <li key={index} className="text-xs text-slate-300 leading-relaxed flex items-start space-x-2">
                    <span className="text-emerald-400 shrink-0 font-bold">•</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modular comparison preview table depending on active Hub */}
          {activeHub === 'seo' && (
            <div className="bg-[#05070c] border border-slate-850 p-4 rounded-xl space-y-3">
              <h4 className="text-white text-xs font-semibold flex items-center space-x-2">
                <Scale className="w-4 h-4 text-brand-blue-500" />
                <span>Technical Context: Local SEO vs Global SEO</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Local optimization targets neighborhood maps (GMB reviews and citations), while Global campaign plans configure multilanguage hreflang parameters to represent international ccTLDs safely.
              </p>
            </div>
          )}

          {activeHub === 'ai-seo' && (
            <div className="bg-[#05070c] border border-slate-850 p-4 rounded-xl space-y-3">
              <h4 className="text-white text-xs font-semibold flex items-center space-x-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>RAG groundings and retrieval concepts</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Modern AI search tools bypass standard list links to synthesize answers. LLMO processes structure JSON markups and clean Q&A sections so scrapers easily cite your domain name.
              </p>
            </div>
          )}

          {/* Module FAQs Section */}
          {selectedService.faqs && selectedService.faqs.length > 0 && (
            <div className="border-t border-slate-800 pt-6 space-y-4">
              <h4 className="text-white text-sm font-semibold flex items-center space-x-1.5">
                <HelpCircle className="w-4.5 h-4.5 text-indigo-400" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-4">
                {selectedService.faqs.map((faq, index) => (
                  <div key={index} className="bg-[#05070c] border border-slate-800 p-4 rounded-lg space-y-1.5">
                    <span className="text-white text-xs font-semibold block">Q: {faq.question}</span>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JSON-LD Schema Showcase */}
          <div className="border-t border-slate-800 pt-6 space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <Code className="w-4 h-4 text-slate-500" />
              <span>Diagnostic JSON-LD Schema (Crawl Grounding Example)</span>
            </h4>
            <div className="bg-[#05070c] border border-slate-800 rounded-lg p-3 overflow-x-auto text-[10px] font-mono text-emerald-400 max-h-40">
              <pre>{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${selectedService.title}",
  "provider": {
    "@type": "LocalBusiness",
    "name": "AVR Web Consulting"
  },
  "serviceType": "SEO & AI-driven Web Optimization",
  "description": "${selectedService.description}"
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
