import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 grid gap-6 md:gap-12 my-12">
      <Intro />
      <Links />
    </main>
  );
}

const Intro = () => {
  return (
    <div className="md:max-w-2xl grid gap-4">
      <p>
        9d8 is a marketing-minded software design and development studio created
        by{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://cameronyoungblood.com"
        >
          Cameron Youngblood
        </a>{" "}
        and{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://bridger.to"
        >
          Bridger Tower
        </a>
        . We partner with innovative companies across the United States to
        fulfill design, code, and marketing needs. Please{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="mailto:bridger@9d8.dev,cameron@9d8.dev"
        >
          email us
        </a>{" "}
        or <a href="https://cal.com/9d8dev">book a meeting with us</a>
        if you are interested in working with us.
      </p>
      <p>
        We also develop open source software with a focus on marketing and
        website creation. Projects include{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://fjord.dev"
        >
          Fjord
        </a>
        ,{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://github.com/brijr/craft"
        >
          Craft
        </a>
        ,{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://components.bridger.to"
        >
          Components
        </a>
        , and{" "}
        <a
          className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
          href="https://router.so"
        >
          Router.so
        </a>
        .
      </p>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex gap-4">
      <Link
        className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
        href="/work"
      >
        / work
      </Link>
      <a
        className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
        href="https://github.com/9d8dev"
      >
        / github
      </a>
      <a
        className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
        href="https://twitter.com/9d8dev"
      >
        / x
      </a>
    </div>
  );
};
