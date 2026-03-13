import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-lg mx-auto">
          {/* Gold decorative line */}
          <div
            className="w-16 h-px mx-auto mb-12 animate-line-reveal"
            style={{ backgroundColor: 'var(--gold)' }}
          />

          <p className="text-minimal text-muted-foreground mb-6">שגיאה</p>

          <h1
            className="text-9xl md:text-[12rem] font-light text-architectural mb-4 leading-none"
            style={{ color: 'var(--gold)', opacity: 0.15 }}
          >
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-light text-architectural mb-6 -mt-8">
            הדף לא נמצא
          </h2>

          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            הדף שחיפשתם לא קיים או הועבר למיקום אחר.
            <br />
            חזרו לדף הבית וגלו את היצירות שלנו.
          </p>

          <a
            href="/"
            className="inline-block text-minimal border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow"
          >
            חזרה לדף הבית
          </a>

          {/* Bottom decorative line */}
          <div
            className="w-8 h-px mx-auto mt-12"
            style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
