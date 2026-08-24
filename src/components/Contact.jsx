import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, Download, CheckCircle } from 'lucide-react';
import { RESUME_DATA } from '../utils/generatePdf';

export function Contact({ onDownloadCV, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please complete all required fields.', 'error');
      return;
    }

    // Build formatted WhatsApp message as fallback / primary direct route
    const encodedText = encodeURIComponent(
      `*New Portfolio Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject || 'Project Discussion'}\n\n` +
      `*Message:*\n${formData.message}`
    );

    window.open(`https://wa.me/919785589164?text=${encodedText}`, '_blank');
    setSubmitted(true);
    onShowToast('Inquiry generated! Redirecting to WhatsApp...', 'success');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Let's Build Something <span className="gradient-text">Extraordinary.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, need technical training, or want to interview me for an engineering role? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-100">
                Direct Contact Information
              </h3>

              {/* Phone */}
              <a
                href="tel:+919785589164"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/40 hover:bg-white/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Call / Mobile</div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                    {RESUME_DATA.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:pathanarbaj03328@gmail.com"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/40 hover:bg-white/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Email Address</div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-indigo-400 transition-colors break-all">
                    {RESUME_DATA.email}
                  </div>
                </div>
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919785589164?text=Hi%20Arbaj,%20I%20would%20like%20to%20discuss%20a%20full%20stack%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-400">Direct WhatsApp</div>
                  <div className="text-sm font-bold text-emerald-300">
                    +91 97855 89164
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Location</div>
                  <div className="text-sm font-bold text-slate-200">
                    {RESUME_DATA.location}
                  </div>
                </div>
              </div>

              {/* Download CV CTA */}
              <div className="pt-2">
                <button
                  onClick={onDownloadCV}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 transition-all hover:scale-102"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (Direct PDF)</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              
              <h3 className="text-xl font-extrabold text-slate-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the details below to instantly route your inquiry to my direct WhatsApp channel.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                  <h4 className="text-lg font-bold text-emerald-300 mb-1">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mb-4">
                    Thank you for reaching out. Your inquiry has been routed to my WhatsApp and I will reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/15"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-100 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Hiring / Project Proposal"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-100 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, tech stack requirements, or role details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-slate-100 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-102 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Connect</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
