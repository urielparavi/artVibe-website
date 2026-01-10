import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FadeIn } from "@/components/FadeIn";
import {
  PaletteServiceIcon,
  UserServiceIcon,
  DropletServiceIcon,
  MountainServiceIcon,
  ShapesServiceIcon,
  BuildingServiceIcon
} from "@/components/Icons";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  popular?: boolean;
  icon: JSX.Element;
}

const services: ServiceDetailProps[] = [
  {
    title: "ציורי שמן",
    description: "יצירות מקוריות בטכניקת שמן קלאסית על בד איטלקי איכותי. הציורים מתאימים לכל חלל ביתי או עסקי.",
    features: [
      "בד איטלקי מתוח על מסגרת עץ",
      "צבעי שמן מקצועיים",
      "לכה מגנה",
      "תעודת מקוריות",
      "אפשרות למסגור",
    ],
    startingPrice: "1,500",
    icon: <PaletteServiceIcon />,
  },
  {
    title: "דיוקנאות מותאמים",
    description: "דיוקנאות אישיים של אנשים אהובים, חיות מחמד או דמויות משפחתיות. מתנה מושלמת לכל אירוע מיוחד.",
    features: [
      "פגישת ייעוץ אישית",
      "עבודה מתצלום או בישיבה",
      "תיקונים ללא הגבלה",
      "מסגרת יוקרתית כלולה",
      "משלוח מבוטח",
    ],
    startingPrice: "2,500",
    popular: true,
    icon: <UserServiceIcon />,
  },
  {
    title: "ציורי אקוורל",
    description: "יצירות עדינות ושקופות בטכניקת צבעי מים. מתאים במיוחד לנופים, פרחים ואווירה רומנטית.",
    features: [
      "נייר אקוורל 300 גרם",
      "פספרטו מקצועי",
      "מסגרת עם זכוכית מוזיאון",
      "עמיד לאור",
      "תעודת מקוריות",
    ],
    startingPrice: "1,200",
    icon: <DropletServiceIcon />,
  },
  {
    title: "נופים ישראליים",
    description: "ציורים המתעדים את היופי הייחודי של הנוף הישראלי - מהגליל ועד הנגב, מהים ועד הירדן.",
    features: [
      "מגוון גדלים",
      "טכניקות שונות",
      "התאמה לעיצוב הבית",
      "משלוח לכל הארץ",
      "אפשרות להזמנה מיוחדת",
    ],
    startingPrice: "1,800",
    icon: <MountainServiceIcon />,
  },
  {
    title: "אבסטרקט",
    description: "יצירות אבסטרקטיות צבעוניות ומודרניות שמוסיפות עניין ועומק לכל חלל.",
    features: [
      "סגנונות מגוונים",
      "פלטות צבעים מותאמות",
      "גדלים שונים",
      "טקסטורות מיוחדות",
      "יצירות ייחודיות",
    ],
    startingPrice: "1,400",
    icon: <ShapesServiceIcon />,
  },
  {
    title: "הזמנות מיוחדות",
    description: "פרויקטים מיוחדים לעסקים, בתי מלון, מסעדות ומוסדות. יצירות בהתאמה אישית מלאה.",
    features: [
      "ייעוץ ותכנון מקצועי",
      "התאמה לחלל ולעיצוב",
      "פרויקטים בקנה מידה גדול",
      "עבודה עם אדריכלים ומעצבים",
      "לוחות זמנים גמישים",
    ],
    startingPrice: "לפי הצעת מחיר",
    icon: <BuildingServiceIcon />,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#D4A574] to-[#8B5A2B] text-transparent bg-clip-text">
                השירותים
              </span>{" "}
              שלי
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <p className="text-xl text-muted-foreground">
              אני מציע מגוון רחב של שירותי אמנות, מיצירות מקוריות מוכנות ועד הזמנות מותאמות אישית בהתאם לחזון שלכם.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container pb-24 sm:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={index * 100}>
              <Card className="relative flex flex-col h-full">
                {service.popular && (
                  <Badge className="absolute -top-3 right-4 bg-primary">
                    הכי פופולרי
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mb-4 bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">החל מ-</span>
                    <span className="text-2xl font-bold"> {service.startingPrice}</span>
                    {service.startingPrice !== "לפי הצעת מחיר" && (
                      <span className="text-muted-foreground"> ש״ח</span>
                    )}
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">הזמינו עכשיו</Button>
                  </Link>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                תהליך העבודה
              </span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "שיחת ייעוץ", description: "נפגש או נדבר בטלפון כדי להבין את הצרכים והחזון שלכם" },
              { step: "2", title: "הצעת מחיר", description: "אשלח הצעת מחיר מפורטת כולל לוח זמנים" },
              { step: "3", title: "יצירה", description: "אתחיל בעבודה על היצירה עם עדכונים שוטפים" },
              { step: "4", title: "מסירה", description: "היצירה המוגמרת תגיע אליכם עטופה ומוכנה לתלייה" },
            ].map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 sm:py-32 text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להתחיל?
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            צרו קשר עוד היום ונתחיל לעבוד על היצירה המושלמת עבורכם.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <Link href="/contact">
            <Button size="lg">צרו קשר</Button>
          </Link>
        </FadeIn>
      </section>

      <ScrollToTop />
    </>
  );
}
