"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Palette, Sparkles, Award, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1920&h=1080&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-50 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="w-fit text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-4 h-4 ml-2" />
              אמן מקצועי עם 15+ שנות ניסיון
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-to-l from-primary via-orange-400 to-amber-300 text-transparent bg-clip-text animate-gradient bg-[length:200%_auto]">
                  יצירות אמנות
                </span>
                <span className="block text-foreground mt-2">
                  שמעוררות
                </span>
                <span className="block text-foreground">
                  השראה
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                ציורי שמן ואקוורל מקוריים שמשלבים טכניקות קלאסיות עם נופים ישראליים ייחודיים
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/gallery" className="group">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 relative overflow-hidden">
                  <span className="relative z-10">גלריית העבודות</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                  הזמינו יצירה מותאמת
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">יצירות מקוריות</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">לקוחות מרוצים</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">תערוכות</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-rotate-in-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">טכניקות מגוונות</h3>
                    <p className="text-muted-foreground">
                      שמן, אקוורל, פסטל ועוד. כל יצירה מותאמת אישית לחזון שלכם
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:scale-105 transition-all duration-700 animate-rotate-in-2">
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">איכות פרימיום</h3>
                  <p className="text-sm text-muted-foreground">
                    חומרים איכותיים ועבודת יד מדויקת
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-rotate-in-3">
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">ליווי אישי</h3>
                  <p className="text-sm text-muted-foreground">
                    מייעוץ ועד למסירה - אנחנו כאן בשבילכם
                  </p>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="col-span-2 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-rotate-in-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xl font-bold">
                    ר
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="font-bold">רחל לוי</p>
                      <span className="text-xs text-muted-foreground">• תל אביב</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;הציור שהזמנתי פשוט מדהים! דוד הצליח ללכוד את הרגע בדיוק כפי שדמיינתי.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
