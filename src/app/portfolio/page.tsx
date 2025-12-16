"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";

const categories = ["All", "Custom Art", "Decor", "Resin", "Sculpture"];

const portfolioItems = [
    { id: 1, title: "Neon Dreams", category: "Custom Art", height: "h-96", color: "bg-coral" },
    { id: 2, title: "Oceanic Flow", category: "Resin", height: "h-64", color: "bg-teal" },
    { id: 3, title: "Sunburst", category: "Decor", height: "h-80", color: "bg-yellow-pop" },
    { id: 4, title: "Cloud Nine", category: "Sculpture", height: "h-72", color: "bg-sky" },
    { id: 5, title: "Gilded Edge", category: "Custom Art", height: "h-96", color: "bg-gold" },
    { id: 6, title: "Midnight", category: "Resin", height: "h-64", color: "bg-ink" },
    { id: 7, title: "Floral Whisper", category: "Decor", height: "h-80", color: "bg-coral" },
    { id: 8, title: "Crystal Gaze", category: "Sculpture", height: "h-72", color: "bg-teal" },
    { id: 9, title: "Urban Pulse", category: "Custom Art", height: "h-96", color: "bg-yellow-pop" },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-pearl py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-header font-bold text-ink mb-6">
                        Portfolio
                    </h1>
                    <p className="text-xl text-ink/70 font-body max-w-2xl mx-auto mb-10">
                        A gallery of weightless wonders and happy colors.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "primary" : "outline"}
                                onClick={() => setActiveCategory(cat)}
                                size="sm"
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid"
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`relative rounded-2xl overflow-hidden group cursor-none ${item.height} ${item.color}`}
                            >
                                {/* Placeholder Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-white/80 text-xs font-body uppercase tracking-widest mb-1 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-header font-bold text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
