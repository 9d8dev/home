import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type ProjectProps = {
  name: string;
  link: string;
  image: string;
  desc: string;
  year: string;
};

const Project = ({ name, link, image, desc, year }: ProjectProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{name}</HoverCardTrigger>
      <HoverCardContent>{desc}</HoverCardContent>
    </HoverCard>
  );
};

export default Project;
