"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-ink text-pearl py-32 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-header font-bold text-white mb-8">
                        Get in <span className="text-gold italic">Touch</span>
                    </h1>
                    <p className="text-xl text-pearl/70 font-body mb-12 max-w-md">
                        Whether you're looking for a custom commission or just want to say hello, we'd love to hear from you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-gold font-bold font-header text-lg">Email</h3>
                                <p className="text-pearl/60 font-body">hello@lizhappycolors.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="text-gold font-bold font-header text-lg">Phone</h3>
                                <p className="text-pearl/60 font-body">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="text-gold font-bold font-header text-lg">Studio</h3>
                                <p className="text-pearl/60 font-body">123 Art District, Creative City</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-gold font-bold font-header text-lg mb-6">Follow the Magic</h3>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -4 }}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gold uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-pearl focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gold uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-pearl focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gold uppercase tracking-wider">Subject</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-pearl focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors [&>option]:text-ink">
                                <option>General Inquiry</option>
                                <option>Collaboration</option>
                                <option>Press</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gold uppercase tracking-wider">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-pearl focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <Button className="w-full bg-gold text-ink hover:bg-white hover:text-ink border-transparent">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
