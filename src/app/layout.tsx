import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "swiper/css";
import "swiper/css/autoplay";
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
    "Ram Gulave is a web developer specializing in Next.js, React, Tailwind CSS, TypeScript, MERN Stack, Flask, and Sanity CMS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="antialiased">
        {children}
        <div id="portal-root"></div>

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CFBJRK9XB0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFBJRK9XB0');
          `}
        </Script>

        {/* ✅ Tawk.to Chatbot */}
        <Script id="tawkto" strategy="afterInteractive">
          {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/695cf81ed17c7219796b4344/1je9mtv80";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
        </Script>

      </body>
    </html>
  );
}


// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/695cf81ed17c7219796b4344/1je9mbivm';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->