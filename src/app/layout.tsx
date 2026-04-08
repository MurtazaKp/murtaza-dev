import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murtaza Khopoliwala | Frontend Developer (React.js & Next.js)",
  description:
    "Murtaza Khopoliwala is a Frontend Developer with 2+ years of experience specializing in React.js and Next.js. Skilled in building high-performance, responsive web applications, optimizing Core Web Vitals, and integrating modern CMS solutions like Sanity.",
  keywords: [
    "Murtaza Khopoliwala",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI Developer India",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Sanity CMS Developer",
    "Tailwind CSS Developer",
  ],
  authors: [{ name: "Murtaza Khopoliwala" }],
  creator: "Murtaza Khopoliwala",
  metadataBase: new URL("https://murtaza-dev.vercel.app/"),
  openGraph: {
    title: "Murtaza Khopoliwala | Frontend Developer",
    description:
      "Portfolio of Murtaza Khopoliwala showcasing React.js, Next.js, and modern frontend development projects.",
    url: "https://murtaza-dev.vercel.app/",
    siteName: "Murtaza Portfolio",
    images: [
      {
        url: "/murtaza-khopoliwala.jpg", // add your OG image in public folder
        width: 1200,
        height: 630,
        alt: "Murtaza Khopoliwala Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murtaza Khopoliwala | Frontend Developer",
    description:
      "React.js & Next.js developer building scalable and high-performance web apps.",
    images: ["/murtaza-khopoliwala.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
