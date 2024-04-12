import Project from "@/components/project";
import projects from "@/projects.config";
import { ModeToggle } from "@/components/craft/theme/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 max-w-7xl text-focus-in m-auto grid md:text-lg bg-background grid-rows-[16rem,1fr,2rem] gap-2">
      {/* Header */}
      <div className="">
        <div className="flex gap-2 items-center mt-4 justify-between bg-background">
          <h1>
            <a
              className="dark:text-yellow-200"
              href="https://github.com/9d8dev"
            >
              <Image
                src="/logo.svg"
                alt="9d8 logo"
                className="hover:opacity-75 transition-all"
                width={56}
                height={35.26}
              />
              <span className="sr-only">9d8</span>
            </a>
          </h1>
          <h2>software design and development</h2>
        </div>
        <p className="mt-12 md:w-[480px]">
          9d8 is a software design and development studio created by{" "}
          <a
            className="underline hover:opacity-60"
            href="https://cameronyoungblood.com"
          >
            cameron youngblood
          </a>{" "}
          and{" "}
          <a className="underline hover:opacity-60" href="https://bridger.to">
            bridger tower
          </a>
          .
        </p>

        <div className="mt-12 flex gap-4">
          <p>contact:</p>
          <a
            className="underline hover:opacity-60"
            href="mailto:9d8dev@gmail.com"
          >
            email
          </a>
          <a
            className="underline hover:opacity-60"
            href="https://github.com/9d8dev"
          >
            github
          </a>
          <a
            className="underline hover:opacity-60"
            href="https://twitter.com/9d8dev"
          >
            x
          </a>
        </div>
      </div>

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

      {/* Footer */}
      <div className="flex py-4 md:py-0 flex-col md:flex-row z-20 px-4 md:fixed bottom-0 bg-background right-0 left-0 text-sm text-focus-in gap-2 justify-between md:items-center">
        <h3>
          ©{" "}
          <span className="sr-only">
            <a href="https://cameron.so">Cameron</a> and{" "}
            <a href="https://bridger.to">Bridger</a>
          </span>{" "}
          1998 to present
        </h3>
        <div className="hidden md:flex w-fit gap-2 items-center">
          <h4>contact: hello @ 9d8.dev</h4>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
