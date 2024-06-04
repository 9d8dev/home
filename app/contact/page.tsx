import Balancer from "react-wrap-balancer";
import { Component, Rocket } from "lucide-react";

export default function Page() {
  return (
    <div>
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
    </div>
  );
}
