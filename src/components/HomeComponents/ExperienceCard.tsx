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
        <section className="relative w-8xl my-4 rounded-t-3xl rounded-b-[40px]  overflow-hidden shadow-xl bg-white mx-4">
            {/* Top Glow / Shadow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-20 rounded-3xl"
                style={{
                    background: "radial-gradient(circle at top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 80%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 relative z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{title}</h2>

                    <div className="text-sm text-gray-500 mb-4 space-x-4">
                        {location && <span>📍 {location}</span>}
                        {type && <span>💼 {type}</span>}
                        {time && <span>🗓 {time}</span>}
                        {distance && <span>⏳ {distance}</span>}
                    </div>

                    <p className="text-gray-700 mb-6">{description}</p>

                    {techStack && (
                        <>
                            <h4 className="font-semibold text-lg mb-2 text-gray-800">Tech Stack:</h4>
                            <p className="text-sm text-gray-600 mb-6">{techStack}</p>
                        </>
                    )}

                    <div className="flex flex-wrap gap-3">
                        {links?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-[#f8afa6] text-white font-semibold shadow-md hover:opacity-90 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-[#f8afa6] text-white font-semibold shadow-md hover:opacity-90 transition"
                            >
                                Live Project
                            </a>
                        )}
                    </div>
                </div>

                <div className="relative w-full h-full flex justify-center items-center">
                    <div
                        className="absolute -inset-8 rounded-3xl"
                        style={{
                            background: "radial-gradient(circle, rgba(249,241,240,0.6) 0%, rgba(248,154,137,0.3) 80%)",
                            filter: "blur(60px)",
                            zIndex: 0,
                        }}
                    ></div>

                    <div
                        className="relative w-full h-full p-4 rounded-3xl shadow-lg overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #f9f1f0 0%, #fadcd9 50%, #f8afa6 100%)",
                        }}
                    >
                        <Image
                            src={heroImage}
                            alt={title}
                            width={800}
                            height={600}
                            className="rounded-2xl object-cover w-full h-full"
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
            time: "August 2025",
            distance: "2 months",
            techStack: "Next.js, Tailwind CSS, TypeScript, React, Sanity CMS",
            description:
                "Built a dynamic blog platform with content managed in Sanity CMS. Added SSR, SEO optimization, and responsive design for better performance.",
            links: [{ label: "Live Website", url: "https://macnman.com/blogs/" }],
            heroImage: "/image.png",
        },
        {
            title: "Documentation Website (Next.js + Docusaurus)",
            location: "Pune, India",
            type: "Intern",
            time: "July 2025",
            distance: "2 months",
            techStack: "Docusaurus, Tailwind CSS, React, TypeScript",
            description:
                "Developed a static documentation site using Docusaurus. Created a custom landing page to improve usability and SEO.",
            links: [{ label: "Live Website", url: "https://macnman.com/docs/" }],
            heroImage: "/docs.png",
        },
        {
            title: "Web Dev Intern",
            location: "Pune, India",
            type: "Intern",
            time: "June 2025 – September 2025",
            distance: "3 months",
            techStack: "Next.js, Tailwind CSS, TypeScript, React",
            description:
                "Collaborated on responsive UIs and logic-driven components using React, HTML, CSS, and JS. Delivered production-ready modules.",
            links: [{ label: "Live Website", url: "https://macnman.com" }],
            heroImage: "/main.png",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % experiences.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [experiences.length]);

    return (
        <div
            id="experience"
            className="scroll-mt-10 relative bg-[linear-gradient(135deg,#f9f1f0,#fadcd9,#f8afa6,#f79489)] pt-4 pb-1 sm:mx-18 mx-4 rounded-[40px] sm:mt-10 mt-10"
        >
            {/* Header Section */}
            <div className="max-w-8xl rounded-t-[40px] rounded-b-3xl bg-[linear-gradient(135deg,#f79489,#fadcd9,#f8afa6,#f79489)] sm:mx-4 mx-4">
                <div className="relative flex justify-center items-center">
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-64 h-2 bg-gradient-to-r from-pink-500 via-red-300 to-yellow-300 blur-3xl opacity-30 rounded-full"></div>
                    </div>

                    <h1 className="mt-4 relative text-4xl sm:text-[60px] font-bold text-center bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                        Experiences
                    </h1>
                </div>

                <p className="text-sm sm:text-lg text-center max-w-4xl mx-4 sm:mx-auto text-gray-700">
                    During my internships, I gained hands-on experience in web development,
                    building real-world projects that enhanced my skills in{" "}
                    <span className="font-semibold text-gray-800">
                        Next.js, React, Tailwind CSS, TypeScript, MERN Stack, Flask, Sanity
                    </span>
                    . These experiences improved my UI design, dynamic feature integration,
                    API work, database handling, and deployment workflows.
                </p>
            </div>



            <ExperienceCard {...experiences[index]} />
        </div>
    );
}
