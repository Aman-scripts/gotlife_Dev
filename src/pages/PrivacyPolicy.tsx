import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
                        <h1 className="font-serif text-3xl md:text-4xl mb-8 border-b pb-4">Privacy Policy</h1>
                        <p className="text-sm text-muted-foreground mb-8">Welcome to GOTLIFE.</p>

                        <section className="mb-8">
                            <p className="text-base leading-relaxed mb-6">
                                Your privacy is important to us, and we are committed to protecting the personal information you share with us through our website and services related to our perfume brand GOT.
                            </p>
                            <p className="text-base leading-relaxed mb-6">
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our brand.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">1. Information We Collect</h2>
                            <p className="mb-4">We may collect the following types of information:</p>
                            <div className="pl-6 space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">a) Personal Information</h3>
                                    <p className="text-sm text-muted-foreground">When you voluntarily provide it, such as:</p>
                                    <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                                        <li>Name</li>
                                        <li>Mobile number</li>
                                        <li>Email address</li>
                                        <li>Shipping and billing address</li>
                                        <li>Order and payment details (payment data is processed securely via third-party gateways)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">b) Non-Personal Information</h3>
                                    <p className="text-sm text-muted-foreground">Automatically collected information such as:</p>
                                    <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Device information</li>
                                        <li>Pages visited and time spent on our website</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4 text-sm text-muted-foreground">We use the collected information to:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Process and deliver your orders</li>
                                <li>Communicate order updates, offers, and promotions</li>
                                <li>Improve our products, services, and website experience</li>
                                <li>Respond to customer inquiries and support requests</li>
                                <li>Comply with legal and regulatory requirements</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">3. Cookies & Tracking Technologies</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                Our website may use cookies and similar technologies to:
                            </p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 mb-4">
                                <li>Enhance user experience</li>
                                <li>Understand website traffic and usage patterns</li>
                                <li>Remember your preferences</li>
                            </ul>
                            <p className="text-sm text-muted-foreground">
                                You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">4. Sharing of Information</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties.
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">We may share information only with:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Trusted service providers (delivery partners, payment gateways, marketing tools)</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4">
                                All third parties are obligated to keep your information secure and confidential.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">5. Data Security</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal data against:
                            </p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2 mb-4">
                                <li>Unauthorized access</li>
                                <li>Loss</li>
                                <li>Misuse</li>
                                <li>Alteration</li>
                            </ul>
                            <p className="text-sm text-muted-foreground italic">
                                However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">6. Third-Party Links</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our website may contain links to third-party websites or platforms (such as Instagram, marketplaces, or payment gateways). We are not responsible for the privacy practices or content of these external sites.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">7. Your Rights</h2>
                            <p className="mb-4 text-sm text-muted-foreground">You have the right to:</p>
                            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                                <li>Access your personal data</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Opt-out of promotional communications</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4">
                                To exercise these rights, please contact us using the details below.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">8. Children’s Privacy</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our products and services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-serif text-xl mb-4">9. Changes to This Privacy Policy</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                GOTLIFE reserves the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
