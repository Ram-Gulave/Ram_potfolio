// components/Technologies.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "devicon/devicon.min.css";

interface Tech {
  name: string;
  icon?: string; // for custom images
  devicon?: string; // for devicon class
}

const technologies: { category: string; items: Tech[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", devicon: "devicon-nextjs-plain colored" },
      { name: "React", devicon: "devicon-react-original colored" },
      { name: "HTML5", devicon: "devicon-html5-plain colored" },
      { name: "Tailwind CSS", icon: "/tailwind-css.png" },
      { name: "CSS3", devicon: "devicon-css3-plain colored" },
      { name: "Bootstrap", devicon: "devicon-bootstrap-plain colored" },
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "Docusaurus", icon: "/docusaurus-icon.svg" },
      { name: "Shopify", icon: "/shopify.png" },
      { name: "jQuery", devicon: "devicon-jquery-plain colored" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "Express.js", devicon: "devicon-express-original colored" },
      { name: "Flask", icon: "/flask.png" },
      // { name: "Django", devicon: "devicon-django-plain colored" },
      { name: "PHP", devicon: "devicon-php-plain colored" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
      { name: "SQL", icon: "/sql.png" },
      { name: "MySQL", devicon: "devicon-mysql-plain colored" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Postman", devicon: "devicon-postman-plain colored" },
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "NGINX", devicon: "devicon-nginx-original colored" },
      { name: "PowerBI", icon: "/power.svg" },
      { name: "VS Code", devicon: "devicon-vscode-plain colored" },
      { name: "OpenAI", icon: "/chatgpt.png" },
      { name: "Vercel", icon: "/Symbol.svg" },
      // { name: "Firebase", devicon: "devicon-firebase-plain colored" },
    ],
  },
  {
    category: "Programming & AI",
    items: [
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "Python", devicon: "devicon-python-plain colored" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
      { name: "Java", devicon: "devicon-java-plain colored" },
      { name: "C", devicon: "devicon-c-plain colored" }
    ],
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="scroll-mt-18 relative mx-2 sm:mx-10 lg:mx-20 my-16 px-6 md:px-20 bg-gradient-to-br from-[#ddc4e6] via-[#c1c1d6] to-[#c6c5c5] text-black overflow-hidden rounded-[40px] shadow-lg">


      {/* Heading with background glow */}
      <div className="relative flex justify-center items-center mb-1">
        {/* Faint blurred background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-64 h-24 bg-gradient-to-r from-pink-600 via-purple-400 to-blue-500 blur-3xl opacity-30 rounded-full"></div>
        </div>

        {/* Gradient text */}
        <h4 className="relative text-3xl sm:text-[60px] font-bold text-center bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-4">
          Technologies
        </h4>
      </div>


      <p className="text-md sm:text-[16px] text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        This is my tech stack — the tools I’ve used in real applications and the
        ones I return to often. Wherever possible, I choose to work hands-on
        with technologies that solve real problems. From{" "}
        <span className="text-black font-semibold">
          designing UIs, building APIs, managing databases, to deploying and
          monitoring
        </span>{" "}
        — this is what I bring into my projects every day.
      </p>

      {/* Tech grid */}
      {technologies.map((category) => (
        <div key={category.category} className="mb-12">
          <h5 className="text-lg sm:text-xl font-semibold mb-6 text-center">
            {category.category}
          </h5>

          <motion.div
            className="grid gap-6 place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {category.items.map((tech) => (
              <motion.div
                key={tech.name}
                className="relative flex flex-wrap items-center justify-center group w-16 h-16"
                whileHover={{ scale: 1.15 }}
              >
                {tech.devicon ? (
                  <i
                    className={`${tech.devicon} text-5xl flex items-center justify-center`}
                    title={tech.name}
                  ></i>
                ) : (
                  <Image
                    src={tech.icon || ""}
                    alt={tech.name}
                    title={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                )}

                {/* Tooltip */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Technologies;
