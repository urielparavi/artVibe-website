const Services = () => {
  const services = [
    {
      number: "01",
      title: "ציורי שמן",
      description: "ציורים מקוריים בצבעי שמן על קנבס — נוף, פורטרטים ויצירות אבסטרקטיות בטכניקות קלאסיות"
    },
    {
      number: "02",
      title: "פורטרטים אישיים",
      description: "ציור פורטרט מותאם אישית מתמונה או בישיבה חיה — מתנה מיוחדת שנשארת לנצח"
    },
    {
      number: "03",
      title: "ציורי אקוורל",
      description: "יצירות עדינות ואוורירייות בצבעי מים — נוף ישראלי, פרחים וסצנות מהחיים"
    },
    {
      number: "04",
      title: "שיעורי ציור",
      description: "שיעורים אישיים וקבוצתיים לכל הרמות — מתחילים ועד מתקדמים, בסטודיו בירושלים"
    }
  ];

  return (
    <section id="services" className="py-32 bg-muted/20 relative overflow-hidden">

      {/* Top gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-20 flex items-end gap-6">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">שירותים</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                מה אני מציע
              </h3>
            </div>
            {/* Decorative gold line */}
            <div
              className="hidden md:block h-px flex-1 mb-4 origin-right animate-line-reveal"
              style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
            />
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-t border-border py-10 transition-all duration-500 hover:border-[var(--gold)]"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-minimal font-medium transition-all duration-500 group-hover:scale-110 group-hover:text-[var(--gold-light)] inline-block"
                    style={{ color: 'var(--gold)' }}
                  >
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-[var(--gold)] transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex items-center gap-8">
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground text-minimal hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow group"
            >
              לכל השירותים
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            </a>
            <div
              className="flex-1 h-px hidden md:block"
              style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
              aria-hidden="true"
            />
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

export default Services;
