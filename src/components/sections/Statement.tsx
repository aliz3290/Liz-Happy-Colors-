"use client";

import { motion } from "framer-motion";

export default function Statement() {
    return (
        <section className="py-32 px-6 bg-ink text-pearl relative overflow-hidden flex items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-header font-bold leading-tight"
                >
                    Craft is good.
                    <br />
                    <span className="text-gold">But Art + Innovation is iconic.</span>
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                    className="w-64 h-4 bg-gradient-to-r from-coral via-gold to-teal mt-8 mx-auto rounded-full blur-sm"
                />

                {/* Floating Brushstroke Effect (CSS/SVG) */}
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
                />
            </div>
        </section>
    );
}
