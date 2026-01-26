import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out";
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card"
    >
      <Link to={`/product/${id}`} className="block">
        <div className="product-card-image relative aspect-[3/4] mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Tag */}
          {tag && (
            <div className="absolute top-4 left-4">
              <span className={tag === "new" ? "tag-new" : "tag-sold-out"}>
                {tag === "new" ? "New" : "Sold Out"}
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-serif text-base md:text-lg tracking-wide transition-opacity duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
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
