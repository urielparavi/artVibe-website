import { Metadata } from "next";

export const metadata: Metadata = {
  title: "גלריה - יצירות אמנות מקוריות | ArtVibe",
  description: "צפו בגלריה של יצירות אמנות מקוריות - ציורי שמן, אקוורל, דיוקנאות ונופים ישראליים. כל יצירה היא ייחודית ונוצרה באהבה ובמקצועיות.",
  keywords: ["גלריה", "ציורים למכירה", "אמנות ישראלית", "ציורי שמן", "אקוורל", "דיוקנאות", "נופים"],
  openGraph: {
    title: "גלריה - יצירות אמנות מקוריות | ArtVibe",
    description: "מבחר מיצירות אמנות מקוריות - ציורי שמן, אקוורל, דיוקנאות ונופים ישראליים",
    type: "website",
    locale: "he_IL",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
