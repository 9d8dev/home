import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Badge } from "./ui/badge";

import Link from "next/link";
import Image from "next/image";

import { LinkIcon, ExternalLinkIcon } from "lucide-react";

type ProjectProps = {
  name: string;
  link: string;
  image: string;
  desc: string;
  year: string;
};

const Project = ({ name, link, image, desc, year }: ProjectProps) => {
  return (
    <div className="group h-fit w-fit">
      <HoverCard>
        <HoverCardTrigger
          asChild
          className="cursor-pointer transition-all group-hover:opacity-70"
        >
          <Link
            className="block border rounded-lg h-56 md:h-64 relative overflow-hidden"
            href={link}
          >
            <Image
              className="w-full h-full object-cover group-hover:blur-sm object-center"
              width={500}
              height={500}
              src={image}
              alt={name}
            ></Image>

            <Badge
              variant="outline"
              className="hidden group-hover:flex rounded-md absolute bottom-2 left-2"
            >
              {name} <ExternalLinkIcon className="ml-2 w-3" />
            </Badge>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent>
          {name} :: {desc}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Project;
