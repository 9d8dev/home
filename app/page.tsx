import Project from "@/components/project";
import projects from "@/projects.config";

export default function Home() {
  return (
    <main className="p-2 flex md:text-lg bg-neutral-900 min-h-screen text-neutral-50 flex-col gap-2">
      {/* Header */}
      <div className="flex text-focus-in gap-2 justify-between">
        <h1>9d8</h1>
        <h2>software design and development</h2>
      </div>

      {/* Content Grid */}
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex text-focus-in gap-2 justify-between">
        <h3>
          © <a href="https://cameron.so">Cameron</a> and{" "}
          <a href="https://bridger.to">Bridger</a> 1998 to present
        </h3>
        <h4>contact: hello @ 9d8.dev</h4>
      </div>
    </main>
  );
}
