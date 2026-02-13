import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  title: string;
  updated: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, updated, children }: Props) => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {updated}</p>
        <div className="prose prose-sm max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
          {children}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default LegalLayout;
