import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    image: "https://i.pravatar.cc/150?img=32",
    name: "יוסי גולן",
    userName: "נתניה",
    comment:
      "קניתי ציור מקורי במתנה לאשתי והיא התאהבה בו מיד. השירות היה מעולה והמשלוח הגיע מהר.",
  },
  {
    image: "https://i.pravatar.cc/150?img=25",
    name: "מיכל דוד",
    userName: "באר שבע",
    comment:
      "הזמנתי סדרה של שלושה ציורים לעסק שלי ודוד עבד איתי בסבלנות עד שהגענו לתוצאה המושלמת.",
  },
  {
    image: "https://i.pravatar.cc/150?img=38",
    name: "אבי רוזן",
    userName: "הרצליה",
    comment:
      "האיכות של הציורים מדהימה. רואים שזה נעשה באהבה ובמקצועיות. ממליץ בחום!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        מה אומרים
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          הלקוחות{" "}
        </span>
        שלי
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        מאות לקוחות מרוצים בכל רחבי הארץ. הנה כמה מהחוויות שלהם.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={name} src={image} />
                  <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
