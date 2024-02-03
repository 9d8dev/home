import { Badge } from "./ui/badge";

import Link from "next/link";
import Image from "next/image";

import { ExternalLinkIcon, InfoIcon } from "lucide-react";

type ProjectProps = {
  name: string;
  link: string;
  image: string;
  desc: string;
  year: string;
};

const Project = ({ name, link, image, desc, year }: ProjectProps) => {
  return (
    <div className="group border rounded-lg h-fit w-fit shadow-sm">
      <Link
        className="block border rounded-lg relative overflow-hidden"
        href={link}
      >
        <Image
          className="w-full h-full object-cover md:group-hover:blur-sm md:group-hover:border object-center transition-all"
          width={500}
          height={500}
          src={image}
          alt={name}
        ></Image>

        <Badge
          variant="secondary"
          className="hidden transition-all shadow-md md:group-hover:flex rounded-md absolute top-2 left-2"
        >
          <InfoIcon className="mr-2 w-3" />
          {desc}
        </Badge>

        <Badge
          variant="secondary"
          className="md:hidden transition-all shadow-md md:group-hover:flex rounded-md absolute bottom-2 left-2"
        >
          {name} <ExternalLinkIcon className="ml-2 w-3" />
        </Badge>
      </Link>
    </div>
  );
};

export default Project;
