import Balancer from "react-wrap-balancer";

const companies = [
  { name: "Vivint", link: "https://www.vivint.com" },
  { name: "Tackle.io", link: "https://www.tackle.io" },
  { name: "Ampry", link: "https://www.ampry.com" },
  { name: "Pandium", link: "https://www.pandium.com" },
  { name: "Wavefinder", link: "https://www.wavefinder.io" },
  { name: "Trajector", link: "https://www.trajector.com" },
  { name: "General Motors", link: "https://www.gm.com" },
  { name: "Route", link: "https://www.route.com" },
  { name: "Hewlett Packer", link: "https://www.hp.com" },
  { name: "Rem Blair", link: "https://www.remblair.com" },
  { name: "Alpine Codex", link: "https://alpinecodex.com" },
];

const services = [
  {
    name: "Software Development",
    description:
      "Full-cycle Product Design, Prototyping & Wireframing, Custom Software Development, Quality Assurance & Testing",
    price: "$7,000/month",
  },
  {
    name: "AI Integration & Development",
    description:
      "AI Workflow Automation, AI Chatbots & Virtual Assistants, AI Consulting & Strategy, AI Software Development",
    price: "$7,000/month",
  },
  {
    name: "Web Development",
    description:
      "Responsive Web Design, Frontend & Backend Development, E-commerce Solutions, Website Maintenance & Support",
    price: "$6,000/month",
  },
  {
    name: "Marketing Development",
    description:
      "Marketing Automation, SEO & SEM Services, Email Campaign Management, Data Analytics & Reporting",
    price: "$6,000/month",
  },
];

export default function Home() {
  return (
    <main className="my-12 grid gap-6 p-6 md:gap-12">
      <Hero />
      <Pricing />
      <Testimonials />
    </main>
  );
}

const Hero = () => {
  return (
    <div className="grid gap-4 md:max-w-2xl">
      <h1 className="sr-only text-4xl font-medium">9d8 Services</h1>
      <h2 className="text-2xl">Subscription Services offered by 9d8</h2>
      <h3>
        We offer a variety of subscription services to help you grow your
        business. We work across artificial intelligence, marketing, design, and
        development.
      </h3>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid gap-4 md:max-w-2xl">
      <h3 className="text-xl">
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
            <h4>{service.name}</h4>
            <p className="text-muted-foreground">{service.description}</p>
            <p>
              <span className="text-muted-foreground">Starting at</span>{" "}
              {service.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="grid gap-4 md:max-w-2xl">
      <h3 className="mb-6">We&apos;ve worked with some amazing companies. </h3>
      <ul className="flex-wrap gap-2 md:flex">
        {companies.map((company, index) => (
          <li className="" key={index}>
            <a
              className="transition-all hover:text-muted-foreground"
              href={company.link}
            >
              {company.name} +{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
