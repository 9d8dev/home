import { StyledLink } from "@/components/styled-link";

export default function Home() {
  return (
    <main className="my-12 grid gap-6 p-6 md:gap-12">
      <Intro />
      <Links />
    </main>
  );
}

const Intro = () => {
  return (
    <div className="grid gap-4 md:max-w-2xl">
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
        <StyledLink href="https://fjord.dev">Fjord</StyledLink>,{" "}
        <StyledLink href="https://github.com/brijr/craft">Craft</StyledLink>,{" "}
        <StyledLink href="https://components.bridger.to">Components</StyledLink>
        , and <StyledLink href="https://router.so">Router.so</StyledLink>.
      </p>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex gap-4">
      <StyledLink href="/work">/ work</StyledLink>{" "}
      <StyledLink href="/services">/ services</StyledLink>
      <StyledLink href="https://github.com/9d8dev">/ github</StyledLink>
      <StyledLink href="https://twitter.com/9d8dev">/ x</StyledLink>
    </div>
  );
};
