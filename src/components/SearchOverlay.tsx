import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Search Panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-[101] bg-background shadow-lg transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-foreground">What are you looking for?</h2>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for rings, pendants, collections..."
              className="w-full border-b-2 border-border bg-transparent py-3 pr-12 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {["Skull Rings", "Gold Pendants", "Diamond Rings", "Silver Chains", "Custom Jewelry"].map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 text-sm border border-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
