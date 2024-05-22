import Project from "@/components/project";
import projects from "@/projects.config";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Page() {
  return (
    <main className="p-4 max-w-7xl text-focus-in m-auto grid md:text-lg bg-background grid-rows-[16rem,1fr,2rem] gap-2">
      {/* Content Grid */}
      <div className="not-prose gap-2 z-10 grid sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            desc={project.description}
            year={project.year.toString()}
          />
        ))}
      </div>
    </main>
  );
}
