"use client";

import { motion } from "framer-motion";
import HeroOrb from "@/components/3d/HeroOrb";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-pearl">
            <HeroOrb />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold text-ink leading-tight mb-6">
                        Where Color Meets <span className="text-gold italic">Luxury</span>
                        <br />
                        <span className="text-4xl md:text-6xl lg:text-7xl font-light block mt-2">
                            — and Gravity Lets Go.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg md:text-xl text-ink/70 font-body max-w-2xl mx-auto mb-10"
                >
                    Elevating craftsmanship into high art. Experience the weightless wonder of Liz Happy Colors.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Link href="/services">
                        <Button size="lg" className="min-w-[200px]">
                            Explore Services
                        </Button>
                    </Link>
                    <Link href="/shop">
                        <Button variant="outline" size="lg" className="min-w-[200px]">
                            Shop Creations
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-ink/0 via-ink/50 to-ink/0 animate-pulse" />
            </motion.div>
        </section>
    );
}
