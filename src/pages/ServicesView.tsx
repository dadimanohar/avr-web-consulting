import React, { useState } from 'react';
import { Eye, HelpCircle, Code, ShieldCheck, Scale, Compass, Layers, Globe, MapPin, Settings, Target, MessageSquareCode, Cpu, Network, Binary, Sparkles, TrendingUp, MessageSquareHeart, FileText, FileCheck2, ShoppingCart, ArrowRight } from 'lucide-react';
import { SERVICE_DATA } from '../data';
import { ServiceItem } from '../types';

export function ServicesView() {
  const [activeCategory, setActiveCategory] = useState<'seo' | 'ai-seo' | 'ppc' | 'content' | 'web-dev'>('seo');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('seo-local');

  const categoriesList = [
    { id: 'seo', name: 'Traditional SEO', count: 4, icon: Globe },
    { id: 'ai-seo', name: 'Advanced AI SEO', count: 5, icon: Cpu },
    { id: 'ppc', name: 'Paid Advertising', count: 2, icon: TrendingUp },
    { id: 'content', name: 'Content Marketing', count: 2, icon: FileText },
    { id: 'web-dev', name: 'Web Design & Dev', count: 2, icon: Code },
  ];

  const filteredServices = SERVICE_DATA.filter(s => s.category === activeCategory);
  const selectedService = SERVICE_DATA.find(s => s.id === selectedServiceId) || filteredServices[0];

  // Auto select first item of the category when category switches
  const handleCategoryChange = (catId: 'seo' | 'ai-seo' | 'ppc' | 'content' | 'web-dev') => {
    setActiveCategory(catId);
    const related = SERVICE_DATA.filter(s => s.category === catId);
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
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm shadow-blue-500/5 select-none">
          Professional Services Catalog
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none">
          AVR Specialized Solutions &amp; Services
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
          Navigate our multi-tier services including Global SEO, Answer Engine Optimization (AEO), Paid Social Ads, and custom SEO-First development platforms.
        </p>
      </div>

      {/* Category selector tabs row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 border-b border-slate-200/60 pb-6">
        {categoriesList.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const IconComponent = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as any)}
              className={`p-4 rounded-xl text-left transition-all border outline-none cursor-pointer flex flex-col justify-between h-28 shadow-sm ${
                isSelected 
                  ? 'bg-blue-50/80 border-blue-300 text-blue-700 shadow-blue-500/5' 
                  : 'bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-white text-slate-605 font-bold'
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
              <div>
                <span className="text-xs font-bold block">{cat.name}</span>
                <span className={`text-[10px] ${isSelected ? 'text-blue-500/80' : 'text-slate-400'} font-bold`}>{cat.count} Modules Available</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Primary Workspace layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Services lists */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-2.5 shadow-sm">
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 block px-2 leading-none">
              Available Modules
            </span>
            <div className="space-y-1">
              {filteredServices.map((service) => {
                const isCurrent = service.id === selectedService.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-lg transition-all flex items-center space-x-3 cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 font-bold'
                        : 'hover:bg-slate-100 text-slate-605 font-bold'
                    }`}
                  >
                    {renderIcon(service.iconName, `w-4 h-4 ${isCurrent ? 'text-white' : 'text-blue-600'}`)}
                    <span className="text-xs font-bold tracking-tight">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick summary */}
          <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3 shadow-sm">
            <h4 className="text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">AEO and Citation Logic</h4>
            <p className="text-slate-500 text-[11px] leading-relaxed font-semibold">
              Every specialized module is designed in compliance with search indices and generative machine-readable scrapers, assuring maximum authority rankings.
            </p>
          </div>
        </div>

        {/* Right Side: Detailed Service Content Pane */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
          {/* Header segment */}
          <div className="space-y-4 border-b border-slate-200/60 pb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100/50">
                {renderIcon(selectedService.iconName, "w-6 h-6 animate-pulse")}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block leading-none mb-1">
                  Module ID: {selectedService.id}
                </span>
                <h2 className="text-xl sm:text-2xl font-premium font-extrabold text-slate-900 tracking-tight">
                  {selectedService.title}
                </h2>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {selectedService.detailedContent}
            </p>
          </div>

          {/* Core specs check */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Key Deliverables
              </h4>
              <ul className="space-y-2.5">
                {selectedService.keySpecs.map((spec, index) => (
                  <li key={index} className="text-xs text-slate-600 leading-relaxed flex items-start space-x-2 font-semibold">
                    <span className="text-blue-500 shrink-0 font-bold">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                Expected Strategic Growth
              </h4>
              <ul className="space-y-2.5">
                {selectedService.benefits.map((ben, index) => (
                  <li key={index} className="text-xs text-slate-605 leading-relaxed flex items-start space-x-2 font-semibold font-sans">
                    <span className="text-emerald-500 shrink-0 font-bold">•</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modular comparison preview table depending on active category */}
          {activeCategory === 'seo' && (
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
              <h4 className="text-slate-800 text-xs font-bold flex items-center space-x-2">
                <Scale className="w-4 h-4 text-blue-600" />
                <span>Technical Context: Local SEO vs Global SEO</span>
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                Local optimization targets neighborhood maps (GMB reviews and citations), while Global campaign plans configure multilanguage hreflang parameters to represent international ccTLDs safely.
              </p>
            </div>
          )}

          {activeCategory === 'ai-seo' && (
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
              <h4 className="text-slate-800 text-xs font-bold flex items-center space-x-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>RAG groundings and retrieval concepts</span>
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                Modern AI search tools bypass standard list links to synthesize answers. LLMO processes structure JSON markups and clean Q&A sections so scrapers easily cite your domain name.
              </p>
            </div>
          )}

          {/* Module FAQs Section */}
          {selectedService.faqs && selectedService.faqs.length > 0 && (
            <div className="border-t border-slate-200/60 pt-6 space-y-4">
              <h4 className="text-slate-900 text-sm font-bold flex items-center space-x-1.5 font-display">
                <HelpCircle className="w-4.5 h-4.5 text-purple-600" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-4">
                {selectedService.faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 shadow-sm shadow-slate-100/5">
                    <span className="text-slate-900 text-xs font-bold block">Q: {faq.question}</span>
                    <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JSON-LD Schema Showcase */}
          <div className="border-t border-slate-200/60 pt-6 space-y-3">
            <h4 className="text-slate-800 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <Code className="w-4 h-4 text-slate-400" />
              <span>Diagnostic JSON-LD Schema (Crawl Grounding Example)</span>
            </h4>
            <div className="bg-slate-950 border border-slate-900 rounded-xl p-3 overflow-x-auto text-[10px] font-mono text-emerald-400 max-h-40 shadow-inner">
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
