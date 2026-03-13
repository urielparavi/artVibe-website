import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const categories = ["הכל", "טכניקה", "עיצוב", "תהליך"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredPosts = activeCategory === "הכל"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="בלוג"
        description="מאמרים על ציור, טכניקות אמנות והשראה ישירות מהסטודיו — טיפים מקצועיים על ציורי שמן, אקוורל ופורטרטים."
        url="https://davidcohen-art.co.il/blog"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-blog-hero.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                מהסטודיו
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                מחשבות, טכניקות והשראה ישירות מהסטודיו — על ציור, אמנות ומה שביניהם
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter — pill style */}
      <section className="pt-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal px-4 py-2 border rounded-none transition-all duration-300 ${
                    activeCategory === category
                      ? "border-[var(--gold)] text-[var(--gold)] bg-[var(--gold)]/8"
                      : "border-border text-muted-foreground hover:border-[var(--gold)] hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Rich gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category Badge */}
                      <div
                        className="absolute top-4 right-4 backdrop-blur-sm px-3 py-1 border"
                        style={{ backgroundColor: 'rgba(212,165,116,0.92)', borderColor: 'rgba(232,201,160,0.4)' }}
                      >
                        <span className="text-xs text-black font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center text-xs text-muted-foreground gap-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-[var(--gold)] transition-colors duration-500">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-4">
                        <span className="text-minimal gold-underline pb-0.5 transition-colors duration-300 group-hover:text-[var(--gold)]">
                          קראו עוד ←
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-muted relative overflow-hidden">
        {/* Background painting */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="/images/background-images/bg-blog-newsletter.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-muted/80 dark:bg-muted/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              הישארו מעודכנים
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              הירשמו לניוזלטר וקבלו טיפים, עדכונים על יצירות חדשות והזמנות לתערוכות
            </p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="כתובת האימייל שלכם"
                className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground text-right transition-all duration-300 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30"
              />
              <button
                className="px-8 py-4 transition-all duration-300 text-minimal btn-gold-glow shimmer hover:opacity-90"
                style={{ backgroundColor: 'var(--gold)', color: '#000' }}
              >
                הרשמה
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
