import { StyledLink } from "@/components/styled-link";

export default function Page() {
  return (
    <div>
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
