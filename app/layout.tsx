import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "9d8 Software Development Studio",
  description: "(9d8 is a software development studio created by bridger tower and cameron youngblood. located in salt lake city, utah and creating software for the world.)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-syne pt-10">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <p className="hidden md:block text-slate-300 fixed bottom-4 right-4">© 9d8 LLC, All rights reserved.</p>
          <p className="hidden md:block text-slate-300 fixed bottom-4 left-4">contact hello__at__9d8.dev</p>
        </ThemeProvider>
      </body>
    </html>
  );
}
