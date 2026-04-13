import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import CategoryCircles from "@/components/CategoryCircles";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <TrustBar />
      <CategoryCircles />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
