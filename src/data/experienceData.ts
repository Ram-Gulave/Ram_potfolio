// experienceData.ts

export const experienceData = [
  {
    title: "Web Dev Intern",
    location: "Pune, India",
    type: "Intern",
    time: "June 2025 – September 2024",
    distance: "3 months",
    elevation:
      "Next.js, Tailwind CSS, TypeScript, React (ES6, JSX), jQuery, NPM, Git/GitHub, NGINX",
    description:
      "Built responsive UIs and logic-driven components using React, HTML, CSS, and JavaScript. Collaborated with senior devs to deliver production-ready modules.",
    features: [
      "Developed reusable React components",
      "Integrated REST APIs with frontend",
      "Optimized build & deployment using NGINX",
      "Collaborated in Agile team environment",
    ],
    links: [
      { label: "Live Website", url: "https://macnman.com" },
    ],
    heroImage: "/main.png",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "15+",
      elevation: "React/Flask/Next.js",
      followers: "200+",
    },
  },
  {
    title: "Online Pesticides Store Website",
    location: "Pune, India",
    type: "Collage Project",
    time: "September 2024 - December 2024",
    distance: "3 months",
    elevation: "Python, Flask, JavaScript, Bootstrap, HTML, CSS, MongoDB, Postman",
    description:
      "Developed a fully functional e-commerce platform for pesticide products. Implemented product search, filtering, user authentication, shopping cart, and wishlist.",
    features: [
      "Dynamic product catalog with filtering",
      "Secure user login & authentication",
      "Shopping cart & wishlist functionality",
      "MongoDB integration for product data",
    ],
    links: [
      // { label: "Live Website", url: "https://macnman.com" },
    ],
    heroImage: "/pest.png",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "12+",
      elevation: "Python/Flask",
      followers: "150+",
    },
  },
  {
    title: "E-Learning Web Application (MERN Stack)",
    location: "Pune, India",
    type: "Collage Project",
    time: "January 2025 - March 2025",
    distance: "8 months",
    elevation: "MERN Stack, React.js, Node.js, Express.js, MongoDB",
    description:
      "Created a feature-rich e-learning platform with JWT authentication, admin dashboard, video streaming, and Razorpay payment integration. Responsive and scalable.",
    features: [
      "JWT authentication & role-based access",
      "Admin dashboard for course management",
      "Integrated Razorpay payments",
      "Responsive UI with video streaming",
    ],
    links: [
      // { label: "Live Website", url: "https://macnman.com" },
    ],
    heroImage: "/E-learning.webp",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "25+",
      elevation: "React/Node",
      followers: "220+",
    },
  },
  {
    title: "Blog Website (Next.js + Sanity CMS)",
    location: "Pune, India",
    type: "Intern",
    time: "August  2025",
    distance: "2 months",
    elevation:
      "Next.js, Tailwind CSS, TypeScript, React(ES6), Sanity CMS, Git/GitHub, NGINX",
    description:
      "Built a dynamic blog platform with content managed in Sanity CMS. Added SSR, SEO optimization, and responsive design for better performance.",
    features: [
      "Sanity CMS integration for content management",
      "Server-side rendering for SEO boost",
      "Custom blog editor with rich text",
      "Responsive UI optimized for mobile",
    ],
    links: [
      { label: "Live Website", url: "https://macnman.com/blogs/" },
    ],
    heroImage: "/image.png",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "10+",
      elevation: "Next.js",
      followers: "180+",
    },
  },
  {
    title: "Documentation Website (Next.js + Docusaurus)",
    location: "Pune, India",
    type: "Intern",
    time: "July 2025",
    distance: "2 months",
    elevation:
      "Docusaurus, Tailwind CSS, React, Markdown/MDX, TypeScript, Git/GitHub, NGINX",
    description:
      "Developed a static documentation site using Docusaurus, aligned with the main product website’s design language. Optimized Docusaurus configuration for better SEO performance. Created a custom landing page to improve usability, navigation.",
    features: [
      "Integrated MDX/Markdown docs with Docusaurus",
      "Custom landing page with Tailwind CSS",
      "Optimized SEO for docs site",
      "Automated deployment with NGINX",
    ],
    links: [
      { label: "Live Website", url: "https://macnman.com/docs/" },
    ],
    heroImage: "/docs.png",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "10+",
      elevation: "Next.js",
      followers: "180+",
    },
  },
  {
    title: "Crypto-Currency Tracker",
    location: "Pune, India",
    type: "Personal Project",
    time: "2024",
    distance: "2 months",
    elevation: "React.js, Material-UI, VapiAI, API",
    description:
      "A React-based crypto portfolio tracker with interactive charts, real-time pricing from CoinGecko API.",
    features: [
      "Fetched live prices from CoinGecko API",
      "Portfolio performance with interactive charts",
      "Material-UI themed dashboard",
      "Integrated VapiAI for predictions",
    ],
    links: [
    ],
    heroImage: "/crypto.png",
    author: {
      name: "Rameshwar Gulave",
      avatar: "/images/avatar.jpg",
      miles: "10+",
      elevation: "Next.js",
      followers: "180+",
    },
  },
];


// {/* Duration Chart */}
//                 <div className={`
//                   col-span-1
//                   rounded-xl
//                   p-6
//                   border
//                   transition-colors duration-500
//                   ${isDark ? "bg-white/3 border-white/6" : "bg-gray-100 border-gray-200"}
//                 `}>
//                   <h3 className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-800"}`}>Project Durations (Months)</h3>
//                   <div className="mt-4">
//                     {(() => {
//                       const durations = experienceData.map((d) => {
//                         const m = d.distance.match(/\d+/);
//                         return m ? parseInt(m[0], 10) : 0;
//                       });
//                       const maxVal = Math.max(...durations, 1);
//                       const chartHeight = 120;
//                       const padding = 30;
//                       const projectSpacing = 60;
//                       const chartWidth = padding * 2 + projectSpacing * (durations.length - 1);
//                       const points = durations.map((val, i) => {
//                         const x = padding + i * projectSpacing;
//                         const y = chartHeight - padding - (val / maxVal) * (chartHeight - padding * 2);
//                         return { x, y, label: experienceData[i].title, val };
//                       });
//                       const step = Math.max(2, Math.floor(maxVal / 4));
//                       const ticks = [];
//                       for (let i = 0; i <= maxVal; i += step) {
//                         const y = chartHeight - padding - (i / maxVal) * (chartHeight - padding * 2);
//                         ticks.push({ y, label: i });
//                       }
//                       return (
//                         <svg
//                           viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`}
//                           className="w-full h-48"
//                         >
//                           <rect
//                             width="100%"
//                             height="100%"
//                             fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
//                             rx="6"
//                           />
//                           {ticks.map((tick, i) => (
//                             <g key={i}>
//                               <line
//                                 x1={padding}
//                                 x2={chartWidth - padding}
//                                 y1={tick.y}
//                                 y2={tick.y}
//                                 stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
//                                 strokeWidth="0.5"
//                               />
//                               <text
//                                 x={5}
//                                 y={tick.y + 3}
//                                 fontSize="8"
//                                 fill={isDark ? "white" : "black"}
//                                 opacity="0.7"
//                               >
//                                 {tick.label}
//                               </text>
//                             </g>
//                           ))}
//                           <polyline
//                             points={points.map((p) => `${p.x},${p.y}`).join(" ")}
//                             fill="none"
//                             stroke={isDark ? "white" : "black"}
//                             strokeWidth="2"
//                           />
//                           {points.map((p, i) => (
//                             <g key={i}>
//                               <circle
//                                 cx={p.x}
//                                 cy={p.y}
//                                 r="3"
//                                 fill={isDark ? "white" : "black"}
//                               />
//                               <text
//                                 x={p.x}
//                                 y={p.y - 8}
//                                 fontSize="8"
//                                 textAnchor="middle"
//                                 fill={isDark ? "white" : "black"}
//                               >
//                                 {p.val}
//                               </text>
//                               <text
//                                 x={p.x}
//                                 y={chartHeight + 15}
//                                 fontSize="7"
//                                 textAnchor="middle"
//                                 fill={isDark ? "white" : "black"}
//                                 opacity="0.8"
//                               >
//                                 {p.label.length > 12 ? p.label.slice(0, 12) + "…" : p.label}
//                               </text>
//                             </g>
//                           ))}
//                         </svg>
//                       );
//                     })()}
//                   </div>
//                   <div className={`text-xs mt-2 ${isDark ? "text-white/60" : "text-gray-600"}`}>
//                     Duration of each project (months)
//                   </div>
//                 </div>
//               </div>