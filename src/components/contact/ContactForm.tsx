import React from 'react';
import { motion } from 'motion/react';
import { Loader2, Mail, Send } from 'lucide-react';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  theme: 'light' | 'dark';
  title: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  sendingLabel: string;
  values: ContactFormValues;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const inputBase =
  'w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none';

export const ContactForm: React.FC<ContactFormProps> = ({
  theme,
  title,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  sendingLabel,
  values,
  onChange,
  onSubmit,
  isSubmitting,
}) => {
  const fieldClassName =
    theme === 'light'
      ? 'bg-[#FDFBF7]/50 border-[#F872EE]/30 focus:border-[#F872EE] focus:bg-white text-[#4A3F3A]'
      : 'bg-[#0A0A0F]/65 border-zinc-800 focus:border-purple-500/40 focus:bg-zinc-950 text-white';

  const labelClassName = theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500';

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border ${
        theme === 'light'
          ? 'bg-[#FDFBF7]/80 border-[#F872EE]/30 shadow-md'
          : 'bg-[#120B1F]/35 border-zinc-800/80 shadow-2xl'
      }`}
    >
      <h3 className={`text-lg font-serif font-bold mb-6 flex items-center gap-2 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
        <Mail className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
        <span>{title}</span>
      </h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${labelClassName}`}>
            {nameLabel} *
          </label>
          <input
            type="text"
            required
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
            className={`${inputBase} ${fieldClassName}`}
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${labelClassName}`}>
            {emailLabel} *
          </label>
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) => onChange('email', event.target.value)}
            className={`${inputBase} ${fieldClassName}`}
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${labelClassName}`}>
            {messageLabel} *
          </label>
          <textarea
            rows={5}
            required
            value={values.message}
            onChange={(event) => onChange('message', event.target.value)}
            className={`${inputBase} ${fieldClassName}`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 mt-2 rounded-full font-semibold text-sm transition-all duration-150 active:scale-95 hover:scale-105 hover:brightness-110 flex items-center justify-center gap-2 ${
            theme === 'light'
              ? 'btn-gradient shadow-md'
              : 'bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_28px_rgba(217,70,239,0.6)]'
          } ${isSubmitting ? 'cursor-not-allowed opacity-90' : ''}`}
        >
          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          <span>{isSubmitting ? sendingLabel : submitLabel}</span>
        </button>
      </form>
    </motion.div>
  );
};
