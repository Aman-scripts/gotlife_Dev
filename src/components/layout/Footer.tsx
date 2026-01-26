import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] uppercase"
            >
              House of EM5
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              A contemporary fragrance house crafting timeless scents that
              blend artistry with modern sensibilities. Each creation
              is a testament to the art of perfumery, designed for the discerning nose.
            </p>
            <a
              href="https://instagram.com/house_of_em5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Instagram className="h-4 w-4" />
              <span className="uppercase tracking-[0.15em] text-xs">
                @house_of_em5
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-4">
              {["All Fragrances", "New Arrivals", "Bestsellers", "About Us"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Customer Care */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Support
            </h4>
            <nav className="flex flex-col space-y-4">
              {["Shipping", "Returns", "Fragrance Guide", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive scent launches
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent border-b border-border pb-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© 2024 House of EM5. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
