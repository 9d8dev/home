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
      <section>
        <h2>Product</h2>
        <hr />

        <h3>Product Design & Software Development</h3>
        <p>
          <strong>Product Development</strong> - $7,000/month
        </p>
        <ul>
          <li>Full-cycle Product Design</li>
          <li>Prototyping & Wireframing</li>
          <li>Custom Software Development</li>
          <li>Quality Assurance & Testing</li>
        </ul>
      </section>
      <section>
        <h2>Web</h2>
        <hr />

        <h3>Web Design & Development</h3>
        <p>
          <strong>Web Development</strong> - $6,000/month
        </p>
        <ul>
          <li>Responsive Web Design</li>
          <li>Frontend & Backend Development</li>
          <li>E-commerce Solutions</li>
          <li>Website Maintenance & Support</li>
        </ul>
      </section>
      <section>
        <h2>Marketing</h2>
        <hr />

        <h3>Marketing Automation & Technical Marketing</h3>
        <p>
          <strong>Marketing Development</strong> - $5,500/month
        </p>
        <ul>
          <li>Marketing Automation</li>
          <li>SEO & SEM Services</li>
          <li>Email Campaign Management</li>
          <li>Data Analytics & Reporting</li>
        </ul>
      </section>
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
