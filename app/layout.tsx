import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Layout } from "@/components/craft/layout";
import { Analytics } from "@vercel/analytics/react";

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
    <Layout className={GeistMono.className}>
      {children}
      <Analytics />
    </Layout>
  );
}
