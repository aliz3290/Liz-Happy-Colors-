"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "Absolutely stunning. The colors vibrate with energy, and the anti-gravity theme is unlike anything I've seen.",
        author: "Sarah J.",
        role: "Interior Designer",
        offset: 0,
    },
    {
        id: 2,
        text: "Liz took my vision and elevated it. Literally. The floating installation is the centerpiece of our lobby.",
        author: "Michael R.",
        role: "Hotel Manager",
        offset: 20,
    },
    {
        id: 3,
        text: "A true artist who understands the soul of color. Every piece tells a story of joy and luxury.",
        author: "Elena D.",
        role: "Art Collector",
        offset: -10,
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden relative">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-ink mb-4">
                        Voices of Delight
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 1.5,
                                }}
                                className="bg-pearl p-8 rounded-2xl border border-gold/20 shadow-lg relative z-10"
                                style={{ marginTop: t.offset }}
                            >
                                <div className="text-gold text-4xl font-header mb-4">“</div>
                                <p className="text-ink/80 font-body italic mb-6 leading-relaxed">
                                    {t.text}
                                </p>
                                <div>
                                    <h4 className="font-header font-bold text-lg text-ink">
                                        {t.author}
                                    </h4>
                                    <span className="text-sm text-ink/50 uppercase tracking-wider">
                                        {t.role}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
