import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Blog = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4" ref={ref}>
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Insights & Resources</h1>
            <p className="text-muted-foreground text-lg">
              Expert articles on AI automation, business growth, and digital strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <article
                key={post.slug}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className={`group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{post.date}</span>
                    <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
