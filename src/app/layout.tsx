import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Preloader from "../components/Preloader";

import TopNavBar from "@/components/TopNavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Code By Vince",
  description:
    "Frontend Developer with 4 years of web development experience ( 2 professionally ). Experienced in Next.js, React, and building scalable apps. Proficient in mentoring juniors and familiar with cloud storage, CDNs, and CI/CD (GitHub Actions). Passionate learner who loves Frontend Masters and unwinds with food vlogs and stand-up comedy. Open to freelance and full-time opportunities. Let’s connect if you have a project in mind!",
  openGraph: {
    title: "Code By Vince",
    description:
      "Frontend Developer with 4 years of web development experience ( 2 professionally ). Experienced in Next.js, React, and building scalable apps. Proficient in mentoring juniors and familiar with cloud storage, CDNs, and CI/CD (GitHub Actions). Passionate learner who loves Frontend Masters and unwinds with food vlogs and stand-up comedy. Open to freelance and full-time opportunities. Let’s connect if you have a project in mind!",
    url: "https://codebyvince.com",
    siteName: "Code By Vince",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Code By Vince",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code By Vince",
    description:
      "Frontend Developer with 4 years of web development experience ( 2 professionally ). Experienced in Next.js, React, and building scalable apps. Proficient in mentoring juniors and familiar with cloud storage, CDNs, and CI/CD (GitHub Actions). Passionate learner who loves Frontend Masters and unwinds with food vlogs and stand-up comedy. Open to freelance and full-time opportunities. Let’s connect if you have a project in mind!",
    images: ["/meta-image.png"],
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Code By Vince" />
      </head>
      <body>
        <TopNavBar />
        <Preloader />
        <main className="pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
