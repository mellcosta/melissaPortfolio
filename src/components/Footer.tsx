/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Youtube, Facebook, Linkedin, Github } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/mellcosta' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/melissa-costa-71300a209/' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/m3licosta' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@m3licosta' },
    { icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/profile.php?id=100024281591505' },
  ];

  const currentYear = 2026; // Current execution year context

  return (
    <footer
      className={`py-8 border-t transition-all duration-300 relative overflow-hidden ${
        theme === 'light'
          ? 'bg-[#FFF6E9]/40 border-[#F872EE]/20 text-[#8B7D74]'
          : 'bg-[#0A0A0F]/50 border-white/5 text-[#A1A1AA]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Social Icons (Left on Desktop) */}
        <div className="flex items-center space-x-6">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                theme === 'light'
                  ? 'text-[#8B7D74] hover:text-[#4A3F3A]'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright and Built By Line (Right on Desktop) */}
        <p className="text-xs sm:text-sm font-mono tracking-tight text-center md:text-right">
          &copy; 2026 &bull; Built by Melissa Costa
        </p>

      </div>
    </footer>
  );
};
