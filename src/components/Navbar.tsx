/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: '#home' },
    { name: t.nav.about, id: '#about' },
    { name: t.nav.services, id: '#services' },
    { name: t.nav.projects, id: '#projects' },
    { name: t.nav.events, id: '#events' },
    { name: t.nav.contact, id: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' },
  ];

  const activeLanguageLabel = languages.find((l) => l.code === language)?.label || 'Português';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-150 ${
        scrolled
          ? theme === 'light'
            ? 'bg-[#FFF6E9]/80 backdrop-blur-md shadow-sm border-b border-[#F872EE]/20'
            : 'bg-[#0a0110]/80 backdrop-blur-md shadow-lg border-b border-fuchsia-500/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Wordmark */}
        <a href="#home" className="flex items-center space-x-2">
          <span
            className={`font-serif text-2xl font-bold tracking-tight transition-all duration-150 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-[#FFC7F9] via-[#FF80DF] to-[#FD6EFF] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(217,70,239,0.25)]'
            }`}
          >
            Melissa
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-150 hover:scale-105 ${
                theme === 'light'
                  ? 'text-[#8B7D74] hover:text-[#4A3F3A] hover:bg-[#F872EE]/10'
                  : 'text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded-full border transition-colors ${
                theme === 'light'
                  ? 'border-[#8B7D74]/30 text-[#4A3F3A] hover:bg-[#F872EE]/10'
                  : 'border-white/10 text-[#F4F4F5] hover:bg-white/5'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200" />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute right-0 mt-2 w-40 rounded-xl shadow-lg border p-1 z-50 ${
                    theme === 'light'
                      ? 'bg-[#FFF6E9] border-[#F872EE]/30 text-[#4A3F3A]'
                      : 'bg-[#120B1F] border-white/10 text-[#F4F4F5]'
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors duration-150 font-mono flex items-center justify-between ${
                        language === lang.code
                          ? theme === 'light'
                            ? 'bg-[#F872EE]/20 font-bold'
                            : 'bg-white/10 font-bold'
                          : 'hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F872EE] dark:bg-purple-400" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Mode Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all duration-150 hover:scale-110 active:scale-95 ${
              theme === 'light'
                ? 'border-[#8B7D74]/30 text-[#4A3F3A] hover:bg-[#F872EE]/10 hover:border-[#F872EE]'
                : 'border-white/10 text-yellow-400 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]'
            }`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Theme button for mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${
              theme === 'light' ? 'border-[#8B7D74]/30 text-[#4A3F3A]' : 'border-white/10 text-yellow-400'
            }`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'light' ? 'text-[#4A3F3A]' : 'text-[#F4F4F5]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b z-50 ${
              theme === 'light'
                ? 'bg-[#FFF6E9] border-[#F872EE]/30'
                : 'bg-[#0A0A0F] border-white/10'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-base font-medium rounded-lg transition-colors ${
                      theme === 'light'
                        ? 'text-[#8B7D74] hover:text-[#4A3F3A]'
                        : 'text-[#A1A1AA] hover:text-[#F4F4F5]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Language switcher inline for mobile */}
              <div className="pt-4 border-t border-dashed border-current/10">
                <p className={`text-xs font-mono mb-2 ${theme === 'light' ? 'text-[#8B7D74]' : 'text-[#A1A1AA]'}`}>
                  LANGUAGE / IDIOMA / ЯЗЫК
                </p>
                <div className="grid grid-cols-4 gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`py-1.5 text-xs font-mono rounded-lg text-center ${
                        language === lang.code
                          ? theme === 'light'
                            ? 'bg-[#F872EE]/30 text-[#4A3F3A] font-bold'
                            : 'bg-white/10 text-white font-bold'
                          : theme === 'light'
                            ? 'bg-[#4A3F3A]/5 text-[#8B7D74]'
                            : 'bg-white/5 text-[#A1A1AA]'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
