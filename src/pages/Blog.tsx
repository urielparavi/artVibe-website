import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
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

      {/* Filter */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 right-0 w-full h-px transition-transform duration-300 origin-right ${
                    activeCategory === category
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`} style={{ backgroundColor: 'var(--gold)' }}></span>
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
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute top-4 right-4 backdrop-blur-sm px-3 py-1" style={{ backgroundColor: 'rgba(212,165,116,0.9)' }}>
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

                      <h2 className="text-xl lg:text-2xl font-light text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-4">
                        <span className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300">
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
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              הישארו מעודכנים
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              הירשמו לניוזלטר וקבלו טיפים, עדכונים על יצירות חדשות והזמנות לתערוכות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="כתובת האימייל שלכם"
                className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground text-right"
              />
              <button
                className="px-8 py-4 hover:opacity-90 transition-opacity duration-300 text-minimal"
                style={{ backgroundColor: 'var(--gold)', color: '#000' }}
              >
                הרשמה
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
