"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-ink text-pearl border border-gold/50 hover:bg-gold hover:text-ink",
        secondary: "bg-gold text-ink hover:bg-ink hover:text-gold border border-transparent hover:border-gold",
        outline: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-pearl",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base",
    };

    return (
        <motion.button
            whileHover={{ y: -4, boxShadow: "0 10px 20px -10px rgba(214, 180, 106, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "rounded-full font-body uppercase tracking-widest transition-colors duration-300",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
