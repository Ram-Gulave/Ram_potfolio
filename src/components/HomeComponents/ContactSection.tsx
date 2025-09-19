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
            className="scroll-mt-18 relative py-6 px-6 bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#1f2937] text-white overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.25),transparent_70%)] pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-[60px] font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Let’s Connect
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have an idea, project, or just want to say hi? Drop me a message —
                        I’d love to chat 🚀
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-[#10131c]/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 shadow-2xl"
                    >
                        <div className="mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 bg-[#0b0e13] text-sm text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 bg-[#0b0e13] text-sm text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            />
                        </div>

                        <div className="mb-6">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 bg-[#0b0e13] text-sm text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition shadow-lg"
                        >
                            <MdSend className="text-xl" />
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    {/* Info Card */}
                    <div className="bg-[#10131c]/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 shadow-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                Reach Me At
                            </h3>

                            {/* Email */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-purple-600/20 p-3 rounded-full">
                                    <MdEmail className="text-2xl text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a
                                        href="mailto:gulaveram2@gmail.com"
                                        className="text-white hover:text-purple-400 transition"
                                    >
                                        gulaveram2@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-purple-600/20 p-3 rounded-full">
                                    <FaLinkedin className="text-2xl text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/in/ramgulave"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-blue-400 transition"
                                    >
                                        linkedin.com/in/ramgulave
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-600/20 p-3 rounded-full">
                                    <FaGithub className="text-2xl text-gray-300" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">GitHub</p>
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
                                className="block text-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
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
