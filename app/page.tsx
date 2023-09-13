import Link from "next/link";

const projects = [
  {
    name: "ampry",
    link: "https://www.ampry.com/",
    description: "Software development for performance marketing.",
  },
  {
    name: "flowhouse",
    link: "https://www.flowhouse.io/",
    description: "Productized design and development service specializing in Webflow.",
  },
  {
    name: "zion design",
    link: "https://www.zion.surf/",
    description: "Design and branding for innovative digital brands.",
  },
  {
    name: "wavefinder",
    link: "https://www.wavefinder.io/",
    description: "Fully integrated AI-driven generative marketing platform.",
  },
  {
    name: "builderkit",
    link: "/",
    description: "AI empowered SEO and website building toolkit.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col container divide-y">
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase">
            Design and Development Studio
          </h1>
          <p className="text-slate-400">Rooted in innovation and creativity</p>
          <p className="text-slate-400">founded by <a className="underline underline-offset-4" href="https://cameronyoungblood.com">Cameron Youngblood</a> and <a className="underline underline-offset-4" href="https://bridger.cc">Bridger Tower</a></p>
        </div>
      </section>
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h2 className="font-bold uppercase">Projects</h2>
          <p className="text-slate-400">Some of our work.</p>
        </div>
        <ul className="space-y-4 py-4">
          {projects.map((project, index) => (
            <li key={index}>
              <Link href={project.link} className="flex flex-col space-y-1.5">
                <span className="underline underline-offset-4">{project.name}</span>
                <span className="text-slate-400">{project.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
