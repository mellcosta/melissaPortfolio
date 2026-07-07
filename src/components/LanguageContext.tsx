/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationSchema } from '../types';
import { translations } from '../translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    // 1. Check local storage
    const storedLang = localStorage.getItem('portfolio_lang') as Language;
    if (storedLang && ['pt', 'en', 'es', 'ru'].includes(storedLang)) {
      setLanguageState(storedLang);
      return;
    }

    // 2. Try to match browser language
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (['pt', 'en', 'es', 'ru'].includes(browserLang)) {
      setLanguageState(browserLang as Language);
    } else {
      setLanguageState('pt'); // Portuguese as default
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
