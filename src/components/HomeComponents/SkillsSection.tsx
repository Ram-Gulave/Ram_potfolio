"use client";

import React, { useState, useEffect } from "react";
import { skills } from "@/data/skills";
import AllSkillsCarousel from "./SkillCategory";
import AllSkillsCarouselMobile from "./AllSkillsCarouselMobile";
import { motion } from "framer-motion";

const SkillsSection: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newVal = !prev;
      localStorage.setItem("theme", newVal ? "dark" : "light");
      return newVal;
    });
  };

  return (
    <section
      className={`scroll-mt-18 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      id="skills"
    >
      <div className="w-full p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl sm:text-[60px] font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md border transition-colors duration-500"
            style={{
              borderColor: isDark ? "#ffffff" : "#333333",
            }}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile View */}
          <div className="block sm:hidden">
            <AllSkillsCarouselMobile
              categories={skills}
              isDark={isDark}
              autoPlayInterval={4000}
            />
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <AllSkillsCarousel
              categories={skills}
              isDark={isDark}
              autoPlayInterval={4000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
