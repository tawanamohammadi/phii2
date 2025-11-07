import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from './translations.ts';

type Language = 'en' | 'fa';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  // FIX: Changed return type to `any` because translations can return arrays (e.g., for loading messages) as well as strings.
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  // FIX: Changed return type to `any` to match the interface and handle non-string translation values.
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is missing
        let fallbackResult: any = translations['en'];
         for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
            if(fallbackResult === undefined) return key;
         }
         return fallbackResult || key;
      }
    }
    return result || key;
  };
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};