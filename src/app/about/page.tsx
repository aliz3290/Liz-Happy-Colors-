"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-pearl overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 px-6 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-header font-bold text-ink mb-6">
                            The Duo <br />
                            <span className="text-gold italic">Behind the Magic</span>
                        </h1>
                        <p className="text-lg text-ink/70 font-body leading-relaxed mb-8">
                            Welcome to Happy Colors, a family-owned studio led by mother-daughter team <strong>Anabil Liz</strong> and <strong>Anahely Liz</strong>. We believe that art shouldn't just hang on a wall—it should lift the spirit. Our work combines vibrant "Happy Colors" with a sense of weightlessness, creating pieces that feel like they're floating in a dream.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <Button>Get in Touch</Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline">View Our Work</Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] w-full rounded-full overflow-hidden border-4 border-gold/20"
                    >
                        {/* Placeholder for Duo Portrait */}
                        <div className="absolute inset-0 bg-gradient-to-br from-coral via-pearl to-teal opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-ink/20 font-header text-4xl text-center">Anabil & Anahely<br />Portrait</span>
                        </div>

                        {/* Floating Orbs Overlay */}
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-20 h-20 bg-yellow-pop rounded-full mix-blend-multiply blur-xl opacity-60"
                        />
                        <motion.div
                            animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-20 left-20 w-32 h-32 bg-sky rounded-full mix-blend-multiply blur-xl opacity-60"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-header font-bold text-ink mb-8">Why "Happy Colors"?</h2>
                        <p className="text-xl text-ink/80 font-body leading-relaxed">
                            For us, color is a language of love and energy. As a mother and daughter, we pour our shared passion into every creation. In a world that can sometimes feel heavy, we choose to create art that defies gravity—both literally and metaphorically. Our palette is chosen to spark joy, wonder, and a sense of infinite possibility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 bg-ink text-pearl">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Family Legacy", desc: "Two generations of creativity and craftsmanship." },
                        { title: "Handcrafted", desc: "Every detail meticulously finished by our hands." },
                        { title: "Wonder", desc: "Creating moments of pure magic together." },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-header font-bold text-gold mb-4">{item.title}</h3>
                            <p className="text-pearl/70 font-body">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
