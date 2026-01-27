"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, MousePointer2, Sparkles, ExternalLink, Send } from "lucide-react";
import PremiumProfileCard from "../../canvas/PremiumProfileCard";
import ProfileCard3D from "../../canvas/ProfileCard3D";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking untuk efek background CSS kamu (--x dan --y)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty("--x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--y", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const mySkills = [
        { label: "React / Next.js", value: 95, color: "#b06fec" },
        { label: "Tailwind CSS", value: 90, color: "#7c3aed" },
        { label: "TypeScript", value: 85, color: "#a855f7" },
    ];

    return (
        <>
            <section className="select-none relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
                <div className="max-w-[100rem] w-full flex justify-center gap-32 items-center">

                    {/* LEFT CONTENT: Text & SEO */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-200 text-sm mb-6 backdrop-blur-sm">
                            <Sparkles size={16} className="animate-pulse" />
                            <span>Welcome to Portofolio Bila</span>
                        </div>

                        <h1 className="[filter:drop-shadow(0_0_10px_rgba(00,00,00,0.5))] text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                            Halo! im<br />
                            <span className="bg-gradient-to-r from-[#b06fec] via-purple-300 to-white bg-clip-text text-transparent">
                                Frontend Developer
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-lg leading-relaxed">
                            Membangun pengalaman digital yang estetik dan interaktif dengan teknologi modern. Fokus pada UI/UX yang halus dan performa tinggi.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {/* Main CTA */}
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-[#b06fec] to-[#6f309f] rounded-2xl font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(176,111,236,0.4)] hover:shadow-[0_0_30px_rgba(176,111,236,0.6)] transition-all"
                            >
                                <ExternalLink size={20} />
                                Preview Website
                            </motion.a>

                            {/* Secondary CTA */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-white/20 rounded-2xl font-bold backdrop-blur-md flex items-center gap-2 transition-all"
                            >
                                <Send size={20} />
                                Contact Me
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex gap-6 text-white">
                            {[Github, Linkedin, MousePointer2].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: "#b06fec" }}
                                    className="transition-colors"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    <PremiumProfileCard
                        name="Sabilah Mudrikah"
                        title="Frontend Developer"
                        handle="sblhh.m"
                        avatarUrl="/image/myself/me.JPG"
                        status="Freelancer"
                    />
                </div>
            </section>
            {/* RIGHT CONTENT: 3D Visual Element */}
            <div className="flex justify-center items-center">
                <ProfileCard3D
                    name="Bila ✨"
                    tagline="Code with passion, Design with heart."
                    skills={mySkills}
                />
            </div>
        </>
    );
}