export default function Home() {
  return (
    <main className="p-4 max-w-7xl m-auto grid md:text-lg bg-background grid-rows-[16rem,1fr,2rem] gap-2">
      <p className="mt-12 md:w-[480px]">
        9d8 is a software design and development studio created by{" "}
        <a
          className="underline hover:opacity-60"
          href="https://cameronyoungblood.com"
        >
          cameron youngblood
        </a>{" "}
        and{" "}
        <a className="underline hover:opacity-60" href="https://bridger.to">
          bridger tower
        </a>
        .
      </p>

      <div className="mt-12 flex gap-4">
        <p>contact:</p>
        <a
          className="underline hover:opacity-60"
          href="mailto:9d8dev@gmail.com"
        >
          email
        </a>
        <a
          className="underline hover:opacity-60"
          href="https://github.com/9d8dev"
        >
          github
        </a>
        <a
          className="underline hover:opacity-60"
          href="https://twitter.com/9d8dev"
        >
          x
        </a>
      </div>
    </main>
  );
}
