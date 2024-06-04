import { StyledLink } from "@/components/styled-link";

import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <Intro />
      <Links />
    </>
  );
}

const Intro = () => {
  return (
    <div className="grid gap-4 md:max-w-2xl">
      <h1 className="sr-only">9d8</h1>
      <h2 className="text-4xl">
        <Balancer>
          Engineering Studio building{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">Websites</span>{" "}
          for teams who value{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">Design</span>{" "}
          and{" "}
          <span className="text-[#9d89d8] dark:text-yellow-100">Marketing</span>
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
