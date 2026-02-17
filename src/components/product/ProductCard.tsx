import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out" | "bestseller";
  index?: number;
  hideDetails?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  tag,
  index = 0,
  hideDetails = false,
}: ProductCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getTagLabel = () => {
    switch (tag) {
      case "new": return "New Arrival";
      case "sold-out": return "Out of Stock";
      case "bestseller": return "Bestseller";
      default: return "";
    }
  };

  const getTagClass = () => {
    switch (tag) {
      case "new": return "tag-new";
      case "bestseller": return "tag-bestseller";
      case "sold-out": return "tag-sold-out";
      default: return "";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="product-card group"
    >
      <Link to={`/product/${id}`} className="block">
        <div className="product-card-image relative aspect-square mb-5 overflow-hidden">
          {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}

          <img
            src={image}
            alt={name}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-contain p-2 transition-all duration-1000 ease-out group-hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Premium Tags */}
          {tag && (
            <div className="absolute top-4 left-4 z-20">
              <span className={getTagClass()}>
                {getTagLabel()}
              </span>
            </div>
          )}

          {/* Quick Add / View More indicator - Desktop only for cleaner mobile flow */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/10 backdrop-blur-md border-t border-white/20 hidden md:flex justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-black">View Details</span>
          </div>
        </div>

        {!hideDetails && (
          <div className="text-center space-y-1 md:space-y-1.5 px-1 md:px-2">
            <h3 className="font-serif text-base md:text-xl tracking-wide group-hover:opacity-70 transition-opacity duration-300">
              {name}
            </h3>
            <p className="text-[10px] md:text-sm font-light tracking-[0.1em] text-muted-foreground uppercase">
              {tag === "sold-out" ? (
                <span className="line-through opacity-50">{formatPrice(price)}</span>
              ) : (
                formatPrice(price)
              )}
            </p>
          </div>
        )}
      </Link>
    </motion.article>
  );
};
