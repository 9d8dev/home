import Project from "@/components/project";
import projects from "@/projects.config";

export default function Page() {
  return (
    <main className="mb-12 grid gap-6 p-4 fade-in md:gap-12">
      {/* Content Grid */}
      <div className="not-prose z-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
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
