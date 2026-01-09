import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר - הזמנת ציורים ופגישת ייעוץ | ArtVibe",
  description: "צרו קשר להזמנת ציורים, שאלות או לתיאום ביקור בסטודיו. סטודיו בירושלים - רחוב בצלאל 15. טלפון: 054-1234567. מענה תוך 24 שעות.",
  keywords: ["צור קשר", "הזמנת ציור", "סטודיו ירושלים", "אמן בירושלים", "פגישת ייעוץ"],
  openGraph: {
    title: "צור קשר - הזמנת ציורים ופגישת ייעוץ | ArtVibe",
    description: "צרו קשר להזמנת ציורים או לתיאום ביקור בסטודיו בירושלים. מענה תוך 24 שעות",
    type: "website",
    locale: "he_IL",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
