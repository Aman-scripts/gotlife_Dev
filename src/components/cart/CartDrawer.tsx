import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export const CartDrawer = () => {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-foreground/20 z-50"
                        onClick={() => setIsCartOpen(false)}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-0 right-0 bottom-0 w-[420px] max-w-[90vw] bg-background z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <div className="flex items-center space-x-2">
                                <ShoppingBag className="h-5 w-5" />
                                <span className="font-serif text-lg tracking-[0.1em]">
                                    Your Cart ({items.length})
                                </span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                aria-label="Close cart"
                                className="p-2 -mr-2 hover:opacity-60 transition-opacity"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                                    <p className="text-lg font-serif mb-2">Your cart is empty</p>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Discover our collection of artisanal fragrances
                                    </p>
                                    <Button
                                        variant="editorial"
                                        onClick={() => setIsCartOpen(false)}
                                        asChild
                                    >
                                        <Link to="/fragrances">Shop Fragrances</Link>
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div
                                            key={item.product.id}
                                            className="flex gap-4 pb-6 border-b border-border last:border-0"
                                        >
                                            <Link
                                                to={`/product/${item.product.id}`}
                                                onClick={() => setIsCartOpen(false)}
                                                className="w-20 h-24 bg-background-subtle overflow-hidden flex-shrink-0"
                                            >
                                                <img
                                                    src={item.product.image}
                                                    alt={item.product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </Link>
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    to={`/product/${item.product.id}`}
                                                    onClick={() => setIsCartOpen(false)}
                                                    className="font-serif text-base hover:underline block truncate"
                                                >
                                                    {item.product.name}
                                                </Link>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {item.product.size} · {item.product.concentration}
                                                </p>
                                                <p className="text-sm mt-2">
                                                    {formatPrice(item.product.price)}
                                                </p>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center border border-border">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity - 1)
                                                            }
                                                            className="p-2 hover:bg-secondary transition-colors"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="w-8 text-center text-xs">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.product.id, item.quantity + 1)
                                                            }
                                                            className="p-2 hover:bg-secondary transition-colors"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.product.id)}
                                                        className="text-xs text-muted-foreground hover:text-foreground underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-border space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">{formatPrice(getCartTotal())}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Shipping and taxes calculated at checkout
                                </p>
                                <div className="space-y-3">
                                    <Button
                                        variant="editorial"
                                        size="lg"
                                        className="w-full"
                                        onClick={() => setIsCartOpen(false)}
                                        asChild
                                    >
                                        <Link to="/cart">View Cart</Link>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
