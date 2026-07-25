/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Youtube, Facebook, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import lightProfile from '../assets/images/light.jpg';
import darkProfile from '../assets/images/dark.jpg';
import resumeEn from '../assets/docs/Melissa_Costa_Resume_EN.pdf';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface HeroProps {
  introState?: 'loading' | 'dissolving' | 'done';
}

export const Hero: React.FC<HeroProps> = ({ introState = 'done' }) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Support different profile photos for Light Mode and Dark Mode
  // You can easily replace these image paths with your customized profile photos later!
  const lightProfilePhoto = lightProfile;
  const darkProfilePhoto = darkProfile;

  const currentProfilePhoto = theme === 'light' ? lightProfilePhoto : darkProfilePhoto;

  const resumeByLanguage: Partial<Record<string, string>> = {
    en: resumeEn,
  };
  const hasLanguageResume = Boolean(resumeByLanguage[language]);
  const resumeHref = resumeByLanguage[language] ?? resumeEn;
  const resumeDownloadName = hasLanguageResume
    ? `Melissa_Costa_Resume_${language.toUpperCase()}.pdf`
    : 'Melissa_Costa_Resume_EN.pdf';

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/mellcosta' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/melissa-costa-71300a209/' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/m3licosta' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@m3licosta' },
    { icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/profile.php?id=100024281591505' },
  ];

  // Dynamic translated greeting
  const greetings: Record<string, string> = {
    pt: "Olá, eu sou a Melissa.",
    en: "Hi, I'm Melissa.",
    es: "Hola, soy Melissa.",
    ru: "Привет, я Мелисса.",
  };
  const activeGreeting = greetings[language] || greetings['en'];

  // Typing animation state
  const roles = t.hero.typingRoles || ['Front-end Developer', 'Software Tester (QA)', 'Content Creator'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Reset typing if roles change (e.g. language swap)
    setRoleIndex(0);
    setIsDeleting(false);
    setTypedText('');
  }, [language]);

  useEffect(() => {
    // Only run typing animation after the Hero entrance is completely finished
    if (introState !== 'done') {
      setTypedText('');
      return;
    }

    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex % roles.length];

    if (!isDeleting) {
      if (typedText === currentRole) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1400); // Wait 1.4s before starting to delete
      } else {
        timer = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 55); // 55ms per character typing
      }
    } else {
      if (typedText === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 250); // Pause briefly before next role starts typing
      } else {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 25); // 25ms deleting speed (faster)
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles, introState]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div 
            style={{ y: scrollY * -0.04 }}
            className="col-span-1 md:col-span-7 flex flex-col items-start text-left order-2 md:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={introState !== 'loading' ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className={`font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 ${
                theme === 'light' ? 'text-[#4A3F3A]' : 'text-white'
              }`}
            >
              {activeGreeting}
            </motion.h1>
 
            {/* Typing text animation - Plain text with cursor (No Pill/Container) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={introState !== 'loading' ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
              className="h-10 sm:h-12 flex items-center mb-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-mono font-medium tracking-tight text-current">
                <span className={theme === 'light' ? 'text-[#F872EE]' : 'bg-linear-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] bg-clip-text text-transparent'}>
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                  className={`ml-1 font-light ${theme === 'light' ? 'text-[#F872EE]' : 'text-pink-500'}`}
                >
                  |
                </motion.span>
              </p>
            </motion.div>
 
            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={introState !== 'loading' ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${
                theme === 'light' ? 'text-[#8B7D74]' : 'text-zinc-400'
              }`}
            >
              {t.hero.bio}
            </motion.p>
 
            {/* Action Buttons side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={introState !== 'loading' ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.35, delay: 0.22, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className={`px-6 py-3 rounded-full text-sm font-semibold active:scale-95 flex items-center gap-2 hover:scale-105 hover:brightness-110 transition-transform duration-100 ease-out ${
                  theme === 'light'
                    ? 'btn-gradient shadow-md'
                    : 'bg-linear-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] hover:shadow-[0_0_28px_rgba(217,70,239,0.6)]'
                }`}
              >
                {t.hero.cta}
              </a>
              {theme === 'light' ? (
                <a
                  href={resumeHref}
                  download={resumeDownloadName}
                  className="px-6 py-3 rounded-full text-sm font-medium border border-[#F872EE] text-[#4A3F3A] hover:bg-[#F872EE]/10 hover:scale-105 active:scale-95 transition-colors transition-transform duration-100 ease-out flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#F872EE]" />
                  <span>{t.hero.viewResume}</span>
                </a>
              ) : (
                <a
                  href={resumeHref}
                  download={resumeDownloadName}
                  className="relative p-[1.5px] rounded-full group overflow-hidden active:scale-95 hover:scale-105 transition-transform duration-100 ease-out flex items-center justify-center"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6]" />
                  <span className="relative px-6 py-3 rounded-full text-sm font-medium bg-[#090111] text-zinc-200 group-hover:bg-transparent group-hover:text-white transition-colors duration-100 ease-out flex items-center gap-2">
                    <FileText className="w-4 h-4 text-pink-400 group-hover:text-white" />
                    <span>{t.hero.viewResume}</span>
                  </span>
                </a>
              )}
            </motion.div>
 
            {/* Social Icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={introState !== 'loading' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-5 space-x-6 pl-1"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 -m-2 transition-transform duration-100 ease-out hover:scale-125 ${
                    theme === 'light'
                      ? 'text-[#8B7D74] hover:text-[#F872EE]'
                      : 'text-[#A1A1AA] hover:text-pink-500'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image Placement */}
          <div className="col-span-1 md:col-span-5 flex justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={introState !== 'loading' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={introState !== 'loading' ? { scale: 1 } : { scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
                style={{ y: scrollY * 0.05 }}
                className="relative w-full max-w-55 sm:max-w-70 md:max-w-85 aspect-square shrink-0"
              >
                {/* Blur backdrop effects */}
                {theme === 'light' ? (
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF] blur-2xl opacity-40 scale-105 animate-pulse" />
                ) : (
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#60a5fa] via-[#d946ef] to-[#8b5cf6] blur-3xl opacity-30 scale-105 animate-pulse" />
                )}

                {/* Picture frame with float hover and expanding shadow */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-300 aspect-square shrink-0 ${
                    theme === 'light'
                      ? 'shadow-[0_10px_30px_rgba(248,114,238,0.25)] hover:shadow-[0_25px_55px_rgba(248,114,238,0.45)]'
                      : 'shadow-[0_10px_35px_rgba(59,130,246,0.2)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.4)]'
                  }`}
                >
                  {/* Light Profile Image Crossfade */}
                  <motion.img
                    src={lightProfilePhoto}
                    alt="Melissa Costa"
                    referrerPolicy="no-referrer"
                    animate={{ opacity: theme === 'light' ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                  />
                  
                  {/* Dark Profile Image Crossfade */}
                  <motion.img
                    src={darkProfilePhoto}
                    alt="Melissa Costa"
                    referrerPolicy="no-referrer"
                    animate={{ opacity: theme === 'dark' ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
