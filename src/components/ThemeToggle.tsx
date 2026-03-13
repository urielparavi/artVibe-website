import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-[var(--gold)] transition-colors duration-300"
    >
      {/* Half-circle: filled half = current state (dark=right filled, light=left filled) */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
        {isDark
          ? <path d="M8 1.5a6.5 6.5 0 0 1 0 13V1.5z" fill="currentColor" />
          : <path d="M8 1.5a6.5 6.5 0 0 0 0 13V1.5z" fill="currentColor" />
        }
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}