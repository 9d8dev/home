import { StyledLink } from "@/components/styled-link";
import { RouterForm } from "./form";

export default function Page() {
  return (
    <div className="grid gap-4 fade-in md:max-w-2xl">
      <p>
        Please{" "}
        <StyledLink href="mailto:bridger@9d8.dev,cameron@9d8.dev">
          email us
        </StyledLink>{" "}
        or{" "}
        <StyledLink href="https://cal.com/9d8dev">
          book a meeting with us
        </StyledLink>{" "}
        if you are interested in working with us. Or fill out the form below.
      </p>
      <RouterForm />
    </div>
  );
}
