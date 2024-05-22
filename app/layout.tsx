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
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <div className="px-6 py-4 sticky top-0 right-0 left-0">
      <div className="flex gap-2 mt-4 justify-between">
        <h1>
          <Link className="dark:text-yellow-200" href="/">
            <Image
              src="/logo.svg"
              alt="9d8 logo"
              className="hover:opacity-75 transition-all"
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
    <div className="flex fixed bottom-0 py-4 md:py-0 flex-col md:flex-row z-20 px-6 right-0 left-0 text-sm gap-2 justify-between md:items-center">
      <h3>
        ©{" "}
        <span className="sr-only">
          <a href="https://cameron.so">Cameron</a> and{" "}
          <a href="https://bridger.to">Bridger</a>
        </span>{" "}
        1998 to present
      </h3>
      <div className="hidden md:flex w-fit gap-2 items-center">
        <h4>contact: hello @ 9d8.dev</h4>
        <ModeToggle />
      </div>
    </div>
  );
};
