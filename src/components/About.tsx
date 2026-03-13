const mediums = [
  { name: "שמן", tagline: "עשיר ועמוק", color: "#7C4F2A" },
  { name: "אקוורל", tagline: "קל ואווירי", color: "#6B9EBC" },
  { name: "פורטרט", tagline: "נשמה בצבע", color: "#D4A574" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Subtle canvas texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/background-images/bg-services-hero.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.07] dark:opacity-[0.05]"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">אודות</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                פילוסופיית הציור
              </h3>

              <div className="space-y-8 relative">
                {/* Decorative quote mark */}
                <span
                  className="absolute -top-4 -right-2 text-9xl font-serif leading-none pointer-events-none select-none opacity-[0.05]"
                  style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-lg text-muted-foreground leading-relaxed relative">
                  אני מאמין שכל יצירת אמנות היא שיחה — בין האמן לצופה, בין הרגש לצורה.
                  כבר למעלה מ-15 שנה אני יוצר ציורים שמדברים אל הנשמה, עם ידיים שמכירות
                  כל מכחול ועיניים שרואות את היופי בפרטים הקטנים.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  הסטודיו שלי בירושלים הוא מקום של יצירה, השראה ולמידה. עד היום יצרתי
                  מעל 500 יצירות, עבדתי עם 200+ לקוחות מרוצים, והצגתי בגלריות ברחבי הארץ.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">הגישה שלי</h4>
                <div className="space-y-4">
                  {[
                    { title: "הקשבה", desc: "כל יצירה מתחילה בהבנה מעמיקה של הרצון והחזון של הלקוח" },
                    { title: "מלאכת יד", desc: "כל פרט מצויר בקפידה עם חומרים איכותיים שנבחרו במיוחד" },
                    { title: "רגש", desc: "מעבר לטכניקה — כל ציור נושא עמו סיפור ורגש אמיתי" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group glass-card p-5 border-r-2 pr-6 transition-all duration-500 hover:shadow-elegant"
                      style={{ borderRightColor: 'var(--gold)' }}
                    >
                      <h5 className="text-lg font-medium mb-1 transition-colors duration-300 group-hover:text-[var(--gold)]">
                        {item.title}
                      </h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  {mediums.map((m) => (
                    <div key={m.name} className="pt-3 border-t-2" style={{ borderColor: m.color }}>
                      <p className="text-lg font-light mb-1" style={{ color: m.color }}>{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
