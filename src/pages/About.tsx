import { motion } from "framer-motion";
import { Sparkles, Heart, Clock, Award, Shield, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";
import blackAttireImg from "@/assets/products/Mens/GOT BLACK ATTIRE FOR HIM IMAGES/first.png";

const About = () => {
    const highlights = [
        {
            icon: Sparkles,
            title: "Premium Quality",
            description: "Inspired by global luxury standards, our perfumes combine premium-quality fragrances with long-lasting performance.",
        },
        {
            icon: Clock,
            title: "Long-Lasting",
            description: "Designed for Indian weather to ensure richesse, depth, and longevity that stands out.",
        },
        {
            icon: Award,
            title: "Affordable Luxury",
            description: "Premium fragrances at accessible prices, because luxury should be for everyone who dares to stand out.",
        },
    ];

    const promises = [
        {
            icon: Shield,
            title: "Quality you can trust",
            description: "Carefully selected and tested formulations to ensure global standards.",
        },
        {
            icon: Heart,
            title: "Scents that last",
            description: "Crafted for real moments, elevating your presence throughout the day.",
        },
        {
            icon: TrendingUp,
            title: "Confidence that stays",
            description: "Helping you 'LEAVE YOUR MARK' with an irresistible presence.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero  Section*/}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-24 md:py-32 text-center bg-black text-white relative overflow-hidden"
                >
                    <div className="container relative z-10">
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4 block">About GOTLIFE</span>
                        <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">More Than a Company — It's a Mindset</h1>
                        <p className="text-sm md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                            Born from a passion for self-expression and confidence, GOTLIFE was created to build brands that leave a lasting impression.
                        </p>
                    </div>
                </motion.section>

                {/* Our Story */}
                <section className="py-20 md:py-28">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Story</span>
                                <h2 className="font-serif text-3xl md:text-4xl mb-8">Elegance, Power, and Irresistible Presence</h2>
                                <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                                    <p>
                                        At GOTLIFE, we believe fragrance is not just something you wear — it’s something you become. Every scent under our flagship brand <span className="text-foreground font-semibold">GOT</span> is designed to enhance your personality and elevate your moments.
                                    </p>
                                    <p>
                                        Inspired by modern luxury yet crafted for everyday wear, our perfumes help you make a statement without saying a word. We combine premium-quality fragrances with long-lasting performance at accessible prices.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/5] bg-zinc-100 overflow-hidden"
                            >
                                <img
                                    src={blackAttireImg}
                                    alt="GOT Black Attire"
                                    className="object-contain w-full h-full bg-white hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 border-[20px] border-white/10 m-4 pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="py-20 md:py-28 bg-zinc-50 border-y border-border">
                    <div className="container text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto"
                        >
                            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Philosophy</span>
                            <h2 className="font-serif text-3xl md:text-5xl mb-8 italic">"Your fragrance should speak before you do."</h2>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-12">
                                From weddings and celebrations to everyday confidence, our perfumes are created to match every mood, moment, and memory. Each formulation is carefully selected and tested to ensure richness, depth, and longevity that stands out.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="p-8 bg-white border border-border hover:shadow-xl transition-shadow duration-500"
                                    >
                                        <Icon className="h-8 w-8 mb-6 mx-auto text-zinc-400" />
                                        <h3 className="font-serif text-lg mb-3 uppercase tracking-wider">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Vision & Promise */}
                <section className="py-20 md:py-28">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Vision</h2>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                                    Our vision is to build GOT into a trusted Indian fragrance brand that competes with global names, while staying rooted in authenticity, quality, and value. We aim to make luxury fragrances accessible to everyone who dares to stand out.
                                </p>
                                <div className="p-6 bg-zinc-900 text-white inline-block">
                                    <p className="text-xs uppercase tracking-[0.3em]">Crafted for real moments</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Promise</h2>
                                {promises.map((promise) => {
                                    const Icon = promise.icon;
                                    return (
                                        <div key={promise.title} className="flex gap-4">
                                            <div className="mt-1">
                                                <Icon className="h-5 w-5 text-zinc-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-sm mb-1">{promise.title}</h3>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{promise.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default About;
