import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
    const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? (subtotal >= 2000 ? 0 : 99) : 0;
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="container py-6 border-b border-border">
                    <Link
                        to="/fragrances"
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Continue Shopping</span>
                    </Link>
                </div>

                <section className="container py-12 md:py-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-serif text-3xl md:text-4xl mb-8">Shopping Cart</h1>

                        {items.length === 0 ? (
                            <div className="text-center py-16 bg-background-subtle">
                                <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
                                <h2 className="font-serif text-2xl mb-2">Your cart is empty</h2>
                                <p className="text-muted-foreground mb-8">
                                    Looks like you haven't added any fragrances yet
                                </p>
                                <Button variant="editorial" asChild>
                                    <Link to="/fragrances">Explore Fragrances</Link>
                                </Button>
                            </div>
                        ) : (
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Cart Items */}
                                <div className="lg:col-span-2">
                                    <div className="border-b border-border pb-4 mb-6 hidden md:grid md:grid-cols-12 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                                        <span className="col-span-6">Product</span>
                                        <span className="col-span-2 text-center">Quantity</span>
                                        <span className="col-span-2 text-right">Price</span>
                                        <span className="col-span-2 text-right">Total</span>
                                    </div>

                                    <div className="space-y-6">
                                        {items.map((item) => (
                                            <motion.div
                                                key={item.product.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-border"
                                            >
                                                {/* Product Info */}
                                                <div className="md:col-span-6 flex gap-4">
                                                    <Link
                                                        to={`/product/${item.product.id}`}
                                                        className="w-24 h-28 bg-background-subtle overflow-hidden flex-shrink-0"
                                                    >
                                                        <img
                                                            src={item.product.image}
                                                            alt={item.product.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </Link>
                                                    <div>
                                                        <Link
                                                            to={`/product/${item.product.id}`}
                                                            className="font-serif text-lg hover:underline"
                                                        >
                                                            {item.product.name}
                                                        </Link>
                                                        <p className="text-xs text-muted-foreground mt-1">
                                                            {item.product.size} · {item.product.concentration}
                                                        </p>
                                                        <button
                                                            onClick={() => removeFromCart(item.product.id)}
                                                            className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-destructive mt-3 transition-colors"
                                                        >
                                                            <Trash2 className="h-3 w-3" />
                                                            <span>Remove</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Quantity */}
                                                <div className="md:col-span-2 flex items-center justify-start md:justify-center">
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
                                                        <span className="w-10 text-center text-sm">
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
                                                </div>

                                                {/* Price */}
                                                <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                                                    <span className="text-sm md:hidden mr-2 text-muted-foreground">Price:</span>
                                                    <span className="text-sm">{formatPrice(item.product.price)}</span>
                                                </div>

                                                {/* Total */}
                                                <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                                                    <span className="text-sm md:hidden mr-2 text-muted-foreground">Total:</span>
                                                    <span className="text-sm font-medium">
                                                        {formatPrice(item.product.price * item.quantity)}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex justify-between items-center">
                                        <button
                                            onClick={clearCart}
                                            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-destructive transition-colors"
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="bg-background-subtle p-6 sticky top-24">
                                        <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                                        <div className="space-y-4 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Subtotal</span>
                                                <span>{formatPrice(subtotal)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Shipping</span>
                                                <span>
                                                    {shipping === 0 ? (
                                                        <span className="text-green-600">Free</span>
                                                    ) : (
                                                        formatPrice(shipping)
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">GST (18%)</span>
                                                <span>{formatPrice(tax)}</span>
                                            </div>
                                            <div className="border-t border-border pt-4 flex justify-between font-medium text-base">
                                                <span>Total</span>
                                                <span>{formatPrice(total)}</span>
                                            </div>
                                        </div>

                                        {shipping > 0 && (
                                            <p className="text-xs text-muted-foreground mt-4">
                                                Free shipping on orders above ₹2,000
                                            </p>
                                        )}

                                        <Button variant="editorial" size="lg" className="w-full mt-6">
                                            Proceed to Checkout
                                        </Button>

                                        <p className="text-xs text-muted-foreground text-center mt-4">
                                            Secure checkout powered by trusted payment partners
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
