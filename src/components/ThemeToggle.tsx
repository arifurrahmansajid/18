import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center
        rounded-full border border-border/80 bg-background
        text-muted-foreground transition-all duration-300
        hover:border-primary hover:text-primary
        overflow-hidden
      "
    >
      {/* Sun icon (shows in dark mode → click to go light) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
      </span>

      {/* Moon icon (shows in light mode → click to go dark) */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      >
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
      </span>
    </button>
  );
}
