const testimonials = [
  {
    name: "מיכל לוי",
    role: "לקוחה מרוצה",
    text: "דוד צייר פורטרט של המשפחה שלנו לאירוע יובל השנים. התוצאה הייתה מעבר לכל דמיון — הוא לכד את הנשמה של כל אחד מאיתנו. הציור תלוי בסלון ומרגש אותנו כל פעם מחדש.",
    avatar: "https://i.pravatar.cc/80?img=1"
  },
  {
    name: "יוסי כהן",
    role: "אספן אמנות",
    text: "קניתי שלוש יצירות של דוד לאורך השנים. כל אחת מהן היא השקעה אמיתית — מבחינה אמנותית ורגשית. הטכניקה שלו בציורי שמן מזכירה את אמני הרנסנס הגדולים.",
    avatar: "https://i.pravatar.cc/80?img=3"
  },
  {
    name: "רחל שפירא",
    role: "מעצבת פנים",
    text: "כבר שנים שאני מפנה את לקוחותיי לדוד כשהם מחפשים יצירת אמנות מקורית. כל פעם הוא מייצר עבודה שמתאימה בדיוק לחלל ולאופי הלקוח. מקצועי ברמה הגבוהה ביותר.",
    avatar: "https://i.pravatar.cc/80?img=5"
  },
  {
    name: "אורי גולן",
    role: "לקוח",
    text: "הזמנתי ציור של הנגב לבית החדש שלי. דוד יצר יצירת מופת — הצבעים, האווירה, האור... כל פעם שאני מסתכל על הציור אני מרגיש שוב את הגדולה של המדבר.",
    avatar: "https://i.pravatar.cc/80?img=7"
  },
  {
    name: "נועה פרידמן",
    role: "אמא ולקוחה",
    text: "ביקשתי מדוד לצייר פורטרט של ילדי כמתנה לסבא וסבתא. הוא הצליח ללכוד את האנרגיה שלהם בצורה שגרמה לכולנו לבכות מרוב התרגשות. תודה מכל הלב!",
    avatar: "https://i.pravatar.cc/80?img=9"
  },
  {
    name: "דני שמש",
    role: "מנהל גלריה",
    text: "דוד כהן הוא אחד האמנים הסדירים והמוכשרים שאני מכיר. עבודה איתו היא תמיד חוויה — מקצועי, יצירתי ומחויב לאיכות ללא פשרות.",
    avatar: "https://i.pravatar.cc/80?img=11"
  }
];

const StarRating = () => (
  <div className="flex gap-1 mb-4" aria-label="דירוג 5 כוכבים">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1L8.545 5.18H13L9.455 7.82L10.99 12L7 9.36L3.01 12L4.545 7.82L1 5.18H5.455L7 1Z"
          fill="var(--gold)"
        />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      {/* Background painting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/background-images/bg-testimonials.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/82 dark:bg-background/88" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">לקוחות מספרים</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              מה אומרים עליי
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="group relative border-t border-border pt-10 space-y-6 glass-card p-8 transition-all duration-500 hover:border-[var(--gold)] hover:shadow-elegant"
                style={{ borderTop: '1px solid' }}
              >
                {/* Large decorative quote — background */}
                <span
                  className="absolute top-4 left-6 text-8xl font-serif leading-none pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500"
                  style={{ color: 'var(--gold)', fontFamily: 'Georgia, serif' }}
                  aria-hidden="true"
                >
                  "
                </span>

                <div className="relative">
                  <StarRating />
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    "{t.text}"
                  </p>
                </div>

                {/* Gold separator */}
                <div
                  className="w-8 h-px transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: 'var(--gold)' }}
                />

                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-1 ring-border group-hover:ring-[var(--gold)] transition-all duration-500"
                  />
                  <div>
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-minimal text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
