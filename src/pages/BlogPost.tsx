import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/blog")} variant="outline" className="rounded-full">
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-20">
        {/* Hero */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl fade-in-up">
                <span className="text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mt-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-primary-foreground/60">
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="mb-8 text-muted-foreground hover:text-foreground -ml-4"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Button>
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-primary rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Start your free trial and explore 50+ AI-powered tools today.
              </p>
              <Button
                onClick={() => navigate("/signup")}
                className="gradient-primary text-accent-foreground rounded-full px-8 py-5 font-semibold shadow-lg"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
