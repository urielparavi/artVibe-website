import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";

const artworks = [
  {
    image: project1,
    title: "שקיעה על הכינרת",
    technique: "שמן על קנבס",
    size: "80×60 ס\"מ",
    year: "2024",
    category: "נוף",
    available: true,
    description: "נוף מרהיב של שקיעת שמש על אגם הכינרת — שכבות זהב וכתום משתקפות על פני המים השקטים"
  },
  {
    image: project2,
    title: "פורטרט משפחתי",
    technique: "שמן על קנבס",
    size: "100×80 ס\"מ",
    year: "2024",
    category: "פורטרט",
    available: false,
    description: "פורטרט אינטימי של משפחה צעירה, לכוד ברגע של חסד ואהבה אמיתית",
    objectPosition: "center 20%"
  },
  {
    image: project3,
    title: "פרחי הגליל",
    technique: "אקוורל על נייר",
    size: "50×40 ס\"מ",
    year: "2023",
    category: "טבע דומם",
    available: true,
    description: "פרחי בר של הגליל בצבעי מים עדינים — כלנית, רקפת ואירוס שניצתו לאחר הגשם"
  },
  {
    image: "/images/tel-aviv-streets.webp",
    title: "רחובות תל אביב",
    technique: "שמן על קנבס",
    size: "90×70 ס\"מ",
    year: "2023",
    category: "נוף עירוני",
    available: true,
    description: "סצנת רחוב תל אביבית חיה — קפה על המדרכה, עצי פיקוס ואנרגיה ים תיכונית"
  },
  {
    image: "/images/negev-landscape.webp",
    title: "נוף הנגב",
    technique: "אקוורל על נייר",
    size: "70×50 ס\"מ",
    year: "2023",
    category: "נוף",
    available: true,
    description: "מדבר הנגב בשעת דמדומים — שממת יופי שקטה בגוונים של אדמה, חרסית וכחול עמוק"
  },
  {
    image: "/images/abstract-storm.webp",
    title: "סערה אבסטרקטית",
    technique: "שמן על קנבס",
    size: "120×100 ס\"מ",
    year: "2022",
    category: "אבסטרקט",
    available: false,
    description: "יצירה אבסטרקטית בולטת — תנועה, אנרגיה ורגש מבוטאים דרך שכבות עבות של צבע"
  },
  {
    image: "/images/bugi-beach-haifa.webp",
    title: "ים בוגי, חיפה",
    technique: "שמן על קנבס",
    size: "80×60 ס\"מ",
    year: "2024",
    category: "נוף",
    available: true,
    description: "חוף ים בוגי בחיפה — גלים קטנים, אוויר מלוח ואור בוקר שמתנגן על פני הים"
  },
  {
    image: "/images/white-roses.webp",
    title: "ורדים לבנים",
    technique: "אקוורל על נייר",
    size: "40×30 ס\"מ",
    year: "2023",
    category: "טבע דומם",
    available: true,
    description: "ורדים לבנים בצנצנת זכוכית — אלגנטיות פשוטה שמדברת בשפת היופי השקט"
  },
  {
    image: "/images/girl-with-book.webp",
    title: "ילדה עם ספר",
    technique: "שמן על קנבס",
    size: "70×90 ס\"מ",
    year: "2022",
    category: "פורטרט",
    available: false,
    description: "פורטרט ילדה שקועה בספר — רגע פרטי של דמיון וסקרנות, מלא חום ואהבה"
  },
  {
    image: "/images/jerusalem-of-gold.webp",
    title: "ירושלים של זהב",
    technique: "שמן על קנבס",
    size: "100×80 ס\"מ",
    year: "2024",
    category: "נוף עירוני",
    available: true,
    description: "חומות ירושלים העתיקה בשעות הזהב — אבנים שספגו אלפי שנות היסטוריה ואמונה"
  },
  {
    image: "/images/dance-of-colors.webp",
    title: "ריקוד צבעים",
    technique: "אקרילי על קנבס",
    size: "110×90 ס\"מ",
    year: "2023",
    category: "אבסטרקט",
    available: true,
    description: "יצירה חגיגית ועליזה — כתמי צבע שרוקדים יחד בהרמוניה ויוצרים מנגינה ויזואלית"
  },
  {
    image: "/images/machne-yehuda.webp",
    title: "שוק מחנה יהודה",
    technique: "שמן על קנבס",
    size: "90×70 ס\"מ",
    year: "2022",
    category: "נוף עירוני",
    available: false,
    description: "שוק מחנה יהודה בשיאו — צבעים, ריחות וקולות מבוטאים בציור חי ומלא אנרגיה"
  }
];

const categories = ["הכל", "נוף", "פורטרט", "טבע דומם", "אבסטרקט", "נוף עירוני"];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filtered = artworks.filter(a => {
    const categoryMatch = activeCategory === "הכל" || a.category === activeCategory;
    const availableMatch = !showAvailableOnly || a.available;
    return categoryMatch && availableMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="גלריה"
        description="גלריה מקוונת של יצירות מקוריות — ציורי שמן, אקוורל ופורטרטים. סנן לפי קטגוריה וגלה יצירות זמינות לרכישה."
        url="https://davidcohen-art.co.il/work"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-gallery-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                הגלריה
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                אוסף יצירות מקוריות — כל ציור נוצר מתוך התבוננות עמוקה, מלאכת יד מדוקדקת ואהבה אמיתית לאמנות
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-minimal px-4 py-2 border rounded-none transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/8"
                      : "border-border text-muted-foreground hover:border-[var(--gold)] hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="w-4 h-4 accent-[var(--gold)]"
              />
              <span className="text-minimal text-muted-foreground group-hover:text-foreground transition-colors duration-300">הצג זמינות בלבד</span>
            </label>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filtered.map((artwork, index) => (
                <div key={index} className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: artwork.objectPosition ?? "center" }}
                    />
                    {/* Rich gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Revealed title on hover */}
                    <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white font-light text-lg">{artwork.title}</p>
                      <p className="text-minimal text-white/70">{artwork.technique}</p>
                    </div>

                    {/* Category Badge — with gold border */}
                    <div
                      className="absolute top-6 right-6 backdrop-blur-sm px-4 py-2 border"
                      style={{
                        backgroundColor: 'rgba(212,165,116,0.92)',
                        borderColor: 'rgba(232,201,160,0.5)'
                      }}
                    >
                      <span className="text-minimal text-black font-medium">
                        {artwork.category}
                      </span>
                    </div>

                    {/* Available Badge — with pulse */}
                    {artwork.available && (
                      <div className="absolute bottom-6 left-6 glass-card px-3 py-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ backgroundColor: 'var(--gold)' }} />
                        <span className="text-minimal text-foreground">זמין לרכישה</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 gap-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-[var(--gold)] transition-colors duration-500">
                        {artwork.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {artwork.technique}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border group-hover:border-[var(--gold)]/40 transition-colors duration-500">
                      <div className="flex items-stretch gap-0">
                        {/* Technique */}
                        <div className="flex-1 py-3">
                          <p className="text-minimal text-muted-foreground mb-1">טכניקה</p>
                          <p className="text-minimal" style={{ color: 'var(--gold)' }}>{artwork.technique}</p>
                        </div>
                        <div className="w-px mx-5 self-stretch opacity-25 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: 'var(--gold)' }} aria-hidden="true" />
                        {/* Size */}
                        <div className="flex-1 py-3">
                          <p className="text-minimal text-muted-foreground mb-1">גודל</p>
                          <p className="text-minimal text-foreground">{artwork.size}</p>
                        </div>
                        <div className="w-px mx-5 self-stretch opacity-25 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: 'var(--gold)' }} aria-hidden="true" />
                        {/* Year */}
                        <div className="py-3">
                          <p className="text-minimal text-muted-foreground mb-1">שנה</p>
                          <p className="text-minimal text-foreground">{artwork.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              רוצים יצירה
              <br />
              מותאמת אישית?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              ניצור יחד ציור שיתאים בדיוק לחלל ולרצון שלכם
            </p>
            <a
              href="/contact"
              className="inline-block text-minimal border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow"
            >
              צרו קשר
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
