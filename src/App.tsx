import React, { useState } from 'react';
import { 
  Building, Phone, Mail, Globe, Sparkles, MapPin, Menu, X, 
  ChevronDown, ArrowRight, MessageSquare, Bot, ShieldCheck, Gamepad 
} from 'lucide-react';
import { HomeView } from './pages/HomeView';
import { AboutView } from './pages/AboutView';
import { ServicesView } from './pages/ServicesView';
import { IndustriesView } from './pages/IndustriesView';
import { BlogView } from './pages/BlogView';
import { CaseStudiesView } from './pages/CaseStudiesView';
import { PricingView } from './pages/PricingView';
import { FAQsView } from './pages/FAQsView';
import { ContactView } from './pages/ContactView';
import { COMPANY_CONTACT } from './data';

type PageRoute = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'industries' 
  | 'case-studies' 
  | 'blog' 
  | 'pricing' 
  | 'faqs' 
  | 'contact';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states for larger headers
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const navigateTo = (route: PageRoute) => {
    setActiveRoute(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeRoute) {
      case 'home':
        return <HomeView onNavigate={(route) => navigateTo(route as PageRoute)} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'industries':
        return <IndustriesView />;
      case 'case-studies':
        return <CaseStudiesView />;
      case 'blog':
        return <BlogView />;
      case 'pricing':
        return <PricingView />;
      case 'faqs':
        return <FAQsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={(route) => navigateTo(route as PageRoute)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between text-slate-850">
      
      {/* Dynamic Header / Floating Glassmorphic Navbar */}
      <div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-1">
        <header className="max-w-7xl mx-auto glass-effect rounded-2xl border border-slate-200/50 shadow-xl relative">
          <div className="px-6 h-18 flex items-center justify-between">
            
            {/* Brand Logo Layout Block: AVR White text with wrapping blue rocket */}
            <div 
              onClick={() => navigateTo('home')} 
              className="flex items-center space-x-3 cursor-pointer select-none group focus:outline-none"
            >
              {/* Elegant Custom Vector SVG Logo */}
              <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0">
                {/* Outer circular emblem with dark gradient filling */}
                <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                {/* Purple-blue path orbits wrapping around left side */}
                <path 
                  d="M 25,50 A 25,25 0 1,1 75,50" 
                  fill="none" 
                  stroke="#7c3aed" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  className="group-hover:stroke-blue-600 transition-all duration-300"
                />
                {/* Core Text Elements: AVR White Text */}
                <text 
                  x="50" 
                  y="58" 
                  fill="#0f172a" 
                  fontSize="22" 
                  fontWeight="bold" 
                  fontFamily="system-ui" 
                  textAnchor="middle"
                  letterSpacing="1"
                >
                  AVR
                </text>
                {/* Rocket Nose Arrow Wrapping Left Side */}
                <path 
                  d="M 25,44 L 20,53 L 25,50 L 30,53 Z" 
                  fill="#2563eb" 
                  transform="rotate(-25 25 50)" 
                />
              </svg>

              {/* Business Titles */}
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[#0f172a] text-base tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                  AVR Web Consulting
                </span>
                <span className="text-[9px] font-mono text-slate-500 tracking-wider font-semibold uppercase">
                  AI &amp; Organic Hybrid SEO
                </span>
              </div>
            </div>

            {/* Desktop Nav Link Items */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => navigateTo('home')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'home' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('about')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'about' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                About Us
              </button>

              {/* Dropdown 1: Custom Services Dropdowns */}
              <div className="relative">
                <button
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setIndustriesDropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1 outline-none cursor-pointer ${
                    activeRoute === 'services' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200/80 rounded-xl shadow-2xl p-2 py-3 space-y-1 z-50">
                    <button 
                      onClick={() => navigateTo('services')}
                      className="w-full text-left font-semibold text-xs py-2 px-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg outline-none"
                    >
                      All Services Overview
                    </button>
                    <hr className="border-slate-100 my-1" />
                    <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase px-3">SPECIALTIES</span>
                    <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg outline-none">Global & Local SEO</button>
                    <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg outline-none">AEO & LLM Optimization</button>
                    <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg outline-none">Social & Search Paid Ads</button>
                  </div>
                )}
              </div>

              {/* Dropdown 2: Industries Hub */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIndustriesDropdownOpen(!industriesDropdownOpen);
                    setServicesDropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1 outline-none cursor-pointer ${
                    activeRoute === 'industries' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {industriesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200/80 rounded-xl shadow-2xl p-2 py-3 space-y-1 z-50">
                    <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg outline-none">Startups & Tech</button>
                    <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg outline-none">E-Commerce Retail</button>
                    <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg outline-none">Healthcare Clinics</button>
                    <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg outline-none">Fashion & Apparel</button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => navigateTo('case-studies')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'case-studies' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cases
              </button>
              <button 
                onClick={() => navigateTo('blog')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'blog' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => navigateTo('pricing')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'pricing' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => navigateTo('faqs')} 
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer outline-none ${
                  activeRoute === 'faqs' ? 'text-blue-600 bg-indigo-50' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FAQs
              </button>
            </nav>

            {/* Desktop Right consultation trigger */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => navigateTo('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-mono font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 border-none outline-none"
              >
                <span>Audit Registration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-500 hover:text-slate-800 outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu panel overlay drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-6 py-4 space-y-3 absolute top-[4.5rem] left-0 w-full rounded-2xl shadow-2xl border border-slate-200/70 z-50">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => navigateTo('home')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Home</button>
                <button onClick={() => navigateTo('about')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">About Us</button>
                <button onClick={() => navigateTo('services')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Services</button>
                <button onClick={() => navigateTo('industries')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Industries</button>
                <button onClick={() => navigateTo('case-studies')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Cases</button>
                <button onClick={() => navigateTo('blog')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Blog</button>
                <button onClick={() => navigateTo('pricing')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">Pricing</button>
                <button onClick={() => navigateTo('faqs')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-50 rounded-lg outline-none text-slate-700">FAQs</button>
                <button onClick={() => navigateTo('contact')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold bg-blue-600 text-white rounded-lg outline-none">Contact Form</button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Main Page Workspace */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Dynamic Visual Footer */}
      <footer className="bg-white/80 border-t border-slate-200/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-16 text-xs text-slate-600 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-200/60 pb-12 mb-8">
          
          {/* Column 1: AVR Web Consulting Bio */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-display font-bold text-sm">AVR Web Consulting</h4>
            <p className="leading-relaxed text-slate-500">
              We operate as a pioneering hybrid SEO agency based in Visakhapatnam, Andhra Pradesh, India, delivering customized manual citations and cutting-edge machine-ready LLMO solutions since 2015.
            </p>
            <span className="inline-flex text-[10px] text-blue-600 bg-indigo-50 px-2.5 py-1 rounded-full font-mono font-bold border border-indigo-100/30">
              EEAT Compliant Methodology • Certified Partner
            </span>
          </div>

          {/* Column 2: Navigation Hub Lists */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-display font-bold text-sm">Solutions Index</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-600 hover:font-semibold transition-colors text-left outline-none cursor-pointer text-slate-500">Global &amp; Local SEO</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-600 hover:font-semibold transition-colors text-left outline-none cursor-pointer text-slate-500">Answer Engine Optimization (AEO)</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-600 hover:font-semibold transition-colors text-left outline-none cursor-pointer text-slate-500">LLM Retrieval Strategy</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-600 hover:font-semibold transition-colors text-left outline-none cursor-pointer text-slate-500">Custom WordPress Dev</button></li>
            </ul>
          </div>

          {/* Column 3: Central Office NAP details */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-display font-bold text-sm">Verified Corporate Contact</h4>
            <ul className="space-y-2.5 leading-relaxed text-slate-500">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hotline: {COMPANY_CONTACT.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Base line copyright indicators */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-mono">
          <span>&copy; {new Date().getFullYear()} {COMPANY_CONTACT.businessName}. All Rights Reserved. Indian National and Export registrations active.</span>
          <div className="flex space-x-4">
            <span className="cursor-default hover:text-slate-700">Security Compliance</span>
            <span className="cursor-default hover:text-slate-700">NAP Data verified</span>
            <span className="cursor-default hover:text-slate-700">Sitemap schema active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
