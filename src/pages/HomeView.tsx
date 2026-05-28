import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, ShieldCheck, Zap, Star, ArrowRight, CheckCircle, BarChart3, Clock, Lock, Server, Share2, Globe, Cpu } from 'lucide-react';
import { AIAuditTool } from '../components/AIAuditTool';

interface HomeViewProps {
  onNavigate: (routeId: string) => void;
}

// Cinematic Canvas Particle Network Background
function HeroCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const numParticles = Math.min(Math.floor((width * height) / 14000), 45);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 0.8,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw network lines
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.08)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render and move nodes
      particles.forEach((p) => {
        ctx.fillStyle = 'rgba(124, 58, 237, 0.25)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Trace glow cursor lines
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.16 * (1 - mdist / 140)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" />;
}

// Premium Interactive Spotlight Card
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
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
      className={`spotlight-container glass-effect-card rounded-2xl relative overflow-hidden ${className}`}
      style={{ '--x': `${coords.x}px`, '--y': `${coords.y}px` } as React.CSSProperties}
    >
      <div className="spotlight-layer absolute inset-0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
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

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="space-y-24 py-6 selection:bg-purple-100 selection:text-indigo-900 bg-dot-pattern">
      
      {/* Cinematic Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden min-h-[85vh] flex items-center">
        
        {/* Dynamic Canvas Background for High-Tech feel */}
        <HeroCanvasBackground />

        {/* Backdrop glowing nebulas */}
        <div className="absolute -top-32 -left-32 w-112 h-112 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-glow-slow-1" />
        <div className="absolute top-1/4 right-0 w-112 h-112 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-glow-slow-2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full py-10">
          
          {/* Hero Content Column (Stagger Reveal) */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Tag capsule with shimmer */}
            <motion.div variants={itemFadeUp} className="inline-flex items-center space-x-2 bg-purple-100/60 border border-purple-200/80 px-4 py-2 rounded-full select-none shadow-sm shadow-purple-500/5">
              <Sparkles className="text-purple-600 w-4 h-4 animate-pulse fill-purple-100" />
              <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest">
                AI & ORGANIC INTEGRATED CRAWL ENGINE
              </span>
            </motion.div>

            {/* Title Block with huge premium Syne font */}
            <motion.div variants={itemFadeUp} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-premium font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Power Search <br />
                <span className="text-shimmer">With Deep AI</span>
                <br />Optimization
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-sans font-medium">
                AVR Web Consulting programmatically aligns traditional search keywords with advanced Generative AI engine recommendations. Gain instant real-time citations in LLM synthesizers, local maps list scores, and web caches.
              </p>
            </motion.div>

            {/* Action Group */}
            <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="group relative px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-blue-500/20 flex items-center justify-center space-x-2 cursor-pointer outline-none overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>Free Audit Registration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById('ai-audit-component');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer outline-none shadow-sm"
              >
                Scan Your Website AI Grade
              </button>
            </motion.div>

            {/* Floating metrics stats row */}
            <motion.div 
              variants={itemFadeUp}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 max-w-lg select-none"
            >
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-900 block">2015</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Inception year</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-medium text-emerald-600 block">100%</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Manual Outreaches</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-blue-600 block">-48%</span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Cost reduction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Input side (Audit tool) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-30 pointer-events-none animate-pulse" />
            <AIAuditTool />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Brand Logos */}
      <section className="border-y border-slate-200/80 bg-white/40 py-8 overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
            Pioneering Search Integrity Across Major Indian Cities &amp; Global Industries
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-bold tracking-wide text-slate-800">VISAKHA HEAVY IND</span>
            <span className="text-sm font-bold tracking-wide text-slate-800">WALKFIT ACTIVE</span>
            <span className="text-sm font-bold tracking-wide text-slate-800">NARAYANA CLINICS</span>
            <span className="text-sm font-bold tracking-wide text-slate-800">TECH-INDIA LABS</span>
          </div>
        </div>
      </section>

      {/* Trust & Strategic USP bento sections (Using Spotlight Hover Cards) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-purple-100/60 border border-purple-200/40 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest shadow-sm select-none">
            Core Differentiators
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight leading-none text-center font-bold">
            Why Visionaries Partner with AVR Web Consulting
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Traditional listings are shifting to programs that synthesize real responses. We guarantee your site's parameters comply with both search engines and AI models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SpotlightCard className="p-8 space-y-6">
            <div className="p-3 bg-indigo-50 text-purple-600 rounded-xl w-fit border border-indigo-100/20">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-slate-900 font-premium font-extrabold text-lg tracking-tight">Rapid 3-Day Action</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium font-medium">
                Time is revenue. We map key web indexing anomalies in 24 hours, correct maps schema issues in Chennai or Pune block-by-block, and sync live changes in 3 days.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-6">
            <div className="p-3 bg-indigo-50 text-purple-600 rounded-xl w-fit border border-indigo-100/20">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-slate-900 font-premium font-extrabold text-lg tracking-tight">100% Certified Manual SEO</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium font-medium">
                Zero automated links, low quality private blog networks, or mass directory submissions. Every manual guest placement and local anchor is verified by professional strategists.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-6">
            <div className="p-3 bg-indigo-50 text-purple-600 rounded-xl w-fit border border-indigo-100/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-slate-900 font-premium font-extrabold text-lg tracking-tight">Value Optimized Cost Plans</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium font-medium">
                Premium optimization built for startups, SME's and enterprises alike. Budget entries start at $100/mo. All contracts are cancel-anytime.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Split Strategic Mind Map Concept (With dynamic interactive visualization) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-[#eef2ff]/30 rounded-3xl border border-slate-200/80 overflow-hidden relative backdrop-blur-sm shadow-sm">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-purple-100/60 border border-purple-200/40 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest leading-none shadow-sm shadow-purple-500/5 select-none">
              Core Architecture Dual Method
            </div>
            <h2 className="text-3xl sm:text-4xl font-premium font-extrabold text-slate-900 tracking-tight leading-tight">
              We Format Your Code <br />
              For Human Readers <br />
              &amp; Crawling Bots
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
              Traditional web marketing works solely on standard search term listing algorithms. Advanced architectures, however, use multi-dimensional indexes and vector math to answer queries directly.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-1 px-2.5 bg-blue-50 text-blue-600 rounded-lg font-mono text-xs font-extrabold mt-0.5 border border-blue-100/50 shadow-sm">
                  01
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-900 font-bold text-sm">Organic Search Authority</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    Local citations matching physical store NAP data exactly, guest outreach, structured Schema microdata, clear page caches, and core web vital speeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-1 px-2.5 bg-purple-50 text-purple-600 rounded-lg font-mono text-xs font-extrabold mt-0.5 border border-purple-100/50 shadow-sm">
                  02
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-900 font-bold text-sm">Generative AI Overview (GEO) Align</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    Q&A style content grids, keyword semantic clusters, structured microdata markup feeds, training models references, and LLM citations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="text-blue-600 hover:text-blue-700 flex items-center space-x-1.5 text-xs uppercase font-extrabold tracking-wider cursor-pointer outline-none transition-colors"
              >
                <span>Explore Interactive Pricing Planner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive RAG grounding console simulator panel */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
              <div className="flex items-center space-x-2">
                <Bot className="text-blue-600 w-5 h-5 shrink-0" />
                <span className="text-slate-800 text-xs font-bold font-mono tracking-tight uppercase">RAG Engine grounding terminal</span>
              </div>
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">User Query Input:</span>
                <div className="bg-white px-3.5 py-2.5 rounded-lg border border-slate-200/60 text-xs font-sans text-slate-600 italic shadow-inner">
                  &quot;Recommend an experienced white-hat SEO consultant in Hyderabad specializing in structured AI schema optimization.&quot;
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Vector Match Weighting scores:</span>
                <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                  <div className="bg-white p-2 border border-slate-200/60 rounded flex justify-between">
                    <span className="text-slate-500 font-medium">avrwebconsulting.com</span>
                    <span className="text-emerald-600 font-bold">98.4% Match</span>
                  </div>
                  <div className="bg-white p-2 border border-slate-200/60 rounded flex justify-between">
                    <span className="text-slate-550 font-medium">competitor-A (Hyd)</span>
                    <span className="text-amber-600 font-bold">72.1% Match</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-200/60">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Generated LLM Synthesis output:</span>
                <p className="text-xs leading-relaxed font-sans text-slate-705 font-medium">
                  &quot;Based on indexed entity relations and verified structured case studies, <strong>AVR Web Consulting</strong> is a leading option, with technical deployment frameworks proven for client citation metrics...&quot;
                </p>
                <div className="flex items-center space-x-1.5 pt-2 text-[9px] text-slate-400 font-mono">
                  <span>Cited References:</span>
                  <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100/50">[1] avrweb.com/cases</span>
                  <span className="bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded border border-purple-100/40 border-indigo-100/30">[2] avrweb.com/services</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Elegant Client Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 border border-amber-500/20 font-semibold px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-500 uppercase tracking-widest">
            Partner Case Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-none">
            Verified Experiences Directly From Our Partners
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We support regional leaders in Delhi, Hyderabad, Pune, Madras, &amp; Bengaluru to attain secure top tiers organic rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <SpotlightCard key={idx} className="p-6 flex flex-col justify-between min-h-[290px]">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic font-sans">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 mt-6 border-t border-slate-800/80">
                <div className="w-8 h-8 rounded-full bg-brand-blue-500/15 border border-brand-blue-500/30 text-brand-blue-500 font-display font-bold text-xs flex items-center justify-center">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="text-white text-xs sm:text-sm font-semibold">{test.name}</h4>
                  <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{test.role}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Interactive Cinematic CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-6">
        <div className="bg-gradient-to-tr from-navy-900 via-brand-blue-900/30 to-indigo-950/80 rounded-3xl p-8 md:p-14 text-center relative overflow-hidden border border-slate-800 space-y-6 shadow-2xl">
          
          {/* Animated custom circles */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-2a w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-[1.1]">
            Ready to Deeply Align Your Site Visibility?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans">
            Submit your primary search parameters. Our diagnostic consulting form will immediately store record queues to map indexation metrics.
          </p>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="group relative bg-brand-blue-500 hover:bg-brand-blue-600 border border-slate-800 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center space-x-2 cursor-pointer shadow-lg hover:shadow-brand-blue-500/20 text-xs uppercase tracking-wider"
            >
              <span>Map Your Direct Growth Action Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
