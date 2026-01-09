"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("תודה על פנייתכם! אחזור אליכם בהקדם.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "טלפון",
      content: "054-1234567",
      link: "tel:+972541234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "אימייל",
      content: "david@artist.co.il",
      link: "mailto:david@artist.co.il",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "סטודיו",
      content: "רחוב בצלאל 15, ירושלים",
      link: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "שעות פעילות",
      content: "א׳-ה׳ 9:00-18:00",
      link: null,
    },
  ];

  const faq = [
    {
      question: "כמה זמן לוקח ליצור ציור?",
      answer: "תלוי בגודל ובמורכבות. ציור קטן יכול לקחת שבוע-שבועיים, בעוד יצירה גדולה עשויה לקחת חודש ויותר.",
    },
    {
      question: "האם אפשר להזמין ציור לפי תמונה?",
      answer: "בהחלט! אני מתמחה בציורים מתצלומים - דיוקנאות, נופים ועוד. שלחו לי את התמונה ונדון באפשרויות.",
    },
    {
      question: "האם אתה מספק מסגרות?",
      answer: "כן, אני עובד עם מסגריה מקצועית ויכול להציע מגוון אפשרויות מסגור בהתאמה ליצירה.",
    },
    {
      question: "האם אפשר לבקר בסטודיו?",
      answer: "בוודאי! אשמח לארח אתכם בסטודיו בתיאום מראש. צרו קשר לקביעת מועד.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#D4A574] to-[#8B5A2B] text-transparent bg-clip-text">
              צרו קשר
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            אשמח לשמוע מכם! בין אם יש לכם שאלה, רעיון ליצירה או סתם רוצים לשוחח על אמנות.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => (
            <Card key={info.title}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {info.icon}
                </div>
                <h3 className="font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="container pb-24 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>שלחו הודעה</CardTitle>
              <CardDescription>
                מלאו את הטופס ואחזור אליכם תוך 24 שעות
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      שם מלא *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="השם שלכם"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      טלפון
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="054-1234567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    אימייל *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    נושא
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="במה אוכל לעזור?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    הודעה *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="ספרו לי על הפרויקט שלכם..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  שליחה
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Side Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>עקבו אחריי</CardTitle>
                <CardDescription>
                  ראו יצירות חדשות והצצות מאחורי הקלעים
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-primary" />
                </a>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>מיקום הסטודיו</CardTitle>
                <CardDescription>
                  רחוב בצלאל 15, ירושלים
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-primary/50" />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  הסטודיו ממוקם בלב ירושלים, קרוב לאקדמיה בצלאל.
                  חניה זמינה ברחוב. אשמח לארח אתכם בתיאום מראש.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              שאלות נפוצות
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faq.map((item) => (
              <Card key={item.question}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="container py-24 sm:py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מעדיפים לדבר?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          התקשרו אליי ישירות ונקבע פגישה
        </p>
        <a href="tel:+972541234567">
          <Button size="lg" className="gap-2">
            <Phone className="h-5 w-5" />
            054-1234567
          </Button>
        </a>
      </section>

      <ScrollToTop />
    </>
  );
}
