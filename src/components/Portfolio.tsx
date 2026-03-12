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
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">יצירות נבחרות</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              מהגלריה שלי
            </h3>
          </div>

          <div className="space-y-32">
            {artworks.map((artwork, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: artwork.objectPosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {artwork.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {artwork.info}
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="/work"
              className="text-minimal border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
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
