// /components/HomeComponents/About.tsx

"use client";

import React from "react";
import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-10 relative flex flex-col items-center justify-center mx-4 md:mx-12 my-32 "
    >
      <div className="md:flex relative w-full  items-center justify-center">

        <div className="relative z-10 max-w-5xl text-center text-white px-10 space-y-5">
          <h2 className="text-[40px] font-bold text-[#eeecec]">
            Learn more about me
          </h2>

          <p className="text-sm sm:text-[16px] -tracking-tight text-center  text-[#8b8b8be0] sm:px-28">
            I’m <span className="font-semibold text-[#b5b5b5]">Ram Gulave</span>, a developer focused on building clean,
            scalable digital experiences. Currently pursuing <span className="font-semibold text-[#b5b5b5]">MCA</span>,
            with a <span className="font-semibold text-[#b5b5b5]">BCS (Computer Science)</span>. I work with{" "}
            <span className="font-semibold text-[#b5b5b5]">
              Typescript, Next, MERN, SQL and Python
            </span>{" "}
            to build and automate full-stack applications.
          </p>

          <div className="flex justify-center mb-20">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ramgulave/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
               border border-gray-700 text-gray-300
               hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-400
               transition-all"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Ram-Gulave"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
               border border-gray-700 text-gray-300
               hover:bg-gray-500/10 hover:text-white hover:border-gray-400
               transition-all"
              >
                GitHub
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
