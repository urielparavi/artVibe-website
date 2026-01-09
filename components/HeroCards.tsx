import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { BrushIcon } from "./Icons";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export const HeroCards = () => {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-2 gap-6 w-[650px]">
        {/* Artist Profile - Top Right */}
        <Card className="col-span-1 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-col items-center pb-2">
            <div className="w-20 h-20 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-2xl font-bold text-primary mb-2">
              ד״כ
            </div>
            <CardTitle className="text-center">דוד כהן</CardTitle>
            <CardDescription className="font-normal text-primary">
              אמן ציורי שמן ואקוורל
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-2">
            <p className="text-sm">
              יוצר אמנות מזה 15 שנה, מתמחה בנופים ישראליים ודיוקנאות אישיים
            </p>
          </CardContent>

          <CardFooter className="justify-center">
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <Facebook className="w-5 h-5" />
            </a>
          </CardFooter>
        </Card>

        {/* Testimonial - Top Left */}
        <Card className="col-span-1 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage
                alt="לקוחה מרוצה"
                src="https://i.pravatar.cc/150?img=47"
              />
              <AvatarFallback>רל</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <CardTitle className="text-lg">רחל לוי</CardTitle>
              <CardDescription>תל אביב</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-sm">
              &ldquo;הציור שהזמנתי פשוט מדהים! דוד הצליח ללכוד את הרגע בדיוק כפי שדמיינתי.&rdquo;
            </p>
          </CardContent>
        </Card>

        {/* Service - Bottom Right */}
        <Card className="col-span-1 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
              <BrushIcon />
            </div>
            <div>
              <CardTitle className="text-lg">טכניקות מגוונות</CardTitle>
              <CardDescription className="text-sm mt-2">
                עבודה בשמן, אקוורל, פסטל ועוד. כל יצירה מותאמת לסגנון וחלל הבית שלכם.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        {/* Pricing - Bottom Left */}
        <Card className="col-span-1 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">דיוקן אישי</CardTitle>
              <Badge variant="secondary" className="text-xs text-primary">
                פופולרי
              </Badge>
            </div>
            <div>
              <span className="text-2xl font-bold">החל מ-2,500</span>
              <span className="text-muted-foreground text-sm"> ש״ח</span>
            </div>
          </CardHeader>

          <CardContent className="pb-2">
            <div className="space-y-2">
              {["ייעוץ אישי חינם", "מסגרת איכותית", "משלוח עד הבית"].map(
                (benefit: string) => (
                  <span key={benefit} className="flex items-center text-sm">
                    <Check className="text-primary h-4 w-4" />
                    <span className="mr-2">{benefit}</span>
                  </span>
                )
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button className="w-full" size="sm">הזמינו עכשיו</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
