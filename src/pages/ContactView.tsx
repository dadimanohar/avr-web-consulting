import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle2, Clock, Map, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT } from '../data';
import { ClientLead } from '../types';
import { SpotlightCard } from './HomeView';

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'seo-local',
    city: 'Delhi',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localSubmissionList, setLocalSubmissionList] = useState<ClientLead[]>([]);

  // On mount, load previous submissions from local storage to show interactive database listings
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('avr_leads') || '[]');
    setLocalSubmissionList(list);
  }, [success]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const savedLeads = JSON.parse(localStorage.getItem('avr_leads') || '[]');
      const newLead: ClientLead = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        service: formData.service,
        city: formData.city,
        message: formData.message,
        submittedAt: new Date().toISOString()
      };

      savedLeads.unshift(newLead);
      localStorage.setItem('avr_leads', JSON.stringify(savedLeads));

      setSuccess(true);
      setIsSubmitting(false);

      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: 'seo-local',
        city: 'Delhi',
        message: ''
      });

      // Clear success notification alert after 5s
      setTimeout(() => setSuccess(false), 6000);
    }, 1000);
  };

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact-view-form">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest leading-none shadow-sm select-none">
          Consultation &amp; Roadmap
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-premium font-extrabold text-slate-900 tracking-tight leading-none text-center">
          Initiate Your Free Search Audit
        </h1>
        <p className="text-slate-605 text-sm sm:text-base leading-relaxed font-semibold">
          Reach out to lock in your expert consultation roadmap. Our strategists will check Core Web Vitals, schema errors, and conversational retrieval scores.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Dynamic Consultation Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-slate-150 pb-4">
            <h3 className="text-slate-900 font-premium font-extrabold text-base sm:text-lg flex items-center space-x-2">
              <Sparkles className="text-blue-600 w-4.5 h-4.5 animate-pulse" />
              <span>Diagnostic Consultation Request Form</span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Sandeep Mishra"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-semibold shadow-inner"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Business Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g., sandeep@visakhaheavy.com"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-semibold shadow-inner"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., +91-9182543249"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-semibold shadow-inner"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Target Domain (Optional)</label>
                <input
                  type="url"
                  placeholder="e.g., https://visakhaheavy.com"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-semibold shadow-inner"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Target Campaign Hub</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-bold cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="seo-local">Local SEO & Citations</option>
                  <option value="ai-aeo">Answer Engine Optimization (AEO)</option>
                  <option value="ppc-google">Google Ads PPC Optimization</option>
                  <option value="web-wordpress">Custom SEO-First Web Dev</option>
                  <option value="content-blogging">SEO Content Hub Creation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Primary City Landmark Unit</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl px-4 py-2.5 text-slate-800 outline-none text-xs sm:text-sm transition-all font-bold cursor-pointer"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Delhi">Delhi / NCR Region</option>
                  <option value="Bangalore">Bangalore (Silicons hub)</option>
                  <option value="Chennai">Chennai (Industrial hub)</option>
                  <option value="Hyderabad">Hyderabad (Tech centers)</option>
                  <option value="Mumbai">Mumbai (Financial capital)</option>
                  <option value="Pune">Pune Metro Area</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Describe your current search ranking obstacles</label>
              <textarea
                rows={4}
                placeholder="Describe page indexation alerts, missing citations, or general keyword drop concerns..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-xl p-4 text-slate-800 outline-none text-xs sm:text-sm font-semibold transition-all shadow-inner"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest py-3 rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-blue-500/10 disabled:opacity-50 outline-none border-none"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Credentials...' : 'Register For Free Consultation'}</span>
            </button>
          </form>

          {/* Success Dialog panel */}
          {success && (
            <div className="p-4 bg-emerald-50 border border-emerald-150 rounded-xl flex items-start space-x-3 text-emerald-800 shadow-sm animate-fade-in">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 animate-bounce text-emerald-600" />
              <div>
                <p className="text-xs sm:text-sm font-bold">Consultation Session Registered Successfully!</p>
                <p className="text-slate-600 text-xs leading-relaxed mt-0.5 font-medium">We have stored your entry inside the local indexed database. Our search strategist will ping you with audit roadmap coordinates within 24 hours.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Office Locations NAP entries and dynamic list */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-slate-900 font-display font-bold text-sm flex items-center space-x-2">
              <MapPin className="text-blue-600 w-4 h-4 shrink-0" />
              <span>Andhra Pradesh Certified Headquarters</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600 font-semibold font-sans">
              <div className="flex items-start space-x-3">
                <Map className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-slate-800">Corporate Headquarters Address:</strong><br />
                  {COMPANY_CONTACT.address}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <p><strong className="text-slate-800">Hotline:</strong> {COMPANY_CONTACT.phone}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <p><strong className="text-slate-800">Support Email:</strong> {COMPANY_CONTACT.email}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <p><strong className="text-slate-800">Operational Hours:</strong> 9:00 AM - 6:30 PM (IST) | Mon - Sat</p>
              </div>
            </div>

            {/* Embedded map directions */}
            <div className="pt-2">
              <iframe
                title="AVR Location Map Directions"
                src={COMPANY_CONTACT.googleMapsEmbed}
                className="w-full h-40 rounded-xl border border-slate-200 shadow-sm"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Local storage database dashboard tracker showing dynamic lead submissions locally */}
          {localSubmissionList.length > 0 && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-inner">
              <h4 className="text-slate-800 text-xs font-mono font-extrabold uppercase tracking-widest leading-none">
                Active Client Submissions Database (Local Queue)
              </h4>
              <p className="text-slate-400 text-[10px] leading-relaxed font-bold">
                Inspected records stored securely in your local browser sandbox context:
              </p>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {localSubmissionList.map((lead, idx) => (
                  <div key={idx} className="bg-white border border-slate-150 p-2.5 text-[10px] rounded-xl space-y-1 shadow-sm font-semibold">
                    <div className="flex justify-between text-slate-800 font-bold">
                      <strong>{lead.name}</strong>
                      <span className="text-blue-600">{lead.city}</span>
                    </div>
                    <p className="text-slate-450">Service: {lead.service} - {lead.email}</p>
                    <p className="text-slate-500 leading-tight italic line-clamp-1">&quot;{lead.message}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
