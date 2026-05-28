import React, { useState } from 'react';
import { FileText, Calendar, User, Clock, ArrowLeft, ArrowRight, CornerDownRight, Tag } from 'lucide-react';
import { BLOG_DATA } from '../data';
import { BlogPost } from '../types';

// Custom reusable Spotlight Card for Blog Cards
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`spotlight-container glass-effect-card rounded-2xl relative overflow-hidden flex flex-col justify-between ${className}`}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as React.CSSProperties}
    >
      <div 
        className="spotlight-layer absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between flex-grow">{children}</div>
    </div>
  );
}

export function BlogView() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOG_DATA.find(p => p.id === selectedPostId);

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dynamic Condition: Article Detail View */}
      {selectedPost ? (
        <article className="max-w-4xl mx-auto space-y-8 bg-[#0b1020]/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-500/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none" />
          
          {/* Back Button */}
          <button
            onClick={() => {
              setSelectedPostId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 text-brand-blue-500 hover:text-brand-blue-400 font-semibold text-xs outline-none cursor-pointer relative z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Articles Listings</span>
          </button>

          {/* Header Metadata */}
          <div className="space-y-4 border-b border-indigo-950 pb-6 relative z-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {selectedPost.title}
            </h1>
            <p className="text-slate-400 text-sm italic sm:text-base leading-relaxed">
              &quot;{selectedPost.subtitle}&quot;
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedPost.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>

          {/* Main Markdown Simulated Page Content with specific lists/tables */}
          <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line font-sans prose prose-invert max-w-none relative z-10">
            {selectedPost.contentMarkdown}
          </div>

          {/* Article QA Section */}
          {selectedPost.faqs && selectedPost.faqs.length > 0 && (
            <div className="border-t border-slate-800 pt-8 mt-10 space-y-4 relative z-10">
              <h3 className="text-white font-display font-semibold text-base flex items-center space-x-2">
                <CornerDownRight className="text-brand-blue-500 w-4.5 h-4.5" />
                <span>Article Editorial FAQ</span>
              </h3>
              <div className="space-y-4">
                {selectedPost.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#05070c] border border-slate-800 p-4 rounded-xl space-y-1.5">
                    <span className="text-white text-xs font-semibold block">Q: {faq.question}</span>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories/Tags */}
          <div className="flex items-center space-x-2 pt-6 border-t border-slate-800 relative z-10">
            <Tag className="w-4 h-4 text-slate-500" />
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {selectedPost.tags.map((tag, i) => (
                <span key={i} className="bg-[#05070c] border border-slate-850 px-3 py-1 rounded text-slate-400 select-none">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              AVR Search Insights &amp; Copywriting Blogs
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
                  <div className="p-6 space-y-3 flex-grow">
                    {/* Category Pill */}
                    <span className="text-[10px] font-mono font-bold text-brand-blue-500 uppercase tracking-widest bg-brand-blue-500/10 px-2.5 py-1 rounded-full border border-brand-blue-500/20 w-fit block">
                      {post.tags[0]}
                    </span>
                    
                    <h3 className="text-white font-display font-semibold text-sm sm:text-base tracking-tight leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-brand-blue-500">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-900/60 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-slate-500">{post.readTime}</span>
                    <span className="text-brand-blue-500 hover:text-brand-blue-400 flex items-center space-x-1 text-xs font-semibold">
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
