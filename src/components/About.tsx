const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">אודות</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                פילוסופיית הציור
              </h3>

              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  אני מאמין שכל יצירת אמנות היא שיחה — בין האמן לצופה, בין הרגש לצורה.
                  כבר למעלה מ-15 שנה אני יוצר ציורים שמדברים אל הנשמה, עם ידיים שמכירות
                  כל מכחול ועיניים שרואות את היופי בפרטים הקטנים.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  הסטודיו שלי בירושלים הוא מקום של יצירה, השראה ולמידה. עד היום יצרתי
                  מעל 500 יצירות, עבדתי עם 200+ לקוחות מרוצים, והצגתי בגלריות ברחבי הארץ.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">הגישה שלי</h4>
                <div className="space-y-6">
                  <div className="border-r-2 pr-6" style={{ borderColor: 'var(--gold)' }}>
                    <h5 className="text-lg font-medium mb-2">הקשבה</h5>
                    <p className="text-muted-foreground">כל יצירה מתחילה בהבנה מעמיקה של הרצון והחזון של הלקוח</p>
                  </div>
                  <div className="border-r-2 pr-6" style={{ borderColor: 'var(--gold)' }}>
                    <h5 className="text-lg font-medium mb-2">מלאכת יד</h5>
                    <p className="text-muted-foreground">כל פרט מצויר בקפידה עם חומרים איכותיים שנבחרו במיוחד</p>
                  </div>
                  <div className="border-r-2 pr-6" style={{ borderColor: 'var(--gold)' }}>
                    <h5 className="text-lg font-medium mb-2">רגש</h5>
                    <p className="text-muted-foreground">מעבר לטכניקה — כל ציור נושא עמו סיפור ורגש אמיתי</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">ניסיון</h4>
                    <p className="text-xl">15+</p>
                    <p className="text-minimal text-muted-foreground">שנים</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">יצירות</h4>
                    <p className="text-xl">500+</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">לקוחות</h4>
                    <p className="text-xl">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
