import { StyledLink } from "@/components/styled-link";

import Balancer from "react-wrap-balancer";

import Project from "@/components/project";
import projects from "@/projects.config";

import { Component, Rocket } from "lucide-react";

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
    </>
  );
}

const Intro = () => {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <h1 className="sr-only">9d8 :: software design and development</h1>
      <h2 className="text-3xl sm:text-4xl">
        <Balancer>
          Engineering Studio building{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">Websites</span>{" "}
          and{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">Software</span>{" "}
          for teams who value{" "}
          <span className="inline-flex items-center gap-2">
            <Component className="text-accent-foreground" /> Design
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center gap-2">
            <Rocket className="text-accent-foreground" /> Marketing
          </span>
          .
        </Balancer>
      </h2>
      <p>
        9d8 is a marketing-minded software design and development studio created
        by{" "}
        <StyledLink href="https://cameronyoungblood.com">
          Cameron Youngblood
        </StyledLink>{" "}
        and <StyledLink href="https://bridger.to">Bridger Tower</StyledLink>. We
        partner with innovative companies across the United States to fulfill
        design, code, and marketing needs. Please{" "}
        <StyledLink href="mailto:bridger@9d8.dev,cameron@9d8.dev">
          email us
        </StyledLink>{" "}
        or{" "}
        <StyledLink href="https://cal.com/9d8dev">
          book a meeting with us
        </StyledLink>{" "}
        if you are interested in working with us.
      </p>
      <p>
        We also develop open source software with a focus on marketing and
        website creation. Projects include{" "}
        <StyledLink href="https://wp.9d8.dev">Next WP</StyledLink>,{" "}
        <StyledLink href="https://github.com/brijr/craft">Craft</StyledLink>,{" "}
        <StyledLink href="https://components.bridger.to">Components</StyledLink>
        , and <StyledLink href="https://router.so">Router.so</StyledLink>.
      </p>
    </div>
  );
};

const Work = () => {
  return (
    <div className="not-prose z-10 grid max-w-screen-2xl gap-2 fade-in sm:grid-cols-2">
      {projects.map((project, index) => (
        <Project
          key={project.name}
          name={project.name}
          link={project.link}
          image={project.image}
          desc={project.description}
          year={project.year.toString()}
          delay={index === 0 ? 500 : 500 + 150 * index}
        />
      ))}
    </div>
  );
};
