"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-gold rounded-full pointer-events-none z-[100] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -8,
                    y: -8,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[100] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -16,
                    y: -16,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
        </>
    );
}
