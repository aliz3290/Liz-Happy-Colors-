"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ShoppingBag, Star, Sparkles } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Levitating Cube",
        price: "$250",
        category: "Anti-Gravity Edition",
        imageColor: "bg-coral",
        isNew: true,
    },
    {
        id: 2,
        name: "Floating Planter",
        price: "$180",
        category: "Decor",
        imageColor: "bg-teal",
        isNew: false,
    },
    {
        id: 3,
        name: "Gravity-Defying Mug",
        price: "$45",
        category: "Kitchen",
        imageColor: "bg-yellow-pop",
        isNew: false,
    },
    {
        id: 4,
        name: "Suspended Frame",
        price: "$120",
        category: "Anti-Gravity Edition",
        imageColor: "bg-sky",
        isNew: true,
    },
    {
        id: 5,
        name: "Hover Lamp",
        price: "$300",
        category: "Lighting",
        imageColor: "bg-gold",
        isNew: false,
    },
    {
        id: 6,
        name: "Zero-G Sculpture",
        price: "$450",
        category: "Art",
        imageColor: "bg-ink",
        isNew: true,
    },
];

export default function ShopPage() {
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
                        The Shop
                    </h1>
                    <p className="text-xl text-ink/70 font-body max-w-2xl mx-auto">
                        Own a piece of the magic. Handcrafted, luxury items that bring a touch of the impossible to your home.
                    </p>
                </motion.div>

                {/* Anti-Gravity Edition Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <Sparkles className="text-gold" size={32} />
                        <h2 className="text-3xl font-header font-bold text-ink">Anti-Gravity Edition</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.filter(p => p.category === "Anti-Gravity Edition").map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group cursor-pointer overflow-hidden">
                                    <div className={`aspect-square rounded-xl mb-6 relative ${product.imageColor} flex items-center justify-center`}>
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-lg shadow-lg"
                                        />
                                        {product.isNew && (
                                            <span className="absolute top-4 right-4 bg-ink text-pearl text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-header font-bold text-ink group-hover:text-gold transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-ink/50 text-sm font-body">{product.category}</p>
                                        </div>
                                        <span className="text-lg font-bold text-ink">{product.price}</span>
                                    </div>
                                    <Button className="w-full">Add to Cart</Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* All Products Grid */}
                <div>
                    <h2 className="text-3xl font-header font-bold text-ink mb-8">All Collections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.filter(p => p.category !== "Anti-Gravity Edition").map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group cursor-pointer hover:border-gold/30 transition-colors">
                                    <div className={`aspect-[4/3] rounded-xl mb-4 relative ${product.imageColor} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                    <h3 className="text-lg font-header font-bold text-ink mb-1">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-ink/50 text-sm">{product.category}</p>
                                        <span className="font-bold text-ink">{product.price}</span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
