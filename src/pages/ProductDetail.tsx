import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProductById, products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity}x ${product.name} added to your cart`,
      });
      setQuantity(1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
            <Link to="/" className="btn-outline inline-block">
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const isSoldOut = product.tag === "sold-out";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-6 border-b border-border">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Collection</span>
          </Link>
        </div>

        {/* Product Section */}
        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="relative aspect-[4/3] bg-white border border-border/50 overflow-hidden group">
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={product.images[activeImageIndex]}
                  alt={`${product.name} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain scale-[1.4]"
                />

                {product.tag && (
                  <div className="absolute top-6 left-6">
                    <span
                      className={
                        product.tag === "new" || product.tag === "bestseller" ? "tag-new" : "tag-sold-out"
                      }
                    >
                      {product.tag === "new" ? "New" : product.tag === "bestseller" ? "Bestseller" : "Sold Out"}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails Slider Navigation */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevImage}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors shrink-0"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex-1 grid grid-cols-5 gap-3">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`aspect-square transition-all duration-300 overflow-hidden bg-white ${activeImageIndex === idx ? "ring-2 ring-foreground z-10" : "opacity-60 hover:opacity-100"
                          }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={nextImage}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors shrink-0"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {product.concentration} · {product.size}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl">
                  {isSoldOut ? (
                    <span className="line-through text-muted-foreground">
                      {formatPrice(product.price)}
                    </span>
                  ) : (
                    formatPrice(product.price)
                  )}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Fragrance Notes */}
              <div className="mb-8 space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] mb-4">
                  Fragrance Notes
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Top
                    </p>
                    {product.notes.top.map((note) => (
                      <p key={note} className="text-sm">
                        {note}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Heart
                    </p>
                    {product.notes.heart.map((note) => (
                      <p key={note} className="text-sm">
                        {note}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Base
                    </p>
                    {product.notes.base.map((note) => (
                      <p key={note} className="text-sm">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              {!isSoldOut && (
                <div className="flex flex-row gap-3 mb-8">
                  <div className="flex items-center border border-border shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-3 hover:bg-secondary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-3 hover:bg-secondary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <Button variant="editorial" size="lg" className="flex-1 text-xs tracking-[0.2em] h-[46px]" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </div>
              )}

              {isSoldOut && (
                <div className="mb-8">
                  <Button variant="editorial" size="lg" disabled className="w-full opacity-50">
                    Sold Out
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Join our newsletter to be notified when this fragrance returns.
                  </p>
                </div>
              )}

              {/* Additional Info */}
              <div className="border-t border-border pt-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span className="capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Concentration</span>
                  <span>{product.concentration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Size</span>
                  <span>{product.size}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border py-16 md:py-24">
            <div className="container">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <ProductCard key={product.id} {...product} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
