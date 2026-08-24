import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type, onClose }) {
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border ${
          type === 'success'
            ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-300'
            : 'bg-slate-900/95 border-rose-500/40 text-rose-300'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        )}
        <span className="text-xs font-semibold text-slate-100">{message}</span>
        <button
          onClick={onClose}
          aria-label="Dismiss message"
          className="text-slate-400 hover:text-white p-1 ml-2 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
