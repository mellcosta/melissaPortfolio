/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

const StarsCanvas: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create stars
    const stars: { x: number; y: number; r: number; opacity: number; speed: number }[] = [];
    const starCount = Math.floor((width * height) / 7000); // responsive density

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.4,
        opacity: Math.random(),
        speed: (0.003 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.opacity += star.speed;
        if (star.opacity > 0.95 || star.opacity < 0.05) {
          star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(star.opacity, 1))})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export const Background: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#FFF6E9] transition-colors duration-300 ease-in-out"
          >
            {/* Floating Hand-Drawn Doodles */}
            <div className="absolute inset-0 select-none">
              {/* Leaf Doodle 1 */}
              <motion.svg
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[15%] left-[12%] w-10 h-10 text-[#F872EE]/40 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C11.5 7.5 7.5 11.5 2 12c5.5.5 9.5 4.5 10 10 .5-5.5 4.5-9.5 10-10-5.5-.5-9.5-4.5-10-10z" />
              </motion.svg>

              {/* Twinkling Star Doodle */}
              <motion.svg
                animate={{
                  scale: [1, 1.2, 0.9, 1],
                  rotate: [0, 45, 90, 135, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute top-[35%] right-[15%] w-8 h-8 text-[#FF80DF]/50 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>

              {/* Squiggle Doodle */}
              <motion.svg
                animate={{
                  y: [0, 15, -15, 0],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-[25%] left-[18%] w-16 h-8 text-[#D8C8E8]/40 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 48 16"
              >
                <path d="M2 8 Q 10 2, 18 8 T 34 8 T 46 8" />
              </motion.svg>

              {/* Tiny Sparkle 2 */}
              <motion.svg
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-[60%] right-[8%] w-6 h-6 text-[#F872EE]/40 fill-none stroke-current stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
              </motion.svg>

              {/* Leaf Doodle 2 */}
              <motion.svg
                animate={{
                  y: [0, 20, 0],
                  rotate: [15, -5, 15],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-[10%] right-[22%] w-12 h-12 text-[#FF80DF]/30 fill-none stroke-current stroke-[1.5]"
                viewBox="0 0 24 24"
              >
                <path d="M2 22C2 22 8 20 12 16C16 12 18 6 18 6C18 6 12 8 8 12C4 16 2 22 2 22Z" />
                <path d="M8 12L12 16" />
              </motion.svg>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2d013d_0%,_#0e011c_50%,_#000000_100%)] transition-colors duration-300 ease-in-out"
          >
            {/* Elegant glowing nebula-like orbs of purple, magenta and deep pink */}
            <div 
              className="absolute top-[10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-pink-500/10 filter blur-[150px] animate-pulse" 
              style={{ animationDuration: '8s' }} 
            />
            <div 
              className="absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8b5cf6]/10 filter blur-[160px] animate-pulse" 
              style={{ animationDuration: '12s' }} 
            />
            <div 
              className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-pink-600/5 filter blur-[120px]" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
