import { useState } from "react";
import Navigation from "@/components/Navigation";
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

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <div className="min-h-screen">
      <SEO
        title="צור קשר"
        description="צרו קשר עם דוד כהן — הזמינו ציור מקורי, שאלו על שיעורי ציור, או סתם דברו על אמנות. סטודיו בירושלים, זמין לכלל הארץ."
        url="https://davidcohen-art.co.il/contact"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
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
            <div className="grid md:grid-cols-2 gap-20">
              {/* Info */}
              <div className="space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="border border-border p-8">
                    <h3 className="text-minimal text-muted-foreground mb-3">טלפון</h3>
                    <a href="tel:054-1234567" className="text-lg hover:text-muted-foreground transition-colors duration-300">
                      054-1234567
                    </a>
                  </div>
                  <div className="border border-border p-8">
                    <h3 className="text-minimal text-muted-foreground mb-3">אימייל</h3>
                    <a href="mailto:david@artist.co.il" className="text-lg hover:text-muted-foreground transition-colors duration-300">
                      david@artist.co.il
                    </a>
                  </div>
                  <div className="border border-border p-8">
                    <h3 className="text-minimal text-muted-foreground mb-3">סטודיו</h3>
                    <address className="text-lg not-italic text-foreground">
                      רחוב בצלאל 15<br />ירושלים
                    </address>
                  </div>
                  <div className="border border-border p-8">
                    <h3 className="text-minimal text-muted-foreground mb-3">שעות</h3>
                    <p className="text-lg">א׳–ה׳ 9:00–18:00</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">עקבו אחריי</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <h3 className="text-minimal text-muted-foreground mb-8">שליחת הודעה</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-minimal text-muted-foreground block mb-2">שם</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground"
                        placeholder="השם שלכם"
                      />
                    </div>
                    <div>
                      <label className="text-minimal text-muted-foreground block mb-2">טלפון</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground"
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
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground block mb-2">נושא</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="הזמנת ציור, שאלה, שיעור..."
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground block mb-2">הודעה</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="ספרו לי על הרעיון שלכם..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-minimal transition-opacity duration-300 hover:opacity-90"
                    style={{ backgroundColor: 'var(--gold)', color: '#000' }}
                  >
                    שליחה
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h3 className="text-minimal text-muted-foreground mb-4">שאלות נפוצות</h3>
              <h4 className="text-4xl md:text-5xl font-light text-architectural">
                יש לכם שאלות?
              </h4>
            </div>
            <div className="space-y-0">
              {faq.map((item, index) => (
                <div key={index} className="border-t border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-right gap-4 hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg font-light">{item.q}</span>
                    <span className="text-2xl font-light shrink-0" style={{ color: 'var(--gold)' }}>
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="pb-8">
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
