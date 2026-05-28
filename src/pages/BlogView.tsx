import React, { useState } from 'react';
import { FileText, Calendar, User, Clock, ArrowLeft, ArrowRight, CornerDownRight, Tag } from 'lucide-react';
import { BLOG_DATA } from '../data';
import { SpotlightCard } from './HomeView';

export function BlogView() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOG_DATA.find(p => p.id === selectedPostId);

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dynamic Condition: Article Detail View */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto space-y-8 bg-white/95 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none" />
          
          {/* Back Button */}
          <button
            onClick={() => {
              setSelectedPostId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-bold text-xs outline-none cursor-pointer relative z-10 font-mono tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Articles Listings</span>
          </button>

          {/* Header Metadata */}
          <div className="space-y-4 border-b border-slate-200 pb-6 relative z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-premium font-extrabold text-slate-900 tracking-tight leading-tight">
              {selectedPost.title}
            </h1>
            <p className="text-slate-650 text-sm italic sm:text-base leading-relaxed font-semibold">
              &quot;{selectedPost.subtitle}&quot;
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 font-bold">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{selectedPost.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>

          {/* Main Content Pane */}
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line font-sans max-w-none relative z-10 font-medium">
            {selectedPost.contentMarkdown}
          </div>

          {/* Article QA Section */}
          {selectedPost.faqs && selectedPost.faqs.length > 0 && (
            <div className="border-t border-slate-200 pt-8 mt-10 space-y-4 relative z-10">
              <h3 className="text-slate-900 font-premium font-extrabold text-base flex items-center space-x-2">
                <CornerDownRight className="text-blue-605 w-4.5 h-4.5" />
                <span>Article Editorial FAQ</span>
              </h3>
              <div className="space-y-4">
                {selectedPost.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 shadow-sm">
                    <span className="text-slate-950 text-xs font-bold block">Q: {faq.question}</span>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories/Tags */}
          <div className="flex items-center space-x-2 pt-6 border-t border-slate-200 relative z-10">
            <Tag className="w-4 h-4 text-slate-400" />
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              {selectedPost.tags.map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg text-slate-500 select-none">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ) : (
        /* List View */
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm shadow-blue-500/5 select-none">
              Knowledge Hub &amp; SEO Insights
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none">
              AVR Search Insights &amp; Copywriting Blogs
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              Explore in-depth tutorials, checklists, and comparative outlines covering traditional on-page diagnostics, Local Maps fixes, and LLM retrieve groundings.
            </p>
          </div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {BLOG_DATA.map((post) => (
              <SpotlightCard 
                key={post.id} 
                className="h-full cursor-pointer"
              >
                <div 
                  onClick={() => {
                    setSelectedPostId(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex flex-col justify-between h-full flex-grow text-left"
                >
                  <div className="p-6 space-y-3.5 flex-grow">
                    {/* Category Pill */}
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 w-fit block">
                      {post.tags[0]}
                    </span>
                    
                    <h3 className="text-slate-900 font-premium font-extrabold text-sm sm:text-base tracking-tight leading-snug line-clamp-2 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 font-semibold font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-200/60 flex items-center justify-between mt-auto font-mono font-bold">
                    <span className="text-[10px] text-slate-400">{post.readTime}</span>
                    <span className="text-blue-600 hover:text-blue-700 flex items-center space-x-1.5 text-xs font-bold leading-none">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
