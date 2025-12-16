"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const portfolioItems = [
    { id: 1, color: "bg-coral", title: "Neon Dreams", category: "Custom Art" },
    { id: 2, color: "bg-teal", title: "Oceanic Flow", category: "Resin Work" },
    { id: 3, color: "bg-yellow-pop", title: "Sunburst", category: "Decor" },
    { id: 4, color: "bg-sky", title: "Cloud Nine", category: "Installation" },
    { id: 5, color: "bg-gold", title: "Gilded Edge", category: "Sculpture" },
    { id: 6, color: "bg-ink", title: "Midnight", category: "Abstract" },
];

export default function PortfolioPreview() {
    return (
        <section className="py-32 px-6 bg-pearl">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-header font-bold text-ink mb-4">
                            Selected Works
                        </h2>
                        <div className="w-24 h-1 bg-gold rounded-full" />
                    </div>
                    <Link href="/portfolio">
                        <Button variant="outline" className="mt-6 md:mt-0">
                            View Full Gallery
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-none"
                            >
                                {/* Placeholder Gradient */}
                                <div className={`absolute inset-0 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-gold text-sm font-body uppercase tracking-widest mb-2 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-header font-bold text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
