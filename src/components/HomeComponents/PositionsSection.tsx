// "use client";

// import React from "react";
// import Image from "next/image";
// import "devicon/devicon.min.css";

// // Position type and data
// interface Position {
//     title: string;
//     logo: string;
// }

// const positions: Position[] = [
//     {
//         title: "Frontend Developer",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     },
//     {
//         title: "Backend Developer",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     },
//     {
//         title: "Fullstack Developer",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//         title: "UI/UX Designer",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     },
//     // {
//     //     title: "DevOps Engineer",
//     //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     // },
//     // {
//     //     title: "Mobile App Developer",
//     //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
//     // },
//     {
//         title: "Database Engineer",
//         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     },
//     //   {
//     //     title: "Cloud Engineer",
//     //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
//     //   },
// ];

// // Single Position Card Component
// const PositionCard: React.FC<{ position: Position }> = ({ position }) => {
//     return (
//         <div className="flex flex-col items-center p-6 rounded-2xl text-[#eeecec] border-[0.5px] border-[#333] transition w-40">
//             <div className="w-16 h-16 mb-4">
//                 <Image
//                     src={position.logo}
//                     alt={position.title}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                 />
//             </div>
//             <h3 className="text-lg font-semibold text-center">{position.title}</h3>
//         </div>
//     );
// };

// // Main Section Component
// const PositionsSection: React.FC = () => {
//     return (
//         <section className="py-16 bg-[#0f0f0f]">
//             <div className="max-w-6xl mx-auto px-4 ">

//                 <div className="w-full sm:mb-3">
//                     {/* Heading with background glow */}
//                     <div className="relative flex justify-left items-center mb-2">
//                         <h1 className="relative text-xl sm:text-3xl font-bold text-left text-[#eeecec]">
//                             Where I Fit 
//                         </h1>
//                     </div>

//                     {/* Description */}
//                     <p className="text-sm sm:text-[16px] -tracking-tight text-left text-[#8b8b8be0]">
//                         Explore the roles and positions where my skills and experience make me a perfect fit — from{' '}
//                         <span className="font-semibold text-[#b5b5b5]">
//                             frontend and backend development, cloud computing, mobile applications, to DevOps and system architecture
//                         </span>
//                         . I bring a hands-on approach to building scalable, efficient, and user-friendly solutions that solve real-world problems.
//                     </p>

//                 </div>

//                 <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 justify-center">
//                     {positions.map((pos, index) => (
//                         <PositionCard key={index} position={pos} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PositionsSection;



"use client";

import React, { useState } from "react";
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
    title: "Database Engineer",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

// Main Section Component
const PositionsSection: React.FC = () => {
  const [hoveredTitle, setHoveredTitle] = useState<string>("");

  return (
    <section className="py-16 bg-[#0f0f0f] mb-30">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="w-full mb-3 sm:mb-4">
          {/* Dynamic Heading */}
          <div className="relative flex justify-left items-center sm:mb-2">
            <h1 className="relative text-xl sm:text-3xl font-bold text-left text-[#807f7f]">
              Where I Fit  
              {hoveredTitle && (
                <span className="text-white font-semibold ml-2">
                   {hoveredTitle}
                </span>
              )}
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-[16px] -tracking-tight text-left text-[#8b8b8be0]">
            Explore the roles and positions where my skills and experience make
            me a perfect fit — from{" "}
            <span className="font-semibold text-[#b5b5b5]">
              frontend and backend development, cloud computing, mobile
              applications, to DevOps and system architecture
            </span>
            . I bring a hands-on approach to building scalable, efficient, and
            user-friendly solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 justify-center">
          {positions.map((pos, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredTitle(pos.title)}
              onMouseLeave={() => setHoveredTitle("")}
            >
              {/* Card */}
              <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl text-[#eeecec] border-[0.5px] border-[#333] hover:border-[#555] transition w-40  duration-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4">
                  <Image
                    src={pos.logo}
                    alt={pos.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-md sm:text-lg font-semibold text-center">
                  {pos.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;
