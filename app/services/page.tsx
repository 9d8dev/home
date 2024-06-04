import Balancer from "react-wrap-balancer";
import { StyledLink } from "@/components/styled-link";
import { Globe, Bot, Box, Rocket } from "lucide-react";

const companies = [
  { name: "Vivint", link: "https://www.vivint.com" },
  { name: "Tackle.io", link: "https://www.tackle.io" },
  { name: "Ampry", link: "https://www.ampry.com" },
  { name: "Pandium", link: "https://www.pandium.com" },
  { name: "Wavefinder", link: "https://www.wavefinder.io" },
  { name: "Trajector", link: "https://www.trajector.com" },
  { name: "General Motors", link: "https://www.gm.com" },
  { name: "Route", link: "https://www.route.com" },
  { name: "Hewlett Packard", link: "https://www.hp.com" },
  { name: "Rem Blair", link: "https://www.remblair.com" },
  { name: "Alpine Codex", link: "https://alpinecodex.com" },
];

const services = [
  {
    name: "Software Development",
    icon: <Box className="h-6 w-6" />,
    description:
      "From full-cycle product design to custom software development, we offer comprehensive solutions including prototyping, wireframing, and rigorous quality assurance to ensure your software meets the highest standards.",
  },
  {
    name: "AI Integration & Development",
    icon: <Bot className="h-6 w-6" />,
    description:
      "Leverage the power of AI with our services in workflow automation, chatbot and virtual assistant creation, strategic AI consulting, and bespoke AI software development to transform your business processes.",
  },
  {
    name: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    description:
      "Our web development services encompass responsive design, robust frontend and backend development, tailored e-commerce solutions, and ongoing website maintenance and support to keep your digital presence strong and effective.",
  },
  {
    name: "Marketing Development",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "Enhance your marketing efforts with our expertise in automation, SEO and SEM services, email campaign management, and data analytics and reporting to drive growth and improve ROI.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Testimonials />
    </>
  );
}

const Hero = () => {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <h1 className="sr-only text-4xl font-medium">9d8 Services</h1>
      <h2 className="text-2xl">Subscription Services offered by 9d8</h2>
      <p>
        At 9d8, we are enthusiastic about collaborating with new brands to
        empower them through innovative technology solutions.
      </p>
      <h3>
        We offer a variety of monthly partnership subscription services to help
        you grow your business. We work across artificial intelligence,
        marketing, design, and development.
      </h3>
      <p className="text-[#9d89d8] dark:text-yellow-100">
        Interested? Please{" "}
        <StyledLink href="mailto:bridger@9d8.dev,cameron@9d8.dev">
          email us
        </StyledLink>{" "}
        or{" "}
        <StyledLink href="https://cal.com/9d8dev">
          book a meeting with us
        </StyledLink>
        .
      </p>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <h3 className="text-lg">
        <Balancer>
          Subscriptions to build your business. Pause or cancel anytime.
        </Balancer>
      </h3>

      <ul className="grid gap-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="bg-muted-background grid gap-4 rounded-lg border bg-accent/25 p-6"
          >
            <h4 className="flex:items-center -mt-px flex flex-col gap-2 text-lg md:flex-row md:text-xl">
              <span className="text-[#9d89d8] dark:text-yellow-100">
                {service.icon}
              </span>{" "}
              {service.name}
            </h4>
            <p className="text-muted-foreground">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <h3 className="text-xl">
        We&apos;ve worked with some amazing companies.{" "}
      </h3>
      <ul className="flex-wrap gap-1 md:flex">
        {companies.map((company, index) => (
          <li className="" key={index}>
            <StyledLink href={company.link}>{company.name} +</StyledLink>
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground">
        See more of our <StyledLink href="/">work here</StyledLink>.
      </p>
    </div>
  );
};
