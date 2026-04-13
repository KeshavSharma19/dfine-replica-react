import catRings from "@/assets/cat-rings.jpg";
import catPendants from "@/assets/cat-pendants.jpg";
import catSkull from "@/assets/cat-skull.jpg";
import catBands from "@/assets/cat-bands.jpg";
import catEarrings from "@/assets/cat-earrings.jpg";
import catWristwear from "@/assets/cat-wristwear.jpg";

const categories = [
  { name: "Rings", image: catRings },
  { name: "Pendants", image: catPendants },
  { name: "Skull Jewelry", image: catSkull },
  { name: "Bands", image: catBands },
  { name: "Earrings", image: catEarrings },
  { name: "Wrist Wears", image: catWristwear },
];

const CategoryCircles = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-secondary border-2 border-transparent group-hover:border-accent transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={144}
                  height={144}
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground group-hover:text-accent transition-colors">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;
