import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

export type MeetingType = 'quick-chat' | 'lets-talk';

interface MeetingOption {
  id: MeetingType;
  title: string;
  duration: string;
  description: string;
  cta: string;
  url: string;
}

interface MeetingBookingProps {
  theme: 'light' | 'dark';
  title: string;
  subtitle: string;
  [key: string]: unknown;
}

const cardBase = 'rounded-2xl border p-5 text-left transition-all duration-300';

export const MeetingBooking: React.FC<MeetingBookingProps> = ({
  theme,
  title,
  subtitle,
}) => {
  const meetingOptions: MeetingOption[] = [
    {
      id: 'quick-chat',
      title: 'Quick Chat',
      duration: '15 min',
      description: 'Perfect for quick questions, networking or introductions.',
      cta: 'Book Quick Chat',
      url: 'https://cal.com/melissa-costa-stn4ml/15min',
    },
    {
      id: 'lets-talk',
      title: "Let's Talk",
      duration: '30 min',
      description: "Let's discuss projects, freelance work, internships or collaborations.",
      cta: "Book Let's Talk",
      url: 'https://cal.com/melissa-costa-stn4ml/30min',
    },
  ];

  const cardClassName = () => {
    const idleStyles = theme === 'light'
      ? 'border-[#F872EE]/20 bg-[#FDFBF7]/60 hover:bg-[#F872EE]/8 hover:border-[#F872EE]/35'
      : 'border-zinc-800/90 bg-[#120B1F]/30 hover:bg-white/5 hover:border-purple-500/25';

    return `${cardBase} ${idleStyles} hover:-translate-y-1`;
  };

  const buttonClassName = theme === 'light'
    ? 'mt-4 inline-flex items-center justify-center rounded-full bg-[#F872EE]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4A3F3A] transition-all duration-300 hover:bg-[#F872EE]/35 hover:shadow-md hover:shadow-[#F872EE]/20'
    : 'mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:from-purple-400 hover:to-fuchsia-400 hover:shadow-md hover:shadow-purple-500/30';

  const openCalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="lg:col-span-6 space-y-6"
    >
      <div>
        <h3 className={`text-lg font-serif font-bold mb-1 flex items-center gap-2 ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
          <Calendar className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
          <span>{title}</span>
        </h3>
        <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-500'}`}>
          {subtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {meetingOptions.map((option, index) => {
          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={`group ${cardClassName()}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-sm font-semibold ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                    {option.title}
                  </p>
                  <div className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest ${theme === 'light' ? 'bg-[#F872EE]/15 text-[#8B7D74]' : 'bg-white/5 text-zinc-400'}`}>
                    <Clock className="w-3 h-3" />
                    {option.duration}
                  </div>
                </div>
                
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                {option.description}
              </p>
              <button
                type="button"
                onClick={() => openCalLink(option.url)}
                className={buttonClassName}
              >
                {option.cta}
              </button>
            </motion.div>
          );
        })}
      </div>

      
    </motion.div>
  );
};
