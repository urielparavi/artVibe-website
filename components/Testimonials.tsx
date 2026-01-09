"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "רחל לוי",
    userName: "תל אביב",
    comment: "הזמנתי ציור דיוקן של הילדים שלי ודוד פשוט הפליא אותי. הוא תפס את האופי שלהם בדיוק!",
  },
  {
    image: "https://i.pravatar.cc/150?img=52",
    name: "משה כהן",
    userName: "ירושלים",
    comment:
      "הציור של נוף ירושלים תלוי בסלון שלנו כבר שנתיים והוא עדיין מרגש אותנו כל יום. עבודה מקצועית ויפהפייה.",
  },
  {
    image: "https://i.pravatar.cc/150?img=44",
    name: "שרה אברהם",
    userName: "חיפה",
    comment:
      "דוד הוא אמן אמיתי ואדם נפלא. הוא הקשיב לכל הבקשות שלי ויצר יצירה שהיא בדיוק מה שחלמתי עליו.",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "יוסי גולן",
    userName: "נתניה",
    comment:
      "קניתי ציור מקורי במתנה לאשתי והיא התאהבה בו מיד. השירות היה מעולה והמשלוח הגיע מהר.",
  },
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "מיכל דוד",
    userName: "באר שבע",
    comment:
      "הזמנתי סדרה של שלושה ציורים לעסק שלי ודוד עבד איתי בסבלנות עד שהגענו לתוצאה המושלמת.",
  },
  {
    image: "https://i.pravatar.cc/150?img=51",
    name: "אבי רוזן",
    userName: "הרצליה",
    comment:
      "האיכות של הציורים מדהימה. רואים שזה נעשה באהבה ובמקצועיות. ממליץ בחום!",
  },
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 350 + 24; // רוחב כרטיס + gap
    const totalCards = testimonials.length;

    let animationFrameId: number;
    const scrollSpeed = 1; // מהירות הגלילה

    const scroll = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += scrollSpeed;

      // כשמגיעים לסוף המערך הראשון, קפוץ בחזרה להתחלה
      const maxScroll = cardWidth * totalCards;
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // שכפול המערך לאפקט אינסופי
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <FadeIn direction="up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            מה אומרים
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              הלקוחות{" "}
            </span>
            שלי
          </h2>

          <p className="text-xl text-muted-foreground pt-4">
            מאות לקוחות מרוצים בכל רחבי הארץ. הנה כמה מהחוויות שלהם.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={200}>
        <div className="relative overflow-hidden">
        {/* Gradient overlays לאפקט fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollBehavior: "auto",
            direction: "ltr"
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.userName}-${index}`}
              className="min-w-[350px] max-w-[350px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="w-12 h-12">
                  <AvatarImage alt={testimonial.name} src={testimonial.image} />
                  <AvatarFallback>
                    {testimonial.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {testimonial.comment}
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </FadeIn>
    </section>
  );
};
