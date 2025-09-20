import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ram Gulave | Web Developer Portfolio",
    template: "%s | Ram Gulave",
  },
  description:
    "Ram Gulave is a web developer specializing in Next.js, React, Tailwind CSS, TypeScript, MERN Stack, Flask, and Sanity CMS. Explore projects, skills, and experience on this portfolio website.",
  applicationName: "Ram Gulave Portfolio",
  authors: [{ name: "Ram Gulave", url: "https://ramgulaveportfolio.netlify.app" }],
  keywords: [
    "Ram Gulave",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "TypeScript",
    "MERN Stack",
    "Flask Developer",
    "Sanity CMS",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Mobile App Developer",
    "Database Engineer",
    "Web Development Projects",
    "Tech Portfolio",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Ram Gulave Portfolio",
    url: "https://ramgulaveportfolio.netlify.app",
    title: "Ram Gulave | Web Developer Portfolio",
    description:
      "Explore Ram Gulave’s web development projects, skills, and experience. Full-stack developer with expertise in Next.js, React, Tailwind CSS, MERN Stack, Flask, and Sanity CMS.",
    images: [
      {
        url: "https://ramgulaveportfolio.netlify.app/seo_homepage.png",
        width: 1200,
        height: 630,
        alt: "Ram Gulave Portfolio Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ramgulave",
    creator: "@ramgulave",
    title: "Ram Gulave | Web Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Ram Gulave, a full-stack web developer specializing in modern web technologies.",
    images: ["https://ramgulaveportfolio.netlify.app/seo_homepage.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
