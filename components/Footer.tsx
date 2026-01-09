import Link from "next/link";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link href="/" className="font-bold text-xl flex">
            <LogoIcon />
            דוד כהן - אמן
          </Link>
          <p className="text-muted-foreground mt-4">
            יוצר אמנות ייחודית ומרגשת שמספרת סיפורים דרך צבעים וטקסטורות.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">עקבו אחריי</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              אינסטגרם
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              פייסבוק
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              פינטרסט
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">שירותים</h3>
          <div>
            <Link href="/services" className="opacity-60 hover:opacity-100">
              ציורי שמן
            </Link>
          </div>

          <div>
            <Link href="/services" className="opacity-60 hover:opacity-100">
              דיוקנאות
            </Link>
          </div>

          <div>
            <Link href="/services" className="opacity-60 hover:opacity-100">
              אקוורל
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">ניווט</h3>
          <div>
            <Link href="/gallery" className="opacity-60 hover:opacity-100">
              גלריה
            </Link>
          </div>

          <div>
            <Link href="/about" className="opacity-60 hover:opacity-100">
              אודות
            </Link>
          </div>

          <div>
            <Link href="/contact" className="opacity-60 hover:opacity-100">
              צור קשר
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">מידע</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              תנאי שימוש
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              מדיניות פרטיות
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              שאלות נפוצות
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 כל הזכויות שמורות לדוד כהן - אמן
        </h3>
      </section>
    </footer>
  );
};
