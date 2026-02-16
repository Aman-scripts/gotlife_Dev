import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

type SortOption = "newest" | "price-asc" | "price-desc";

const NewArrivals = () => {
    const [sortOpen, setSortOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState<SortOption>("newest");

    const sortOptions: { label: string; value: SortOption }[] = [
        { label: "Newest", value: "newest" },
        { label: "Price: Low to High", value: "price-asc" },
        { label: "Price: High to Low", value: "price-desc" },
    ];

    const newProducts = useMemo(() => {
        let result = products.filter((p) => p.tag === "new");

        switch (currentSort) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "newest":
            default:
                result.sort((a, b) => b.id.localeCompare(a.id));
                break;
        }

        return result;
    }, [currentSort]);

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
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4 block">Just Arrived</span>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6">New Arrivals</h1>
                        <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                            Discover our latest creations. Fresh fragrances crafted with
                            the finest ingredients and contemporary artistry.
                        </p>
                    </div>
                </motion.section>

                {/* Filter Bar */}
                <section>
                    <div className="container py-4">
                        <div className="flex items-center justify-end">

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
                        {newProducts.length > 0 ? (
                            <ProductGrid products={newProducts} columns={4} />
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground">No new arrivals at the moment</p>
                            </div>
                        )}
                    </div>
                </section>

                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default NewArrivals;
