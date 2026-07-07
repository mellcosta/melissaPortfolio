/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Briefcase, Target, Languages } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const localizedContent = {
    pt: {
      getToKnow: 'Conheça um pouco',
      aboutMe: 'Sobre Mim',
      para1: 'Olá! Sou a Melissa, uma Desenvolvedora Front-end apaixonada por construir sites e aplicações modernas com React.js, Next.js e Tailwind CSS. Atualmente, também estou me aprofundando na área de Quality Assurance (QA) para garantir que cada software que eu crio seja robusto, confiável e livre de bugs.',
      para2: 'Adoro criar conteúdo sobre tecnologia para compartilhar meus aprendizados e inspirar outras pessoas a entrarem na área. Além disso, sou muito ativa na comunidade tech, participando de eventos, conhecendo novas pessoas e colaborando com outros desenvolvedores.',
      education: 'Educação',
      experience: 'Experiência',
      focus: 'Foco Atual',
      languages: 'Idiomas',
      degree: 'B.Tech Engenharia de Computação',
      uni: 'Andhra University',
      role1: 'Estágio Dev Front-end',
      freelance: 'Freelancer Front-end',
      portuguese: 'Português',
      english: 'Inglês',
      techTitle: 'Tecnologias',
    },
    en: {
      getToKnow: 'Get to know me',
      aboutMe: 'About Me',
      para1: "Hi! I'm Melissa, a Front-end Developer who loves building modern websites and web applications with React.js, Next.js, and Tailwind CSS. Currently, I am also diving deep into Quality Assurance (QA) to ensure that the software I build is robust, reliable, and bug-free.",
      para2: "I enjoy creating tech content to share my learnings and inspire others on their tech journey. I also love attending tech events, meeting new people, and active involvement with the developer community.",
      education: 'Education',
      experience: 'Experience',
      focus: 'Current Focus',
      languages: 'Languages',
      degree: 'B.Tech Computer Science & Engineering',
      uni: 'Andhra University',
      role1: 'Front-end Developer Intern',
      freelance: 'Front-end Freelancer',
      portuguese: 'Portuguese',
      english: 'English',
      techTitle: 'Technologies',
    },
    es: {
      getToKnow: 'Conóceme',
      aboutMe: 'Sobre Mí',
      para1: "¡Hola! Soy Melissa, una Desarrolladora Front-end a la que le apasiona construir sitios web modernos y aplicaciones con React.js, Next.js y Tailwind CSS. Actualmente, también me estoy sumergiendo en Quality Assurance (QA) para garantizar que el software que creo sea robusto, confiable y libre de errores.",
      para2: "Disfruto crear contenido de tecnología para compartir mis aprendizajes e inspirar a otras personas en su camino tecnológico. También me encanta asistir a eventos de tecnología, conocer gente nueva e involucrarme activamente en la comunidad.",
      education: 'Educación',
      experience: 'Experiencia',
      focus: 'Enfoque Actual',
      languages: 'Idiomas',
      degree: 'B.Tech Ingeniería de Computación',
      uni: 'Andhra University',
      role1: 'Práctica Dev Front-end',
      freelance: 'Freelancer Front-end',
      portuguese: 'Portugués',
      english: 'Inglés',
      techTitle: 'Tecnologías',
    },
    ru: {
      getToKnow: 'Познакомьтесь со мной',
      aboutMe: 'Обо мне',
      para1: "Привет! Я Мелисса, фронтенд-разработчик, которая любит создавать современные веб-сайты и веб-приложения с помощью React.js, Next.js и Tailwind CSS. В настоящее время я также углубляюсь в область обеспечения качества (QA), чтобы программное обеспечение было надежным, эффективным и стабильным.",
      para2: "Мне нравится создавать технологический контент, чтобы делиться своими знаниями и вдохновлять других. Я также люблю посещать технологические мероприятия, знакомиться с новыми людьми и активно общаться в ИТ-сообществе.",
      education: 'Образование',
      experience: 'Опыт работы',
      focus: 'Текущий фокус',
      languages: 'Языки',
      degree: 'B.Tech Компьютерная инженерия',
      uni: 'Andhra University',
      role1: 'Стажер фронтенд-разработчик',
      freelance: 'Фриланс фронтенд-разработчик',
      portuguese: 'Португальский',
      english: 'Английский',
      techTitle: 'Технологический стек',
    }
  };

  const text = localizedContent[language] || localizedContent['en'];

  const marqueeTechnologies = [
    'HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Tailwind CSS', 'Git', 'GitHub', 'MongoDB', 'Supabase', 'Postman', 'Figma'
  ];

  // We duplicate the array to guarantee seamless infinite scroll
  const doubledTechnologies = [...marqueeTechnologies, ...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden">
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
            {text.aboutMe}
          </motion.h2>
          <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF]'
              : 'bg-gradient-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]'
          }`} />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Friendly Narrative Bio */}
          <div className="col-span-1 md:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className={`text-base leading-relaxed ${
                theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-300'
              }`}
            >
              {text.para1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className={`text-base leading-relaxed ${
                theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-300'
              }`}
            >
              {text.para2}
            </motion.p>
          </div>

          {/* Right Column: 2x2 Grid of Small Cards */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className={`p-5 rounded-2xl transition-all duration-150 ${
                theme === 'light' ? 'glass hover:shadow-md hover:scale-[1.02]' : 'dark-glass hover:bg-white/5 border border-zinc-800/40 hover:scale-[1.02]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
                <h3 className={`text-sm font-serif font-bold uppercase tracking-wider ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {text.education}
                </h3>
              </div>
              <ul className={`text-xs space-y-2 leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                  <span>{text.degree}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                  <span>{text.uni}</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`p-5 rounded-2xl transition-all duration-150 ${
                theme === 'light' ? 'glass hover:shadow-md hover:scale-[1.02]' : 'dark-glass hover:bg-white/5 border border-zinc-800/40 hover:scale-[1.02]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
                <h3 className={`text-sm font-serif font-bold uppercase tracking-wider ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {text.experience}
                </h3>
              </div>
              <ul className={`text-xs space-y-2 leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                <li className="flex items-start gap-1.5 font-semibold">
                  <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                  <span>{text.role1}</span>
                </li>
                <li className="flex items-start gap-1.5 text-[11px] pl-3">
                  <span>React • TypeScript</span>
                </li>
                <li className="pt-2 border-t border-dashed border-current/10 flex items-start gap-1.5 mt-2">
                  <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                  <span>{text.freelance}</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Current Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className={`p-5 rounded-2xl transition-all duration-150 sm:col-span-1 ${
                theme === 'light' ? 'glass hover:shadow-md hover:scale-[1.02]' : 'dark-glass hover:bg-white/5 border border-zinc-800/40 hover:scale-[1.02]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
                <h3 className={`text-sm font-serif font-bold uppercase tracking-wider ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {text.focus}
                </h3>
              </div>
              <ul className={`text-xs space-y-1.5 leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                {['Quality Assurance', 'Software Testing', 'SDLC & STLC', 'Modern Front-end', 'Content Creation'].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 4: Languages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`p-5 rounded-2xl transition-all duration-150 ${
                theme === 'light' ? 'glass hover:shadow-md hover:scale-[1.02]' : 'dark-glass hover:bg-white/5 border border-zinc-800/40 hover:scale-[1.02]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Languages className={`w-5 h-5 ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`} />
                <h3 className={`text-sm font-serif font-bold uppercase tracking-wider ${theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'}`}>
                  {text.languages}
                </h3>
              </div>
              <ul className={`text-xs space-y-1.5 leading-relaxed ${theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'}`}>
                <li className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                    <span className="font-semibold">{text.portuguese}</span>
                  </div>
                  <span className="text-[10px] opacity-75 pl-3.5">Native / Nativo</span>
                </li>
                <li className="flex flex-col pt-2 border-t border-dashed border-current/10 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-bold ${theme === 'light' ? 'text-[#F872EE]' : 'text-purple-500'}`}>•</span>
                    <span className="font-semibold">{text.english}</span>
                  </div>
                  <span className="text-[10px] opacity-75 pl-3.5">Professional / Profissional</span>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>

        {/* Infinite Horizontal Carousel (Technologies Marquee) */}
        <div className="relative mt-8">

          <div className="relative w-full overflow-hidden py-3">
            {/* Visual gradient fades at side edges */}
            <div className={`absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none ${
              theme === 'light' ? 'bg-gradient-to-r from-[#FFF6E9] to-transparent' : 'bg-gradient-to-r from-[#05000a] to-transparent'
            }`} />
            <div className={`absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none ${
              theme === 'light' ? 'bg-gradient-to-l from-[#FFF6E9] to-transparent' : 'bg-gradient-to-l from-[#05000a] to-transparent'
            }`} />

            <div className="flex animate-marquee gap-8 items-center whitespace-nowrap">
              {/* Custom High-Fidelity tech icons SVGs */}
              {(() => {
                const list = [
                  { name: 'HTML', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /> },
                  { name: 'CSS', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /> },
                  { name: 'Sass', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" /> },
                  { name: 'JavaScript', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> },
                  { name: 'TypeScript', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /> },
                  { name: 'React', icon: <img className="w-5 h-5 object-contain" src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="React" /> },
                  { name: 'Next.js', icon: <img className="w-5 h-5 object-contain" src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="Next.js" /> },
                  { name: 'Tailwind CSS', icon: <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6.5c-2.4 0-4 .8-4.8 2.4.8-1.6 2-2.4 3.6-2.4 1.2 0 2.2.4 3 1.2.8.8 1.4 1.8 1.8 3 .4 1.2.4 2.2 0 3-.4.8-1.2 1.4-2.4 1.8.8-.4 1.4-1 1.8-1.8.4-.8.4-1.8 0-3-.4-1.2-1-2.2-1.8-3-.8-.8-1.8-1.2-3-1.2zM6 12.5c-2.4 0-4 .8-4.8 2.4.8-1.6 2-2.4 3.6-2.4 1.2 0 2.2.4 3 1.2.8.8 1.4 1.8 1.8 3 .4 1.2.4 2.2 0 3-.4.8-1.2 1.4-2.4 1.8.8-.4 1.4-1 1.8-1.8.4-.8.4-1.8 0-3-.4-1.2-1-2.2-1.8-3-.8-.8-1.8-1.2-3-1.2z" /></svg> },
                  { name: 'Git', icon: <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.3-.1c-.7 0-1.3.4-1.8.8L.7 9.5c-.9.9-.9 2.4 0 3.3l10.2 10.2c.5.5 1.1.8 1.8.8.7 0 1.3-.3 1.8-.8l10.2-10.2c.9-.9.9-2.4-.1-3.2l-.3-.7zM13 18.2c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3V9.6c-.6-.3-1-.9-1-1.6 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .7-.4 1.3-1 1.6v5.5l1.3-1.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3.1 3z" /></svg> },
                  { name: 'GitHub', icon: <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { name: 'MongoDB', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> },
                  { name: 'Supabase', icon: <svg className="w-5 h-5 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.362 9.354H12v-9L2.638 14.646H12v9l9.362-14.292z" /></svg> },
                  { name: 'Postman', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/postman.png" alt="Postman" /> },
                  { name: 'Figma', icon: <img className="w-5 h-5 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /> }
                ];
                return [...list, ...list, ...list];
              })().map((tech, idx) => (
                <div
                  key={idx}
                  className={`px-5 py-3 rounded-2xl flex items-center gap-3 transition-transform hover:scale-110 select-none ${
                    theme === 'light'
                      ? 'bg-transparent text-[#4A3F3A]'
                      : 'bg-transparent text-zinc-300 '
                  }`}
                  title={tech.name}
                >
                  {tech.icon}
                  <span className="font-mono text-xs font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
