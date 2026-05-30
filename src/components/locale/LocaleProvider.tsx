"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTranslation, languageNames, supportedLocales, LocaleCode } from "@/lib/i18n";

type LocaleContextType = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  t: <T = string>(key: string) => T;
  localeLabel: string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("locale") as LocaleCode | null;
    if (storedLocale && supportedLocales.includes(storedLocale)) {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (newLocale: LocaleCode) => {
    if (!supportedLocales.includes(newLocale)) return;
    setLocaleState(newLocale);
    window.localStorage.setItem("locale", newLocale);
  };

  const t = useMemo(() => {
    return <T = string>(key: string): T => getTranslation(locale, key) as T;
  }, [locale]);

  const localeLabel = languageNames[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, localeLabel }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
