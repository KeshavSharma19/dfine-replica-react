interface ProductCardProps {
  image: string;
  name: string;
  salePrice: string;
  originalPrice: string;
  soldOut?: boolean;
}

const ProductCard = ({ image, name, salePrice, originalPrice, soldOut }: ProductCardProps) => {
  return (
    <a href="#" className="group block">
      <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={512}
          height={640}
        />
        {soldOut && (
          <span className="absolute top-3 left-3 bg-foreground text-primary-foreground text-xs font-semibold px-3 py-1 uppercase tracking-wider">
            Sold Out
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">{salePrice}</span>
          <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
