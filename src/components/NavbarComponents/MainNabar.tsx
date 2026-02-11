// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Experience", href: "#experience" },
//   { name: "Technologies", href: "#technologies" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Contact", href: "#contact" },
//   { name: "Resume", href: "/newResume.pdf" },
// ];

// function MobileNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="md:hidden fixed top-0 left-0 w-full z-10 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
//       style={{ backdropFilter: "blur(40px)" }}
//     >
//       <div className="flex items-center justify-between px-6 py-3">
//         <div className="text-2xl font-bold text-gray-800">Ram</div>
//         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="flex flex-col items-center space-y-4 py-4"
//         >
//           {navLinks.map((link, i) => (
//             <a
//               key={i}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="text-gray-900 text-lg font-medium hover:text-blue-600 transition"
//               target={link.href.endsWith(".pdf") ? "_blank" : undefined}
//               rel={link.href.endsWith(".pdf") ? "noreferrer" : undefined}
//             >
//               {link.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// }

// function MainNavbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed w-full z-50">
//       {/* Desktop / laptop */}
//       <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
//         {/* Left: Logo “Ram”, shown only if not scrolled */}
//         {/* Left: Logo “Ram”, shown only if not scrolled */}
//         <div className="flex-shrink-0 w-24">
//           {!scrolled ? (
//             <div className="text-2xl font-bold text-gray-800 transition-all duration-300">
//               Ram
//             </div>
//           ) : (
//             <div className="invisible">Ram</div>
//           )}
//         </div>


//         {/* Center */}
//         <div className="flex-1 flex justify-center">
//           <div className="rounded-4xl p-[2px] aura-gradient">
//             <div className="flex items-center space-x-6 bg-white backdrop-blur-3xl px-6 py-1 rounded-4xl shadow-[0_0_10px_rgba(0,0,0,0.2)]">
//               {navLinks.map((link, i) => (
//                 <motion.a
//                   key={i}
//                   href={link.href}
//                   // whileHover={{ scale: 1.1, color: "#2563eb" }}
//                   className="text-[#030101fd] font-medium transition"
//                   target={link.href.endsWith(".pdf") ? "_blank" : undefined}
//                   rel={link.href.endsWith(".pdf") ? "noreferrer" : undefined}
//                 >
//                   {link.name}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right placeholder to balance layout */}
//         <div className="flex-shrink-0 w-10">
//           {/* can be empty or you can hide the MobileNavbar toggle here */}
//         </div>
//       </div>

//       {/* Mobile View */}
//       <MobileNavbar />
//     </nav>
//   );
// }

// export default MainNavbar;


"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  // { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  // Resume is moved to a prominent button on the right (like Supabase's "Start your project")
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-900">Ram</div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center space-y-6 py-8 bg-white/90 backdrop-blur-xl"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-900 text-lg font-medium hover:text-teal-600 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/newResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </div>
  );
}

// function MainNavbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Desktop/Laptop Navbar */}
//       <nav
//         className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-xl shadow-md py-3"
//             : "bg-transparent py-5"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//           {/* Logo - always visible */}
//           <a
//             href="#home"
//             className={`text-3xl font-bold transition-colors duration-300 ${
//               scrolled ? "text-gray-900" : "text-white"
//             }`}
//           >
//             Ram
//           </a>

//           {/* Navigation Links - left-aligned after logo, like Supabase */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link, i) => (
//               <a
//                 key={i}
//                 href={link.href}
//                 className={`relative font-medium text-lg transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all ${
//                   scrolled
//                     ? "text-gray-800 hover:text-teal-600"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Right side - prominent CTA button (like Supabase's "Start your project") */}
//           <div className="hidden md:block">
//             <a
//               href="/newResume.pdf"
//               target="_blank"
//               rel="noreferrer"
//               className={`px-7 py-3 rounded-full font-medium transition-all duration-300 ${
//                 scrolled
//                   ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg"
//                   : "border-2 border-white text-white hover:bg-white/10"
//               }`}
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <MobileNavbar />
//     </>
//   );
// }


function MainNavbar() {
  return (
    <>
      {/* Desktop/Laptop Navbar - Dark theme, proper left/right alignment */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#121111] backdrop-blur-xl border-b-[0.5px] border-b-[#333] shadow-md py-4">
        <div className="max-w-7xl mx-auto px-24 flex items-center justify-between">
          {/* Left side: Logo + Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div>
              <a href="#home" className="text-2xl font-bold text-white pr-2">
                Ram Gulave
              </a>
            </div>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative font-bold text-sm text-white 
               hover:text-transparent hover:bg-clip-text 
               hover:bg-gradient-to-r hover:from-pink-500 hover:via-violet-500 hover:to-blue-500
               transition-all duration-300
               after:content-[''] after:absolute after:bottom-[-2px] after:left-0 
               after:h-[0.5px] after:w-0 
               after:bg-gradient-to-r after:from-pink-500 after:via-violet-500 after:to-blue-500
               hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Resume Button + Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/newResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-1.5 py-1 bg-green-800 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition shadow-lg"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/ramgulave/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-300 transition-colors" />
              </a>
              <a
                href="https://github.com/Ram-Gulave"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Updated to match dark theme */}
      <MobileNavbar />
    </>
  );
}

export default MainNavbar;