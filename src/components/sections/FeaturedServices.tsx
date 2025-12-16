"use client";

import { motion } from "framer-motion";
import { Palette, Gift, Crown, Briefcase } from "lucide-react";
import Card from "@/components/ui/Card";

const services = [
    {
        title: "Custom Art",
        description: "Bespoke canvases that breathe life into your space.",
        icon: Palette,
        color: "text-coral",
    },
    {
        title: "Luxury Décor",
        description: "Handcrafted pieces that defy the ordinary.",
        icon: Crown,
        color: "text-gold",
    },
    {
        title: "Personalized Gifts",
        description: "Unique creations for those who deserve the best.",
        icon: Gift,
        color: "text-teal",
    },
    {
        title: "Corporate Commissions",
        description: "Elevate your brand with art that speaks volumes.",
        icon: Briefcase,
        color: "text-sky",
    },
];

export default function FeaturedServices() {
    return (
        <section className="py-24 px-6 bg-pearl relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-ink mb-4">
                        Our Craft
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm border-white/60 hover:border-gold/30 transition-colors">
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5,
                                    }}
                                    className={`mb-6 p-4 rounded-full bg-white shadow-lg ${service.color}`}
                                >
                                    <service.icon size={32} />
                                </motion.div>
                                <h3 className="text-xl font-header font-bold text-ink mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-ink/60 font-body text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
