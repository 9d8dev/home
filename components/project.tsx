import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { ExternalLinkIcon } from "lucide-react";

type ProjectProps = {
  name: string;
  link: string;
  image: StaticImageData;
  desc: string;
  year: string;
  delay: number;
};

const Project = ({ name, link, image, desc, year, delay }: ProjectProps) => {
  return (
    <div
      className="fade-in-bottom group h-fit w-fit rounded-lg border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link
        className="relative block overflow-hidden rounded-lg border"
        href={link}
      >
        <div className="overflow-hidden">
          <Image
            className="h-full w-full object-cover object-center transition-all md:group-hover:scale-[1.01]"
            width={720}
            height={500}
            src={image}
            alt={name}
            placeholder="blur"
          ></Image>
        </div>

        <div className="flex w-full items-center justify-between gap-2 rounded-b-lg border-t bg-accent/25 p-2 md:group-hover:bg-accent/50">
          <p>
            {name}{" "}
            <ExternalLinkIcon className="mb-1 inline h-4 w-4 text-foreground/0 transition-all group-hover:text-foreground/80" />
          </p>
          <p className="text-sm text-muted-foreground">
            {desc} / {year}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
