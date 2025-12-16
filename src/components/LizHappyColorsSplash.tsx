"use client";

import React from "react";

export function LizHappyColorsSplash() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/Liz-Happy-Colors-/media/liz-happy-colors-hero.mp4" type="video/mp4" />
                {/* Fallback text */}
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Centered content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
                <h1 className="text-4xl font-semibold uppercase tracking-[0.25em] text-white md:text-6xl">
                    Liz Happy Colors
                </h1>
                <p className="mt-4 max-w-md text-sm text-white/80 md:text-base">
                    Crafty chaos. Clean cuts. Loud vinyl energy for every project.
                </p>
            </div>
        </section>
    );
}
