import { useState } from "react";
import ProductCard from "./ProductCard";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import prod5 from "@/assets/prod-5.jpg";
import prod6 from "@/assets/prod-6.jpg";
import prod7 from "@/assets/prod-7.jpg";
import prod8 from "@/assets/prod-8.jpg";

const tabs = ["Best Sellers", "Featured", "Halloween"];

const products = {
  "Best Sellers": [
    { image: prod1, name: "Mesh Skull Engagement Ring Set Black Onyx Gun Metal Finish", salePrice: "$159.99", originalPrice: "$199.99", soldOut: true },
    { image: prod2, name: "Ruby Skull Ring Mesh Gothic Wedding Ring Silver", salePrice: "$139.99", originalPrice: "$174.99", soldOut: true },
    { image: prod3, name: "Black Onyx Skull Wedding Band Flower Skull Band For Men", salePrice: "$250.46", originalPrice: "$417.45", soldOut: true },
    { image: prod4, name: "Skull Gothic Promise Ring 1.65TCW Black Onyx Halo", salePrice: "$111.99", originalPrice: "$139.99", soldOut: true },
    { image: prod5, name: "Dark Skull Engagement Ring for Women - 925 Silver", salePrice: "$139.99", originalPrice: "$174.99", soldOut: true },
    { image: prod6, name: "Moissanite Skull Ring Enhancer Curved Wedding Band Rose Gold", salePrice: "$91.99", originalPrice: "$114.99", soldOut: true },
    { image: prod7, name: "Skull Gothic Engagement Ring Set His Her Couple", salePrice: "$341.54", originalPrice: "$569.25", soldOut: true },
    { image: prod8, name: "Leopard Pendant Necklace Iced Out Hip Hop Jewelry", salePrice: "$175.99", originalPrice: "$219.99", soldOut: true },
  ],
  "Featured": [
    { image: prod6, name: "Moissanite Skull Ring Enhancer Curved Wedding Band Rose Gold", salePrice: "$91.99", originalPrice: "$114.99", soldOut: true },
    { image: prod3, name: "Black Onyx Skull Wedding Band Flower Skull Band For Men", salePrice: "$250.46", originalPrice: "$417.45", soldOut: true },
    { image: prod8, name: "Leopard Pendant Necklace Iced Out Hip Hop Jewelry", salePrice: "$175.99", originalPrice: "$219.99", soldOut: true },
    { image: prod1, name: "Mesh Skull Engagement Ring Set Black Onyx Gun Metal Finish", salePrice: "$159.99", originalPrice: "$199.99", soldOut: true },
  ],
  "Halloween": [
    { image: prod4, name: "Skull Gothic Promise Ring 1.65TCW Black Onyx Halo", salePrice: "$111.99", originalPrice: "$139.99", soldOut: true },
    { image: prod5, name: "Dark Skull Engagement Ring for Women - 925 Silver", salePrice: "$139.99", originalPrice: "$174.99", soldOut: true },
    { image: prod2, name: "Ruby Skull Ring Mesh Gothic Wedding Ring Silver", salePrice: "$139.99", originalPrice: "$174.99", soldOut: true },
    { image: prod7, name: "Skull Gothic Engagement Ring Set His Her Couple", salePrice: "$341.54", originalPrice: "$569.25", soldOut: true },
  ],
};

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          Customer Favorites
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base font-medium pb-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products[activeTab as keyof typeof products].map((product, i) => (
            <ProductCard key={`${activeTab}-${i}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
