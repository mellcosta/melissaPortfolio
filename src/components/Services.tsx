/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Code2, Search, Layers, Video } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const localizedContent = {
    pt: {
      subtitle: 'O que eu ofereço',
      title: 'Serviços',
      frontend: {
        title: 'Front-end Dev.',
        description: 'Sites e interfaces modernas, limpas e de alta performance.',
        features: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      },
      qa: {
        title: 'Quality Assurance',
        description: 'Testes manuais, casos estruturados e confiabilidade de software.',
        features: ['Test Cases', 'Bug Report', 'SDLC', 'STLC'],
      },
      figma: {
        title: 'Figma → Code',
        description: 'Tradução fiel de layouts em front-end pixel-perfect e animado.',
        features: ['Fidelidade', 'Responsivo', 'Motion'],
      },
      content: {
        title: 'Content Creation',
        description: 'Conteúdo educativo de tech, simplificando conceitos complexos.',
        features: ['Tutoriais', 'Instagram', 'Mentoria'],
      },
    },
    en: {
      subtitle: 'What I Offer',
      title: 'Services',
      frontend: {
        title: 'Front-end Dev.',
        description: 'Modern, clean, high-performance sites and interfaces.',
        features: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      },
      qa: {
        title: 'Quality Assurance',
        description: 'Manual testing, structured test cases and software reliability.',
        features: ['Test Cases', 'Bug Report', 'SDLC', 'STLC'],
      },
      figma: {
        title: 'Figma → Code',
        description: 'Faithful translation of layouts into pixel-perfect, animated front-end.',
        features: ['Fidelity', 'Responsive', 'Motion'],
      },
      content: {
        title: 'Content Creation',
        description: 'Educational tech content, simplifying complex concepts.',
        features: ['Tutorials', 'Instagram', 'Mentoring'],
      },
    },
    es: {
      subtitle: 'Lo que ofrezco',
      title: 'Servicios',
      frontend: {
        title: 'Front-end Dev.',
        description: 'Sitios e interfaces modernas, limpias y de alto rendimiento.',
        features: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      },
      qa: {
        title: 'Quality Assurance',
        description: 'Pruebas manuales, casos estructurados y fiabilidad del software.',
        features: ['Casos de Prueba', 'Reporte de Bugs', 'SDLC', 'STLC'],
      },
      figma: {
        title: 'Figma → Code',
        description: 'Traducción fiel de diseños en front-end pixel-perfect y animado.',
        features: ['Fidelidad', 'Responsivo', 'Motion'],
      },
      content: {
        title: 'Content Creation',
        description: 'Contenido educativo de tech, simplificando conceptos complejos.',
        features: ['Tutoriales', 'Instagram', 'Mentoría'],
      },
    },
    ru: {
      subtitle: 'Что я предлагаю',
      title: 'Услуги',
      frontend: {
        title: 'Front-end Dev.',
        description: 'Современные, чистые и производительные сайты и интерфейсы.',
        features: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      },
      qa: {
        title: 'Quality Assurance',
        description: 'Ручное тестирование, тест-кейсы и надёжность ПО.',
        features: ['Тест-кейсы', 'Баг-репорты', 'SDLC', 'STLC'],
      },
      figma: {
        title: 'Figma → Code',
        description: 'Точный перенос макетов в пиксель-точный, анимированный код.',
        features: ['Точность', 'Адаптивность', 'Motion'],
      },
      content: {
        title: 'Content Creation',
        description: 'Образовательный tech-контент, объясняющий сложные концепции.',
        features: ['Туториалы', 'Instagram', 'Менторство'],
      },
    }
  };

  const text = localizedContent[language] || localizedContent['en'];

  const servicesList: ServiceItem[] = [
    {
      icon: <Code2 className={`w-6 h-6 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />,
      title: text.frontend.title,
      description: text.frontend.description,
      features: text.frontend.features,
    },
    {
      icon: <Search className={`w-6 h-6 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />,
      title: text.qa.title,
      description: text.qa.description,
      features: text.qa.features,
    },
    {
      icon: <Layers className={`w-6 h-6 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />,
      title: text.figma.title,
      description: text.figma.description,
      features: text.figma.features,
    },
    {
      icon: <Video className={`w-6 h-6 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />,
      title: text.content.title,
      description: text.content.description,
      features: text.content.features,
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
            {text.title}
          </motion.h2>
          <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
              : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
          }`} />
        </div>

        {/* Responsive Grid: 1 row desktop (lg:cols-4), 2x2 tablet (sm:cols-2), stacked mobile (cols-1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
              className={`group relative overflow-hidden max-w-85 pt-6 px-5 pb-0 rounded-2xl border transition-transform duration-150 hover:-translate-y-1 hover:rotate-[-0.3deg] ${
                theme === 'light'
                  ? 'glass border-[#F872EE]/30'
                  : 'dark-glass border-zinc-800/80'
              }`}
            >
              {/* Liquid fill layer 1 — base wave, rises from bottom on hover */}
                <div className={`absolute -left-[20%] w-[140%] -bottom-full h-[160%] rounded-t-[44%] blur-xl transition-[bottom] duration-700 ease-out group-hover:bottom-[-8%] pointer-events-none ${
                  theme === 'light'
                    ? 'bg-gradient-to-t from-transparent to-[#F872EE]/10'
                    : 'bg-gradient-to-t from-transparent to-[#8b5cf6]/10'
                }`} />
              {/* Liquid fill layer 2 — slightly delayed, creates the "ripple" depth effect */}
                <div className={`absolute -left-[20%] w-[140%] -bottom-full h-[160%] rounded-t-[44%] blur-xl transition-[bottom] duration-700 delay-75 ease-out group-hover:bottom-[-14%] pointer-events-none ${
                  theme === 'light'
                    ? 'bg-gradient-to-t from-transparent to-[#FD6EFF]/12'
                    : 'bg-gradient-to-t from-transparent to-[#60a5fa]/12'
                }`} />

              {/* Content wrapper — needs z-10 to stay above the liquid layers */}
              <div className="relative z-10">
                <span className={`font-mono text-[11px] tracking-wide ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-400'}`}>
                  SVC / {String(idx + 1).padStart(2, '0')}
                </span>

                <h3 className={`font-serif text-lg font-bold mt-2 mb-2.5 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {service.title}
                </h3>

                <p className={`text-xs leading-relaxed mb-5 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                  {service.description}
                </p>

                {/* Perforated divider with punch-hole circles at each end */}
                <div className={`relative -mx-5 border-t-2 border-dashed ${theme === 'light' ? 'border-[#F872EE]/30' : 'border-zinc-700'}`}>
                  <span className={`absolute -top-[9px] -left-[9px] w-[18px] h-[18px] rounded-full ${theme === 'light' ? 'bg-[#FFF6E9]' : 'bg-[#090111]'}`} />
                  <span className={`absolute -top-[9px] -right-[9px] w-[18px] h-[18px] rounded-full ${theme === 'light' ? 'bg-[#FFF6E9]' : 'bg-[#090111]'}`} />
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 py-4 pb-5">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                        theme === 'light'
                          ? 'border-[#F872EE]/30 text-[#8B7D74]'
                          : 'border-zinc-700 text-zinc-400'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
