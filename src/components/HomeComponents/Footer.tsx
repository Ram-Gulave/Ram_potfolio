// components/Footer.tsx
"use client";

import React, { JSX } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

// Single Footer Column Component
const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h4 className="text-white font-bold text-lg">{title}</h4>
    <div className="flex flex-col gap-2 text-gray-400">{children}</div>
  </div>
);

// Social Icon Component
const SocialIcon: React.FC<{ href: string; icon: JSX.Element }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ scale: 1.2, color: "#9f7aea" }}
    transition={{ type: "spring", stiffness: 300 }}
    className="text-white text-xl"
  >
    {icon}
  </motion.a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1117] text-gray-400 py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <FooterColumn title="About">
          <p className="text-sm">
            Hi, I’m Ram. I build scalable web and software solutions using modern technologies. Let’s connect and create something amazing.
          </p>
        </FooterColumn>

        {/* Quick Links */}
        <FooterColumn title="Quick Links">
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn title="Contact">
          <p className="text-sm">Email: <a href="mailto:gulaveram2@gmail.com" className="hover:text-purple-400 transition">gulaveram2@gmail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+919876543210" className="hover:text-purple-400 transition">+91 9307787825</a></p>
          <p className="text-sm">Location: Pune, India</p>
        </FooterColumn>

        {/* Socials */}
        <FooterColumn title="Follow Me">
          <div className="flex gap-4 mt-1">
            <SocialIcon href="https://github.com/Ram-Gulave" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/ramgulave/" icon={<FaLinkedin />} />
            <SocialIcon href="mailto:gulaveram2@gmail.com" icon={<FaEnvelope />} />
            <SocialIcon href="https://twitter.com/" icon={<FaTwitter />} />
          </div>
        </FooterColumn>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ram Gulave. All rights reserved. 
        <span className="block text-purple-400 mt-1 font-medium">Let’s build something legendary together.</span>
      </div>
    </footer>
  );
};

export default Footer;
