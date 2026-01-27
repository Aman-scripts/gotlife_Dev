import { motion } from "framer-motion";

export const ContactSection = () => {
    return (
        <section className="py-16 md:py-20 bg-zinc-900 text-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto text-center"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3 block">
                        Get in Touch
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl mb-3">
                        Need Help Finding Your Scent?
                    </h2>
                    <p className="text-sm text-zinc-400 mb-8">
                        Our fragrance specialists are here to help you discover your perfect signature scent.
                    </p>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-white border border-zinc-300 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                        />
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-10 py-3.5 bg-white text-zinc-900 text-sm uppercase tracking-[0.15em] font-medium hover:bg-zinc-200 transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
