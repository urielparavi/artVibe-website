import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "ראשי" },
  { href: "/work", label: "גלריה" },
  { href: "/services", label: "שירותים" },
  { href: "/about", label: "אודות" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-background/95 border-border shadow-elegant"
          : "bg-background/80 border-border"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 group hover:opacity-90 transition-opacity duration-300"
        >
          {/* ArtVibe logo mark — nested diamonds */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon
              points="14,2 26,14 14,26 2,14"
              stroke="var(--gold-light)"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="14,7 21,14 14,21 7,14"
              fill="var(--gold)"
              opacity="0.85"
            />
            <circle cx="14" cy="14" r="2" fill="var(--gold-light)" />
          </svg>
          {/* Brand name */}
          <span className="text-lg font-bold tracking-wide">
            <span style={{ color: 'var(--gold)' }}>Art</span>
            <span className="text-foreground group-hover:text-[var(--gold)] transition-colors duration-300">Vibe</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`relative text-minimal transition-colors duration-300 group ${
                isActive(href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {/* Active indicator — gold diamond centered below */}
              <span
                className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rotate-45 transition-all duration-300 ${
                  isActive(href)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-100"
                }`}
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? '✕' : '☰'}
          </Button>
        </div>
      </div>

      {/* Mobile Menu — animated */}
      <div
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-400 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`block text-minimal transition-colors duration-300 ${
                isActive(href)
                  ? "text-[var(--gold)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
