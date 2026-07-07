/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Hammer, Milestone, Code2, ShieldAlert, Laptop } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const skillGroups = [
    {
      category: t.tech.categories.frontend,
      icon: <Layout className="w-5 h-5" />,
      color: 'text-[#F872EE] dark:text-purple-400',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Sass',
        'Tailwind CSS',
        'HTML5 & CSS3',
      ],
    },
    {
      category: t.tech.categories.tooling,
      icon: <Hammer className="w-5 h-5" />,
      color: 'text-[#F872EE] dark:text-purple-400',
      skills: [
        'Git & GitHub',
        'Figma',
        'Vercel',
        'Linear',
        'Notion',
        'Slack',
      ],
    },
    {
      category: t.tech.categories.learning,
      icon: <Milestone className="w-5 h-5" />,
      color: 'text-[#F872EE] dark:text-purple-400',
      skills: [
        'QA Fundamentals',
        'SDLC & STLC',
        'Manual Testing',
        'Automation Concepts',
        'Test Cases Design',
        'Bug Reporting',
      ],
    },
  ];

  return (
    <section id="tech" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35 }}
            className={`font-serif text-4xl sm:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
            }`}
          >
            {t.tech.title}
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
            {t.tech.subtitle}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-150 flex flex-col justify-between hover:scale-[1.01] ${
                theme === 'light'
                  ? 'bg-[#FDFBF7]/70 border-[#F872EE]/30 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(248,114,238,0.15)]'
                  : 'bg-[#120B1F]/35 border-white/5 hover:border-purple-500/20 hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)]'
              }`}
            >
              <div>
                {/* Header Group */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-dashed border-current/10">
                  <div className={group.color}>{group.icon}</div>
                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold ${
                      theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Tech Pills with custom fonts per mode */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className={`font-mono text-xs tracking-tight select-none cursor-default transition-all duration-300 ${
                        theme === 'light'
                          ? 'px-3 py-1.5 rounded-full text-[#8B7D74] bg-[#F872EE]/10 border border-[#F872EE]/30 hover:text-[#4A3F3A] hover:bg-[#F872EE]/20'
                          : 'px-3.5 py-2 rounded-none text-[#F4F4F5] bg-[#0A0A0F]/65 border border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.1)] hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative base element inside the card */}
              <div className="mt-8 flex justify-end text-current/5">
                {idx === 0 && <Code2 className="w-12 h-12" />}
                {idx === 1 && <Laptop className="w-12 h-12" />}
                {idx === 2 && <ShieldAlert className="w-12 h-12" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
