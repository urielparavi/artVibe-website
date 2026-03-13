const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1 6L9 10.5L17 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <path d="M3 2h4l1.5 4-2.5 1.5c1 2 2.5 3.5 4.5 4.5L12 9.5l4 1.5v4C16 16 10 17 5 12S2 4 3 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5Z" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="13" cy="5" r="0.8" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <path d="M17 9A8 8 0 1 0 9.5 17v-5.7H7.5V9h2V7.2c0-2 1.2-3.1 3-3.1.86 0 1.75.15 1.75.15V6.2h-1c-.97 0-1.28.6-1.28 1.22V9h2.2l-.35 2.3H11.97V17A8 8 0 0 0 17 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-muted/20 relative overflow-hidden">

      {/* Top gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="mb-16">
            <p className="text-minimal text-muted-foreground mb-4">צור קשר</p>
            <div className="flex items-end gap-8">
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                בואו ניצור
                <br />
                <span style={{ color: 'var(--gold)' }}>משהו מיוחד</span>
              </h2>
              <div
                className="flex-1 h-px mb-4 hidden md:block"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">

            {/* Left — contact details */}
            <div>
              <div className="space-y-2">
                <a
                  href="mailto:david@artist.co.il"
                  className="group flex items-center gap-5 py-5 px-4 border-b border-border hover:border-[var(--gold)]/40 transition-all duration-500 hover:bg-muted/40"
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] text-muted-foreground transition-all duration-300 shrink-0"
                  >
                    <EmailIcon />
                  </span>
                  <div className="flex-1">
                    <p className="text-minimal text-muted-foreground mb-0.5">אימייל</p>
                    <span className="text-base group-hover:text-[var(--gold)] transition-colors duration-300">
                      david@artist.co.il
                    </span>
                  </div>
                  <span className="text-muted-foreground/0 group-hover:text-[var(--gold)] transition-all duration-300 translate-x-2 group-hover:translate-x-0">←</span>
                </a>

                <a
                  href="tel:054-1234567"
                  className="group flex items-center gap-5 py-5 px-4 border-b border-border hover:border-[var(--gold)]/40 transition-all duration-500 hover:bg-muted/40"
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] text-muted-foreground transition-all duration-300 shrink-0"
                  >
                    <PhoneIcon />
                  </span>
                  <div className="flex-1">
                    <p className="text-minimal text-muted-foreground mb-0.5">טלפון</p>
                    <span className="text-base group-hover:text-[var(--gold)] transition-colors duration-300">
                      054-1234567
                    </span>
                  </div>
                  <span className="text-muted-foreground/0 group-hover:text-[var(--gold)] transition-all duration-300 translate-x-2 group-hover:translate-x-0">←</span>
                </a>

                <div className="group flex items-center gap-5 py-5 px-4 border-b border-border hover:border-[var(--gold)]/40 transition-all duration-500 hover:bg-muted/40">
                  <span
                    className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-[var(--gold)] group-hover:text-[var(--gold)] text-muted-foreground transition-all duration-300 shrink-0"
                  >
                    <LocationIcon />
                  </span>
                  <div className="flex-1">
                    <p className="text-minimal text-muted-foreground mb-0.5">סטודיו</p>
                    <address className="text-base not-italic">רחוב בצלאל 15, ירושלים</address>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-minimal text-muted-foreground mb-5">עקבו אחריי</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="group flex items-center gap-2.5 border border-border px-4 py-2.5 text-sm text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-2.5 border border-border px-4 py-2.5 text-sm text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                  >
                    <FacebookIcon />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right — description + CTA */}
            <div className="flex flex-col justify-between gap-12">
              {/* Quote card */}
              <div
                className="glass-card p-8 border-r-4"
                style={{ borderRightColor: 'var(--gold)' }}
              >
                {/* Decorative quote mark */}
                <div
                  className="text-6xl font-serif leading-none mb-4 select-none"
                  style={{ color: 'var(--gold)', opacity: 0.3 }}
                  aria-hidden="true"
                >
                  ❝
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  כל יצירה מתחילה בשיחה. ספרו לי על הרעיון שלכם — פורטרט לאהוב,
                  ציור לבית החדש, או מתנה מיוחדת לאירוע חשוב.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  אשמח להגשים את החזון שלכם.
                </p>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground text-minimal hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow group"
                >
                  לדף יצירת קשר מלא
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom gold gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
};

export default Contact;
