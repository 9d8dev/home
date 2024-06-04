import { StyledLink } from "@/components/styled-link";
import Link from "next/link";
import Image from "next/image";

import Bridger from "@/public/bridger.jpeg";
import Cameron from "@/public/cameron.jpeg";

import {
  Search,
  Paperclip,
  Rocket,
  Beaker,
  Palette,
  LifeBuoy,
  icons,
} from "lucide-react";

const process = [
  {
    title: "Discovery",
    icon: <Search className="h-6 w-6" />,
    description:
      "We start by understanding your business goals, target audience, and unique challenges through in-depth discussions and research.",
  },
  {
    title: "Strategy & Planning",
    icon: <Paperclip className="h-6 w-6" />,
    description:
      "We collaborate to develop a comprehensive strategy and roadmap, aligning our efforts with your objectives and ensuring a seamless execution.",
  },
  {
    title: "Design & Development",
    icon: <Palette className="h-6 w-6" />,
    description:
      "Our experienced designers and developers work together to create intuitive, user-friendly interfaces and robust, secure software solutions tailored to your needs.",
  },
  {
    title: "Testing & Quality Assurance",
    icon: <Beaker className="h-6 w-6" />,
    description:
      "We rigorously test our solutions to ensure they meet the highest standards of quality, performance, and accessibility before deployment.",
  },
  {
    title: "Launch & SEO Optimization",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "We help you launch your solutions successfully and optimize them for search engines to ensure maximum visibility and engagement.",
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <LifeBuoy className="h-6 w-6" />,
    description:
      "We provide ongoing support, maintenance, and optimization to ensure your solutions continue to meet your evolving needs.",
  },
];

const founders = [
  {
    name: "Bridger Tower",
    src: Bridger,
    location: "Salt Lake City, UT",
    description:
      "Bridger is a design engineer blurring the lines between design and code. He has worked with hundreds of brands and built websites for clients big and small. When not designing and coding he can be found climbing, mountain biking, or hiking.",
    website: "https://bridger.to",
    github: "https://github.com/brijr",
    twitter: "https://twitter.com/bridgertower",
    linkedin: "https://linkedin.com/in/brdgr",
  },
  {
    name: "Cameron Youngblood",
    src: Cameron,
    location: "San Diego, CA",
    description:
      "Cameron is a full stack engineer with a background in marketing and startups. He has a Masters in Computer Science from Georgia Tech and spends his freetime coding or surfing. He is passionate about software and scaling businesses.",
    website: "https://cameron.so",
    github: "https://github.com/youngbloodcyb",
    twitter: "https://twitter.com/youngbloodcyb",
    linkedin: "https://www.linkedin.com/in/cameron-youngblood/",
  },
];

export default function Page() {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <h1 className="text-2xl">About 9d8</h1>
      <p>
        9d8 is a marketing-minded software design and development studio founded
        by <StyledLink href="https://cameron.so">Cameron Youngblood</StyledLink>{" "}
        and <StyledLink href="https://bridger.to">Bridger Tower</StyledLink>. We
        specialize in helping innovative companies across the United States with
        their design, coding, and marketing needs, learn more about our{" "}
        <StyledLink href="/services">services</StyledLink>.
      </p>

      <hr className="my-8" />

      <h2 className="text-lg">Process</h2>

      <ul className="grid gap-4">
        {process.map((step, index) => (
          <li
            key={index}
            className="grid gap-4 rounded-lg border bg-accent/25 p-6"
          >
            <h4 className="-mt-px flex flex-col gap-2 text-lg md:flex-row md:items-center md:text-xl">
              <span className="text-[#9d89d8] dark:text-yellow-100">
                {step.icon}
              </span>{" "}
              {step.title}
            </h4>
            <p className="text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ul>

      <hr className="my-8" />

      <h2 className="text-lg">Founders</h2>

      {founders.map((founder, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-lg border bg-accent/25 p-6 md:flex-row md:items-center"
        >
          <Image
            src={founder.src}
            alt={founder.name}
            width={148}
            height={148}
            className="rounded-lg border"
          />
          <div className="grid gap-2">
            <h3 className="text-lg md:text-xl">{founder.name}</h3>
            <p className="text-sm text-muted-foreground">
              {founder.description}
            </p>
            <div className="flex gap-2 text-sm">
              <StyledLink href={founder.website}>Website</StyledLink>
              <StyledLink href={founder.github}>GitHub</StyledLink>
              <StyledLink href={founder.twitter}>Twitter</StyledLink>
              <StyledLink href={founder.linkedin}>LinkedIn</StyledLink>
            </div>
          </div>
        </div>
      ))}

      <hr className="my-8" />

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
}
