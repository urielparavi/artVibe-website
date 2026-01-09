import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותים - הזמנות אמנות מותאמות אישית | ArtVibe",
  description: "שירותי אמנות מקצועיים - ציורי שמן, דיוקנאות מותאמים אישית, ציורי אקוורל, נופים ישראליים והזמנות מיוחדות. החל מ-800 ש״ח.",
  keywords: ["ציורי שמן", "דיוקן מותאם אישית", "הזמנת ציור", "אקוורל", "נופים ישראליים", "אמן ישראלי"],
  openGraph: {
    title: "שירותים - הזמנות אמנות מותאמות אישית | ArtVibe",
    description: "מגוון רחב של שירותי אמנות מקצועיים - מיצירות מקוריות מוכנות ועד הזמנות מותאמות אישית",
    type: "website",
    locale: "he_IL",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
