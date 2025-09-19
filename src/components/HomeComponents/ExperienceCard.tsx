"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ExperienceProps {
    title: string;
    description: string;
    techStack?: string;
    features?: string[];
    liveLink?: string;
    heroImage: string;
    location?: string;
    type?: string;
    time?: string;
    distance?: string;
    links?: { label: string; url: string }[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
    title,
    description,
    techStack,
    liveLink,
    heroImage,
    location,
    type,
    time,
    distance,
    links,
}) => {
    return (
        <section className="relative w-full max-w-6xl mx-auto my-16 rounded-3xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 shadow-xl overflow-hidden">
            {/* Top Shadow / Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-24 rounded-3xl"
                style={{
                    background:
                        "radial-gradient(circle at top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 80%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 relative z-10">
                {/* Left Content */}
                <div className="relative">
                    {/* Optional vertical line for larger screens */}
                    {/* <div className="hidden md:block absolute ml-10 top-[-100px] right-0 h-[1000px] w-[2px] bg-gray-300 rounded-4xl"/> */}

                    <h2 className="text-3xl font-bold mb-4">{title}</h2>

                    {/* Meta info */}
                    <div className="text-sm text-gray-600 mb-4 space-x-4">
                        {location && <span>📍 {location}</span>}
                        {type && <span>💼 {type}</span>}
                        {time && <span>🗓 {time}</span>}
                        {distance && <span>⏳ {distance}</span>}
                    </div>

                    <p className="text-gray-700 mb-6">{description}</p>

                    {techStack && (
                        <>
                            <h4 className="font-semibold text-lg mb-2">Tech Stack:</h4>
                            <p className="text-sm text-gray-600 mb-6">{techStack}</p>
                        </>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        {links?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-full bg-black text-white font-semibold shadow-md hover:opacity-90 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 rounded-full bg-black text-white font-semibold shadow-md hover:opacity-90 transition"
                            >
                                Live Project
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center w-full h-full relative">
                    {/* Outer Glow Layer */}
                    <div
                        className="absolute -inset-10 rounded-3xl"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(234,244,225,0.6) 0%, rgba(223,242,209,0.2) 80%)",
                            filter: "blur(80px)",
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Inner Image Container */}
                    <div
                        className="relative w-full h-full p-6 rounded-3xl shadow-xl z-10"
                        style={{
                            background:
                                "linear-gradient(135deg, #EAF4E1 0%, #FFFFFF 50%, #DFF2D1 100%)",
                        }}
                    >
                        <Image
                            src={heroImage}
                            alt={title}
                            width={1000}
                            height={800}
                            className="rounded-2xl shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

        </section>

    );
};

export default function ExperienceSection() {
    const experiences: ExperienceProps[] = [
        {
            title: "Blog Website (Next.js + Sanity CMS)",
            location: "Pune, India",
            type: "Intern",
            time: "2024",
            distance: "4 months",
            techStack:
                "Next.js, Tailwind CSS, TypeScript, React(ES6), Sanity CMS, Git/GitHub, NGINX",
            description:
                "Built a dynamic blog platform with content managed in Sanity CMS. Added SSR, SEO optimization, and responsive design for better performance.",
            links: [{ label: "Live Website", url: "https://macnman.com/blogs/" }],
            heroImage: "/image.png",
            features: [],
        },
        {
            title: "Documentation Website (Next.js + Docusaurus)",
            location: "Pune, India",
            type: "Intern",
            time: "2025",
            distance: "2 months",
            techStack:
                "Docusaurus, Tailwind CSS, React, Markdown/MDX, TypeScript, Git/GitHub, NGINX",
            description:
                "Developed a static documentation site using Docusaurus, aligned with the main product website’s design language. Optimized Docusaurus configuration for better SEO performance. Created a custom landing page to improve usability, navigation.",
            links: [{ label: "Live Website", url: "https://macnman.com/docs/" }],
            heroImage: "/docs.png",
            features: [],
        },
        {
            title: "Web Dev Intern",
            location: "Pune, India",
            type: "Intern",
            time: "June 2025 – September 2024",
            distance: "5 months",
            techStack:
                "Next.js, Tailwind CSS, TypeScript, React (ES6, JSX), jQuery, NPM, Git/GitHub, NGINX",
            description:
                "Built responsive UIs and logic-driven components using React, HTML, CSS, and JavaScript. Collaborated with senior devs to deliver production-ready modules.",
            links: [{ label: "Live Website", url: "https://macnman.com" }],
            heroImage: "/main.png",
            features: [],
        },
    ];

    const [index, setIndex] = useState(0);

    // Auto change every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % experiences.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [experiences.length]);

    return (
        <div
            id="experience"
            className="scroll-mt-10 relative">
            {/* Section Heading with glowing background */}
            <div className="w-full mb-[-50px] sm:mb-8">
                <div className="relative flex justify-center items-center mb-4">
                    {/* Faint blurred background */}
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-64 h-24 bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 blur-3xl opacity-30 rounded-full"></div>
                    </div>

                    {/* Gradient text */}
                    <h1 className="mt-10 relative text-4xl sm:text-[60px] font-bold text-center bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Experiences
                    </h1>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[16px] text-center max-w-5xl mx-4 sm:mx-auto text-gray-600 sm:mb-8 ">
                    During my internships, I gained hands-on experience in web development, working on real-world projects that enhanced my skills in{" "}
                    <span className="font-semibold text-black">
                        Next.js, React, Tailwind CSS, TypeScript, MERN Stack, Flask, and Sanity CMS
                    </span>
                    . These experiences allowed me to build responsive user interfaces, implement dynamic features, integrate APIs, and manage databases efficiently.
                    Each internship contributed to my understanding of professional development workflows, including version control, deployment, and collaboration with senior developers, resulting in production-ready applications and maintainable code.
                </p>
            </div>

            {/* Experience Card */}
            <ExperienceCard {...experiences[index]} />
        </div>
    );
}
