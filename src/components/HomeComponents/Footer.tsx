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
    <footer className="text-[#eeecec] py-16 px-6 border-t border-[#555] mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <FooterColumn title="About">
          <p className="text-sm sm:text-[14px] -tracking-tight text-left text-[#8b8b8be0]">
            Hi, I’m Ram. I build scalable web and software solutions using modern technologies. Let’s connect and create something amazing.
          </p>
        </FooterColumn>

        {/* Quick Links */}
        <FooterColumn title="Quick Links" >
          <a href="#skills" className="    text-[#8b8b8be0] hover:text-[#eeecec] transition">Skills</a>
          <a href="#projects" className="  text-[#8b8b8be0] hover:text-[#eeecec] transition">Projects</a>
          <a href="#experience" className="text-[#8b8b8be0] hover:text-[#eeecec] transition">Experience</a>
          <a href="#contact" className="   text-[#8b8b8be0] hover:text-[#eeecec] transition">Contact</a>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn title="Contact">
          <p className="text-sm text-[#8b8b8be0]">Email: <a href="mailto:gulaveram2@gmail.com" className="text-[#8b8b8be0] hover:text-[#eeecec] transition">gulaveram2@gmail.com</a></p>
          <p className="text-sm text-[#8b8b8be0]">Phone: <a href="tel:+919876543210" className="text-[#8b8b8be0] hover:text-[#eeecec] transition">+91 9307787825</a></p>
          <p className="text-sm text-[#8b8b8be0]">Location: Pune, India</p>
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
      <div className="mt-12 border-t border-[#333] pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ram Gulave. All rights reserved. 
        <span className="block text-[#eeecec] -mb-10 font-medium">Let’s build something legendary together.</span>
      </div>
    </footer>
  );
};

export default Footer;
