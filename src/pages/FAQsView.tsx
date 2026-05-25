import React, { useState } from 'react';
import { HelpCircle, Search, HelpCircle as HelpIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { GLOBAL_FAQS } from '../data';

export function FAQsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = GLOBAL_FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Comprehensive Search FAQs
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Unlock answers to pressing questions regarding Google Maps list indexes, AI citation networks, and on-page Technical parameters.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Query any topic... e.g., Maps ranking Chennai, AI citations Dubai..."
          className="w-full bg-navy-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-slate-200 text-sm outline-none focus:border-brand-blue-500 transition-colors"
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
                className="bg-navy-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-slate-850/30 transition-colors outline-none cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Animation slide panel */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-850/50 space-y-3 font-sans">
                    <p>{faq.answer}</p>
                    <div className="flex items-center space-x-1">
                      <span className="text-[10px] bg-[#05070c] text-indigo-400 px-2 py-0.5 rounded border border-slate-800 font-mono">
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
        <div className="text-center py-10 bg-[#05070c]/50 rounded-xl border border-slate-850">
          <p className="text-slate-400 text-sm">No matched questions located. Try typing different keywords like &apos;Google Maps&apos; or &apos;AI&apos;.</p>
        </div>
      )}

      {/* Schema Markup notice */}
      <div className="bg-[#05070c] border border-slate-800 p-4 rounded-xl space-y-2 text-center">
        <span className="text-[10px] font-mono text-slate-500 block">SCHEMA STANDARD COMPLIANCE</span>
        <p className="text-slate-400 text-[11px] leading-relaxed max-w-xl mx-auto">
          These elements are rendered in standard FAQPage schema inside this site code, ensuring crawlers index individual questions directly for Featured snippet representations.
        </p>
      </div>
    </div>
  );
}
