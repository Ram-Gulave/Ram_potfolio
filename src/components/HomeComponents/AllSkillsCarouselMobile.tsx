
"use client";

import React, { useState, useEffect } from "react";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";
import Image from "next/image";

interface Props {
  categories: SkillCategoryType[];
  isDark: boolean;
  autoPlayInterval?: number; // ms
}

const AllSkillsCarouselMobile: React.FC<Props> = ({
  categories = [],
  isDark,
  autoPlayInterval = 5000,
}) => {
  const [mounted, setMounted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Mark as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance categories
  useEffect(() => {
    if (!categories.length || autoPlayInterval <= 0) return;
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, categories.length]);

  if (!mounted || categories.length === 0) return null;

  const cat = categories[currentCategory];

  return (
    <div className={`flex flex-col items-center w-full px-4 py-8 ${isDark ? "bg-gray-800 rounded-4xl" : "bg-gray-100"}`}>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
        {cat.title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {cat.skills.map((skill, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center p-2 bg-transparent rounded-lg`}
          >
            {skill.iconClass?.startsWith("devicon-") ? (
              <i
                className={skill.iconClass}
                style={{
                  fontSize: 28,
                  color: isDark ? "#FFF" : "#000",
                }}
              />
            ) : skill.iconPath ? (
              <Image
                src={skill.iconPath}
                alt={skill.name}
                width={28}
                height={28}
              />
            ) : (
              <span
                className="text-lg font-semibold"
                style={{ color: isDark ? "#FFF" : "#000" }}
              >
                {skill.name.charAt(0)}
              </span>
            )}
            <span
              className={`mt-2 text-xs text-center ${isDark ? "text-white/80" : "text-gray-700"}`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkillsCarouselMobile;
