"use client";

import React, { useRef, useState } from "react";
import { MdEmail, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_rb4u4si", // ✅ your service ID
                "template_v49hb1s", // ✅ your template ID
                formRef.current!,
                { publicKey: "8tz2THvDW43iVZyfr" }
            )
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    formRef.current?.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    alert("❌ Failed to send message.");
                    setLoading(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className="scroll-mt-18 relative py-6 px-6 overflow-hidden mb-40"
        >
            {/* Background Glow */}
            <div className="absolute inset-0"></div>

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-left ">
                    <h2 className="text-xl text-[#eeecec] sm:text-3xl font-bold mb-2">
                        Let’s Connect
                    </h2>

                    <p className="text-white mb-4">
                        Have an idea, project, or just want to say hi? Drop me a message —
                        I’d love to chat 🚀
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="p-8 rounded-2xl border border-[#333]"
                    >
                        <div className="mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 border-[#333] text-sm text-white rounded-lg border hover:border-[#555] focus:outline-none transition"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 text-sm text-white rounded-lg border border-[#333] hover:border-[#555] focus:outline-none transition"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 text-sm text-white rounded-lg border border-[#333] hover:border-[#555] focus:outline-none transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center border-[0.5px] boder-[#333] hover:border-[#555] justify-center gap-2 text-white py-3 focus:outline-none rounded-lg transition"
                        >
                            <MdSend className="text-xl" />
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    {/* Info Card */}
                    <div className="p-8 rounded-2xl border border-[#333] shadow-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl text-[#eeecec] font-bold mb-6 ">
                                Reach Me At
                            </h3>

                            {/* Email */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full">
                                    <MdEmail className="text-2xl " />
                                </div>
                                <div>
                                    <p className="text-[#787777] text-sm">Email</p>
                                    <a
                                        href="mailto:gulaveram2@gmail.com"
                                        className="text-white  transition"
                                    >
                                        gulaveram2@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className=" p-3 rounded-full">
                                    <FaLinkedin className="text-2xl " />
                                </div>
                                <div>
                                    <p className="text-[#787777] text-sm">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/ramgulave"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white transition"
                                    >
                                        linkedin.com/in/ramgulave
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-center gap-4">
                                <div className=" p-3 rounded-full">
                                    <FaGithub className="text-2xl text-gray-300" />
                                </div>
                                <div>
                                    <p className="text-[#787777] text-sm">GitHub</p>
                                    <a
                                        href="https://github.com/ramgulave"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-400 transition"
                                    >
                                        github.com/ramgulave
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-6 pt-6">
                            <a
                                href="mailto:gulaveram2@gmail.com"
                                className="block text-center px-4 py-3 border border-[#333] rounded-lg text-white hover:border-[#555] transition"
                            >
                                Let’s Talk!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
