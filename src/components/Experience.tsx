/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35 }}
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
            }`}
          >
            {t.experience.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`text-sm sm:text-base max-w-xl mx-auto ${
              theme === 'light' ? 'text-[#8B7D74]' : 'text-[#A1A1AA]'
            }`}
          >
            {t.experience.subtitle}
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-6">
          {/* Subtle Vertical Connecting Line */}
          <div
            className={`absolute left-0 top-2 bottom-2 w-0.5 ${
              theme === 'light'
                ? 'bg-[#F872EE]/50'
                : 'bg-gradient-to-b from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] opacity-60'
            }`}
          />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Timeline node/dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-150 ${
                    theme === 'light'
                      ? 'bg-[#FFF6E9] border-[#F872EE] group-hover:scale-125 group-hover:bg-[#F872EE]'
                      : 'bg-[#0A0A0F] border-purple-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-[#FDFBF7]/80 border-[#F872EE]/30 hover:border-[#F872EE] hover:shadow-[0_10px_25px_rgba(248,114,238,0.1)]'
                      : 'bg-[#120B1F]/40 border-white/5 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.05)]'
                  }`}
                >
                  {/* Meta: Dates / Timestamps with JetBrains Mono */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 ${
                        theme === 'light' ? 'text-[#8B7D74]' : 'text-purple-400'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    <span
                      className={`font-mono text-[10px] tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${
                        theme === 'light'
                          ? 'bg-[#F872EE]/10 border-[#F872EE]/40 text-[#8B7D74]'
                          : 'bg-white/5 border-white/10 text-purple-400'
                      }`}
                    >
                      {item.company}
                    </span>
                  </div>

                  {/* Title and Role */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="mt-1">
                      <Briefcase className={`w-5 h-5 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`} />
                    </div>
                    <div>
                      <h3
                        className={`font-serif text-lg sm:text-xl font-bold leading-tight ${
                          theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
                        }`}
                      >
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  {/* Contribution bullets */}
                  <ul className="space-y-2.5 pl-5 sm:pl-8 list-disc">
                    {item.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className={`text-sm sm:text-base leading-relaxed ${
                          theme === 'light' ? 'text-[#8B7D74]' : 'text-[#A1A1AA]'
                        }`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
