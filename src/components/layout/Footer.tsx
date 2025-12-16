"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Pinterest", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-ink text-pearl py-20 px-6 md:px-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white">
                        LIZ HAPPY COLORS
                    </h2>
                    <p className="text-pearl/60 max-w-md font-body text-lg">
                        Where Color Meets Luxury — and Gravity Lets Go. Elevating craftsmanship into high art.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-gold font-header text-xl">Explore</h3>
                    <ul className="space-y-4">
                        {footerLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-pearl/70 hover:text-gold transition-colors font-body"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-gold font-header text-xl">Connect</h3>
                    <ul className="space-y-4">
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-pearl/70 hover:text-gold transition-colors font-body"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-pearl/40 text-sm font-body">
                <p>&copy; {new Date().getFullYear()} Liz Happy Colors. All rights reserved.</p>
                <p>Designed with Anti-Gravity.</p>
            </div>
        </footer>
    );
}
