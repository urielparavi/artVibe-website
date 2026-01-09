"use client";

import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AwardIcon, TargetIcon, MessageCircleIcon } from "./Icons";
import { FadeIn } from "./FadeIn";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "איכות ללא פשרות",
    description:
      "שימוש בחומרים איכותיים בלבד - צבעי שמן מקצועיים, בדים איטלקיים ומסגרות עץ מלא.",
    icon: <AwardIcon />,
  },
  {
    title: "התאמה אישית",
    description:
      "כל יצירה מותאמת לטעם האישי שלכם, לגודל החלל ולפלטת הצבעים של הבית.",
    icon: <TargetIcon />,
  },
  {
    title: "ליווי מקצועי",
    description:
      "ייעוץ חינם לבחירת היצירה המושלמת, כולל התאמת מסגרת והנחיות תלייה.",
    icon: <MessageCircleIcon />,
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
      <FadeIn direction="up">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          למה{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            לבחור בי
          </span>
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={100}>
        <div className="flex flex-wrap md:justify-center gap-4">
          {featureList.map((feature: string) => (
            <div key={feature}>
              <Badge variant="secondary" className="text-sm">
                {feature}
              </Badge>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps, index) => (
          <FadeIn key={title} direction="up" delay={index * 150}>
            <Card className="relative overflow-hidden h-full">
              <CardHeader className="text-center">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <div className="scale-150">{icon}</div>
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
