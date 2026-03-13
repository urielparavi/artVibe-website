import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const faq = [
  {
    q: "כמה זמן לוקח לצייר ציור בהזמנה?",
    a: "תלוי בגודל ובמורכבות. ציור קטן (50×40) לוקח כ-2-3 שבועות. ציור גדול או פורטרט מורכב עשוי לקחת 4-8 שבועות. אני תמיד מוסר לוח זמנים ברור לפני תחילת העבודה."
  },
  {
    q: "האם אפשר להזמין ציור מתמונה?",
    a: "כן, בהחלט! רוב הפורטרטים שאני מצייר הם מתמונה. אשלח לכם הנחיות לצילום הטוב ביותר כדי לקבל תוצאה מושלמת."
  },
  {
    q: "מה מחיר ציור בהזמנה?",
    a: "המחירים מתחילים מ-₪1,200 לאקוורל קטן ומגיעים עד ₪2,500+ לפורטרט שמן גדול. כל יצירה מקבלת הצעת מחיר מותאמת אישית לאחר שיחה ראשונית."
  },
  {
    q: "האם יש שיעורי ציור בסטודיו?",
    a: "כן, אני מקיים שיעורים אישיים וקבוצות קטנות בסטודיו בירושלים. שיעורים זמינים לכל הרמות — החל מתחילים מוחלטים ועד לאמנים שרוצים לשפר טכניקה ספציפית."
  }
];

// Input class shared across all fields
const inputClass =
  "w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 focus:bg-muted/50";

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <div className="min-h-screen">
      <SEO
        title="צור קשר"
        description="צרו קשר עם דוד כהן — הזמינו ציור מקורי, שאלו על שיעורי ציור, או סתם דברו על אמנות. סטודיו בירושלים, זמין לכלל הארץ."
        url="https://artvibe-website.netlify.app/contact"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-contact-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-muted-foreground mb-4">צור קשר</h1>
            <h2 className="text-5xl md:text-7xl font-light text-architectural mb-8">
              בואו ניצור
              <br />
              משהו מיוחד
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              שיחת ייעוץ ראשונה חינם וללא התחייבות — ספרו לי על הרעיון שלכם
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex items-end gap-6">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">יצירת קשר</h2>
                <h3 className="text-4xl font-light text-architectural">
                  נשמח לשמוע מכם
                </h3>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-20">
              {/* Form */}
              <div className="glass-card p-8 md:p-10 border-t-2" style={{ borderTopColor: 'var(--gold)' }}>
                {/* Form header */}
                <div className="mb-8 pb-6 border-b border-border">
                  <p className="text-minimal text-muted-foreground mb-1">שלחו הודעה</p>
                  <h3 className="text-2xl font-light text-architectural">נשמח לשמוע מכם</h3>
                </div>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-minimal text-muted-foreground block mb-2">שם</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="השם שלכם"
                      />
                    </div>
                    <div>
                      <label className="text-minimal text-muted-foreground block mb-2">טלפון</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="054-0000000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground block mb-2">אימייל</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground block mb-2">נושא</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClass}
                      placeholder="הזמנת ציור, שאלה, שיעור..."
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground block mb-2">הודעה</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="ספרו לי על הרעיון שלכם..."
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 text-minimal transition-all duration-500 btn-gold-glow shimmer hover:opacity-90"
                      style={{ backgroundColor: 'var(--gold)', color: '#000' }}
                    >
                      שליחה
                    </button>
                    <p className="text-center text-minimal text-muted-foreground mt-4">
                      נחזור אליכם תוך 24 שעות
                    </p>
                  </div>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "טלפון", content: <a href="tel:054-1234567" className="text-lg group-hover:text-[var(--gold)] transition-colors duration-300">054-1234567</a> },
                    { label: "אימייל", content: <a href="mailto:david@artist.co.il" className="text-lg group-hover:text-[var(--gold)] transition-colors duration-300">david@artist.co.il</a> },
                    { label: "סטודיו", content: <address className="text-lg not-italic">רחוב בצלאל 15<br />ירושלים</address> },
                    { label: "שעות", content: <p className="text-lg">א׳–ה׳ 9:00–18:00</p> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group glass-card border-r-4 p-6 transition-all duration-300 hover:bg-[var(--gold)]/4"
                      style={{ borderRightColor: 'var(--gold)' }}
                    >
                      <h3 className="text-minimal text-muted-foreground mb-3">{item.label}</h3>
                      {item.content}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4">עקבו אחריי</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 border border-border text-minimal text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="transition-colors duration-300">
                        <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.3"/>
                        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
                        <circle cx="13" cy="5" r="0.8" fill="currentColor"/>
                      </svg>
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 border border-border text-minimal text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="transition-colors duration-300">
                        <path d="M17 9A8 8 0 1 0 9.5 17v-5.7H7.5V9h2V7.2c0-2 1.2-3.1 3-3.1.86 0 1.75.15 1.75.15V6.2h-1c-.97 0-1.28.6-1.28 1.22V9h2.2l-.35 2.3H11.97V17A8 8 0 0 0 17 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ — smooth accordion */}
      <section className="py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }} aria-hidden="true" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 flex items-end gap-6">
              <div>
                <h3 className="text-minimal text-muted-foreground mb-4">שאלות נפוצות</h3>
                <h4 className="text-4xl md:text-5xl font-light text-architectural">
                  יש לכם שאלות?
                </h4>
              </div>
              <div
                className="hidden md:block h-px flex-1 mb-4"
                style={{ background: 'linear-gradient(to left, transparent, var(--gold-light))' }}
                aria-hidden="true"
              />
            </div>
            <div className="space-y-0">
              {faq.map((item, index) => (
                <div
                  key={index}
                  className={`border-t transition-all duration-300 ${
                    openFaq === index
                      ? 'border-[var(--gold)]/50 bg-[var(--gold)]/3'
                      : 'border-border hover:border-[var(--gold)]/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-7 px-6 flex items-center justify-between text-right gap-6 transition-colors duration-300 group"
                  >
                    {/* Question number */}
                    <span
                      className="text-minimal font-medium shrink-0 transition-colors duration-300"
                      style={{ color: openFaq === index ? 'var(--gold)' : 'var(--gold)', opacity: openFaq === index ? 1 : 0.5 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`flex-1 text-lg font-light text-right transition-colors duration-300 ${openFaq === index ? '' : 'group-hover:text-[var(--gold)]'}`}
                      style={{ color: openFaq === index ? 'var(--gold)' : undefined }}
                    >
                      {item.q}
                    </span>
                    {/* Icon */}
                    <span
                      className="w-7 h-7 shrink-0 flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: openFaq === index ? 'var(--gold)' : 'hsl(var(--border))',
                        color: 'var(--gold)',
                        transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: openFaq === index ? '300px' : '0' }}
                  >
                    <div className="px-6 pb-8">
                      <div className="border-r-2 pr-5 py-1" style={{ borderColor: 'var(--gold)' }}>
                        <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
