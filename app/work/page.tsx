import Project from "@/components/project";
import projects from "@/projects.config";

export default function Page() {
  return (
    <>
      {/* Content Grid */}
      <div className="not-prose z-10 grid max-w-screen-2xl gap-2 fade-in sm:grid-cols-2">
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
    </>
  );
}
