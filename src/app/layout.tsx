import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Preloader from "../components/Preloader";

import { TRPCReactProvider } from "@/trpc/react";
import TopNavBar from "./_components/TopNavBar";

export const metadata: Metadata = {
  title: "Code By Vince",
  description: "Front-end web developer crafting responsive, accessible interfaces with back-end experience in RESTful APIs and scalable application architecture.",
  openGraph: {
    title: "Code By Vince",
    description: "Front-end web developer crafting responsive, accessible interfaces with back-end experience in RESTful APIs and scalable application architecture.",
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
    description: "Front-end web developer crafting responsive, accessible interfaces with back-end experience in RESTful APIs and scalable application architecture.",
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
        <TRPCReactProvider>
          <main className="pt-[96px]">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
