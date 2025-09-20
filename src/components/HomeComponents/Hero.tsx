// // /components/HomeComponents/Hero.tsx

// "use client";

// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import Image from "next/image";
// import Starfield from "./Starfield";

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 px-6 md:px-20"
//     >
//       {/* Background wrapper */}
//       <div className="absolute inset-0 -z-10">
//         {/* Gradient background */}
//         <div className="
//        absolute inset-0
//        bg-gradient-to-br 
//          from-gray-100 via-white to-gray-200
//        dark:from-gray-400 dark:via-gray-300 dark:to-gray-700
//     " />

//         <Starfield numStars={250} maxRadius={1.5} drift={true} />
//       </div>

//       {/* Left Side - Text */}
//       <div className="flex-1 text-center md:text-left space-y-4">
//         <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
//           Hi There 👋
//         </h2>

//         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
//           I'm{" "}
//           <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text inline-block">
//             Ram Gulave
//           </span>
//         </h1>

//         <p className="text-lg md:text-xl text-gray-600">
//           I Am Into{" "}
//           <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">
//             Web Development
//           </span>
//         </p>

//         {/* About Me Button */}
//         <div className="mt-6">
//           <a
//             href="#about"
//             className="px-6 py-2 rounded-full bg-black text-white font-medium transition inline-flex items-center"
//           >
//             About Me
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 mt-6 text-2xl text-gray-700">
//           <a
//             href="https://www.linkedin.com/in/ramgulave/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin className="hover:text-blue-600 transition" />
//           </a>
//           <a
//             href="https://github.com/Ram-Gulave"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaGithub className="hover:text-black transition" />
//           </a>
//           <a
//             href="https://www.instagram.com/ram_gulave_7878/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaInstagram className="hover:text-pink-500 transition" />
//           </a>
//           <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer">
//             <SiLeetcode className="hover:text-orange-500 transition" />
//           </a>
//           <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer">
//             <FaTwitter className="hover:text-sky-500 transition" />
//           </a>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="flex-1 flex justify-center md:justify-end mt-4 md:mt-0 relative">
//         {/* Background Text (hidden on mobile) */}
//         <span className="hidden md:block absolute -top-20 -left-20 text-[140px] font-extrabold text-gray-300 opacity-10 select-none pointer-events-none z-0">
//           Web Development
//         </span>

//         {/* Outer Gradient Ring */}
//         <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-2xl z-10">
//           <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden relative">
//             <Image
//               src="/ai-hero.png"
//               alt="Ram"
//               fill
//               unoptimized
//               className="rounded-full object-cover"
//             />
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

// Hero.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import Starfield from "./Starfield";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Background wrapper */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-500 dark:via-gray-300 dark:to-gray-200" />
        <Starfield numStars={300} maxRadius={2} drift={true} />
      </div>

      {/* Bottom shadow / fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none -z-10
                      bg-gradient-to-t
                        from-black/50 dark:from-gray-100/90
                        to-transparent">
      </div>

      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left space-y-4 z-10">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200">
          Hi There 👋
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100">
          I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text inline-block">
            Ram Gulave
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          I Am Into{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold">
            Web Development
          </span>
        </p>
        <div className="mt-6">
          <a
            href="#about"
            className="px-6 py-2 rounded-full bg-gray-400 text-white font-medium transition inline-flex items-center"
          >
            About Me
          </a>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 mt-6 text-2xl text-gray-700 dark:text-gray-200">
          {/* icons */}
          <a href="https://www.linkedin.com/in/ramgulave/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/Ram-Gulave" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition" />
          </a>
          {/* <a href="https://www.instagram.com/ram_gulave_7878/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a> */}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end md:mt-0 relative z-10">
        <span className="hidden md:block absolute -top-20 -left-20 text-[140px] font-extrabold text-gray-300 opacity-10 select-none pointer-events-none z-0">
          Web Development
        </span>

        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full mt-[-140px] sm:mt-0 shadow-2xl">
          <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden relative">
            <Image
              src="/ai-hero.png"
              alt="Ram"
              fill
              unoptimized
              className="rounded-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
