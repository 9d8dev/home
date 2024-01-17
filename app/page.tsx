import Project from "@/components/project";
import projects from "@/projects.config";
import { ModeToggle } from "@/components/craft/theme/theme-toggle";

export default function Home() {
  return (
    <main className="p-2 h-screen overflow-hidden grid md:text-lg bg-background grid-rows-[2rem,1fr,2rem] gap-2">
      {/* Header */}
      <div className="flex text-focus-in gap-2 justify-between">
        <h1>9d8</h1>
        <h2>software design and development</h2>
      </div>

      {/* Content Grid */}
      <div className="not-prose gap-2 overflow-auto grid sm:grid-cols-2 md:grid-cols-3">
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

      {/* Footer */}
      <div className="flex text-focus-in gap-2 justify-between items-center">
        <h3>
          © <a href="https://cameron.so">Cameron</a> and{" "}
          <a href="https://bridger.to">Bridger</a> 1998 to present
        </h3>
        <div className="flex w-fit gap-2 items-center">
          <h4>contact: hello @ 9d8.dev</h4>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
