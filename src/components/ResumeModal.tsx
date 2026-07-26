/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code2, Bug, Download } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ResumeOption {
  key: 'frontend' | 'qa';
  title: string;
  subtitle: string;
  href: string;
  downloadName: string;
}

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
  options: ResumeOption[];
  heading?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, options, heading }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-md sm:max-w-lg rounded-3xl p-6 sm:p-8 ${
              theme === 'light'
                ? 'bg-[#FFF8F3] border border-[#F3E4DC] shadow-[0_20px_60px_rgba(0,0,0,0.12)]'
                : 'bg-[#0F0A1A] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
            }`}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
                theme === 'light' ? 'text-[#8B7D74] hover:bg-[#F3E4DC]' : 'text-zinc-400 hover:bg-white/10'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              className={`font-serif text-xl sm:text-2xl font-bold mb-1 ${
                theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
              }`}
            >
              {heading ?? 'Which resume do you need?'}
            </h3>
            <p className={`text-sm mb-6 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
              Pick the version that matches what you're looking for.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((opt) => {
                return (
                  <a
                    key={opt.key}
                    href={opt.href}
                    download={opt.downloadName}
                    onClick={onClose}
                    className={`group flex flex-col items-start gap-3 rounded-2xl p-5 transition-all duration-150 hover:-translate-y-0.5 ${
                      theme === 'light'
                        ? 'bg-white border border-[#F3E4DC] hover:border-[#F872EE] hover:shadow-[0_10px_25px_rgba(248,114,238,0.18)]'
                        : 'bg-white/5 border border-white/10 hover:border-[#d946ef]/60 hover:shadow-[0_10px_30px_rgba(217,70,239,0.2)]'
                    }`}
                  >
                    <span
                      className={`p-2 rounded-xl ${
                        theme === 'light' ? 'bg-[#FDE9FB] text-[#F872EE]' : 'bg-linear-to-br from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] text-white'
                      }`}
                    >
                      {opt.key === 'frontend' ? <Code2 className="w-5 h-5" /> : <Bug className="w-5 h-5" />}
                    </span>

                    <div className="flex-1">
                      <p className={`font-semibold text-sm ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                        {opt.title}
                      </p>
                      <p className={`text-xs mt-0.5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                        {opt.subtitle}
                      </p>
                    </div>

                    <span
                      className={`flex items-center gap-1.5 text-xs font-medium ${
                        theme === 'light' ? 'text-[#F872EE]' : 'text-pink-400'
                      }`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};