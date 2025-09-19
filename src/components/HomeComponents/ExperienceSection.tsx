"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experienceData"; // your data

// Hook to detect if screen is mobile (below a given width)
function useIsMobile(_breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function ExperienceSection() {
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const isMobile = useIsMobile(640); // you can change 640 to your mobile breakpoint  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experienceData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const exp = experienceData[current];

  return (
    <section
      id="projects"
      className={`
        scroll-mt-18
        flex justify-center
        p-4 sm:p-8
        transition-colors duration-500
        ${isDark
          ? "bg-[linear-gradient(180deg,#0b1220,rgba(9,14,19,0.6))] text-white rounded-[20px] sm:rounded-[40px] mb-8 sm:mb-10 mx-4 sm:mx-10"
          : "bg-gray-50 text-gray-900 mb-2 sm:mb-10 mx-4 sm:mx-10"
        }
      `}
      aria-label="Experience"
    >
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <div className="relative flex justify-center items-center mb-4 sm:mb-8">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-48 h-16 sm:w-64 sm:h-24 bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 blur-3xl opacity-30 rounded-full"></div>
          </div>
          <h1 className="relative text-3xl sm:text-4xl md:text-[60px] font-bold text-center bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
        </div>

        {/* Description */}
        <p className={`text-sm sm:text-md md:text-lg mb-4 text-center max-w-xs sm:max-w-md md:max-w-5xl mx-auto ${isDark ? "text-white/90" : "text-gray-600"}`}>
          A selection of my key web development projects, including internships, personal, and college projects. These highlight my skills in{" "}
          <span className="text-black font-semibold">
            Next.js, React, Tailwind CSS, MERN Stack, Flask, and Sanity CMS
          </span>, with a focus on building responsive interfaces, integrating APIs, managing databases, and deploying scalable applications. From e-commerce platforms to documentation sites and crypto trackers, these projects demonstrate real-world solutions with clean, maintainable code.
        </p>

        {isMobile ? (
          // ** MOBILE VIEW: one card only **
          <div className={`
            rounded-2xl
            p-4
            shadow-2xl
            border
            overflow-hidden
            backdrop-blur-md
            transition-colors duration-500
            ${isDark ? "bg-white/5 border-white/6" : "bg-white border-gray-200"}
          `}>
            <div className={`
              rounded-xl
              overflow-hidden
              border
              transition-colors duration-500
              ${isDark ? "border-white/8" : "border-gray-200"}
            `}>
              <motion.img
                key={exp.heroImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={exp.heroImage}
                alt={exp.title}
                className="w-full h-48 sm:h-64 object-cover object-center"
              />
            </div>

            {/* Title & meta */}
            <div className="mt-4">
              <motion.h2
                key={exp.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {exp.title}
              </motion.h2>
              <div className="flex items-center gap-2 mt-2">
                <span className={`px-2 py-0.5 text-xs sm:text-sm rounded-md ${isDark ? "bg-white/10 text-white/70" : "bg-gray-200 text-gray-700"}`}>
                  {exp.type}
                </span>
                <p className={`text-sm sm:text-base ${isDark ? "text-white/60" : "text-gray-600"}`}>
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <h3 className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-800"}`}>Tech Stack</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.elevation.split(",").map((tech, i) => (
                  <span key={i} className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-medium ${isDark ? "bg-white/10 text-white" : "bg-gray-200 text-gray-800"}`}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              key={exp.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`text-sm sm:text-base mt-4 ${isDark ? "text-white/60" : "text-gray-700"}`}
            >
              {exp.description}
            </motion.p>

            {/* Live Links */}
            <div className="mt-4 space-y-1 text-sm sm:text-base">
              {exp.links && exp.links.length > 0 ? (
                exp.links.map((link, idx) => (
                  <div key={idx} className={`${isDark ? "text-white/70" : "text-gray-800"}`}>
                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Live Website :</span>{" "}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${isDark ? "text-green-400" : "text-blue-600"}`}
                    >
                      {link.url}
                    </a>
                  </div>
                ))
              ) : (
                <div className={`text-sm ${isDark ? "text-red-400" : "text-red-600"}`}>
                  Live Website : <span className="italic">Currently Not Available</span>
                </div>
              )}
            </div>

            {/* Meta: duration & time */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className={`text-xs ${isDark ? "text-white/70" : "text-gray-600"}`}>Duration</div>
                <div className={`text-lg font-semibold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.distance}</div>
              </div>
              <div>
                <div className={`text-xs ${isDark ? "text-white/70" : "text-gray-600"}`}>Time</div>
                <div className={`text-lg font-semibold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.time}</div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-4">
              <h4 className={`text-sm ${isDark ? "text-white/80" : "text-gray-800"}`}>Features</h4>
              <ul className={`mt-2 text-xs sm:text-sm list-disc list-inside ${isDark ? "text-white/60" : "text-gray-700"} space-y-1`}>
                {exp.features && exp.features.length > 0
                  ? exp.features.map((feat, idx) => <li key={idx}>{feat}</li>)
                  : <li>No key features listed</li>
                }
              </ul>
            </div>

            {/* Dark mode toggle etc. */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500 ${isDark ? "bg-white/6 border-white/8" : "bg-gray-100 border-gray-300"}`}
              >
                {isDark ? "☀" : "🌙"}
              </button>
            </div>
          </div>
        ) : (
          // ** DESKTOP / TABLET version: full layout as original **
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
            {/* Left big card */}
            <div className={`
              lg:col-span-8
              col-span-1
              rounded-2xl
              p-6
              shadow-2xl
              border
              overflow-hidden
              backdrop-blur-md
              transition-colors duration-500
              ${isDark ? "bg-white/5 border-white/6" : "bg-white border-gray-200"}
            `}>
              <div className={`
                rounded-xl
                overflow-hidden
                border
                transition-colors duration-500
                ${isDark ? "border-white/8" : "border-gray-200"}
              `}>
                <motion.img
                  key={exp.heroImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={exp.heroImage}
                  alt={exp.title}
                  className="w-full h-[380px] object-cover object-center"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {/* Tech Stack */}
                <div className={`
                  col-span-1
                  rounded-xl
                  p-6
                  border
                  transition-colors duration-500
                  ${isDark ? "bg-white/3 border-white/6" : "bg-gray-100 border-gray-200"}
                `}>
                  <h3 className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-800"}`}>Tech Stack</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {exp.elevation.split(",").map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-xs font-medium ${isDark ? "bg-white/10 text-white" : "bg-gray-200 text-gray-800"}`}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration Chart */}
                <div className={`
                  col-span-1
                  rounded-xl
                  p-6
                  border
                  transition-colors duration-500
                  ${isDark ? "bg-white/3 border-white/6" : "bg-gray-100 border-gray-200"}
                `}>
                  <h3 className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-800"}`}>Project Durations (Months)</h3>
                  <div className="mt-4">
                    {(() => {
                      const durations = experienceData.map((d) => {
                        const m = d.distance.match(/\d+/);
                        return m ? parseInt(m[0], 10) : 0;
                      });
                      const maxVal = Math.max(...durations, 1);
                      const chartHeight = 120;
                      const padding = 30;
                      const projectSpacing = 60;
                      const chartWidth = padding * 2 + projectSpacing * (durations.length - 1);
                      const points = durations.map((val, i) => {
                        const x = padding + i * projectSpacing;
                        const y = chartHeight - padding - (val / maxVal) * (chartHeight - padding * 2);
                        return { x, y, label: experienceData[i].title, val };
                      });
                      const step = Math.max(2, Math.floor(maxVal / 4));
                      const ticks = [];
                      for (let i = 0; i <= maxVal; i += step) {
                        const y = chartHeight - padding - (i / maxVal) * (chartHeight - padding * 2);
                        ticks.push({ y, label: i });
                      }
                      return (
                        <svg
                          viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`}
                          className="w-full h-48"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
                            rx="6"
                          />
                          {ticks.map((tick, i) => (
                            <g key={i}>
                              <line
                                x1={padding}
                                x2={chartWidth - padding}
                                y1={tick.y}
                                y2={tick.y}
                                stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
                                strokeWidth="0.5"
                              />
                              <text
                                x={5}
                                y={tick.y + 3}
                                fontSize="8"
                                fill={isDark ? "white" : "black"}
                                opacity="0.7"
                              >
                                {tick.label}
                              </text>
                            </g>
                          ))}
                          <polyline
                            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
                            fill="none"
                            stroke={isDark ? "white" : "black"}
                            strokeWidth="2"
                          />
                          {points.map((p, i) => (
                            <g key={i}>
                              <circle
                                cx={p.x}
                                cy={p.y}
                                r="3"
                                fill={isDark ? "white" : "black"}
                              />
                              <text
                                x={p.x}
                                y={p.y - 8}
                                fontSize="8"
                                textAnchor="middle"
                                fill={isDark ? "white" : "black"}
                              >
                                {p.val}
                              </text>
                              <text
                                x={p.x}
                                y={chartHeight + 15}
                                fontSize="7"
                                textAnchor="middle"
                                fill={isDark ? "white" : "black"}
                                opacity="0.8"
                              >
                                {p.label.length > 12 ? p.label.slice(0, 12) + "…" : p.label}
                              </text>
                            </g>
                          ))}
                        </svg>
                      );
                    })()}
                  </div>
                  <div className={`text-xs mt-2 ${isDark ? "text-white/60" : "text-gray-600"}`}>
                    Duration of each project (months)
                  </div>
                </div>
              </div>

              {/* Live Links */}
              <div className="mt-3 space-y-1">
                {exp.links && exp.links.length > 0 ? (
                  exp.links.map((link, idx) => (
                    <div key={idx} className={`${isDark ? "text-white/70" : "text-gray-800"}`}>
                      <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Live Website :</span>{" "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline ${isDark ? "text-green-400" : "text-blue-600"}`}
                      >
                        {link.url}
                      </a>
                    </div>
                  ))
                ) : (
                  <div className={`mt-3 text-sm ${isDark ? "text-red-400" : "text-red-600"}`}>
                    Live Website : <span className="italic">Currently Not Available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right column */}
            <aside className="lg:col-span-4 col-span-1 flex flex-col gap-6">
              <div className={`
                rounded-2xl
                p-6
                border
                shadow-md
                backdrop-blur-md
                transition-colors duration-500
                ${isDark ? "bg-white/5 border-white/6" : "bg-white border-gray-200"}
              `}>
                <div className="flex items-start justify-between">
                  <div>
                    <motion.h2
                      key={exp.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`text-2xl font-extrabold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {exp.title}
                    </motion.h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`px-2 py-0.5 text-xs rounded-md ${isDark ? "bg-white/10 text-white/70" : "bg-gray-200 text-gray-700"}`}>
                        {exp.type}
                      </span>
                      <p className={`text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}>{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500 ${isDark ? "bg-white/6 border-white/8" : "bg-gray-100 border-gray-300"}`}>
                      🔔
                    </button>
                    <button
                      onClick={() => setIsDark(!isDark)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500 ${isDark ? "bg-white/6 border-white/8" : "bg-gray-100 border-gray-300"}`}
                    >
                      {isDark ? "☀" : "🌙"}
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-sm ${isDark ? "text-white/70" : "text-gray-600"}`}>Stack</div>
                    <div className={`text-lg font-semibold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.elevation}</div>
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? "text-white/70" : "text-gray-600"}`}>Duration</div>
                    <div className={`text-lg font-semibold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.distance}</div>
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? "text-white/70" : "text-gray-600"}`}>Time</div>
                    <div className={`text-lg font-semibold mt-1 ${isDark ? "text-white" : "text-gray-900"}`}>{exp.time}</div>
                  </div>
                </div>

                <motion.p
                  key={exp.description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className={`text-sm mt-4 ${isDark ? "text-white/60" : "text-gray-700"}`}
                >
                  {exp.description}
                </motion.p>
              </div>

              <div className={`
                rounded-2xl
                p-4
                border
                shadow-md
                backdrop-blur-md
                transition-colors duration-500
                ${isDark ? "bg-white/4 border-white/6" : "bg-gray-100 border-gray-200"}
              `}>
                <div className="flex items-center gap-4">
                  <div>
                    <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{exp.author?.name}</div>
                    <div className={`text-xs ${isDark ? "text-white/60" : "text-gray-600"}`}>@{exp.author?.name.split(" ")[0].toLowerCase()}</div>
                  </div>
                  <div className={`ml-auto text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}>⋯</div>
                </div>
              </div>

              <div className={`
                rounded-2xl
                p-5
                border
                shadow-inner
                transition-colors duration-500
                ${isDark ? "bg-gradient-to-b from-white/5 to-white/3 border-white/6" : "bg-gradient-to-b from-gray-100 to-gray-50 border-gray-200"}
              `}>
                <h4 className={`text-sm ${isDark ? "text-white/80" : "text-gray-800"}`}>Features</h4>
                <ul className={`mt-3 text-sm list-disc list-inside space-y-1 ${isDark ? "text-white/60" : "text-gray-700"}`}>
                  {exp.features && exp.features.length > 0
                    ? exp.features.map((feature, idx) => <li key={idx}>{feature}</li>)
                    : <li>No key features listed</li>
                  }
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
