import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Dfine
              <span className="block text-[10px] font-sans font-normal tracking-[0.3em] uppercase opacity-70 -mt-1">
                Jewelry Store
              </span>
            </h3>
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              Handcrafted gothic jewelry designed for those who dare to be different. Every piece tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Shop All", "Rings", "Pendants", "Bands", "Earrings", "Wrist Wears"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              {["Contact Us", "FAQs", "Shipping Policy", "Return Policy", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm opacity-70 mb-4">Subscribe for exclusive deals and new arrivals.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground" aria-label="Subscribe">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">© 2026 Dfine Jewelry Store. All rights reserved.</p>
          <div className="flex gap-4">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((p) => (
              <span key={p} className="text-xs opacity-50">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
