import Image from "next/image";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="w-[300px] h-[300px] relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop"
              alt="אמן מצייר"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  אודות{" "}
                </span>
                האמן
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                נולדתי וגדלתי בירושלים, ומאז ילדותי אני מרגיש קשר עמוק לצבעים ולאמנות.
                למדתי ציור קלאסי בבצלאל והתמחיתי בטכניקות שמן מסורתיות.
                היום אני יוצר ציורים שמשלבים את הנוף הישראלי עם השראות מהאמנות האירופית הקלאסית.
                כל יצירה שלי נולדת מתוך התבוננות עמוקה ורצון לתפוס רגעים של יופי ורגש.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
