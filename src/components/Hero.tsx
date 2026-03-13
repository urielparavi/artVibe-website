const heroImage = "/images/hero.webp";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay — deeper, richer */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Decorative vertical gold line — right side */}
      <div className="absolute right-12 top-1/4 bottom-1/4 hidden lg:block">
        <div
          className="w-px bg-gradient-to-b from-transparent via-[#D4A574]/60 to-transparent animate-line-reveal"
          style={{ height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-minimal text-white/70 mb-6 reveal tracking-[0.25em]">
          סטודיו לציור · ירושלים
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8 reveal">
          אמנות
          <br />
          <span className="text-gradient-gold">מהלב</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-12 reveal-delayed">
          ציורים מקוריים שנוצרים באהבה — שמן, אקוורל ופורטרטים בהזמנה אישית
        </p>
        <div className="flex items-center justify-center gap-6 reveal-delayed">
          <a
            href="/work"
            className="text-minimal text-white border border-white/60 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500 hover:border-white"
          >
            לגלריה שלי
          </a>
          <a
            href="/contact"
            className="text-minimal px-8 py-3 transition-all duration-500 btn-gold-glow shimmer"
            style={{ backgroundColor: 'var(--gold)', color: '#000' }}
          >
            צור קשר
          </a>
        </div>
      </div>

      {/* Scroll Indicator — with bounce animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-white/10" />
        <div className="animate-bounce-subtle flex flex-col items-center gap-1">
          <span className="text-minimal text-white/60">גלול</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-white/40">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
