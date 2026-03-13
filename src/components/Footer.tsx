const navLinks = [
  { href: "/", label: "ראשי" },
  { href: "/work", label: "גלריה" },
  { href: "/services", label: "שירותים" },
  { href: "/about", label: "אודות" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Gold top divider */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="14,2 26,14 14,26 2,14" stroke="var(--gold-light)" strokeWidth="1.5" fill="none" />
                  <polygon points="14,7 21,14 14,21 7,14" fill="var(--gold)" opacity="0.85" />
                  <circle cx="14" cy="14" r="2" fill="var(--gold-light)" />
                </svg>
                <span className="text-xl font-bold tracking-wide">
                  <span style={{ color: 'var(--gold)' }}>Art</span>
                  <span className="text-background">Vibe</span>
                </span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed mb-6">
                ציורים מקוריים שנוצרים באהבה —
                <br />
                שמן, אקוורל ופורטרטים בהזמנה
              </p>
              {/* Social pill buttons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border text-minimal transition-all duration-300 hover:text-[var(--gold)]"
                  style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="13" cy="5" r="0.8" fill="currentColor"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border text-minimal transition-all duration-300 hover:text-[var(--gold)]"
                  style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <path d="M17 9A8 8 0 1 0 9.5 17v-5.7H7.5V9h2V7.2c0-2 1.2-3.1 3-3.1.86 0 1.75.15 1.75.15V6.2h-1c-.97 0-1.28.6-1.28 1.22V9h2.2l-.35 2.3H11.97V17A8 8 0 0 0 17 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="mb-6">
                <h3 className="text-minimal mb-2" style={{ color: 'var(--gold)', opacity: 0.8 }}>ניווט</h3>
                <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--gold))' }} />
              </div>
              <nav className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-sm opacity-60 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-300"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <div className="mb-6">
                <h3 className="text-minimal mb-2" style={{ color: 'var(--gold)', opacity: 0.8 }}>יצירת קשר</h3>
                <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, var(--gold))' }} />
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:david@artist.co.il"
                  className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-300"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-70">
                    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  david@artist.co.il
                </a>
                <a
                  href="tel:054-1234567"
                  className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-300"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-70">
                    <path d="M3 2h3l1.5 3.5-1.75 1.25C6.75 9.25 7.75 10.25 9.25 10.75L10.5 9l3.5 1.5V13.5A1 1 0 0 1 13 14.5C6.1 14.5 1.5 9.9 1.5 3a1 1 0 0 1 1-1H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  054-1234567
                </a>
                <p className="flex items-center gap-2 text-sm opacity-50">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-70">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  רחוב בצלאל 15, ירושלים
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 mt-6 px-6 py-3 border text-minimal transition-all duration-300 hover:text-[var(--gold)] animate-pulse-gold"
                style={{ borderColor: 'hsl(var(--background) / 0.2)', color: 'hsl(var(--background) / 0.7)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'hsl(var(--background) / 0.2)')}
              >
                שלחו הודעה
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-minimal opacity-30">
              © {currentYear} ArtVibe — כל הזכויות שמורות
            </p>
            <p className="text-minimal opacity-20 font-light italic">
              "כל ציור הוא רגע שנעצר לנצח"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
