"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PaletteIcon, BrushIcon, FrameIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "ציורי שמן",
    description:
      "יצירות מקוריות בטכניקת שמן קלאסית. נופים, דומם ואבסטרקט בגדלים מותאמים אישית.",
    icon: <PaletteIcon />,
  },
  {
    title: "דיוקנאות מותאמים",
    description:
      "דיוקנאות אישיים של אהובים, חיות מחמד או דמויות משפחתיות. מתנה מושלמת לכל אירוע.",
    icon: <BrushIcon />,
  },
  {
    title: "ציורי אקוורל",
    description:
      "יצירות עדינות ושקופות בטכניקת צבעי מים. מתאים במיוחד לנופים ופרחים.",
    icon: <FrameIcon />,
  },
];

const artImages = [
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop",
    alt: "ציורי אמנות מקוריים",
  },
  {
    src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=800&fit=crop",
    alt: "ציורי שמן",
  },
  {
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop",
    alt: "אמנות צבעונית",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop",
    alt: "ציורי אקוורל",
  },
];

export const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artImages.length);
    }, 4000); // מחליף תמונה כל 4 שניות

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? artImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <FadeIn direction="right">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                השירותים{" "}
              </span>
              שלי
            </h2>

            <p className="text-muted-foreground text-xl mt-4 mb-8">
              אני מציע מגוון רחב של שירותי אמנות, מיצירות מקוריות ועד הזמנות מותאמות אישית.
            </p>

            <div className="flex flex-col gap-8">
              {serviceList.map(({ icon, title, description }: ServiceProps, index) => (
                <FadeIn key={title} delay={index * 150} direction="up">
                  <Card>
                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                      <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        {icon}
                      </div>
                      <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-md mt-2">
                          {description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={200}>
          <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[400px] relative rounded-lg overflow-hidden shadow-2xl group">
          {artImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 600px"
              />
            </div>
          ))}

          {/* חץ שמאלי (הבא בעברית) */}
          <button
            onClick={goToNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="תמונה הבאה"
          >
            <ChevronLeftIcon />
          </button>

          {/* חץ ימני (הקודם בעברית) */}
          <button
            onClick={goToPrevious}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            aria-label="תמונה קודמת"
          >
            <ChevronRightIcon />
          </button>

          {/* אינדיקטורים */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {artImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
