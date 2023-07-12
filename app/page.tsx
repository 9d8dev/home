import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container divide-y">
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h1 className="text-xl font-bold uppercase">
            Design and development Studio
          </h1>
          <p className="text-slate-400">Rooted in innovation and creativity</p>
        </div>
      </section>
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h2 className="font-bold uppercase">Projects</h2>
          <p className="text-slate-400">Some of our work.</p>
        </div>
        <ul className="space-y-4 py-4">
          <li>
            <Link
              href="https://www.ampry.com/"
              className="flex flex-col space-y-1.5"
            >
              <span className="underline underline-offset-4 ">ampry</span>
              <span className="text-slate-400">
                Software development for performance marketing.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.flowhouse.io/"
              className="flex flex-col space-y-1.5"
            >
              <span className="underline underline-offset-4 ">flowhouse</span>
              <span className="text-slate-400">
                Productized design and development service specializing in
                Webflow.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.ziondesign.io/"
              className="flex flex-col space-y-1.5"
            >
              <span className="underline underline-offset-4 ">
                zion design co
              </span>
              <span className="text-slate-400">
                Design and branding for innovative digital brands.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.wavefinder.io/"
              className="flex flex-col space-y-1.5"
            >
              <span className="underline underline-offset-4 ">wavefinder</span>
              <span className="text-slate-400">
                Fully integrated AI-driven generative marketing platform.
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex flex-col space-y-1.5">
              <span className="underline underline-offset-4 ">builderkit</span>
              <span className="text-slate-400">
                AI empowered SEO and website building toolkit.
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
