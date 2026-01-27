import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Fragrances", href: "/fragrances" },
  { name: "New", href: "/new" },
  { name: "Bestsellers", href: "/bestsellers" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const cartCount = getCartCount();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop Navigation - Left */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="nav-link link-underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo - Center */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.15em] uppercase"
            >
              GotLife
            </Link>

            {/* Icons - Right */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button
                aria-label="Search"
                className="p-2 hover:opacity-60 transition-opacity duration-300"
              >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              {isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-4">
                  <span className="text-xs text-muted-foreground">
                    Hi, {user?.name?.split(' ')[0]}
                  </span>
                  <button
                    onClick={logout}
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  aria-label="Account"
                  className="hidden md:block p-2 hover:opacity-60 transition-opacity duration-300"
                >
                  <User className="h-5 w-5" />
                </Link>
              )}
              <button
                aria-label="Cart"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:opacity-60 transition-opacity duration-300"
              >
                <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[10px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/20 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-background z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif text-lg tracking-[0.15em] uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-sm uppercase tracking-[0.2em] text-foreground hover:opacity-60 transition-opacity duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t border-border space-y-4">
                {isAuthenticated ? (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Signed in as {user?.email}
                    </p>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-sm uppercase tracking-[0.15em] text-foreground"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center space-x-3 text-sm uppercase tracking-[0.15em]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Login / Register</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
