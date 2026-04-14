import { useState } from "react";
import { Search, User, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ShopMegaMenu from "./ShopMegaMenu";
import SearchOverlay from "./SearchOverlay";

const Header = () => {
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className="relative z-50"
      onMouseLeave={() => setShopMenuOpen(false)}
    >
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                Design Your Own <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setShopMenuOpen(true)}
              >
                Shop <ChevronDown className="w-3 h-3" />
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onMouseEnter={() => setShopMenuOpen(false)}
              >
                Deals
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onMouseEnter={() => setShopMenuOpen(false)}
              >
                Festival Sale
              </a>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0" onMouseEnter={() => setShopMenuOpen(false)}>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Dfine
                <span className="block text-[10px] md:text-xs font-sans font-normal tracking-[0.3em] uppercase text-muted-foreground -mt-1">
                  Jewelry Store
                </span>
              </h1>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4" onMouseEnter={() => setShopMenuOpen(false)}>
              <span className="hidden lg:flex items-center gap-1 text-xs text-muted-foreground">
                EN | USD ($) <ChevronDown className="w-3 h-3" />
              </span>
              <button className="p-1.5 text-foreground hover:text-accent transition-colors" aria-label="Search" onClick={() => setSearchOpen(true)}>
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
      </header>

      {/* Mega Menu */}
      {shopMenuOpen && <ShopMegaMenu />}
    </div>
  );
};

export default Header;
