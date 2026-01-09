"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

interface ArtworkProps {
  id: number;
  title: string;
  category: string;
  technique: string;
  size: string;
  year: string;
  available: boolean;
  imageUrl: string;
  description: string;
}

const artworks: ArtworkProps[] = [
  {
    id: 1,
    title: "שקיעה בגליל",
    category: "נוף",
    technique: "שמן על בד",
    size: "60x80 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "נוף שקיעה מרהיב מהגליל העליון",
  },
  {
    id: 2,
    title: "דיוקן משפחתי",
    category: "דיוקן",
    technique: "שמן על בד",
    size: "50x70 ס״מ",
    year: "2024",
    available: false,
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    description: "דיוקן משפחתי חמים ואינטימי",
  },
  {
    id: 3,
    title: "פרחי שדה",
    category: "טבע דומם",
    technique: "אקוורל",
    size: "40x50 ס״מ",
    year: "2023",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    description: "זר פרחי שדה צבעוני ועדין",
  },
  {
    id: 4,
    title: "ירושלים של זהב",
    category: "נוף עירוני",
    technique: "שמן על בד",
    size: "100x120 ס״מ",
    year: "2023",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    description: "מבט על העיר העתיקה בשעת זריחה",
  },
  {
    id: 5,
    title: "הים התיכון",
    category: "נוף ים",
    technique: "שמן על בד",
    size: "80x100 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    description: "גלי הים התיכון בחוף יפו",
  },
  {
    id: 6,
    title: "אבסטרקט כחול",
    category: "אבסטרקט",
    technique: "אקריליק",
    size: "70x90 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    description: "קומפוזיציה אבסטרקטית בגווני כחול",
  },
  {
    id: 7,
    title: "זית עתיק",
    category: "נוף",
    technique: "שמן על בד",
    size: "50x60 ס״מ",
    year: "2023",
    available: false,
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    description: "עץ זית עתיק בכפר ערבי",
  },
  {
    id: 8,
    title: "דיוקן ילדה",
    category: "דיוקן",
    technique: "אקוורל",
    size: "30x40 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    description: "דיוקן עדין של ילדה קטנה",
  },
  {
    id: 9,
    title: "מדבר יהודה",
    category: "נוף",
    technique: "שמן על בד",
    size: "90x120 ס״מ",
    year: "2023",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    description: "הרי מדבר יהודה בצבעי אדמה",
  },
  {
    id: 10,
    title: "רימונים",
    category: "טבע דומם",
    technique: "שמן על בד",
    size: "40x40 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&h=600&fit=crop",
    description: "טבע דומם עם רימונים בשלים",
  },
  {
    id: 11,
    title: "כלב נאמן",
    category: "דיוקן",
    technique: "אקוורל",
    size: "35x45 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop",
    description: "דיוקן של כלב משפחתי אהוב",
  },
  {
    id: 12,
    title: "אור וצל",
    category: "אבסטרקט",
    technique: "אקריליק",
    size: "80x80 ס״מ",
    year: "2024",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop",
    description: "משחק של אור וצל בשחור לבן",
  },
];

const categories = ["הכל", "נוף", "דיוקן", "טבע דומם", "אבסטרקט", "נוף עירוני", "נוף ים"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("הכל");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredArtworks = artworks.filter((artwork) => {
    const categoryMatch = selectedCategory === "הכל" || artwork.category === selectedCategory;
    const availabilityMatch = !showAvailableOnly || artwork.available;
    return categoryMatch && availabilityMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#D4A574] to-[#8B5A2B] text-transparent bg-clip-text">
                הגלריה
              </span>{" "}
              שלי
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <p className="text-xl text-muted-foreground">
              מבחר מיצירותיי המקוריות. כל ציור הוא יצירה ייחודית שנוצרה באהבה ובמקצועיות.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="container pb-12">
        <FadeIn direction="up" delay={200}>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={300}>
          <div className="flex justify-center">
            <Button
              variant={showAvailableOnly ? "default" : "outline"}
              onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            >
              {showAvailableOnly ? "הצג הכל" : "הצג זמינים בלבד"}
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Gallery Grid */}
      <section className="container pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <FadeIn key={artwork.id} direction="up" delay={Math.min(index * 50, 500)}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                  {!artwork.available && (
                    <Badge className="absolute top-4 right-4 bg-destructive z-10">
                      נמכר
                    </Badge>
                  )}
                  {artwork.available && (
                    <Badge className="absolute top-4 right-4 bg-primary z-10">
                      זמין
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{artwork.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="secondary">{artwork.technique}</Badge>
                    <Badge variant="outline">{artwork.size}</Badge>
                    <Badge variant="outline">{artwork.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <FadeIn direction="up">
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">לא נמצאו יצירות בקטגוריה זו</p>
            </div>
          </FadeIn>
        )}
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              מעוניינים ביצירה מסוימת?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              צרו קשר לקבלת מידע נוסף, תמונות בהבחנה גבוהה או לתיאום ביקור בסטודיו.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <Button size="lg" asChild>
              <a href="/contact">צרו קשר</a>
            </Button>
          </FadeIn>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
