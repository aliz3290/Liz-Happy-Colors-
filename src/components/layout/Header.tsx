"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
                scrolled ? "bg-white/10 backdrop-blur-md border-b border-white/20 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="relative group">
                    <motion.h1
                        className="text-2xl md:text-3xl font-header font-bold text-ink tracking-wide"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        LIZ HAPPY COLORS
                        <motion.span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"
                        />
                    </motion.h1>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-ink/80 hover:text-ink font-body text-sm uppercase tracking-widest transition-colors group"
                        >
                            <motion.span
                                whileHover={{ y: -2 }}
                                className="inline-block"
                            >
                                {link.name}
                            </motion.span>
                            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-coral -translate-x-1/2 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                <motion.button
                    whileHover={{ y: -4, boxShadow: "0 10px 20px -10px rgba(214, 180, 106, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-6 py-2 bg-ink text-pearl font-body text-sm uppercase tracking-widest rounded-full border border-gold/50 hover:bg-gold hover:text-ink transition-all duration-300"
                >
                    Custom Order
                </motion.button>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-ink">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
}
