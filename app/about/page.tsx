import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollToTop } from "@/components/ScrollToTop";

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
    { name: "גלריה ירושלים", location: "ירושלים", year: "2007" },
    { name: "מוזיאון תל אביב", location: "תל אביב", year: "2010" },
    { name: "בית האמנים", location: "חיפה", year: "2014" },
    { name: "Galerie Montmartre", location: "פריז, צרפת", year: "2018" },
    { name: "תערוכה קבוצתית", location: "ניו יורק, ארה״ב", year: "2021" },
    { name: "אמנות ישראלית", location: "ברלין, גרמניה", year: "2023" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
              <div className="text-9xl">👨‍🎨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                הפילוסופיה
              </span>{" "}
              שלי
            </h2>
            <blockquote className="text-2xl italic text-muted-foreground mb-8">
              &ldquo;אני מאמין שכל ציור צריך לספר סיפור. לא רק לתעד מה שהעין רואה,
              אלא ללכוד את הרגש, את האווירה, את הרגע הבלתי חוזר.&rdquo;
            </blockquote>
            <p className="text-lg text-muted-foreground">
              כל יצירה שלי נולדת מתוך התבוננות ארוכה והקשבה לסביבה. אני מבלה שעות רבות בטבע,
              מצלם, מסרטט ובעיקר מרגיש. רק אחרי שהסיפור מתגבש בראשי, אני ניגש לבד.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            התמחויות
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              המסע שלי
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8">
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
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            תערוכות נבחרות
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((exhibition) => (
            <Card key={exhibition.name}>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg">{exhibition.name}</h3>
                <p className="text-muted-foreground">{exhibition.location}</p>
                <Badge variant="outline" className="mt-2">{exhibition.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">שנות ניסיון</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">יצירות מקוריות</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">לקוחות מרוצים</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">תערוכות</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 sm:py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          רוצים ליצור איתי?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          אשמח לשמוע על הפרויקט שלכם ולבדוק איך אוכל לעזור להגשים את החזון האמנותי שלכם.
        </p>
        <Link href="/contact">
          <Button size="lg">צרו קשר עכשיו</Button>
        </Link>
      </section>

      <ScrollToTop />
    </>
  );
}
