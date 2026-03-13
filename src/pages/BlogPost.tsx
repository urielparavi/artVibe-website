import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

function parseContent(content: string): string {
  const lines = content.split('\n');
  const output: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeUnordered = () => {
    if (inUnorderedList) { output.push('</ul>'); inUnorderedList = false; }
  };
  const closeOrdered = () => {
    if (inOrderedList) { output.push('</ol>'); inOrderedList = false; }
  };

  const parseInlineBold = (text: string): string =>
    text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>');

  for (const line of lines) {
    // H1 — skip (title already shown in hero)
    if (line.startsWith('# ')) {
      closeUnordered(); closeOrdered();
      continue;
    }
    // H2 — gold right border (RTL: right = reading-start side)
    if (line.startsWith('## ')) {
      closeUnordered(); closeOrdered();
      output.push(
        `<h2 class="text-2xl md:text-3xl font-light text-architectural text-foreground mt-14 mb-6 pr-5 border-r-2" style="border-color:var(--gold)">${parseInlineBold(line.substring(3))}</h2>`
      );
      continue;
    }
    // H3 — gold text
    if (line.startsWith('### ')) {
      closeUnordered(); closeOrdered();
      output.push(
        `<h3 class="text-xl font-medium mt-10 mb-4" style="color:var(--gold)">${parseInlineBold(line.substring(4))}</h3>`
      );
      continue;
    }
    // Blockquote with ">" prefix
    if (line.startsWith('> ')) {
      closeUnordered(); closeOrdered();
      output.push(
        `<blockquote class="my-10 py-6 pr-8 border-r-4 bg-muted/40" style="border-color:var(--gold)"><p class="text-xl font-light text-architectural text-foreground leading-relaxed italic">${parseInlineBold(line.substring(2))}</p></blockquote>`
      );
      continue;
    }
    // Auto-detect bare quote lines: contains " — " and not a list item or heading
    if (
      !line.startsWith('-') &&
      !line.startsWith('#') &&
      !line.match(/^\d+\./) &&
      line.includes(' — ') &&
      line.trim().length > 0
    ) {
      const dashIdx = line.lastIndexOf(' — ');
      const quoteText = line.substring(0, dashIdx);
      const attribution = line.substring(dashIdx + 3);
      closeUnordered(); closeOrdered();
      output.push(
        `<blockquote class="my-10 py-6 pr-8 border-r-4 bg-muted/40" style="border-color:var(--gold)">` +
        `<p class="text-xl font-light text-architectural text-foreground leading-relaxed italic mb-3">${parseInlineBold(quoteText)}</p>` +
        `<cite class="text-minimal text-muted-foreground not-italic block">— ${attribution}</cite>` +
        `</blockquote>`
      );
      continue;
    }
    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      closeUnordered();
      if (!inOrderedList) {
        output.push('<ol class="my-4 space-y-3 list-none pr-0">');
        inOrderedList = true;
      }
      const match = line.match(/^(\d+)\.\s(.+)$/);
      if (match) {
        output.push(
          `<li class="flex gap-3 items-start"><span class="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-black" style="background-color:var(--gold)">${match[1]}</span><span>${parseInlineBold(match[2])}</span></li>`
        );
      }
      continue;
    }
    // Unordered list
    if (line.startsWith('- ')) {
      closeOrdered();
      if (!inUnorderedList) {
        output.push('<ul class="my-4 space-y-2 list-none pr-0">');
        inUnorderedList = true;
      }
      output.push(
        `<li class="flex gap-3 items-start"><span class="shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style="background-color:var(--gold)"></span><span>${parseInlineBold(line.substring(2))}</span></li>`
      );
      continue;
    }
    // Empty line
    if (line.trim() === '') {
      closeUnordered(); closeOrdered();
      continue;
    }
    // Regular paragraph
    closeUnordered(); closeOrdered();
    output.push(`<p class="mb-5 leading-loose text-base">${parseInlineBold(line)}</p>`);
  }

  closeUnordered();
  closeOrdered();
  return output.join('');
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setReadingProgress(0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-48 pb-32 text-center">
          <div className="container mx-auto px-6">
            <p className="text-minimal text-muted-foreground mb-6">שגיאה 404</p>
            <h1 className="text-4xl md:text-6xl font-light text-architectural mb-10">
              המאמר לא נמצא
            </h1>
            <Link
              to="/blog"
              className="inline-block text-minimal border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500 btn-gold-glow"
            >
              → חזרה לבלוג
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const sameCategory = blogPosts.filter(p => p.id !== post.id && p.category === post.category);
  const fallback = blogPosts.filter(p => p.id !== post.id);
  const relatedPosts = sameCategory.length >= 2 ? sameCategory.slice(0, 2) : fallback.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 right-0 left-0 z-50 h-0.5 bg-border">
        <div
          className="h-full transition-all duration-75"
          style={{ width: `${readingProgress}%`, backgroundColor: 'var(--gold)' }}
        />
      </div>

      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={`https://davidcohen-art.co.il/blog/${post.id}`}
        type="article"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

        {/* Back link */}
        <div className="absolute top-0 right-0 z-10 pt-28 pr-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-minimal text-white/70 hover:text-[var(--gold)] transition-colors duration-300 gold-underline pb-0.5"
          >
            → חזרה לבלוג
          </Link>
        </div>

        {/* Centered bottom content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6">
          <div className="max-w-4xl mx-auto w-full text-center">
            {/* Gold category badge */}
            <div className="inline-block mb-6">
              <div
                className="backdrop-blur-sm px-4 py-1.5 border"
                style={{ backgroundColor: 'rgba(212,165,116,0.92)', borderColor: 'rgba(232,201,160,0.4)' }}
              >
                <span className="text-xs text-black font-medium">{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-light text-architectural text-white mb-6 reveal">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-minimal text-white/60">
              <span>{post.date}</span>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">

            {/* Excerpt lead */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 reveal-delayed">
              {post.excerpt}
            </p>

            {/* Gold decorative divider */}
            <div className="flex items-center gap-6 mb-12" aria-hidden="true">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, var(--gold), transparent)' }} />
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,14 14,26 2,14" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
                <polygon points="14,7 21,14 14,21 7,14" fill="var(--gold)" opacity="0.5" />
              </svg>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
            </div>

            {/* Article Content */}
            <div
              className="text-foreground/80 leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
            />

            {/* Divider before author */}
            <div
              className="my-16 h-px"
              style={{ background: 'linear-gradient(to left, transparent, var(--gold), transparent)' }}
            />

            {/* Author Card */}
            <div className="glass-card border border-border p-8 border-r-4" style={{ borderRightColor: 'var(--gold)' }}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div
                  className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2"
                  style={{ borderColor: 'var(--gold)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=150&q=80"
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-minimal text-muted-foreground mb-1">על הכותב</p>
                  <h3 className="text-2xl font-light text-architectural text-foreground mb-1">{post.author}</h3>
                  <p className="text-minimal mb-4" style={{ color: 'var(--gold)' }}>אמן ומורה לציור, ירושלים</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    דוד כהן הוא אמן ישראלי עם למעלה מ-15 שנות ניסיון בציורי שמן, אקוורל ופורטרטים בהזמנה.
                    לומד ומלמד ברחוב בצלאל בירושלים, עם למעלה מ-500 יצירות בגלריות ובבתים פרטיים ברחבי הארץ.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <div className="mb-12">
                <p className="text-minimal text-muted-foreground mb-3">המשך קריאה</p>
                <h3 className="text-3xl font-light text-architectural">מאמרים נוספים</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group block">
                    <div className="relative overflow-hidden mb-5">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div
                        className="absolute top-4 right-4 backdrop-blur-sm px-3 py-1 border"
                        style={{ backgroundColor: 'rgba(212,165,116,0.92)', borderColor: 'rgba(232,201,160,0.4)' }}
                      >
                        <span className="text-xs text-black font-medium">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h4 className="text-lg font-light text-architectural group-hover:text-[var(--gold)] transition-colors duration-500 mb-3">
                      {relatedPost.title}
                    </h4>
                    <span className="text-minimal gold-underline pb-0.5 transition-colors duration-300 group-hover:text-[var(--gold)]">
                      קראו עוד ←
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
