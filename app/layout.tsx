import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/craft/layout";
import Footer from "@/components/craft/sections/footer";
import Nav from "@/components/craft/sections/nav";

const inter = Inter({ subsets: ["latin"] });

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
    <Layout>
      <Nav />
      {children}
      <Footer />
    </Layout>
  );
}
