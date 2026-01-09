"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <FadeIn direction="right">
          <div className="lg:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              הפכו את
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}
                החלום שלכם{" "}
              </span>
              ליצירת אמנות
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
              בואו ניצור יחד יצירה ייחודית שתקשט את הבית שלכם לשנים רבות.
              אשמח לשמוע על הרעיונות שלכם ולהציע פתרונות יצירתיים.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={200}>
          <div className="space-y-4 lg:col-start-2">
            <Link href="/contact">
              <Button className="w-full md:ml-4 md:w-auto">צרו קשר עכשיו</Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" className="w-full md:w-auto">
                צפו בגלריה
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
