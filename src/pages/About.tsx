import { motion } from "framer-motion";
import { Sparkles, Heart, Clock, Award, Shield, Leaf } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";

const About = () => {
    const features = [
        {
            icon: Sparkles,
            title: "Premium Quality",
            description:
                "We source only the finest ingredients from renowned perfume houses across France, India, and the Middle East.",
        },
        {
            icon: Clock,
            title: "Long-Lasting",
            description:
                "Our fragrances are crafted to last 8-12 hours, ensuring you smell captivating from morning to night.",
        },
        {
            icon: Award,
            title: "Affordable Luxury",
            description:
                "Experience premium fragrances without the premium price tag. Luxury should be accessible to everyone.",
        },
        {
            icon: Heart,
            title: "Made with Passion",
            description:
                "Every bottle is a labor of love, crafted by master perfumers with decades of experience.",
        },
        {
            icon: Shield,
            title: "Authentic Ingredients",
            description:
                "100% authentic fragrance oils with no harmful chemicals. Safe for all skin types.",
        },
        {
            icon: Leaf,
            title: "Sustainable",
            description:
                "Eco-friendly packaging and cruelty-free formulations. Beauty without compromise.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-20 md:py-28 text-center bg-zinc-900 text-white"
                >
                    <div className="container">
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3 block">Our Story</span>
                        <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-4">About GotLife</h1>
                        <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                            GotLife was born from a simple belief — that everyone deserves
                            to experience the transformative power of exquisite fragrances.
                        </p>
                    </div>
                </motion.section>

                {/* Brand Story */}
                <section className="py-12 md:py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-2xl md:text-3xl mb-4">
                                    The Art of Fragrance
                                </h2>
                                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <p>
                                        Founded in 2024, GotLife emerged from a passion to make luxury
                                        accessible. We believe that a great fragrance is not just a scent —
                                        it's an expression of identity, a memory in a bottle.
                                    </p>
                                    <p>
                                        Our master perfumers blend traditional craftsmanship with modern
                                        innovation, creating fragrances that resonate with contemporary
                                        sensibilities while honoring timeless elegance.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="grid grid-cols-2 gap-2"
                            >
                                <img src="/src/assets/products/perfume-1.jpg" alt="GotLife Collection" className="aspect-square object-cover" />
                                <img src="/src/assets/products/perfume-2.jpg" alt="GotLife Collection" className="aspect-square object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-12 md:py-16 bg-zinc-900 text-white">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-10"
                        >
                            <h2 className="font-serif text-2xl md:text-3xl mb-2 text-white">
                                Why Choose GotLife
                            </h2>
                            <p className="text-sm text-zinc-400">
                                We're committed to excellence in every aspect of our craft
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-5 bg-zinc-800 border border-zinc-700"
                                >
                                    <feature.icon className="h-6 w-6 mb-3 text-zinc-300" />
                                    <h3 className="font-serif text-base mb-1 text-white">{feature.title}</h3>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section className="py-12 md:py-16">
                    <div className="container text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">Our Vision</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                To become India's most loved premium fragrance brand, known for
                                quality, affordability, and innovation. We envision a world where
                                everyone can discover their signature scent without compromise.
                            </p>
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                                Crafted with love in India 🇮🇳
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default About;
