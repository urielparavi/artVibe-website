import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PaletteIcon, BrushIcon, FrameIcon } from "./Icons";
import Image from "next/image";

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

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
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
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
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
            ))}
          </div>
        </div>

        <div className="w-[300px] md:w-[500px] lg:w-[600px] h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop"
            alt="ציורי אמנות מקוריים"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
