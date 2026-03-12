import heroImage from "@/assets/hero-architecture.webp";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-minimal text-white/70 mb-6 reveal">
          דוד כהן — אמן
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8 reveal">
          אמנות
          <br />
          <span style={{ color: 'var(--gold)' }}>מהלב</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-12 reveal-delayed">
          ציורים מקוריים שנוצרים באהבה — שמן, אקוורל ופורטרטים בהזמנה אישית
        </p>
        <div className="flex items-center justify-center gap-6 reveal-delayed">
          <a
            href="/work"
            className="text-minimal text-white border border-white/60 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500"
          >
            לגלריה שלי
          </a>
          <a
            href="/contact"
            className="text-minimal px-8 py-3 transition-all duration-500"
            style={{ backgroundColor: 'var(--gold)', color: '#000' }}
          >
            צור קשר
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-white/40" />
        <span className="text-minimal text-white/60">גלול</span>
      </div>
    </section>
  );
};

export default Hero;
