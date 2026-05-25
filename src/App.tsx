import React, { useState } from 'react';
import { 
  Building, Phone, Mail, Globe, Sparkles, MapPin, Menu, X, 
  ChevronDown, ArrowRight, MessageSquare, Bot, ShieldCheck, Gamepad 
} from 'lucide-react';
import { HomeView } from './pages/HomeView';
import { AboutView } from './pages/AboutView';
import { ServicesHubView } from './pages/ServicesHubView';
import { IndustriesView } from './pages/IndustriesView';
import { CityLandingView } from './pages/CityLandingView';
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
  | 'cities' 
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
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);

  const navigateTo = (route: PageRoute) => {
    setActiveRoute(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setCitiesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeRoute) {
      case 'home':
        return <HomeView onNavigate={(route) => navigateTo(route as PageRoute)} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesHubView />;
      case 'industries':
        return <IndustriesView />;
      case 'cities':
        return <CityLandingView />;
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
    <div className="min-h-screen bg-navy-950 flex flex-col justify-between text-slate-200">
      
      {/* Dynamic Header / Floating Floating Floating Toolbar bar with drop-down layouts */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo Layout Block: AVR White text with wrapping blue rocket */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 cursor-pointer select-none group focus:outline-none"
          >
            {/* Elegant Custom Vector SVG Logo */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0">
              {/* Outer circular emblem with dark gradient filling */}
              <circle cx="50" cy="50" r="44" fill="#010409" stroke="#1e293b" strokeWidth="2" />
              {/* Light blue path orbits wrapping around left side */}
              <path 
                d="M 25,50 A 25,25 0 1,1 75,50" 
                fill="none" 
                stroke="#0ea5e9" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="group-hover:stroke-sky-300 transition-all duration-300"
              />
              {/* Core Text Elements: AVR White Text */}
              <text 
                x="50" 
                y="58" 
                fill="#ffffff" 
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
                fill="#38bdf8" 
                transform="rotate(-25 25 50)" 
              />
            </svg>

            {/* Business Titles */}
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight leading-none group-hover:text-brand-blue-500 transition-colors">
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
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'home' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('about')} 
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'about' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              About Us
            </button>

            {/* Dropdown 1: Custom Services Hub Dropdowns */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setIndustriesDropdownOpen(false);
                  setCitiesDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 outline-none cursor-pointer ${
                  activeRoute === 'services' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Services Hub</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-navy-900 border border-slate-800 rounded-lg shadow-xl p-2 py-3 space-y-1">
                  <button 
                    onClick={() => navigateTo('services')}
                    className="w-full text-left font-semibold text-xs py-2 px-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
                  >
                    All Hubs Overview
                  </button>
                  <hr className="border-slate-800 my-1" />
                  <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase px-3">SPECIALTIES</span>
                  <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-400 hover:text-white rounded">Global & Local SEO</button>
                  <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-400 hover:text-white rounded">AEO & LLM Optimization</button>
                  <button onClick={() => navigateTo('services')} className="w-full text-left text-xs py-1.5 px-3 text-slate-400 hover:text-white rounded">Social & Search Paid Ads</button>
                </div>
              )}
            </div>

            {/* Dropdown 2: Industries Hub */}
            <div className="relative">
              <button
                onClick={() => {
                  setIndustriesDropdownOpen(!industriesDropdownOpen);
                  setServicesDropdownOpen(false);
                  setCitiesDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 outline-none cursor-pointer ${
                  activeRoute === 'industries' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy-900 border border-slate-800 rounded-lg shadow-xl p-2 py-3 space-y-1">
                  <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded">Startups & Tech</button>
                  <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded">E-Commerce Retail</button>
                  <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded">Healthcare Clinics</button>
                  <button onClick={() => navigateTo('industries')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded">Fashion & Apparel</button>
                </div>
              )}
            </div>

            {/* Dropdown 3: GEO City Landing Pages */}
            <div className="relative">
              <button
                onClick={() => {
                  setCitiesDropdownOpen(!citiesDropdownOpen);
                  setServicesDropdownOpen(false);
                  setIndustriesDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 outline-none cursor-pointer ${
                  activeRoute === 'cities' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>City Hubs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {citiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-navy-900 border border-slate-800 rounded-lg shadow-xl p-2 py-3 space-y-1">
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Delhi NCR</button>
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Bangalore</button>
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Chennai</button>
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Hyderabad</button>
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Mumbai</button>
                  <button onClick={() => navigateTo('cities')} className="w-full text-left text-xs py-1.5 px-3 text-slate-300 hover:text-white rounded">Pune</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateTo('case-studies')} 
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'case-studies' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              Cases
            </button>
            <button 
              onClick={() => navigateTo('blog')} 
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'blog' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => navigateTo('pricing')} 
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'pricing' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => navigateTo('faqs')} 
              className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeRoute === 'faqs' ? 'text-brand-blue-500 bg-brand-blue-500/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Desktop Right consultation trigger */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Audit Registration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel overlay drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-navy-900/98 px-4 py-4 space-y-3 absolute top-18 left-0 w-full shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => navigateTo('home')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Home</button>
              <button onClick={() => navigateTo('about')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">About Us</button>
              <button onClick={() => navigateTo('services')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Services</button>
              <button onClick={() => navigateTo('industries')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Industries</button>
              <button onClick={() => navigateTo('cities')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">City Hubs</button>
              <button onClick={() => navigateTo('case-studies')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Cases</button>
              <button onClick={() => navigateTo('blog')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Blog</button>
              <button onClick={() => navigateTo('pricing')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">Pricing</button>
              <button onClick={() => navigateTo('faqs')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold hover:bg-slate-800 rounded">FAQs</button>
              <button onClick={() => navigateTo('contact')} className="w-full text-left py-2 px-3 text-xs uppercase font-semibold bg-brand-blue-500 text-white rounded">Contact Form</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Workspace */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Dynamic Visual Footer */}
      <footer className="bg-navy-900 border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-16 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800 pb-12 mb-8">
          
          {/* Column 1: AVR Web Consulting Bio */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-medium text-sm">AVR Web Consulting</h4>
            <p className="leading-relaxed">
              We operate as a pioneering hybrid SEO agency based in Visakhapatnam, Andhra Pradesh, India, delivering customized manual citations and cutting-edge machine-ready LLMO solutions since 2015.
            </p>
            <span className="inline-flex text-[10px] text-brand-blue-500 bg-brand-blue-500/10 px-2 py-1 rounded font-mono font-medium border border-brand-blue-500/15">
              EEAT Compliant Methodology • Certified Partner
            </span>
          </div>

          {/* Column 2: Navigation Hub Lists */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-medium text-sm">Solutions Index</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-blue-500 transition-colors">Global &amp; Local SEO</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-blue-500 transition-colors">Answer Engine Optimization (AEO)</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-blue-500 transition-colors">LLM Retrieval Strategy</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-brand-blue-500 transition-colors">Custom WordPress Dev</button></li>
            </ul>
          </div>

          {/* Column 3: GEO City Landing Hubs */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-medium text-sm">GEO Cities Coverage</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('cities')} className="hover:text-brand-blue-500 transition-colors">Delhi NCR Regional Node</button></li>
              <li><button onClick={() => navigateTo('cities')} className="hover:text-brand-blue-500 transition-colors">Bangalore Silicon Node</button></li>
              <li><button onClick={() => navigateTo('cities')} className="hover:text-brand-blue-500 transition-colors">Chennai Industrial Node</button></li>
              <li><button onClick={() => navigateTo('cities')} className="hover:text-brand-blue-500 transition-colors">Hyderabad IT Node</button></li>
            </ul>
          </div>

          {/* Column 4: Central Office NAP details */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-medium text-sm">Verified Corporate Contact</h4>
            <ul className="space-y-2.5 leading-relaxed">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <span>Hotline: {COMPANY_CONTACT.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Base line copyright indicators */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} {COMPANY_CONTACT.businessName}. All Rights Reserved. Indian National and Export registrations active.</span>
          <div className="flex space-x-4">
            <span className="cursor-default hover:text-white">Security Compliance</span>
            <span className="cursor-default hover:text-white">NAP Data verified</span>
            <span className="cursor-default hover:text-white">Sitemap schema active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
