import { useState, useEffect } from "react";
import { type Language, LANGUAGES, translations, type LanguageMeta } from "@/lib/translations";

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("remech-language") as Language | null;
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language?.split("-")[0] as Language;
  if (browserLang && translations[browserLang]) return browserLang;
  return "en";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(detectBrowserLanguage);

  const currentMeta: LanguageMeta =
    LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    localStorage.setItem("remech-language", language);
    // Update dir attribute for RTL support
    document.documentElement.dir = currentMeta.dir;
    document.documentElement.lang = language;
  }, [language, currentMeta.dir]);

  const t = translations[language];

  return { language, setLanguage, t, currentMeta, languages: LANGUAGES };
}
