import Footer from "../components/layout/Footersection";
import Header from "../components/layout/header";
import AboutSection from "../components/section/About";
import CtaSection from "../components/section/CtaSection";
import HeroSection from "../components/section/HeroSection";
import ProductsSection from "../components/section/Products";
import SustainabilitySection from "../components/section/Sustainability";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SustainabilitySection />
      <CtaSection />
      <Footer />
    </main>
  );
}