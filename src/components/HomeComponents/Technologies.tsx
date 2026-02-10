
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "devicon/devicon.min.css";

interface Tech {
  name: string;
  icon?: string;
  devicon?: string;
}

interface TechnologyCategory {
  category: string;
  description: string;
  items: Tech[];
}

const technologies: TechnologyCategory[] = [
  {
    category: "Frontend",
    description:
      "Build responsive, accessible UIs with modern frameworks, component-driven architecture, and clean design systems.",
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
    ],
  },
  {
    category: "Backend",
    description:
      "Design scalable APIs, handle business logic, authentication, and integrate services with clean architecture.",
    items: [
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "Express.js", devicon: "devicon-express-original colored" },
      { name: "Flask", icon: "/flask.png" },
      { name: "PHP", devicon: "devicon-php-plain colored" },
    ],
  },
  {
    category: "Databases",
    description:
      "Model efficient schemas, optimize queries, manage data integrity, and support scalable applications.",
    items: [
      { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
      { name: "SQL", icon: "/sql.png" },
      { name: "MySQL", devicon: "devicon-mysql-plain colored" },
    ],
  },
  {
    category: "DevOps & Tools",
    description:
      "Streamline development workflows, automate deployments, monitor systems, and collaborate efficiently.",
    items: [
      { name: "Postman", devicon: "devicon-postman-plain colored" },
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "NGINX", devicon: "devicon-nginx-original colored" },
      { name: "PowerBI", icon: "/power.svg" },
      { name: "VS Code", devicon: "devicon-vscode-plain colored" },
      { name: "OpenAI", icon: "/chatgpt.png" },
      { name: "Vercel", icon: "/Symbol.svg" },
    ],
  },
  {
    category: "Programming & AI",
    description:
      "Write clean, efficient code while exploring automation, data processing, and AI-driven solutions.",
    items: [
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "Python", devicon: "devicon-python-plain colored" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
      { name: "Java", devicon: "devicon-java-plain colored" },
      { name: "C", devicon: "devicon-c-plain colored" },
    ],
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="scroll-mt-18 relative mx-4 sm:mx-10 lg:mx-20 my-16 px-6 md:px-20 border-[0.5px] border-[#333] rounded-2xl shadow-lg"
    >
      {/* Header */}
      <div className="flex w-full items-start">
        {/* Left 70% */}
        <div className="w-[70%]">
          <h4 className="text-xl sm:text-3xl font-bold text-[#eeecec] mt-4">
            Technologies
          </h4>

          <p className="text-sm sm:text-[16px] -tracking-tight text-left text-[#8b8b8be0] mt-2 sm:pr-28">
            This is my tech stack — tools I use to build real-world applications.
            I work across{" "}
            <span className="font-semibold text-[#b5b5b5]">
              UI design, API development, database management, and deployment
            </span>
            , focusing on practical solutions and clean execution.
          </p>
        </div>

        {/* Right 30% */}
        <div className="relative w-[30%] min-h-[160px]">
          <div className="absolute bottom-8 right-0 flex gap-4">
            <a
              href="https://www.macnman.com/"
              target="_blank"
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/10 text-[#eeecec] hover:bg-white/20 transition-all"
            >
              Proof of Work
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 text-sm font-medium rounded-lg border border-white/20 text-[#eeecec] hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        loop
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mb-4"
      >
        {technologies.map((tech) => (
          <SwiperSlide key={tech.category}>
            <div className="h-full rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
              <h4 className="text-lg font-semibold text-white mb-4">
                {tech.category}
              </h4>

              <div className="grid grid-cols-5 gap-4 mb-6">
                {tech.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center"
                    title={item.name}
                  >
                    {item.devicon ? (
                      <i className={`${item.devicon} text-3xl`} />
                    ) : (
                      <Image
                        src={item.icon!}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#8b8b8be0] leading-relaxed">
                {tech.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Technologies;
