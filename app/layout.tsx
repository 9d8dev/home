import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Layout } from "@/components/craft";
import { Analytics } from "@vercel/analytics/react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://9d8.dev"),
  title: "9d8 :: software design and development",
  description: "designing and developing software for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <div className="wait-fade-in">{children}</div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <div className="sticky left-0 right-0 top-0 px-6 py-4 fade-in">
      <div className="mt-4 flex justify-between gap-2">
        <h1>
          <Link className="dark:text-yellow-200" href="/">
            <Image
              src="/logo.svg"
              alt="9d8 logo"
              className="invert transition-all hover:scale-105 hover:opacity-75 dark:invert-0"
              width={56}
              height={35.26}
            />
            <span className="sr-only">9d8</span>
          </Link>
        </h1>
        <h2>:: design and software studio</h2>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex flex-col justify-between gap-2 px-6 py-4 text-sm fade-in md:flex-row md:items-center md:py-0">
      <h3>
        ©{" "}
        <span className="sr-only">
          <a href="https://cameron.so">Cameron</a> and{" "}
          <a href="https://bridger.to">Bridger</a>
        </span>{" "}
        1998 to present
      </h3>
      <div className="hidden w-fit items-center gap-2 md:flex">
        <h4>contact: hello @ 9d8.dev</h4>
        <ModeToggle />
      </div>
    </div>
  );
};
