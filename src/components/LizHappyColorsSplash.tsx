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


        </section>
    );
}
