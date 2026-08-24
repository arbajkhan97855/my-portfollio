import React, { useState } from 'react';
import { MessageSquareCode, X, ArrowRight } from 'lucide-react';

export function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Tooltip speech bubble */}
      {tooltipOpen && (
        <div className="pointer-events-auto bg-slate-900/95 border border-emerald-500/30 backdrop-blur-xl shadow-2xl rounded-2xl p-3 max-w-[240px] animate-in slide-in-from-bottom-2 duration-300 relative text-left">
          <button
            onClick={() => setTooltipOpen(false)}
            aria-label="Dismiss tooltip"
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-200 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Fast Response
            </span>
          </div>

          <p className="text-xs text-slate-200 font-semibold mb-2">
            Chat directly with Arbaj on WhatsApp!
          </p>

          <a
            href="https://wa.me/919785589164?text=Hi%20Arbaj,%20I%20am%20interested%20in%20discussing%20a%20project%20or%20job%20opportunity."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Start Conversation</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/919785589164?text=Hi%20Arbaj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Arbaj Khan"
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-emerald-300/30"
      >
        <MessageSquareCode className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>

    </div>
  );
}
