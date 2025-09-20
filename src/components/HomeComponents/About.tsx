// /components/HomeComponents/About.tsx

"use client";

import React from "react";
import { FaGraduationCap, FaCode, FaBullseye } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-10 mt-[-140px] sm:mt-0 relative flex flex-col items-center justify-center mx-4 md:mx-12"
    >
      {/* Mobile View */}
      <div className="block md:hidden w-full relative">
        {/* Background */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-90">
          <img
            src="/vscode.png"
            alt="Background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-6 mx-2 my-4">
          <h2 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-sm leading-relaxed">
            I’m{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ram Gulave
            </span>
            , a code-obsessed, innovation-driven developer turning ideas into
            digital experiences.
          </p>

          {/* Education */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-left shadow-lg">
            <div className="flex items-center space-x-3">
              <FaGraduationCap className="text-pink-400 text-lg" />
              <p className="text-sm">
                Currently pursuing <span className="font-semibold">MCA</span>, with a{" "}
                <span className="font-semibold">BCS (Computer Science)</span> – First Class.
              </p>
            </div>
          </div>

          {/* Tech Journey */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-left shadow-lg">
            <div className="flex items-center space-x-3">
              <FaCode className="text-green-400 text-lg" />
              <p className="text-sm">
                From my first <code>console.log("Hello World")</code> to building
                apps with{" "}
                <span className="font-semibold">React, Node.js, Express</span> — while
                automating with <span className="font-semibold">Python</span>.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-pink-00 via-gray-300 to-blue-00 rounded-xl p-5 shadow-xl text-black">
            <div className="flex items-start space-x-3">
              <FaBullseye className="text-red-600 text-lg mt-1" />
              <p className="text-sm">
                <span className="font-semibold">My Mission:</span> To build clean,
                scalable apps solving real-world problems & creating impactful user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / Laptop View */}
      <div className="hidden md:flex relative w-full h-[600px] items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full rounded-[40px] overflow-hidden z-0 shadow-2xl">
          <img
            src="/vscode.png"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-90 filter blur-sm"
          />
        </div>


        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center text-white px-10 space-y-18">
          {/* Heading */}
          <h2 className="text-[40px] font-bold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed">
            I’m{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ram Gulave
            </span>
            , a code-obsessed, innovation-driven developer turning ideas into digital
            experiences. Currently pursuing <span className="font-semibold">MCA</span>,
            with a <span className="font-semibold">BCS (Computer Science)</span> – First Class.
            From my first <code>console.log("Hello World")</code> to building dynamic full-stack apps with
            <span className="font-semibold"> React, Node.js, and Express</span> — constantly exploring, building, and automating with <span className="font-semibold">Python</span>.
          </p>

          {/* Goal / Mission */}
          <div className="flex justify-center">
            <div className="flex items-start space-x-4 bg-gradient-to-r from-pink-00 via-pink-300 to-blue-00 shadow-lg rounded-xl p-6 max-w-4xl text-black">
              <FaBullseye className="text-2xl text-red-500 mt-1" />
              <p className="text-lg">
                <span className="font-semibold">My Mission:</span> To build clean, scalable full-stack applications that solve real-world problems and deliver impactful user experiences — powered by curiosity, creativity, and code.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
