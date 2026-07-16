import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  metadataBase: new URL("https://abdullah-latif.vercel.app"),

  title: {

    default: "Abdullah Latif | Full Stack Developer | Next.js & AI Engineer",

    template: "%s | Abdullah Latif",

  },

  description:

    "Abdullah Latif is a Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, PostgreSQL, AI Automation, WhatsApp CRM, SaaS applications, and modern web development.",

  keywords: [

    "Abdullah Latif",

    "Muhammad Abdullah Latif",

    "Full Stack Developer",

    "Next.js Developer",

    "React Developer",

    "Node.js Developer",

    "TypeScript Developer",

    "JavaScript Developer",

    "AI Developer",

    "AI Automation",

    "WhatsApp CRM",

    "SaaS Developer",

    "Portfolio",

    "Pakistan Developer",

    "Web Developer",

  ],

  authors: [

    {

      name: "Abdullah Latif",

    },

  ],

  creator: "Abdullah Latif",

  publisher: "Abdullah Latif",

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-video-preview": -1,

      "max-snippet": -1,

    },

  },

  verification: {

    google: "zxqCbuloiJbxKK57J7wC5utUti5BhDfOGMZ76kYFda0",

  },

  openGraph: {

    title: "Abdullah Latif | Full Stack Developer",

    description:

      "Portfolio showcasing Next.js, React, Node.js, AI Automation, SaaS products, and modern web applications.",

    url: "https://abdullah-latif.vercel.app",

    siteName: "Abdullah Latif Portfolio",

    locale: "en_US",

    type: "website",

  },

  twitter: {

    card: "summary_large_image",

    title: "Abdullah Latif | Full Stack Developer",

    description:

      "Full Stack Developer building production-ready applications using Next.js, Node.js, AI, and TypeScript.",

  },

  alternates: {

    canonical: "https://abdullah-latif.vercel.app",

  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      

 

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Clash+Display:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Fallback for Clash Display via CDN */}
        <style>{`
          @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
