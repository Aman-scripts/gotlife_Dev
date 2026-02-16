import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out" | "bestseller";
  index?: number;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  tag,
  index = 0,
}: ProductCardProps) => {
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
      case "new":
        return "New";
      case "sold-out":
        return "Sold Out";
      case "bestseller":
        return "Bestseller";
      default:
        return "";
    }
  };

  const getTagClass = () => {
    switch (tag) {
      case "new":
      case "bestseller":
        return "tag-new";
      case "sold-out":
        return "tag-sold-out";
      default:
        return "";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card"
    >
      <Link to={`/product/${id}`} className="block">
        <div className="product-card-image relative aspect-[4/3] mb-0 bg-white overflow-hidden group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain scale-[1.4] transition-transform duration-700 group-hover:scale-[1.5]"
            loading="lazy"
          />

          {/* Tag */}
          {tag && (
            <div className="absolute top-2 left-2 z-10">
              <span className={getTagClass()}>
                {getTagLabel()}
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500" />
        </div>

        <div className="text-center pt-2">
          <h3 className="font-serif text-base md:text-lg tracking-wide transition-opacity duration-300 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            {tag === "sold-out" ? (
              <span className="line-through">{formatPrice(price)}</span>
            ) : (
              formatPrice(price)
            )}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
