import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Features from "@/components/blogs/Features";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";
import Index from "@/components/blogs/content/Index";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-500">
      <div className="bg-blue-600 mb-2">
        <Navigation />
        <HeroSection />
        <Features />
        <Index />
        <FooterSubscribe />
        <Footer />
      </div>
    </main>
  );
}
