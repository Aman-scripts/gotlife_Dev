import { motion } from "framer-motion";

export const PerfumeLoader = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Perfume Bottle SVG Outline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <svg
                        width="80"
                        height="100"
                        viewBox="0 0 80 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-foreground"
                    >
                        {/* Bottle Body */}
                        <motion.rect
                            x="10"
                            y="30"
                            width="60"
                            height="60"
                            rx="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Bottle Cap */}
                        <motion.rect
                            x="25"
                            y="10"
                            width="30"
                            height="20"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        />
                        {/* "Filling" Liquid Effect */}
                        <motion.rect
                            x="14"
                            y="86"
                            width="52"
                            height="0"
                            fill="currentColor"
                            className="opacity-10"
                            animate={{ height: 52, y: 34 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Animated Sparkles */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-foreground rounded-full"
                            animate={{
                                scale: [0, 1.5, 0],
                                opacity: [0, 0.8, 0],
                                x: [0, (i % 2 === 0 ? 40 : -40), (i % 2 === 0 ? 60 : -60)],
                                y: [0, -40, -80],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeOut",
                            }}
                            style={{
                                left: i * 20 + "px",
                                top: "30px",
                            }}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                    <span className="font-serif text-sm tracking-[0.4em] uppercase opacity-60">
                        GotLife
                    </span>
                </motion.div>
            </div>
        </div>
    );
};
