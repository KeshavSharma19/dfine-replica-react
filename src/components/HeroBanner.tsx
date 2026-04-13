import heroImage from "@/assets/hero-spring.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <img
        src={heroImage}
        alt="Spring Collection - Gothic Jewelry"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background tracking-wide leading-tight">
            Spring Redefined
          </h2>
          <p className="mt-4 text-lg md:text-xl text-background/90 font-sans leading-relaxed">
            Fresh Designs. Signature Craftsmanship.
            <br />
            Limited Seasonal Pricing on Selected Pieces.
          </p>
          <a
            href="#"
            className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground font-sans text-sm md:text-base tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Spring Edit
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
