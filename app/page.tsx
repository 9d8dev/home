"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const projects = [
  {
    name: "ampry",
    link: "https://www.ampry.com/",
    description: "Software development for performance marketing.",
  },
  {
    name: "flowhouse",
    link: "https://www.flowhouse.io/",
    description: "Productized design and development service.",
  },
  {
    name: "zion design",
    link: "https://www.zion.surf/",
    description: "Design and branding for innovative brands.",
  },
  {
    name: "wavefinder",
    link: "https://www.wavefinder.io/",
    description: "Fully integrated AI-driven generative marketing platform.",
  },
  {
    name: "builderkit",
    link: "https://www.builderkit.io/",
    description: "AI empowered SEO and website building toolkit.",
  },
];

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} transition={{ delay: 0.5 }} whileInView={{ opacity: 1 }}>
      <Header />
      <section className="flex flex-col container divide-y">
        <div className="mt-6 py-4">
          <div className="space-y-1">
            <h1 className="text-xl font-bold uppercase">
              Design and Development Studio
            </h1>
            <p className="text-slate-400">Rooted in innovation and creativity.</p>
            <p className="text-slate-400">Founded by <a className="underline underline-offset-4" href="https://cameronyoungblood.com">Cameron Youngblood</a> and <a className="underline underline-offset-4" href="https://bridger.to">Bridger Tower</a>.</p>
          </div>
        </div>
        <div className="mt-6 py-4">
          <div className="space-y-1">
            <h2 className="font-bold uppercase">Projects</h2>
            <p className="text-slate-400">Some of our work.</p>
          </div>
          <ul className="space-y-4 py-4">
            {projects.map((project, index) => (
              <li className="flex gap-2" key={index}>
                {'>'} <Link href={project.link} className="flex flex-col space-y-1.5 hover:text-yellow-200">
                  <span className="underline underline-offset-4">{project.name}</span>
                  <span className="text-slate-400">{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section >
    </motion.div>
  );
}
