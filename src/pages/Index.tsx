import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { FilterDrawer } from "@/components/ui/FilterDrawer";
import { products, filterOptions } from "@/data/products";

type SortOption = "newest" | "price-asc" | "price-desc";

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );
  const [sortOpen, setSortOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState<SortOption>("newest");

  const handleFilterChange = (section: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const clearFilters = () => {
    setActiveFilters({});
  };

  const sortOptions: { label: string; value: SortOption }[] = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply category filter
    const categoryFilters = activeFilters["Category"] || [];
    if (categoryFilters.length > 0 && !categoryFilters.includes("all")) {
      result = result.filter((p) => categoryFilters.includes(p.category));
    }

    // Apply concentration filter
    const concentrationFilters = activeFilters["Concentration"] || [];
    if (concentrationFilters.length > 0 && !concentrationFilters.includes("all")) {
      result = result.filter((p) => {
        const concentrationMap: Record<string, string> = {
          parfum: "Parfum",
          edp: "Eau de Parfum",
          edt: "Eau de Toilette",
        };
        return concentrationFilters.some(
          (filter) => concentrationMap[filter] === p.concentration
        );
      });
    }

    // Apply sorting
    switch (currentSort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        result.sort((a, b) => {
          if (a.tag === "new" && b.tag !== "new") return -1;
          if (a.tag !== "new" && b.tag === "new") return 1;
          return parseInt(b.id) - parseInt(a.id);
        });
        break;
    }

    return result;
  }, [activeFilters, currentSort]);

  const handleSort = (value: SortOption) => {
    setCurrentSort(value);
    setSortOpen(false);
  };

  const currentSortLabel = sortOptions.find((o) => o.value === currentSort)?.label;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 md:py-28 text-center bg-zinc-900 text-white"
        >
          <div className="container">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4 block">Premium Collection</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6">The Collection</h1>
            <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Discover our curated collection of artisanal fragrances.
              Each scent is a journey — crafted with rare ingredients
              and timeless elegance.
            </p>
          </div>
        </motion.section>

        {/* Filter Bar */}
        <section>
          <div className="container py-4">
            <div className="flex items-center justify-between">
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filter</span>
                {Object.values(activeFilters).flat().length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px]">
                    {Object.values(activeFilters).flat().length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span>{currentSortLabel}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${sortOpen ? "rotate-180" : ""
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
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleSort(option.value)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${currentSort === option.value
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
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
            {filteredAndSortedProducts.length > 0 ? (
              <ProductGrid products={filteredAndSortedProducts} columns={4} />
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
      />
    </div>
  );
};

export default Index;
