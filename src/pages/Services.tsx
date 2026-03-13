import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const services = [
  {
    number: "01",
    title: "ציורי שמן",
    price: "החל מ-₪1,500",
    description: "ציורים מקוריים בצבעי שמן על קנבס איכותי — כל מידה, כל נושא, בטכניקות קלאסיות ומודרניות",
    features: ["שמן על קנבס", "מידות לפי בקשה", "חתימת האמן", "תעודת אותנטיות", "ייעוץ עיצובי"]
  },
  {
    number: "02",
    title: "פורטרטים אישיים",
    price: "החל מ-₪2,500",
    popular: true,
    description: "ציור פורטרט מותאם אישית מתמונה או בישיבה חיה — מתנה שנשארת לנצח למשפחה, לאהובים ולאירועים מיוחדים",
    features: ["בהזמנה אישית", "מתמונה / ישיבה חיה", "תהליך ייעוץ מלא", "2 סבבי תיקונים", "אריזת מתנה"]
  },
  {
    number: "03",
    title: "ציורי אקוורל",
    price: "החל מ-₪1,200",
    description: "יצירות עדינות ואוורירייות בצבעי מים על נייר ארש — נוף ישראלי, פרחים, דיוקנאות וסצנות מהחיים",
    features: ["אקוורל על נייר ארש", "מסגור אופציונלי", "חתימת האמן", "זמין להדפסה", "מחיר נגיש"]
  },
  {
    number: "04",
    title: "נוף ישראלי",
    price: "החל מ-₪1,800",
    description: "ציורי נוף של ירושלים, תל אביב, הגליל, הנגב — כל מקום שאתם אוהבים, לנצח על הקיר שלכם",
    features: ["נוף מרהיב", "גדלים גדולים", "אפשרות להזמנה", "מסגור זמין", "משלוח בארץ"]
  },
  {
    number: "05",
    title: "אמנות אבסטרקטית",
    price: "החל מ-₪1,400",
    description: "יצירות אבסטרקטיות נועזות שמוסיפות אנרגיה ואופי לכל חלל — לבית, למשרד ולגלריה",
    features: ["קנבס גדול", "צבעים לפי בקשה", "יצירה ייחודית", "מתאים לעיצוב פנים", "הגנת UV"]
  },
  {
    number: "06",
    title: "פרויקטים מיוחדים",
    price: "הצעת מחיר אישית",
    description: "ציורים לאירועים, מוסדות, עסקים וחללים ציבוריים — בואו נדבר על הרעיון שלכם",
    features: ["גדלים ללא הגבלה", "ייעוץ מקדים חינם", "ציור מותאם", "לוח זמנים גמיש", "פרויקט מנוהל"]
  }
];

const process = [
  { step: "1", title: "שיחת ייעוץ", description: "נדבר על הרעיון, הגודל, הצבעים ותקציב" },
  { step: "2", title: "הצעת מחיר", description: "אשלח הצעה מפורטת עם לוח זמנים" },
  { step: "3", title: "יצירה", description: "אצייר את היצירה ואעדכן אתכם בתהליך" },
  { step: "4", title: "מסירה", description: "היצירה מגיעה אליכם מוכנה לתלייה" }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="שירותים"
        description="שירותי ציור בהזמנה — ציורי שמן, פורטרטים, אקוורל ונוף ישראלי. מחירים החל מ-₪1,200. שיעורי ציור בירושלים."
        url="https://artvibe-website.netlify.app/services"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-services-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">שירותים</h1>
              <h2 className="text-5xl md:text-7xl font-light text-architectural mb-8">
                מה אני מציע
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                כל שירות מגיע עם ייעוץ אישי, מלאכת יד מדוקדקת וחומרים איכותיים — כי כל לקוח ראוי לתוצאה מושלמת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex items-end gap-6">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">השירותים שלי</h2>
                <h3 className="text-4xl font-light text-architectural">
                  בחרו את השירות המתאים
                </h3>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group border border-border p-10 transition-all duration-500 hover:border-[var(--gold)] hover:bg-[var(--gold)]/3"
                >
                  <div className="flex items-start gap-6">
                    <span
                      className="text-minimal font-medium transition-all duration-500 group-hover:text-[var(--gold-light)]"
                      style={{ color: 'var(--gold)' }}
                    >
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-light text-architectural group-hover:text-[var(--gold)] transition-colors duration-500">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <span
                            className="text-minimal px-3 py-1 shrink-0 border"
                            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                          >
                            פופולרי
                          </span>
                        )}
                      </div>
                      <p className="text-minimal mb-4 font-medium" style={{ color: 'var(--gold)' }}>
                        {service.price}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="text-minimal text-muted-foreground flex items-center gap-2">
                            <span style={{ color: 'var(--gold)' }}>✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process — with connecting line */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex items-end gap-6">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">תהליך העבודה</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural">
                  איך זה עובד
                </h3>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="grid md:grid-cols-4 gap-0 relative">
              {/* Connecting line */}
              <div
                className="hidden md:block absolute top-6 right-[12.5%] left-[12.5%] h-px"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light), transparent)' }}
              />
              {process.map((p, index) => (
                <div key={index} className="relative px-6 pb-8">
                  {/* Circle marker */}
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-6 bg-background relative z-10"
                    style={{ borderColor: 'var(--gold)' }}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>{p.step}</span>
                  </div>
                  <h4 className="text-xl font-medium mb-3">{p.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark section with gold accent */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-services-cta.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Subtle gold gradient decoration */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, var(--gold) 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              מוכנים להזמין?
            </h2>
            <p className="text-xl opacity-70 mb-12">
              שיחת ייעוץ ראשונה — חינם וללא התחייבות
            </p>
            <a
              href="/contact"
              className="inline-block text-minimal bg-background text-foreground px-10 py-4 transition-all duration-500 btn-gold-glow hover:opacity-90 shimmer"
            >
              צרו קשר עכשיו
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
