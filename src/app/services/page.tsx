"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Palette, Scissors, Home, PartyPopper, Briefcase, Monitor, Sparkles } from "lucide-react";

const services = [
    {
        title: "Custom Canvases",
        description: "Personalized paintings that capture your vision in vibrant color.",
        price: "From $200",
        icon: Palette,
        color: "text-coral",
    },
    {
        title: "Vinyl / Cricut Crafts",
        description: "Precision-cut designs for apparel, mugs, and more.",
        price: "From $45",
        icon: Scissors,
        color: "text-teal",
    },
    {
        title: "Home Décor",
        description: "Statement pieces that transform your living space.",
        price: "From $150",
        icon: Home,
        color: "text-yellow-pop",
    },
    {
        title: "Event Pieces",
        description: "Unforgettable decorations for weddings and parties.",
        price: "Custom Quote",
        icon: PartyPopper,
        color: "text-sky",
    },
    {
        title: "Corporate Gifts",
        description: "Branded luxury art for clients and partners.",
        price: "Bulk Pricing",
        icon: Briefcase,
        color: "text-gold",
    },
    {
        title: "Digital Art",
        description: "High-resolution digital illustrations and designs.",
        price: "From $100",
        icon: Monitor,
        color: "text-ink",
    },
    {
        title: "Seasonal Drops",
        description: "Limited edition collections for holidays and seasons.",
        price: "Varies",
        icon: Sparkles,
        color: "text-coral",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-pearl py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-header font-bold text-ink mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-ink/70 font-body max-w-2xl mx-auto">
                        From bespoke art to luxury décor, every piece is crafted with passion and a touch of anti-gravity magic.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:border-gold/50 transition-colors duration-300">
                                <div className={`w-16 h-16 rounded-full bg-pearl flex items-center justify-center mb-6 shadow-lg ${service.color}`}>
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-header font-bold text-ink mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-ink/60 font-body mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <span className="text-gold font-bold font-body">{service.price}</span>
                                    <Link href="/contact">
                                        <Button size="sm" variant="outline">Inquire</Button>
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
