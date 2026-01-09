import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  emoji: string;
}

const features: FeatureProps[] = [
  {
    title: "איכות ללא פשרות",
    description:
      "שימוש בחומרים איכותיים בלבד - צבעי שמן מקצועיים, בדים איטלקיים ומסגרות עץ מלא.",
    emoji: "✨",
  },
  {
    title: "התאמה אישית",
    description:
      "כל יצירה מותאמת לטעם האישי שלכם, לגודל החלל ולפלטת הצבעים של הבית.",
    emoji: "🎯",
  },
  {
    title: "ליווי מקצועי",
    description:
      "ייעוץ חינם לבחירת היצירה המושלמת, כולל התאמת מסגרת והנחיות תלייה.",
    emoji: "💬",
  },
];

const featureList: string[] = [
  "ציורי שמן",
  "אקוורל",
  "דיוקנאות",
  "נופים",
  "אבסטרקט",
  "פרחים",
  "הזמנות מיוחדות",
  "מסגור מקצועי",
  "משלוח ארצי",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        למה{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          לבחור בי
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, emoji }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="text-6xl mx-auto">{emoji}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
