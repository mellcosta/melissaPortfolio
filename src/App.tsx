/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Events } from './components/Events';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { IntroAnimation } from './components/IntroAnimation';

function MainApp() {
  const { theme } = useTheme();
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [introState, setIntroState] = useState<'loading' | 'dissolving' | 'done'>('loading');

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ease-in-out font-sans ${
        theme === 'light' ? 'text-[#4A3F3A]' : 'text-[#F4F4F5]'
      }`}
    >
      {/* Premium initial load intro animation */}
      {isIntroActive && (
        <IntroAnimation
          onDissolveStart={() => setIntroState('dissolving')}
          onComplete={() => {
            setIsIntroActive(false);
            setIntroState('done');
          }}
        />
      )}

      {/* Visual background layers */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Section anchor layout */}
      <main className="relative z-10">
        <Hero introState={introState} />
        <About />
        <Services />
        <Events />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
