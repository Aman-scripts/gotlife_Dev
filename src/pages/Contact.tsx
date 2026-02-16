import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Variants, motion } from "framer-motion";
import { Mail, Instagram, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formState);
        alert("Thank you for your message. We will get back to you soon!");
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <h2 className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4 font-medium">
                            Get in Touch
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight leading-tight">
                            Contact Us
                        </h1>
                        <div className="w-20 h-px bg-foreground/20 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                        {/* Contact Information */}
                        <motion.div className="space-y-12" variants={itemVariants}>
                            <div>
                                <h3 className="text-2xl font-serif mb-8 tracking-wide italic">Reach Out</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    Have questions about our collections or need assistance choosing your signature scent? Our concierge is here to help.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start group gap-6">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-1 text-muted-foreground">Email</h4>
                                        <p className="text-lg">hellogotlife@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start group gap-6">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background flex-shrink-0">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-1 text-muted-foreground">Instagram</h4>
                                        <p className="text-lg">@gotlifeofficial</p>
                                    </div>
                                </div>

                                <div className="flex items-start group gap-6">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-1 text-muted-foreground">Studio</h4>
                                        <p className="text-lg">Contemporary Fragrance House</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 md:p-12"
                            variants={itemVariants}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-widest font-medium">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-foreground transition-colors duration-300"
                                            placeholder="Jane Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-widest font-medium">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-foreground transition-colors duration-300"
                                            placeholder="jane@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs uppercase tracking-widest font-medium">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        className="w-full bg-transparent border-b border-border/60 py-3 focus:outline-none focus:border-foreground transition-colors duration-300"
                                        placeholder="Enquiry about..."
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        rows={4}
                                        className="w-full bg-transparent border border-border/60 p-4 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                                        placeholder="Tell us what's on your mind..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-foreground text-background py-5 px-8 font-medium uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    Send Message
                                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
