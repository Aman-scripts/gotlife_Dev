import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const RefundPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-20 px-6">
                <div className="container max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-serif text-3xl md:text-4xl mb-8 border-b pb-4">Refund & Cancellation Policy</h1>
                        <p className="text-sm text-muted-foreground mb-8">Thank you for shopping with GOTLIFE.</p>

                        <section className="mb-8">
                            <p className="text-base leading-relaxed mb-6">
                                We value your trust in our perfume brand GOT and strive to ensure complete customer satisfaction. Please read this policy carefully before making a purchase.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">1. Order Cancellation</h2>
                            <div className="pl-6 space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">a) Cancellation Before Dispatch</h3>
                                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                                        <li>Orders can be cancelled before they are dispatched from our warehouse.</li>
                                        <li>To cancel an order, please contact us immediately via phone or email.</li>
                                        <li>If cancelled successfully, a full refund will be processed to the original payment method.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">b) Cancellation After Dispatch</h3>
                                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                                        <li>Once the order has been dispatched, cancellation requests will not be accepted.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">2. Returns Policy</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
                                Due to the nature of perfumes and personal care products, we do not accept returns or exchanges once the product has been delivered, except in the following cases:
                            </p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Product received is damaged</li>
                                <li>Product has a manufacturing defect</li>
                                <li>Wrong product delivered</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">3. Reporting an Issue</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Any issue must be reported within 24–48 hours of delivery.</li>
                                <li>Customers must provide clear images and/or unboxing video as proof.</li>
                                <li>Complaints raised after this period may not be accepted.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">4. Refund Eligibility</h2>
                            <p className="text-sm text-muted-foreground mb-4">Refunds will be initiated only if:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 mb-4">
                                <li>The complaint is verified and approved by our quality team.</li>
                                <li>The product is unused and in its original packaging (where applicable).</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mb-4">Depending on the case, we may offer:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Replacement of the product</li>
                                <li>Full or partial refund</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">5. Refund Process & Timeline</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Approved refunds will be processed within 5–7 business days.</li>
                                <li>Refunds will be credited to the original payment method used during purchase.</li>
                                <li>The actual credit time may vary depending on your bank or payment provider.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">6. Non-Refundable Items</h2>
                            <p className="text-sm text-muted-foreground mb-4">The following are non-refundable:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Used or opened perfume products</li>
                                <li>Products damaged due to customer misuse</li>
                                <li>Orders placed with incorrect shipping details</li>
                                <li>Delays caused by courier partners or force majeure events</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">7. Shipping Charges</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Shipping charges, if any, are non-refundable unless the return is due to our error.</li>
                                <li>In case of approved replacement, GOTLIFE will bear the return shipping cost.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">8. Damaged or Missing Items</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>If the package appears tampered with or damaged at the time of delivery, customers are advised not to accept the delivery and inform us immediately.</li>
                                <li>In case of missing items, please contact us within 24 hours of delivery.</li>
                            </ul>
                        </section>

                        <section className="mb-8 font-semibold">
                            <h2 className="font-serif text-xl mb-4">9. Changes to This Policy</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                GOTLIFE reserves the right to update or modify this Refund & Cancellation Policy at any time without prior notice. Changes will be effective immediately upon posting on this page.
                            </p>
                        </section>

                        <section className="mt-12 p-8 border border-border bg-zinc-50">
                            <h2 className="font-serif text-xl mb-6 text-center">Contact Us</h2>
                            <p className="text-center text-sm text-muted-foreground mb-6">For any refund, return, or cancellation-related queries, please contact:</p>
                            <div className="text-center text-sm space-y-2">
                                <p className="font-bold">GOTLIFE</p>
                                <p>Jalandhar City, Punjab – 144004</p>
                                <p>+91-7696198105, 7526995636</p>
                                <p>gotlifefounder@gmail.com</p>
                                <p>Instagram: @gotlifeofficial</p>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
