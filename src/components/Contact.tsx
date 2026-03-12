const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">צור קשר</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                בואו ניצור
                <br />
                משהו מיוחד
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">אימייל</h4>
                  <a href="mailto:david@artist.co.il" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    david@artist.co.il
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">טלפון</h4>
                  <a href="tel:054-1234567" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    054-1234567
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">סטודיו</h4>
                  <address className="text-xl not-italic">
                    רחוב בצלאל 15
                    <br />
                    ירושלים
                  </address>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">עקבו אחריי</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Facebook
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  כל יצירה מתחילה בשיחה. ספרו לי על הרעיון שלכם — פורטרט לאהוב,
                  ציור לבית החדש, או מתנה מיוחדת לאירוע חשוב. אשמח להגשים את החזון שלכם.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-block text-minimal border-b pb-1 transition-colors duration-300"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                >
                  לדף יצירת קשר מלא ←
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
