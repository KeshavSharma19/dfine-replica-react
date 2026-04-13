import { Link } from "react-router-dom";

const menuData = {
  "Rings & Bands": [
    "Engagement Rings",
    "Promise Rings",
    "Ring Enhancers",
    "Wedding Bands",
    "Couple Rings & Bands",
    "Bridal Sets",
    "Men's Rings & Bands",
  ],
  "Pendants": [
    "Animal Pendants",
    "Sports Pendants",
    "Warrior Pendants",
    "Halloween Pendants",
    "Pirate Pendants",
    "Beach Pendants",
    "Nature Inspired Pendants",
    "Hold My Heart Pendants",
    "Angel & Wings Pendants",
    "Skull Pendants",
    "Other Pendants",
    "More Pendants",
  ],
  "Skull Rings": [
    "Men's Skull Rings",
    "Women's Skull Rings",
    "Skull Promise Rings",
    "Skull Ring Enhancers",
    "Couple Skull Engagement Rings",
  ],
  "Collection": [
    "Salt & Pepper Rings",
    "Moss Agate Rings",
    "Toi Et Moi Rings",
    "Heart Of The Ocean Rings",
    "Vintage Inspired Rings",
    "Unique Gemstones Rings",
    "Mother Rings",
  ],
  "Other Jewelry": [
    "Earrings",
    "Wrist Wears",
    "Cufflinks",
    "Lapel Pins",
  ],
};

const shopByShape = [
  { name: "Coffin", icon: "⬠" },
  { name: "Kite", icon: "◇" },
  { name: "Shield", icon: "🛡" },
  { name: "Pear", icon: "💧" },
  { name: "Hexagon", icon: "⬡" },
  { name: "Marquise", icon: "◈" },
  { name: "Trillian", icon: "△" },
  { name: "Round", icon: "○" },
  { name: "Square", icon: "□" },
];

const ShopMegaMenu = () => {
  return (
    <div className="fixed left-0 right-0 bg-background border-b border-border shadow-lg z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-6 gap-8">
          {/* Rings & Bands */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Rings & Bands</h3>
            <ul className="space-y-2.5">
              {menuData["Rings & Bands"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pendants */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Pendants</h3>
            <ul className="space-y-2.5">
              {menuData["Pendants"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skull Rings */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Skull Rings</h3>
            <ul className="space-y-2.5">
              {menuData["Skull Rings"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collection */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Collection</h3>
            <ul className="space-y-2.5">
              {menuData["Collection"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Shape */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Shop by Shape</h3>
            <ul className="space-y-2.5">
              {shopByShape.map((shape) => (
                <li key={shape.name}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center text-base">{shape.icon}</span>
                    {shape.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Jewelry */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Other Jewelry</h3>
            <ul className="space-y-2.5">
              {menuData["Other Jewelry"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMegaMenu;
