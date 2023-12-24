import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Cover from "@/components/Cover";

export const metadata: Metadata = {
  title: "9d8 Software Development Studio",
  description:
    "9d8 is a software development studio created by bridger tower and cameron youngblood. located in salt lake city, utah and creating software for the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className="font-syne">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Cover />
          <main className="flex flex-col h-screen justify-center">
            {children}
          </main>
          <p className="hidden md:block text-slate-300 fixed bottom-4 right-4">
            © 9d8 LLC, All rights reserved.
          </p>
          <p className="hidden md:block text-slate-300 fixed bottom-4 left-4">
            contact 9d8dev__@__gmail.com
          </p>
        </ThemeProvider>
      </body>
    </html>
  );
}
