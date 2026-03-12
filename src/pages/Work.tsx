import { useState } from "react";
import Navigation from "@/components/Navigation";
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
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    title: "רחובות תל אביב",
    technique: "שמן על קנבס",
    size: "90×70 ס\"מ",
    year: "2023",
    category: "נוף עירוני",
    available: true,
    description: "סצנת רחוב תל אביבית חיה — קפה על המדרכה, עצי פיקוס ואנרגיה ים תיכונית"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "נוף הנגב",
    technique: "אקוורל על נייר",
    size: "70×50 ס\"מ",
    year: "2023",
    category: "נוף",
    available: true,
    description: "מדבר הנגב בשעת דמדומים — שממת יופי שקטה בגוונים של אדמה, חרסית וכחול עמוק"
  },
  {
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    title: "סערה אבסטרקטית",
    technique: "שמן על קנבס",
    size: "120×100 ס\"מ",
    year: "2022",
    category: "אבסטרקט",
    available: false,
    description: "יצירה אבסטרקטית בולטת — תנועה, אנרגיה ורגש מבוטאים דרך שכבות עבות של צבע"
  },
  {
    image: "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?w=800&q=80",
    title: "ים בוגי, חיפה",
    technique: "שמן על קנבס",
    size: "80×60 ס\"מ",
    year: "2024",
    category: "נוף",
    available: true,
    description: "חוף ים בוגי בחיפה — גלים קטנים, אוויר מלוח ואור בוקר שמתנגן על פני הים"
  },
  {
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    title: "ורדים לבנים",
    technique: "אקוורל על נייר",
    size: "40×30 ס\"מ",
    year: "2023",
    category: "טבע דומם",
    available: true,
    description: "ורדים לבנים בצנצנת זכוכית — אלגנטיות פשוטה שמדברת בשפת היופי השקט"
  },
  {
    image: "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?w=800&q=80",
    title: "ילדה עם ספר",
    technique: "שמן על קנבס",
    size: "70×90 ס\"מ",
    year: "2022",
    category: "פורטרט",
    available: false,
    description: "פורטרט ילדה שקועה בספר — רגע פרטי של דמיון וסקרנות, מלא חום ואהבה"
  },
  {
    image: "https://images.unsplash.com/photo-1444427169197-de497742b62d?w=800&q=80",
    title: "ירושלים של זהב",
    technique: "שמן על קנבס",
    size: "100×80 ס\"מ",
    year: "2024",
    category: "נוף עירוני",
    available: true,
    description: "חומות ירושלים העתיקה בשעות הזהב — אבנים שספגו אלפי שנות היסטוריה ואמונה"
  },
  {
    image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80",
    title: "ריקוד צבעים",
    technique: "אקרילי על קנבס",
    size: "110×90 ס\"מ",
    year: "2023",
    category: "אבסטרקט",
    available: true,
    description: "יצירה חגיגית ועליזה — כתמי צבע שרוקדים יחד בהרמוניה ויוצרים מנגינה ויזואלית"
  },
  {
    image: "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?w=800&q=80",
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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
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
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === cat
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span className={`absolute bottom-0 right-0 w-full h-px transition-transform duration-300 origin-right ${
                    activeCategory === cat
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`} style={{ backgroundColor: 'var(--gold)' }}></span>
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-minimal text-muted-foreground">הצג זמינות בלבד</span>
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
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: artwork.objectPosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 backdrop-blur-sm px-4 py-2" style={{ backgroundColor: 'rgba(212,165,116,0.9)' }}>
                      <span className="text-minimal text-black">
                        {artwork.category}
                      </span>
                    </div>

                    {/* Available Badge */}
                    {artwork.available && (
                      <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-1">
                        <span className="text-minimal text-foreground">זמין לרכישה</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {artwork.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {artwork.technique}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>

                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">גודל</p>
                        <p className="text-foreground">{artwork.size}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">שנה</p>
                        <p className="text-foreground">{artwork.year}</p>
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
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              צרו קשר
              <span className="absolute bottom-0 right-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
