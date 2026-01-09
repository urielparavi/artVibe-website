"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "15+",
      description: "שנות ניסיון",
    },
    {
      quantity: "500+",
      description: "יצירות מקוריות",
    },
    {
      quantity: "200+",
      description: "לקוחות מרוצים",
    },
    {
      quantity: "50+",
      description: "תערוכות",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps, index) => (
          <FadeIn key={description} delay={index * 100} direction="up">
            <StatItem quantity={quantity} description={description} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

interface StatItemProps {
  quantity: string;
  description: string;
}

const StatItem = ({ quantity, description }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // חילוץ המספר והסיומת (+ או כל דבר אחר)
  const numericValue = parseInt(quantity.replace(/\D/g, ""));
  const suffix = quantity.replace(/\d/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // אנימציית ספירה עם easing חזק (מהיר בהתחלה, מאד איטי בסוף)
            const duration = 2000; // 2 שניות
            const startTime = Date.now();

            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease-out exponential - אפקט דרמטי של האטה בסוף
              const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

              const currentCount = Math.floor(easeOutExpo * numericValue);
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(numericValue); // ודא שמגיעים למספר המדויק
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [numericValue, hasAnimated]);

  return (
    <div
      ref={ref}
      className="relative group"
    >
      {/* Background card with gradient - always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl transition-all duration-500 group-hover:from-primary/10 group-hover:via-primary/20 group-hover:to-primary/10" />

      {/* Border effect */}
      <div className="absolute inset-0 rounded-2xl border border-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20" />

      {/* Content */}
      <div className="relative p-6 space-y-3 text-center">
        {/* Animated circle background */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse transition-all duration-500 group-hover:bg-primary/20 group-hover:blur-2xl" />
          <h2 className="relative text-4xl sm:text-5xl font-bold bg-gradient-to-br from-primary via-orange-500 to-amber-400 text-transparent bg-clip-text transition-transform duration-500 group-hover:scale-110">
            {count}{suffix}
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground font-medium transition-colors duration-500 group-hover:text-foreground">
          {description}
        </p>

        {/* Bottom accent line - always visible */}
        <div className="mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full transition-all duration-500 group-hover:w-24 group-hover:h-1.5 group-hover:via-orange-500" />
      </div>
    </div>
  );
};
