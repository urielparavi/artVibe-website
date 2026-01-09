import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ArtworkProps {
  title: string;
  category: string;
  size: string;
  image: string;
}

const artworks: ArtworkProps[] = [
  {
    title: "שקיעה בגליל",
    category: "נוף",
    size: "60x80 ס״מ",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    title: "דיוקן משפחתי",
    category: "דיוקן",
    size: "50x70 ס״מ",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
  },
  {
    title: "פרחי שדה",
    category: "טבע דומם",
    size: "40x50 ס״מ",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
  },
  {
    title: "ירושלים של זהב",
    category: "נוף עירוני",
    size: "100x120 ס״מ",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
  },
  {
    title: "הים התיכון",
    category: "נוף ים",
    size: "80x100 ס״מ",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
  },
  {
    title: "אבסטרקט כחול",
    category: "אבסטרקט",
    size: "70x90 ס״מ",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
  },
];

export const GalleryPreview = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            הגלריה{" "}
          </span>
          שלי
        </h2>
        <p className="text-xl text-muted-foreground mt-4">
          מבחר מיצירותיי האחרונות. לחצו לצפייה בגלריה המלאה.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <Card key={artwork.title} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden bg-muted">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{artwork.title}</h3>
              <p className="text-muted-foreground">{artwork.category}</p>
              <p className="text-sm text-primary">{artwork.size}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/gallery">
          <Button size="lg">צפו בגלריה המלאה</Button>
        </Link>
      </div>
    </section>
  );
};
