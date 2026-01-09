import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות - דוד כהן, אמן ציורי שמן ואקוורל | ArtVibe",
  description: "היכרות עם דוד כהן, אמן ציורי שמן ואקוורל בעל 15+ שנות ניסיון. בוגר בצלאל, מתמחה בנופים ישראליים ודיוקנאות. 500+ יצירות מקוריות ו-50+ תערוכות.",
  keywords: ["דוד כהן", "אמן ישראלי", "בוגר בצלאל", "ציורי שמן", "אקוורל", "אמן ירושלים"],
  openGraph: {
    title: "אודות - דוד כהן, אמן ציורי שמן ואקוורל | ArtVibe",
    description: "אמן ציורי שמן ואקוורל בעל 15+ שנות ניסיון. בוגר בצלאל, מתמחה בנופים ישראליים ודיוקנאות",
    type: "profile",
    locale: "he_IL",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
