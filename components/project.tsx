import { Badge } from "./ui/badge";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { ExternalLinkIcon, InfoIcon } from "lucide-react";

type ProjectProps = {
  name: string;
  link: string;
  image: StaticImageData;
  desc: string;
  year: string;
};

const Project = ({ name, link, image, desc, year }: ProjectProps) => {
  return (
    <div className="group h-fit w-fit rounded-lg border shadow-sm">
      <Link
        className="relative block overflow-hidden rounded-lg border"
        href={link}
      >
        <Image
          className="h-full w-full object-cover object-center transition-all md:group-hover:border md:group-hover:blur-sm"
          width={720}
          height={500}
          src={image}
          alt={name}
          placeholder="blur"
        ></Image>

        <Badge
          variant="secondary"
          className="absolute left-2 top-2 hidden rounded-md shadow-md transition-all md:group-hover:flex"
        >
          <InfoIcon className="mr-2 w-3" />
          {desc}
        </Badge>

        <Badge
          variant="secondary"
          className="absolute bottom-2 left-2 rounded-md shadow-md transition-all md:hidden md:group-hover:flex"
        >
          {name} <ExternalLinkIcon className="ml-2 w-3" />
        </Badge>
      </Link>
    </div>
  );
};

export default Project;
