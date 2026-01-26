import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FilterDrawer } from "@/components/ui/FilterDrawer";
import { products, filterOptions } from "@/data/products";

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );
  const [sortOpen, setSortOpen] = useState(false);

  const handleFilterChange = (section: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 text-center"
        >
          <div className="container">
            <h1 className="heading-editorial mb-4">The Collection</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover our curated collection of artisanal fragrances. 
              Each scent is a journey — crafted with rare ingredients 
              and timeless elegance.
            </p>
          </div>
        </motion.section>

        {/* Filter Bar */}
        <section className="border-t border-b border-border">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filter</span>
              </button>

              {/* Product Count */}
              <span className="text-xs text-muted-foreground hidden md:block">
                {products.length} Fragrances
              </span>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span>Sort</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      sortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {sortOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setSortOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border z-50 py-2">
                      {["Newest", "Price: Low to High", "Price: High to Low"].map(
                        (option) => (
                          <button
                            key={option}
                            onClick={() => setSortOpen(false)}
                            className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <ProductGrid products={products} columns={4} />
          </div>
        </section>

        {/* Load More */}
        <section className="pb-16 md:pb-24 text-center">
          <button className="btn-outline">View All Fragrances</button>
        </section>
      </main>

      <Footer />

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default Index;
