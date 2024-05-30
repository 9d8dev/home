import Balancer from "react-wrap-balancer";

const companies = [
  { name: "Vivint", link: "https://www.vivint.com" },
  { name: "Tackle.io", link: "https://www.tackle.io" },
  { name: "Ampry", link: "https://www.ampry.com" },
  { name: "Wavefinder", link: "https://www.wavefinder.io" },
  { name: "Trajector", link: "https://www.trajector.com" },
  { name: "General Motors", link: "https://www.gm.com" },
  { name: "Hewlett Packer", link: "https://www.hp.com" },
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
    name: "Web Development",
    description:
      "Responsive Web Design, Frontend & Backend Development, E-commerce Solutions, Website Maintenance & Support",
    price: "$6,000/month",
  },
  {
    name: "Marketing Development",
    description:
      "Marketing Automation, SEO & SEM Services, Email Campaign Management, Data Analytics & Reporting",
    price: "$5,500/month",
  },
];

export default function Home() {
  return (
    <main className="p-6 grid gap-6 md:gap-12 my-12">
      <Hero />
      <Pricing />
      <Testimonials />
    </main>
  );
}

const Hero = () => {
  return (
    <div className="md:max-w-2xl grid gap-4">
      <h1 className="text-4xl font-medium sr-only">9d8 Services</h1>
      <h2 className="text-4xl">Subscription Services offered by 9d8.</h2>
      <h3 className="text-muted-foreground">
        We offer a variety of subscription services to help you grow your
        business. We work across artificial intelligence, marketing, design, and
        development.
      </h3>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="md:max-w-2xl grid gap-4">
      <h3 className="text-2xl">
        <Balancer>
          Subscriptions to build your business. Pause or cancel anytime.
        </Balancer>
      </h3>

      <ul className="grid gap-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="bg-muted-background p-6 grid gap-4 rounded-lg border bg-accent/25"
          >
            <h4 className="text-2xl">{service.name}</h4>
            <p className="text-muted-foreground">{service.description}</p>
            <p className="text-2xl">
              <span className="text-muted-foreground text-lg">Starting at</span>{" "}
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
    <div className="md:max-w-2xl grid gap-4">
      <h3 className="text-2xl mb-6">
        We&apos;ve worked with some amazing companies.{" "}
      </h3>
      <ul className="md:flex gap-2 flex-wrap">
        {companies.map((company, index) => (
          <li className="text-2xl" key={index}>
            <a
              className="hover:text-muted-foreground transition-all"
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
