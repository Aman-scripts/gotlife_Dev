import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
                        <h1 className="font-serif text-3xl md:text-4xl mb-8 border-b pb-4">Terms & Conditions</h1>
                        <p className="text-sm text-muted-foreground mb-8">Welcome to GOTLIFE.</p>

                        <section className="mb-8 font-serif italic text-lg text-center bg-zinc-50 py-10 border border-border">
                            "Guardian of Temptation"
                        </section>

                        <section className="mb-8">
                            <p className="text-base leading-relaxed">
                                These Terms & Conditions govern your access to and use of our website and services related to our perfume brand GOT. By accessing or using our website, you agree to comply with and be bound by these terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">1. Company Information</h2>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li><span className="font-semibold text-foreground">Company Name:</span> GOTLIFE</li>
                                <li><span className="font-semibold text-foreground">Brand:</span> GOT – “Guardian of Temptation”</li>
                                <li><span className="font-semibold text-foreground">Address:</span> Jalandhar City, Punjab – 144004</li>
                                <li><span className="font-semibold text-foreground">Phone:</span> +91-7696198105, 7526995636</li>
                                <li><span className="font-semibold text-foreground">Email:</span> gotlifefounder@gmail.com</li>
                                <li><span className="font-semibold text-foreground">Instagram:</span> @gotlifeofficial</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">2. Use of Website</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 text-justify">
                                <li>You must be at least 18 years of age to use this website or purchase products.</li>
                                <li>You agree to use this website only for lawful purposes.</li>
                                <li>Any misuse, unauthorized access, or attempt to disrupt website operations is strictly prohibited.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">3. Product Information</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 text-justify">
                                <li>We strive to display accurate product descriptions, images, pricing, and availability.</li>
                                <li>Fragrance notes, longevity, and performance may vary depending on skin type and usage conditions.</li>
                                <li>Product images are for illustration purposes and may slightly differ from actual packaging.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">4. Orders & Payments</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 text-justify">
                                <li>All orders placed through our website are subject to acceptance and availability.</li>
                                <li>Prices are listed in Indian Rupees (INR) and are inclusive/exclusive of taxes as mentioned.</li>
                                <li>Payments are processed securely via authorized third-party payment gateways.</li>
                                <li>GOTLIFE reserves the right to cancel or refuse any order at its sole discretion.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">5. Shipping & Delivery</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 text-justify">
                                <li>We aim to dispatch orders within the stated timelines; however, delivery times may vary due to logistics or unforeseen circumstances.</li>
                                <li>GOTLIFE is not responsible for delays caused by courier partners or natural events.</li>
                                <li>Accurate shipping details must be provided by the customer to avoid delivery issues.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">6. Returns, Refunds & Cancellations</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                Due to the nature of perfume and personal care products, returns or exchanges are accepted only in cases of:
                            </p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 mb-4">
                                <li>Damaged products</li>
                                <li>Manufacturing defects</li>
                                <li>Wrong product delivered</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mb-4 italic">
                                Any issues must be reported within 24–48 hours of delivery with proper images/video proof.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Refunds, if approved, will be processed to the original payment method within the standard banking timeframe.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">7. Intellectual Property</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                                All content on this website, including logos, brand names, text, images, videos, and designs, is the exclusive property of GOTLIFE and GOT. Unauthorized use, reproduction, or distribution is strictly prohibited.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">8. User Content & Reviews</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
                                Customers may submit reviews, feedback, or testimonials. By submitting content, you grant GOTLIFE the right to use, modify, and display it for marketing and promotional purposes.
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                                Offensive, misleading, or illegal content will be removed.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">9. Limitation of Liability</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">
                                GOTLIFE shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Use of perfumes is at the customer’s discretion. <span className="font-bold">Please perform a patch test before use.</span>
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">10. Privacy</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Your use of this website is also governed by our Privacy Policy, which explains how we collect and use personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">11. Third-Party Links</h2>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Our website may include links to third-party platforms (e.g., Instagram, marketplaces, payment services).</li>
                                <li>GOTLIFE is not responsible for the content or policies of these external sites.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">12. Governing Law & Jurisdiction</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                                Any disputes shall be subject to the jurisdiction of courts located in Punjab, India.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">13. Changes to Terms</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                GOTLIFE reserves the right to update or modify these Terms & Conditions at any time without prior notice.
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                                Changes will be effective immediately upon posting on this page.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
