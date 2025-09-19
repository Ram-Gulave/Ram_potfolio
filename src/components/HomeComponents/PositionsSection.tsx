"use client";

import React from "react";
import Image from "next/image";
import "devicon/devicon.min.css";

// Position type and data
interface Position {
    title: string;
    logo: string;
}

const positions: Position[] = [
    {
        title: "Frontend Developer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        title: "Backend Developer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        title: "Fullstack Developer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        title: "UI/UX Designer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
        title: "DevOps Engineer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
        title: "Mobile App Developer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
        title: "Database Engineer",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    //   {
    //     title: "Cloud Engineer",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    //   },
];

// Single Position Card Component
const PositionCard: React.FC<{ position: Position }> = ({ position }) => {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition w-40">
            <div className="w-16 h-16 mb-4">
                <Image
                    src={position.logo}
                    alt={position.title}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-center">{position.title}</h3>
        </div>
    );
};

// Main Section Component
const PositionsSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="w-full">
                    {/* Heading with background glow */}
                    <div className="relative flex justify-center items-center mb-2">
                        {/* Faint blurred background */}
                        <div className="absolute inset-0 flex justify-center -z-10">
                            <div className="w-64 h-24 bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 blur-3xl opacity-30 rounded-full"></div>
                        </div>

                        {/* Gradient text */}
                        <h1 className="relative text-4xl sm:text-[60px] font-bold text-center bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Where I Fit
                        </h1>
                    </div>

                    {/* Description */}
                    <p className={`text-md sm:text-[16px] mb-4 text-center max-w-5xl mx-auto "text-white/90" : "text-gray-600"}`}>
                        Explore the roles and positions where my skills and experience make me a perfect fit — from{" "}
                        <span className="text-black font-semibold">
                            frontend and backend development, cloud computing, mobile applications, to DevOps and system architecture
                        </span>
                        . I bring a hands-on approach to building scalable, efficient, and user-friendly solutions that solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center sm:ml-12">
                    {positions.map((pos, index) => (
                        <PositionCard key={index} position={pos} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PositionsSection;
