/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { eventsData } from '../data/events';

const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1.5];

const TAG_LABELS: Record<string, Record<string, string>> = {
  attendee: { pt: 'Participante', en: 'Attendee', es: 'Asistente', ru: 'Участник' },
  volunteer: { pt: 'Voluntária', en: 'Volunteer', es: 'Voluntaria', ru: 'Волонтёр' },
  visitor: { pt: 'Visita', en: 'Visit', es: 'Visita', ru: 'Визит' },
  speaker: { pt: 'Palestrante', en: 'Speaker', es: 'Ponente', ru: 'Спикер' },
};

const Polaroid: React.FC<{
  event: (typeof eventsData)[number];
  index: number;
  baseRotation: number;
  language: string;
  viewOnLabel: string;
  viewPostLabel: string;
}> = ({
  event,
  index,
  baseRotation,
  language,
  viewOnLabel,
  viewPostLabel,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ rotate: baseRotation }}
      whileHover={{ scale: 1.05, rotate: 0, y: -8, zIndex: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-[220px] sm:w-[250px] md:w-[270px] lg:w-[290px] cursor-pointer select-none shrink-0 relative"
      style={{ transformOrigin: 'center center' }}
    >
      <div
        className={`bg-[#FDFCF9] p-3 pb-4 rounded-[2px] shadow-[0_14px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300 ${
          theme === 'light' ? 'border border-zinc-200/50' : 'border border-zinc-800/20'
        }`}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-200">
          <img
            src={event.image}
            alt={event.name}
            referrerPolicy="no-referrer"
            draggable={false}
            className="w-full h-full object-cover pointer-events-none"
          />
          <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm">
            {TAG_LABELS[event.tagKey]?.[language] ?? TAG_LABELS.attendee[language]}
          </span>
        </div>

        <div className="pt-3 px-1 flex flex-col justify-between min-h-[110px]">
          <div>
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#3A322D] leading-snug line-clamp-2">
              {event.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-[#8B7D74]">
              <Calendar className="w-3 h-3" />
              <span className="font-mono text-[10px]">{event.date}</span>
            </div>
          </div>

          <div className="mt-3">
            <a
              href={event.platformLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase text-[#F872EE] hover:text-[#e050d8] transition-colors"
            >
              <span>{viewPostLabel}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Events: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  // Duplicate eventsData three times to ensure seamless infinite scrolling with `animate-marquee`
  const tripledEvents = [...eventsData, ...eventsData, ...eventsData];

  return (
    <section id="events" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-1 ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
            }`}
          >
            {t.events.title}
          </motion.h2>
          <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
              : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
          }`} />
        </div>

        {/* Infinite Horizontal Carousel */}
        <div className="relative py-6">
          {/* Visual gradient fades at side edges */}
          <div className={`absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none ${
            theme === 'light' ? 'bg-gradient-to-r from-[#FFF6E9] to-transparent' : 'bg-gradient-to-r from-[#05000a] to-transparent'
          }`} />
          <div className={`absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none ${
            theme === 'light' ? 'bg-gradient-to-l from-[#FFF6E9] to-transparent' : 'bg-gradient-to-l from-[#05000a] to-transparent'
          }`} />

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee gap-8 items-center py-6 whitespace-nowrap">
              {tripledEvents.map((event, i) => (
                <Polaroid
                  key={`${event.id}-${i}`}
                  event={event}
                  index={i}
                  baseRotation={ROTATIONS[i % ROTATIONS.length]}
                  language={language}
                  viewOnLabel={t.events.viewOn}
                  viewPostLabel={t.events.viewPost}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
