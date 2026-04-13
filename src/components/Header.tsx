import { useState, useRef } from "react";
import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ShopMegaMenu from "./ShopMegaMenu";

const Header = () => {
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header ref={headerRef} className="bg-background border-b border-border relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
              Design Your Own <ChevronDown className="w-3 h-3" />
            </a>
            <div
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 h-16 md:h-20 flex items-center">
                Shop <ChevronDown className="w-3 h-3" />
              </a>
            </div>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Deals
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Festival Sale
            </a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Dfine
              <span className="block text-[10px] md:text-xs font-sans font-normal tracking-[0.3em] uppercase text-muted-foreground -mt-1">
                Jewelry Store
              </span>
            </h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <span className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground">
              EN | USD ($) <ChevronDown className="w-3 h-3" />
            </span>
            <button className="p-1.5 text-foreground hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/signin" className="p-1.5 text-foreground hover:text-accent transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <button className="p-1.5 text-foreground hover:text-accent transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-1.5 text-foreground hover:text-accent transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu - rendered as part of header for seamless hover */}
      {shopMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full"
          onMouseEnter={() => setShopMenuOpen(true)}
          onMouseLeave={() => setShopMenuOpen(false)}
        >
          <ShopMegaMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
