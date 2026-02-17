import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "new" | "sold-out" | "bestseller";
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  hideDetails?: boolean;
}

export const ProductGrid = ({ products, columns = 3, hideDetails = false }: ProductGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-2 md:gap-4 lg:gap-6`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} {...product} index={index} hideDetails={hideDetails} />
      ))}
    </div>
  );
};
