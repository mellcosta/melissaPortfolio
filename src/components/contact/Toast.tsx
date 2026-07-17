import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

export type ToastKind = 'success' | 'error';

export interface ToastState {
  id: number;
  kind: ToastKind;
  message: string;
}

interface ToastProps {
  toast: ToastState | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  const tone = toast?.kind === 'success'
    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
    : 'border-rose-500/30 bg-rose-500/10 text-rose-100';

  const Icon = toast?.kind === 'success' ? CheckCircle2 : AlertTriangle;

  return (
    <AnimatePresence>
      {toast ? (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.22 }}
          className={`fixed bottom-5 right-5 z-60 flex max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-md ${tone}`}
          role="status"
          aria-live="polite"
        >
          <Icon className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="flex-1 text-sm leading-relaxed">{toast.message}</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 transition-colors hover:bg-white/10"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
