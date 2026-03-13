import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import aboutArtist from "@/assets/about-artist.webp";

const timeline = [
  { year: "1985", title: "נולד בירושלים", description: "גדל בשכונת רחביה, מוקסם מציורי הטבע ומחלונות הוויטראז' של העיר" },
  { year: "2003", title: "לימודי אמנות", description: "סיים בהצטיינות את המחלקה לאמנות בבצלאל, ירושלים" },
  { year: "2007", title: "תערוכה ראשונה", description: "תערוכת יחיד בגלריה המרכזית בתל אביב — 30 יצירות, כולן נמכרו" },
  { year: "2010", title: "הסטודיו נפתח", description: "פתיחת סטודיו אישי ברחוב בצלאל בירושלים, תחנה גם לשיעורים" },
  { year: "2018", title: "פרס אמנות ישראלי", description: "זכה בפרס ע\"ש שמואל ין-אדם לציור ריאליסטי" },
  { year: "2024", title: "500+ יצירות", description: "חצה את רף 500 היצירות, עם לקוחות בכל הארץ ומחוצה לה" }
];

// Slightly different organic brushstroke paths — each one unique
const brushStrokes = [
  "M2,5 C18,2 45,8 78,4 C90,3 100,5 118,4",
  "M2,4 C15,7 40,2 70,6 C88,8 105,3 118,5",
  "M2,6 C22,3 50,8 80,4 C95,2 108,6 118,4",
  "M2,4 C20,7 48,2 75,6 C92,4 107,7 118,4",
];

const pillarsData = [
  { index: "01", concept: "אור", description: "המשחק בין אור לצל הוא השפה הראשית של הציור" },
  { index: "02", concept: "זמן", description: "כל יצירה היא רגע שנעצר — מסוים ונצחי בו זמנית" },
  { index: "03", concept: "חומר", description: "שמן, אקוורל, פחם — לכל חומר קול וסיפור משלו" },
  { index: "04", concept: "נשמה", description: "מה שנראה על הקנבס הוא תמיד פחות ממה שמורגש" },
];

const exhibitions = [
  {
    image: "/images/exhibition-desert-beauty.webp",
    title: "שממת יופי",
    year: "2024",
    location: "גלריה ברנדיס, ירושלים"
  },
  {
    image: "/images/exhibition-colors-of-land.webp",
    title: "צבעי הארץ",
    year: "2023",
    location: "מוזיאון תל אביב לאמנות"
  },
  {
    image: "/images/exhibition-israeli-landscape.webp",
    title: "נוף ישראלי",
    year: "2022",
    location: "גלריה ענבל, חיפה"
  },
  {
    image: "/images/exhibition-inner-gaze.webp",
    title: "מבט פנימה",
    year: "2021",
    location: "בית האמנים, ירושלים",
    objectPosition: "center 30%"
  },
  {
    image: "/images/exhibition-landscape-lines.webp",
    title: "קווי נוף",
    year: "2020",
    location: "גלריה רוזנפלד, תל אביב"
  },
  {
    image: "/images/exhibition-first-person-art.webp",
    title: "אמנות בגוף ראשון",
    year: "2019",
    location: "המרכז לאמנות, ירושלים"
  }
];

const useFadeIn = (delay: number = 0) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible, delay };
};

const PillarItem = ({ index, concept, description, delay, strokePath }: {
  index: string; concept: string; description: string; delay: number; strokePath: string;
}) => {
  const { ref, visible } = useFadeIn(delay);
  return (
    <div
      ref={ref}
      className="border-r border-border pr-8 last:border-r-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-minimal text-muted-foreground/50 block mb-4">{index}</span>
      <h3
        className="text-5xl font-light text-architectural"
        style={{ color: 'var(--gold)' }}
      >
        {concept}
      </h3>
      {/* Brushstroke that draws itself after the fade-in */}
      <svg width="90" height="12" viewBox="0 0 120 10" fill="none" className="mb-4 mt-1" aria-hidden="true">
        <path
          d={strokePath}
          stroke="var(--gold)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{
            strokeDasharray: 130,
            strokeDashoffset: visible ? 0 : 130,
            transition: `stroke-dashoffset 0.9s ease ${delay + 280}ms`,
            opacity: 0.65,
          }}
        />
      </svg>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="אודות"
        description="דוד כהן — אמן ישראלי מירושלים עם 15+ שנות ניסיון. 500+ יצירות מקוריות, 50+ תערוכות. ביוגרפיה, פילוסופיית ציור וציר הזמן."
        url="https://artvibe-website.netlify.app/about"
        image="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=1200&q=80"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-about-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-end">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">אודות</h1>
                <h2 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                  דוד כהן
                </h2>
                <p className="text-2xl text-muted-foreground font-light">
                  אמן ישראלי, ירושלים
                </p>
              </div>
              <div>
                <blockquote className="border-r-4 pr-8" style={{ borderColor: 'var(--gold)' }}>
                  <p className="text-2xl font-light text-architectural leading-relaxed">
                    "כל ציור הוא מסע — מהקנבס הריק ועד לרגע שבו היצירה מתחילה לחיות."
                  </p>
                  <cite className="block mt-4 text-minimal text-muted-foreground">— דוד כהן</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {pillarsData.map((p, i) => (
                <PillarItem key={i} index={p.index} concept={p.concept} description={p.description} delay={i * 120} strokePath={brushStrokes[i]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="relative overflow-hidden group">
                <img
                  src={aboutArtist}
                  alt="דוד כהן בסטודיו"
                  className="w-full h-[70vh] object-cover object-[center_20%] md:object-[center_55%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-8">
                <div className="flex items-end gap-6">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-4">הסיפור שלי</h3>
                    <h4 className="text-4xl font-light text-architectural">
                      פילוסופיית הציור
                    </h4>
                  </div>
                  <div
                    className="hidden md:block h-px flex-1 mb-1"
                    style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  גדלתי בירושלים, עיר שכל פינה בה היא ציור בפני עצמה. מגיל צעיר הייתי מוקסם
                  מהאור שנשפך על אבני החצר הישנה, מהצבעים שמשתנים עם השעה, מהצורות שנוצרות
                  בין צל לאור.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  לאחר לימודי בבצלאל, פתחתי סטודיו ברחוב שבו גדלתי — רחוב בצלאל. שם אני
                  יוצר, מלמד, ומקבל לקוחות שרוצים יצירה שתדבר אל ליבם.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  אני מאמין שאמנות היא שפה אוניברסלית. כל ציור שאני מסגיר ללקוח הוא חלק
                  ממני — הוא ממשיך לחיות בבית שלהם, מספר סיפור, ומרגש כל פעם מחדש.
                </p>
                <div className="space-y-3">
                  <h4 className="text-minimal text-muted-foreground">התמחויות</h4>
                  <div className="flex flex-wrap gap-3">
                    {["ציורי שמן קלאסיים", "אקוורל", "פורטרטים", "נוף ישראלי", "טבע דומם", "ציור אבסטרקטי", "ציור מתמונה", "שחזור יצירות"].map((s, i) => (
                      <span
                        key={i}
                        className="text-minimal px-4 py-2 border border-border text-muted-foreground transition-all duration-300 hover:border-[var(--gold)] hover:text-foreground hover:bg-[var(--gold)]/5 cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — with gold connecting line */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex items-end gap-6">
              <div>
                <h3 className="text-minimal text-muted-foreground mb-4">ציר הזמן</h3>
                <h4 className="text-4xl md:text-6xl font-light text-architectural">
                  המסע שלי
                </h4>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="relative">
              {/* Vertical gold line */}
              <div
                className="absolute right-0 md:right-[calc(75%-1px)] top-0 bottom-0 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--gold-light), transparent)' }}
              />
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="group grid md:grid-cols-4 gap-8 py-10 border-t border-border transition-all duration-300 hover:border-[var(--gold)]/40"
                  >
                    <div className="flex items-start gap-4">
                      {/* Circle marker on timeline */}
                      <div
                        className="hidden md:flex w-4 h-4 rounded-full border-2 shrink-0 mt-1 transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)] bg-background"
                        style={{ borderColor: 'var(--gold)' }}
                      />
                      <span
                        className="text-3xl font-light transition-colors duration-300"
                        style={{ color: 'var(--gold)' }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h5 className="text-xl font-medium mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex items-end gap-6">
              <div>
                <h3 className="text-minimal text-muted-foreground mb-4">תערוכות</h3>
                <h4 className="text-4xl md:text-6xl font-light text-architectural">
                  תערוכות נבחרות
                </h4>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {exhibitions.map((ex, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={ex.image}
                      alt={ex.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      style={ex.objectPosition ? { objectPosition: ex.objectPosition } : undefined}
                    />
                    {/* Overlay with title reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 left-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white font-light text-sm">{ex.location}</p>
                    </div>
                  </div>
                  <h5 className="text-xl font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {ex.title}
                  </h5>
                  <p className="text-minimal text-muted-foreground">{ex.year} — {ex.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xl text-muted-foreground font-light">
              רוצים יצירה מקורית שתספר את הסיפור שלכם?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-foreground text-minimal hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow group shrink-0"
            >
              צרו קשר
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
