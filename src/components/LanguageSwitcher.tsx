import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { type Language, LANGUAGES } from "@/lib/translations";

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" id="language-switcher">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-auto sm:h-11 items-center gap-1.5 rounded-full border border-border/80 bg-background px-2 sm:px-3 text-muted-foreground transition hover:border-primary hover:text-primary"
        aria-label="Select language"
        title="Select language"
      >
        <Globe className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={1.8} />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline text-xs font-semibold max-w-[56px] truncate">{current.nativeName}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 z-[200] w-52 rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          style={{ maxHeight: "420px", overflowY: "auto" }}
        >
          <div className="p-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  lang.code === language
                    ? "bg-primary/15 text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold leading-tight truncate">{lang.nativeName}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{lang.name}</span>
                </div>
                {lang.code === language && (
                  <span className="ml-auto text-primary text-xs font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
