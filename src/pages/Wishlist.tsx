import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">My Wishlist</h1>
        <p className="text-muted-foreground text-sm mb-10">Items you've saved for later</p>

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
            <Heart className="w-7 h-7 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-medium text-foreground mb-2">Your wishlist is empty</h2>
          <p className="text-sm text-muted-foreground max-w-md mb-6">
            Browse our collections and tap the heart icon on items you love to save them here.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-foreground text-background text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            Start Shopping
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
