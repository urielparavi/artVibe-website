import Navigation from "@/components/Navigation";
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

const stats = [
  { number: "15+", label: "שנות ניסיון" },
  { number: "500+", label: "יצירות מקוריות" },
  { number: "200+", label: "לקוחות מרוצים" },
  { number: "50+", label: "תערוכות" }
];

const exhibitions = [
  {
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    title: "שממת יופי",
    year: "2024",
    location: "גלריה ברנדיס, ירושלים"
  },
  {
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80",
    title: "צבעי הארץ",
    year: "2023",
    location: "מוזיאון תל אביב לאמנות"
  },
  {
    image: "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=600&q=80",
    title: "נוף ישראלי",
    year: "2022",
    location: "גלריה ענבל, חיפה"
  },
  {
    image: "https://images.unsplash.com/photo-1578926288207-32356b4a30d5?w=600&q=80",
    title: "מבט פנימה",
    year: "2021",
    location: "בית האמנים, ירושלים"
  },
  {
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&q=80",
    title: "קווי נוף",
    year: "2020",
    location: "גלריה רוזנפלד, תל אביב"
  },
  {
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
    title: "אמנות בגוף ראשון",
    year: "2019",
    location: "המרכז לאמנות, ירושלים"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="אודות"
        description="דוד כהן — אמן ישראלי מירושלים עם 15+ שנות ניסיון. 500+ יצירות מקוריות, 50+ תערוכות. ביוגרפיה, פילוסופיית ציור וציר הזמן."
        url="https://davidcohen-art.co.il/about"
        image="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=1200&q=80"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
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

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-5xl font-light mb-2" style={{ color: 'var(--gold)' }}>{stat.number}</p>
                  <p className="text-minimal text-muted-foreground">{stat.label}</p>
                </div>
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
              <div>
                <img
                  src={aboutArtist}
                  alt="דוד כהן בסטודיו"
                  className="w-full h-[70vh] object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4">הסיפור שלי</h3>
                  <h4 className="text-4xl font-light text-architectural mb-8">
                    פילוסופיית הציור
                  </h4>
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
                      <span key={i} className="text-minimal px-4 py-2 border border-border text-muted-foreground">
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

      {/* Timeline */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="text-minimal text-muted-foreground mb-4">ציר הזמן</h3>
              <h4 className="text-4xl md:text-6xl font-light text-architectural">
                המסע שלי
              </h4>
            </div>
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="grid md:grid-cols-4 gap-8 py-10 border-t border-border">
                  <div>
                    <span className="text-3xl font-light" style={{ color: 'var(--gold)' }}>{item.year}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h5 className="text-xl font-medium mb-2">{item.title}</h5>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h3 className="text-minimal text-muted-foreground mb-4">תערוכות</h3>
              <h4 className="text-4xl md:text-6xl font-light text-architectural">
                תערוכות נבחרות
              </h4>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {exhibitions.map((ex, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={ex.image}
                      alt={ex.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h5 className="text-xl font-light mb-2">{ex.title}</h5>
                  <p className="text-minimal text-muted-foreground">{ex.year} — {ex.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
