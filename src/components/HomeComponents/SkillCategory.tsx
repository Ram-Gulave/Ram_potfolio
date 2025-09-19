

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";
import Image from "next/image";

interface Props {
  categories: SkillCategoryType[];
  isDark: boolean;
  autoPlayInterval?: number; // ms
}

const AllSkillsCarousel: React.FC<Props> = ({
  categories = [],
  isDark,
  autoPlayInterval = 5000,
}) => {
  const [mounted, setMounted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Mark component as mounted
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

  if (!mounted || !categories.length) return null;

  const nextCategoryIndex = (currentCategory + 1) % categories.length;

  // Random positions for skills in a circle
  const getCirclePositions = (num: number, radiusX: number, radiusY: number) => {
    const variation = 20;
    const scaleMin = 0.8;
    const scaleMax = 1.6;
    return Array.from({ length: num }).map((_, idx) => {
      const angle = (2 * Math.PI * idx) / num;
      const x = Math.cos(angle) * radiusX + (Math.random() * variation - variation / 2);
      const y = Math.sin(angle) * radiusY + (Math.random() * variation - variation / 2);
      const scale = scaleMin + Math.random() * (scaleMax - scaleMin);
      return { x, y, scale };
    });
  };

  // Random background positions for skill labels
  const getRandomBackgroundPositions = (num: number, width: number, height: number) => {
    return Array.from({ length: num }).map(() => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      fontSize: Math.random() * 16 + 12,
    }));
  };

  // Render one category (foreground or background)
  const renderCategory = (
    cat: SkillCategoryType,
    style: {
      scale: number;
      opacity: number;
      radiusX: number;
      radiusY: number;
      y?: number;
      isBackground?: boolean;
    }
  ) => {
    const positions = getCirclePositions(cat.skills.length, style.radiusX, style.radiusY);
    const bgPositions = getRandomBackgroundPositions(cat.skills.length, style.radiusX * 2, style.radiusY * 2);

    return (
      <motion.div
        key={cat.title}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        initial={{ scale: style.scale, opacity: 0, y: style.y ?? 20 }}
        animate={{ scale: style.scale, opacity: style.opacity, y: style.y ?? 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: style.isBackground ? 30 : 25,
          mass: 0.8,
        }}
        layout
      >
        {/* Background label */}
        {!style.isBackground && (
          <div
            className="absolute text-8xl font-bold text-center pointer-events-none select-none"
            style={{
              opacity: 0.05,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              color: isDark ? "#ffffff" : "#000000",
            }}
          >
            {cat.title}
          </div>
        )}

        {/* Background skill labels */}
        {!style.isBackground && (
          <div className="absolute inset-0 pointer-events-none">
            {cat.skills.map((skill, idx) => {
              const pos = bgPositions[idx];
              return (
                <span
                  key={`bg-skill-${idx}`}
                  className="absolute font-semibold select-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    opacity: 0.1,
                    color: isDark ? "#ffffff" : "#000000",
                    fontSize: `${pos.fontSize}px`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        )}

        {/* Category header */}
        {!style.isBackground && (
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 z-10 relative">
            {cat.iconClass && <i className={`${cat.iconClass} text-4xl`} />}
            {cat.iconPath && (
              <Image src={cat.iconPath} alt={cat.title} width={40} height={40} />
            )}
            {cat.title}
          </h3>
        )}

        {/* Skill icons */}
        <div className="relative w-full overflow-visible" style={{ height: style.radiusY * 2 + 250 }}>
          {cat.skills.map((skill, idx) => {
            const { x, y, scale } = positions[idx];
            return (
              <motion.div
                key={`${skill.name}-${idx}`}
                className={`absolute flex flex-col items-center p-4 rounded-xl shadow-md ${
                  style.isBackground ? "bg-gray-800/20" : "bg-gray-800/40"
                }`}
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                initial={{ x, y, scale: scale * 0.6, opacity: 0 }}
                animate={{ x, y, scale, opacity: style.opacity }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.03 }}
                layout
              >
                {skill.iconClass?.startsWith("devicon-") ? (
                  <i
                    className={skill.iconClass}
                    style={{ fontSize: `${34 * scale}px`, opacity: style.isBackground ? 0.3 : 1 }}
                  />
                ) : skill.iconPath ? (
                  <Image
                    src={skill.iconPath}
                    alt={skill.name}
                    width={Math.round(34 * scale)}
                    height={Math.round(34 * scale)}
                    className="object-contain"
                    style={{ opacity: style.isBackground ? 0.3 : 1 }}
                  />
                ) : (
                  <span className="text-xl font-semibold" style={{ fontSize: `${10 * scale}px`, opacity: style.isBackground ? 0.3 : 1 }}>
                    {skill.name.charAt(0)}
                  </span>
                )}
                <span className="mt-2 text-sm text-center" style={{ fontSize: `${12 * scale}px`, opacity: style.isBackground ? 0.3 : 1 }}>
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  const foregroundRadiusY = 200;
  const backgroundRadiusY = 150;
  const containerHeight = Math.max(foregroundRadiusY * 2, backgroundRadiusY * 2) + 350;

  return (
    <div className="relative flex flex-col items-center w-full overflow-visible" style={{ minHeight: containerHeight, paddingBottom: 120 }}>
      <div className="relative w-full overflow-visible" style={{ minHeight: containerHeight }}>
        {/* Background Category */}
        {renderCategory(categories[nextCategoryIndex], {
          scale: 0.85,
          opacity: 0.35,
          radiusX: 300,
          radiusY: backgroundRadiusY,
          y: 20,
          isBackground: true,
        })}

        {/* Foreground Category */}
        {renderCategory(categories[currentCategory], {
          scale: 1,
          opacity: 1,
          radiusX: 400,
          radiusY: foregroundRadiusY,
          y: 0,
        })}

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <button
            onClick={() => setCurrentCategory((prev) => (prev === 0 ? categories.length - 1 : prev - 1))}
            className={`p-4 py-3 rounded-full shadow-lg z-30 pointer-events-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}
          >
            ◀
          </button>
          <button
            onClick={() => setCurrentCategory((prev) => (prev === categories.length - 1 ? 0 : prev + 1))}
            className={`p-4 py-3 rounded-full shadow-lg z-30 pointer-events-auto ${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllSkillsCarousel;
