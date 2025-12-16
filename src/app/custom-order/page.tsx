"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { Upload, Check } from "lucide-react";

export default function CustomOrderPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-pearl py-32 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-header font-bold text-ink mb-4">
                        Custom Commission
                    </h1>
                    <p className="text-lg text-ink/70 font-body">
                        Let's create something that defies gravity together.
                    </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-16 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-body transition-colors duration-300 ${step >= s ? "bg-gold text-ink" : "bg-white text-gray-400 border border-gray-200"
                                }`}
                        >
                            {step > s ? <Check size={16} /> : s}
                        </div>
                    ))}
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold/10 relative overflow-hidden"
                >
                    {/* Floating Background Element */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-coral/10 to-teal/10 rounded-full blur-3xl animate-pulse" />

                    {step === 1 && (
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-2xl font-header font-bold text-ink">The Vision</h2>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-ink uppercase tracking-wider">What are we creating?</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Canvas Art", "Sculpture", "Mural", "Other"].map((opt) => (
                                        <button
                                            key={opt}
                                            className="p-4 rounded-xl border border-gray-200 hover:border-gold hover:bg-gold/5 transition-all text-left font-body text-ink/80 focus:ring-2 focus:ring-gold focus:border-transparent"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-ink uppercase tracking-wider">Size Preference</label>
                                <input type="range" className="w-full accent-gold" />
                                <div className="flex justify-between text-xs text-gray-500 font-body">
                                    <span>Small</span>
                                    <span>Medium</span>
                                    <span>Statement Piece</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-2xl font-header font-bold text-ink">The Palette</h2>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-ink uppercase tracking-wider">Select Colors</label>
                                <div className="flex gap-4 flex-wrap">
                                    {["#FF6E6E", "#4AC9C1", "#F6D860", "#6CC8FF", "#D6B46A", "#0C0C0C"].map((color) => (
                                        <button
                                            key={color}
                                            className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-ink uppercase tracking-wider">Mood / Vibe</label>
                                <textarea
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none font-body"
                                    rows={4}
                                    placeholder="Describe the feeling you want to evoke..."
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-2xl font-header font-bold text-ink">Inspiration</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gold transition-colors cursor-pointer group">
                                <Upload className="mx-auto mb-4 text-gray-400 group-hover:text-gold transition-colors" size={48} />
                                <p className="text-ink/60 font-body">Drag and drop images or click to upload</p>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-8 relative z-10 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} />
                            </div>
                            <h2 className="text-3xl font-header font-bold text-ink">Ready to Launch?</h2>
                            <p className="text-ink/70 font-body">
                                We'll review your request and get back to you with a custom proposal within 48 hours.
                            </p>
                        </div>
                    )}

                    <div className="mt-12 flex justify-between">
                        {step > 1 && step < 4 && (
                            <Button variant="ghost" onClick={() => setStep(step - 1)}>
                                Back
                            </Button>
                        )}
                        {step < 4 ? (
                            <Button className="ml-auto" onClick={() => setStep(step + 1)}>
                                Next Step
                            </Button>
                        ) : (
                            <Button className="w-full" onClick={() => alert("Submitted!")}>
                                Submit Request
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
