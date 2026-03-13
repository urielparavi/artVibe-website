import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";

const Portfolio = () => {
  const artworks = [
    {
      image: project1,
      title: "שקיעה על הכינרת",
      info: "שמן על קנבס, 2024",
      description: "נוף מרהיב של שקיעת שמש על אגם הכינרת — שכבות של זהב, כתום וסגול משתקפות על פני המים"
    },
    {
      image: project2,
      title: "פורטרט משפחתי",
      info: "שמן על קנבס, 2024",
      description: "פורטרט אינטימי של משפחה צעירה — לכוד ברגע של חסד ואהבה שיישאר לנצח",
      objectPosition: "center 30%"
    },
    {
      image: project3,
      title: "פרחי הגליל",
      info: "אקוורל על נייר, 2023",
      description: "פרחי בר של הגליל בצבעי מים עדינים — כנמלה, רקפת ואירוס שניצתו לאחר הגשם הראשון"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-20 flex items-end gap-6">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">יצירות נבחרות</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                מהגלריה שלי
              </h3>
            </div>
            <div
              className="hidden md:block h-px flex-1 mb-4"
              style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
              aria-hidden="true"
            />
          </div>

          <div className="space-y-32">
            {artworks.map((artwork, index) => (
              <div key={index} className="group">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: artwork.objectPosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-2xl font-light text-white text-architectural mb-1">
                      {artwork.title}
                    </h4>
                    <p className="text-minimal text-white/70">{artwork.info}</p>
                  </div>
                </div>

                {/* Info row below image */}
                <div className="mt-0 border-t border-border group-hover:border-[var(--gold)]/40 transition-colors duration-500">
                  <div className="grid md:grid-cols-3 gap-0 items-stretch">

                    {/* Title + technique */}
                    <div className="py-8 md:border-l border-border group-hover:border-[var(--gold)]/30 transition-colors duration-500 md:pl-0 md:pr-8">
                      <p className="text-minimal text-muted-foreground mb-2" style={{ color: 'var(--gold)' }}>
                        {artwork.info}
                      </p>
                      <h4 className="text-2xl font-light text-architectural">
                        {artwork.title}
                      </h4>
                    </div>

                    {/* Gold vertical divider — desktop only */}
                    <div
                      className="hidden md:flex items-stretch py-8"
                      aria-hidden="true"
                    >
                      <div
                        className="w-px mx-10 self-stretch opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ backgroundColor: 'var(--gold)' }}
                      />
                      <div className="flex-1 md:col-span-1">
                        <p className="text-muted-foreground leading-relaxed pt-0 mt-0">
                          {artwork.description}
                        </p>
                      </div>
                    </div>

                    {/* Description — mobile only */}
                    <p className="md:hidden text-muted-foreground leading-relaxed py-4">
                      {artwork.description}
                    </p>

                    {/* View link */}
                    <div className="hidden md:flex items-center justify-end py-8">
                      <a
                        href="/work"
                        className="text-minimal text-muted-foreground hover:text-[var(--gold)] gold-underline pb-0.5 transition-colors duration-300"
                      >
                        לצפייה בגלריה ←
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="/work"
              className="text-minimal border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow inline-block"
            >
              לכל הגלריה
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
