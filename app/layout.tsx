import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "דוד כהן - אמן | ציורי שמן ואקוורל מקוריים",
  description: "גלו את עולם האמנות של דוד כהן. ציורי שמן, אקוורל ודיוקנאות מותאמים אישית. הפכו את הבית שלכם ליצירת אמנות.",
  keywords: ["אמן", "צייר", "ציורי שמן", "אקוורל", "דיוקנאות", "אמנות ישראלית", "גלריה"],
  openGraph: {
    title: "דוד כהן - אמן",
    description: "גלו את עולם האמנות של דוד כהן. ציורים מקוריים והזמנות מותאמות אישית.",
    type: "website",
    url: "https://artvibe.co.il",
    locale: "he_IL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ArtVibe - דוד כהן אמן ציורי שמן ואקוורל",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
