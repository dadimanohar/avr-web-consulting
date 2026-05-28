import React, { useState } from 'react';
import { HelpCircle, Search, HelpCircle as HelpIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { GLOBAL_FAQS } from '../data';
import { SpotlightCard } from './HomeView';

export function FAQsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = GLOBAL_FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          Answer Database
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none text-center">
          Comprehensive Search FAQs
        </h1>
        <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-semibold">
          Unlock answers to pressing questions regarding Google Maps list indexes, AI citation networks, and on-page Technical parameters.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold">
          <Search className="w-4 h-4 text-blue-600" />
        </span>
        <input
          type="text"
          placeholder="Query any topic... e.g., Maps ranking, AI citations..."
          className="w-full bg-white border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl pl-10 pr-4 py-3 text-slate-800 text-xs sm:text-sm font-semibold outline-none transition-all shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Accordion Blocks */}
      {filteredFaqs.length > 0 ? (
        <div className="space-y-4 pt-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors outline-none cursor-pointer border-none"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-900 text-xs sm:text-sm font-bold tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 font-bold" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 font-bold" />
                  )}
                </button>

                {/* Animation slide panel */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-150 space-y-3 font-sans font-medium">
                    <p>{faq.answer}</p>
                    <div className="flex items-center space-x-1 pt-1">
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100 font-mono font-bold">
                        Tag: #{faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 font-semibold text-slate-400">
          <p className="text-sm">No matched questions located. Try typing different keywords like &apos;Google Maps&apos; or &apos;AI&apos;.</p>
        </div>
      )}

      {/* Schema Markup notice */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 text-center shadow-inner">
        <span className="text-[10px] font-mono font-bold text-slate-400 block tracking-widest">SCHEMA STANDARD COMPLIANCE</span>
        <p className="text-slate-500 text-[11px] leading-relaxed max-w-xl mx-auto font-semibold">
          These elements are rendered in standard FAQPage schema inside this site code, ensuring crawlers index individual questions directly for Featured snippet representations.
        </p>
      </div>
    </div>
  );
}
