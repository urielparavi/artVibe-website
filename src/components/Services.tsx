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
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">שירותים</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              מה אני מציע
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <span className="text-minimal font-medium" style={{ color: 'var(--gold)' }}>
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
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

          <div className="mt-16">
            <a
              href="/services"
              className="text-minimal border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
            >
              לכל השירותים ←
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
