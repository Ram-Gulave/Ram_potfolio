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
        <section className="relative w-8xl my-2 rounded-xl  overflow-hidden  border-[0.5px] border-[#333] bg-[#0f0f0f]mx-4">
            {/* Top Glow / Shadow */}
            {/* <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-10 rounded-3xl"
                style={{
                    background: "radial-gradient(circle at top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 80%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                }}
            ></div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center p-8 relative z-10">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">{title}</h2>

                    <div className="text-[12px] text-[#8b8b8be0] mb-2 space-x-4">
                        {location && <span>📍 {location}</span>}
                        {type && <span>💼 {type}</span>}
                        {time && <span>🗓 {time}</span>}
                        {distance && <span>⏳ {distance}</span>}
                    </div>

                    <p className="sm:text-sm text-[#8b8b8be0] mb-6">{description}</p>

                    {techStack && (
                        <>
                            <h4 className="font-semibold text-lg mb-2 text-white">Tech Stack :
                                <span className="text-sm text-[#8b8b8be0] mb-6"> {techStack}</span>
                            </h4>
                        </>
                    )}

                    <div className="flex flex-wrap gap-3">
                        {links?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-[5px] bg-green-800 text-white rounded-md font-bold hover:bg-green-700 transition-all text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-[5px] bg-green-800 text-white rounded-md font-bold hover:bg-green-700 transition-all text-md"
                            >
                                Live Project
                            </a>
                        )}
                    </div>
                </div>

                <div className="relative w-full h-full flex justify-center items-center">
                    <div
                        className="relative w-full h-full  rounded-xl overflow-hidden"
                    >
                        <Image
                            src={heroImage}
                            alt={title}
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full h-full"
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
            title: "Blog Website",
            location: "Pune, India",
            type: "Intern",
            time: "August 2025",
            distance: "2 months",
            techStack: "Next.js, Tailwind CSS, TypeScript, React, Sanity CMS",
            description:
                "Built a dynamic blog platform with content managed in Sanity CMS. Added SSR, SEO optimization, and responsive design.",
            links: [{ label: "Live Website", url: "https://macnman.com/success-stories/" }],
            heroImage: "/image.png",
        },
        {
            title: "Documentation Website",
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
            title: "Marketing Website Macnman",
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
            className="scroll-mt-10 relative py-20 sm:mx-18 mx-4 rounded-[40px]"
        >
            {/* Header Section */}
            <div className="max-w-8xl rounded-t-[40px] sm:mx-4 mx-4">
                <div className="relative flex justify-start items-left">
                    {/* <div className="absolute inset-0 flex justify-center">
                        <div className="w-64 h-2  rounded-full"></div>
                    </div> */}

                    <h1 className="mt-4 relative text-4xl sm:text-[36px] font-bold text-left text-[#eeecec] pb-2">
                        Experience
                    </h1>
                </div>


                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                    <p className="text-sm sm:text-[16px] -tracking-tight text-left lg:w-[70%] text-[#8b8b8be0] lg:pr-8">
                        Gained hands-on experience in web development through real-world projects using{" "}
                        <span className="font-semibold text-[#b5b5b5]">
                            Next.js, React, Tailwind CSS, TypeScript, MERN, Flask, and Sanity
                        </span>
                        , strengthening UI design, APIs, databases, and deployment.
                    </p>


                    {/* Buttons - remaining ~30% width on large screens, aligned right */}
                    <div className="w-full lg:w-[30%] flex flex-col sm:flex-row justify-end items-end lg:justify-end gap-3 mb-10 sm:mb-0">
                        <a
                            href="/newResume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-1.5 py-1 bg-green-800 text-white rounded-lg font-bold hover:bg-green-700 transition-all text-sm text-center"
                        >
                            Go Through Resume
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-1.5 py-1 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-all text-sm text-center"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>



            <ExperienceCard {...experiences[index]} />
        </div>
    );
}
