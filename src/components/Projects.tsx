/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { projectsData } from '../data/projects';

type ProjectCategory = 'featured' | 'react' | 'vanilla' | 'design' | 'in-progress' | 'all';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('featured');

  // Localized filter labels
  const filterLabels: Record<string, Record<ProjectCategory, string>> = {
    pt: {
      featured: 'Destaques',
      react: 'React & Next.js',
      vanilla: 'HTML, CSS & JS',
      design: 'Figma & Design',
      'in-progress': 'Em Desenvolvimento',
      all: 'Todos os Projetos',
    },
    en: {
      featured: 'Featured',
      react: 'React & Next.js',
      vanilla: 'HTML, CSS & JS',
      design: 'Figma & Design',
      'in-progress': 'In Progress',
      all: 'All Projects',
    },
    es: {
      featured: 'Destacados',
      react: 'React & Next.js',
      vanilla: 'HTML, CSS & JS',
      design: 'Figma & Diseño',
      'in-progress': 'En Progreso',
      all: 'Todos los Proyectos',
    },
    ru: {
      featured: 'Рекомендуемые',
      react: 'React и Next.js',
      vanilla: 'HTML, CSS и JS',
      design: 'Figma и дизайн',
      'in-progress': 'В разработке',
      all: 'Все проекты',
    },
  };

  const labels = filterLabels[language] || filterLabels['en'];

  const inProgressLabels: Record<string, string> = {
    pt: 'Em Desenvolvimento',
    en: 'In Progress',
    es: 'En Progreso',
    ru: 'В разработке',
  };
  const inProgressLabel = inProgressLabels[language] || inProgressLabels['en'];

  // Helper to categorize projects
  const isMatch = (tags: string[], category: ProjectCategory): boolean => {
    if (category === 'all') return true;
    const lowerTags = tags.map((t) => t.toLowerCase());

    if (category === 'react') {
      return (
        lowerTags.includes('react.js') ||
        lowerTags.includes('react') ||
        lowerTags.includes('next.js') ||
        lowerTags.includes('nextjs')
      );
    }
    if (category === 'vanilla') {
      return (
        lowerTags.includes('html') ||
        lowerTags.includes('css') ||
        lowerTags.includes('javascript') ||
        lowerTags.includes('sass')
      );
    }
    if (category === 'design') {
      return (
        lowerTags.includes('figma') ||
        lowerTags.includes('storybook') ||
        lowerTags.includes('design system')
      );
    }
    return false;
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'featured') {
      return ['rocketflix', 'spotify-clone', 'devlinks'].includes(project.id);
    }
    if (activeCategory === 'in-progress') {
      return project.isLive === false;
    }
    if (activeCategory === 'all') {
      return true;
    }
    return project.isLive !== false && isMatch(project.tags, activeCategory);
  });

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-1 ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
            }`}
          >
            {t.projects.title}
          </motion.h2>
          <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
              : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
          }`} />
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {(['featured', 'react', 'vanilla', 'design', 'in-progress', 'all'] as ProjectCategory[]).map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-semibold transition-all duration-150 relative hover:scale-105 active:scale-95 ${
                  isActive
                    ? theme === 'light'
                      ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF] text-[#4A3F3A] shadow-md'
                      : 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : theme === 'light'
                      ? 'bg-white/65 text-[#8B7D74] hover:text-[#4A3F3A] hover:bg-[#F872EE]/10 border border-[#F872EE]/20'
                      : 'bg-[#120B1F]/40 text-zinc-400 hover:text-white hover:bg-white/5 border border-zinc-800'
                }`}
              >
                {labels[category]}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-x-8 sm:gap-y-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const githubLinks: Record<string, string> = {
                'rocketflix': 'https://github.com/mellcosta/desafiosRocketseat/tree/main/avancado/rocketflix',
                'spotify-clone': 'https://github.com/mellcosta',
                'ignite-feed': 'https://github.com/mellcosta',
                'devlinks': 'https://github.com/mellcosta/DevLinks',
                'ignite-lab-design-system': 'https://github.com/mellcosta/ignite_lab_design_system',
                'login-page': 'https://github.com/mellcosta/desafiosRocketseat/tree/main/intermediario/login',
                'portfolio-previous': 'https://github.com/mellcosta',
                'countdown': 'https://github.com/mellcosta/desafiosRocketseat/tree/main/intermediario/countdown',
              };

              const isInProgress = project.isLive === false;
              const githubUrl = githubLinks[project.id] || 'https://github.com/mellcosta';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col h-full transition-all duration-150"
                >
                  <div className="flex flex-col h-full">
                    {/* Large project image at the top */}
                    {project.link && !isInProgress ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/img relative block aspect-[4/3] min-w-[300px] h-[200px] overflow-hidden rounded-3xl bg-black/5 mb-5 shadow-sm transition-all duration-300 hover:-translate-y-2 ${
                          theme === 'light'
                            ? 'hover:shadow-[0_12px_28px_rgba(248,114,238,0.22)]'
                            : 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.02]"
                        />
                        {/* Soft overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
                        
                        {/* Hover External Link Indicator badge */}
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-black/55 backdrop-blur-md text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 shadow-sm">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    ) : (
                      <div className={`group/img relative aspect-[4/3] min-w-[300px] h-[200px] overflow-hidden rounded-3xl bg-black/5 mb-5 shadow-sm transition-all duration-300 hover:-translate-y-2 ${
                        theme === 'light'
                          ? 'hover:shadow-[0_12px_28px_rgba(248,114,238,0.22)]'
                          : 'hover:shadow-[0_12px_28px_rgba(168,85,247,0.22)]'
                      }`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale-[35%] opacity-75"
                        />
                        {/* In Progress hover overlay */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white px-4 py-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full shadow-lg">
                            {inProgressLabel}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Project header containing Title & GitHub Link */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3
                        className={`font-serif text-xl font-bold transition-all duration-200 ease-out inline-block hover:translate-x-1 ${
                          theme === 'light'
                            ? 'text-[#4A3F3A] hover:text-[#F872EE]'
                            : 'text-white hover:text-purple-400'
                        }`}
                      >
                        {project.link && !isInProgress ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      {!isInProgress && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full border transition-transform duration-100 ease-out hover:scale-110 active:scale-95 flex items-center justify-center shrink-0 ${
                            theme === 'light'
                              ? 'border-[#F872EE]/30 text-[#4A3F3A] hover:bg-[#F872EE]/10'
                              : 'border-zinc-800 text-zinc-300 hover:text-white hover:bg-white/5'
                          }`}
                          title="GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Short description */}
                    <p
                      className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                        theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Technology tags: minimal & very small tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto mb-2">
                      {project.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ y: -3, scale: 1.05 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-md border tracking-wider select-none uppercase cursor-default transition-colors duration-150 ${
                            theme === 'light'
                              ? 'border-[#F872EE]/20 bg-[#F872EE]/5 text-[#8B7D74] hover:border-[#F872EE]/60 hover:bg-[#F872EE]/10 hover:text-[#F872EE]'
                              : 'border-zinc-800 bg-[#120B1F]/30 text-zinc-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400'
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
