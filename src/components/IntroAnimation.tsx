/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

interface IntroAnimationProps {
  onDissolveStart: () => void;
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  onDissolveStart,
  onComplete,
}) => {
  const { theme } = useTheme();

    useEffect(() => {
    // Phase 1: Brush stroke draws (0ms -> 950ms)
    // Phase 2: Branding fades in (700ms -> 1150ms)
    // Phase 3: Hold branding (1150ms -> 1700ms)
    // Phase 4: Dissolve starts (1700ms)
    const dissolveTimer = setTimeout(() => {
      onDissolveStart();
    }, 1700);

    // Phase 5: Complete and unmount (2300ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(completeTimer);
    };
  }, [onDissolveStart, onComplete]);

  // Theme-specific colors
  const bgColor = theme === 'light' ? 'bg-[#FFF6E9]' : 'bg-[#090111]';
  const strokeColor = theme === 'light' ? '#F872EE' : '#8b5cf6';
  const strokeSecondaryColor = theme === 'light' ? '#F872EE25' : '#8b5cf625';
  const strokeTertiaryColor = theme === 'light' ? '#F872EE60' : '#8b5cf660';
  const textColor = theme === 'light' ? 'text-[#4A3F3A]' : 'text-white';

  // Beautiful hand-drawn tilde "~" wave paths
  const pathBase = "M 35,65 C 95,15 165,15 205,55 C 235,85 295,85 355,35";
  const pathUpper = "M 35,61 C 95,11 165,11 205,51 C 235,81 295,81 355,31";
  const pathLower = "M 35,69 C 95,19 165,19 205,59 C 235,89 295,89 355,39";
  const pathInner = "M 37,64 C 97,14 167,14 207,54 C 237,84 297,84 357,34";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.7, ease: 'easeInOut' }}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none ${bgColor}`}
    >
      {/* Animation wrapper that handles the bottom-to-top dissolve effect */}
      <motion.div
        initial={{ 
          clipPath: 'inset(0% 0% 0% 0%)',
          filter: 'blur(0px)',
          y: 0 
        }}
        animate={{ 
          clipPath: 'inset(0% 0% 100% 0%)',
          filter: 'blur(10px)',
          y: -30
        }}
        transition={{ 
          duration: 0.6, 
          delay: 1.7, 
          ease: 'easeInOut' 
        }}
        className="relative flex items-center justify-center w-full max-w-lg h-48"
      >
        {/* Layered brush stroke SVG - painting a premium tilde "~" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-full max-w-[340px] sm:max-w-[440px] h-[120px] overflow-visible"
            viewBox="0 0 400 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Broad soft watercolor base (feathered edge) */}
            <motion.path
              d={pathBase}
              stroke={strokeSecondaryColor}
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            />

            {/* 2. Main brush stroke core body */}
            <motion.path
              d={pathBase}
              stroke={strokeColor}
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.03, ease: 'easeOut' }}
            />

            {/* 3. Upper bristle paint filament */}
            <motion.path
              d={pathUpper}
              stroke={strokeTertiaryColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.82, delay: 0.02, ease: 'easeOut' }}
            />

            {/* 4. Lower bristle paint filament */}
            <motion.path
              d={pathLower}
              stroke={strokeTertiaryColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.78, delay: 0.05, ease: 'easeOut' }}
            />

            {/* 5. Central dry-bristle high density streak */}
            <motion.path
              d={pathInner}
              stroke={theme === 'light' ? '#FFFFFF80' : strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.75, delay: 0.08, ease: 'easeOut' }}
            />
          </svg>
        </div>

        {/* Portfolio Branding centered on the stroke */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.6, ease: 'easeOut' }}
          className="relative z-10 text-center select-none"
        >
          <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-widest ${textColor}`}>
            Melissa Costa
          </h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
