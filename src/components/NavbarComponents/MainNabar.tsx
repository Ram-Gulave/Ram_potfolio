"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/internship.pdf" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-10 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.2)]" style={{ backdropFilter: "blur(40px)" }}>


      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-gray-800">Ram</div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center space-y-4 py-4"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-blue-600 transition"
              target={link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href.endsWith(".pdf") ? "noreferrer" : undefined}
            >
              {link.name}
            </a>

          ))}
        </motion.div>
      )}
    </div>
  );
}

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm">
      {/* Laptop/Desktop View */}
      <div className="hidden md:flex justify-center items-center">
        {!scrolled && (
          <div className="text-2xl font-bold text-gray-800 pl-10 mt-6 transition-all duration-300">
            Ram<span className="text-blue-600"></span>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto mt-4 rounded-4xl p-[2px] aura-gradient mr-68">
          <div className="flex items-center justify-between w-full px-6 py-1 bg-white backdrop-blur-3xl rounded-4xl shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ scale: 1.1, color: "#2563eb" }}
                  className="text-[#030101fd] font-medium transition"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <MobileNavbar />
    </nav>
  );
}

export default MainNavbar;
