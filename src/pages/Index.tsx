import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const Index = () => {
  // Show a curated selection for the home page (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white"
        >
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black" />
          </div>

          <div className="container relative z-10 px-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 md:mb-6 block font-medium">Fine Fragrance House</span>
              <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-[0.05em] mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
                Guardian of <br />
                <span className="italic">Temptation</span>
              </h1>
              <p className="text-xs md:text-base text-zinc-400 max-w-sm md:max-w-lg mx-auto leading-relaxed font-light tracking-wide px-4 md:px-0">
                A contemporary fragrance house crafting timeless scents
                that blend artisanal heritage with modern sensibilities.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
          </motion.div>
        </motion.section>

        {/* Featured Collection Section */}
        <section className="py-12 md:py-32 bg-[#fafafa]">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 md:mb-4 block font-medium uppercase">Selection Excellence</span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Featured Collection</h2>
              <div className="w-8 md:w-12 h-px bg-black/10 mx-auto mt-6 md:mt-8" />
            </motion.div>

            <ProductGrid products={featuredProducts} columns={4} hideDetails={true} />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 md:mt-24 text-center"
            >
              <Link
                to="/fragrances"
                className="group relative inline-flex flex-col items-center pt-2 md:pt-4"
              >
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium mb-2 transition-colors duration-300 group-hover:text-black/60">
                  Explore The Complete Universe
                </span>
                <div className="w-6 md:w-8 h-px bg-black transition-all duration-500 group-hover:w-24" />
              </Link>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
