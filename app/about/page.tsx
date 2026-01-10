import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function AboutPage() {
  const timeline = [
    {
      year: "1985",
      title: "הלידה",
      description: "נולדתי בירושלים ומגיל צעיר גיליתי אהבה לציור ויצירה",
    },
    {
      year: "2003",
      title: "לימודים בבצלאל",
      description: "התחלתי ללמוד אמנות באקדמיה לאמנות ועיצוב בצלאל",
    },
    {
      year: "2007",
      title: "תערוכה ראשונה",
      description: "הצגתי את יצירותיי לראשונה בגלריה בירושלים",
    },
    {
      year: "2012",
      title: "פתיחת הסטודיו",
      description: "פתחתי את הסטודיו האישי שלי והתחלתי לעבוד עם לקוחות פרטיים",
    },
    {
      year: "2018",
      title: "תערוכה בינלאומית",
      description: "השתתפתי בתערוכה בינלאומית בפריז והציגתי נופים ישראליים",
    },
    {
      year: "2024",
      title: "היום",
      description: "ממשיך ליצור ולהשתלם, עם מאות לקוחות מרוצים בכל הארץ",
    },
  ];

  const skills = [
    "ציור שמן קלאסי",
    "אקוורל",
    "דיוקנאות",
    "נופים",
    "טבע דומם",
    "אבסטרקט",
    "ציור מתצלום",
    "שיקום ציורים",
  ];

  const exhibitions = [
    {
      name: "גלריה ירושלים",
      location: "ירושלים",
      year: "2007",
      imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
    },
    {
      name: "מוזיאון תל אביב",
      location: "תל אביב",
      year: "2010",
      imageUrl: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?w=400&h=300&fit=crop"
    },
    {
      name: "בית האמנים",
      location: "חיפה",
      year: "2014",
      imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop"
    },
    {
      name: "Galerie Montmartre",
      location: "פריז, צרפת",
      year: "2018",
      imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop"
    },
    {
      name: "תערוכה קבוצתית",
      location: "ניו יורק, ארה״ב",
      year: "2021",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
    },
    {
      name: "אמנות ישראלית",
      location: "ברלין, גרמניה",
      year: "2023",
      imageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=300&fit=crop"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#D4A574] to-[#8B5A2B] text-transparent bg-clip-text">
                  דוד כהן
                </span>
                <br />
                אמן ציורי שמן ואקוורל
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                נולדתי וגדלתי בירושלים, ומאז ילדותי אני מרגיש קשר עמוק לצבעים ולאמנות.
                הנוף הישראלי המגוון והעשיר תמיד היווה עבורי מקור השראה בלתי נדלה.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                למדתי ציור קלאסי באקדמיה לאמנות ועיצוב בצלאל, שם התמחיתי בטכניקות שמן מסורתיות.
                במהלך השנים פיתחתי סגנון ייחודי המשלב את המסורת האירופית עם הנוף והאור הייחודיים לארץ ישראל.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg">צרו קשר</Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg">צפו בגלריה</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&crop=faces&facepad=3"
                  alt="דוד כהן - אמן"
                  width={320}
                  height={320}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  הפילוסופיה
                </span>{" "}
                שלי
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <blockquote className="text-2xl italic text-muted-foreground mb-8">
                &ldquo;אני מאמין שכל ציור צריך לספר סיפור. לא רק לתעד מה שהעין רואה,
                אלא ללכוד את הרגש, את האווירה, את הרגע הבלתי חוזר.&rdquo;
              </blockquote>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="text-lg text-muted-foreground">
                כל יצירה שלי נולדת מתוך התבוננות ארוכה והקשבה לסביבה. אני מבלה שעות רבות בטבע,
                מצלם, מסרטט ובעיקר מרגיש. רק אחרי שהסיפור מתגבש בראשי, אני ניגש לבד.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-24 sm:py-32">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              התמחויות
            </span>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                המסע שלי
              </span>
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} direction="up" delay={index * 100}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/30 my-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-primary font-bold">{item.year}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="container py-24 sm:py-32">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              תערוכות נבחרות
            </span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((exhibition, index) => (
            <FadeIn key={exhibition.name} direction="up" delay={index * 100}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={exhibition.imageUrl}
                    alt={exhibition.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{exhibition.name}</h3>
                  <p className="text-muted-foreground mb-2">{exhibition.location}</p>
                  <Badge variant="outline">{exhibition.year}</Badge>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn direction="up" delay={0}>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">שנות ניסיון</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">יצירות מקוריות</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">לקוחות מרוצים</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">תערוכות</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 sm:py-32 text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            רוצים ליצור איתי?
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            אשמח לשמוע על הפרויקט שלכם ולבדוק איך אוכל לעזור להגשים את החזון האמנותי שלכם.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <Link href="/contact">
            <Button size="lg">צרו קשר עכשיו</Button>
          </Link>
        </FadeIn>
      </section>

      <ScrollToTop />
    </>
  );
}
