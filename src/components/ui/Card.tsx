"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
