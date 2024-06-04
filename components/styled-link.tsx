import Link from "next/link";

export const StyledLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      className="underline decoration-[#9d89d8]/30 underline-offset-4 transition-all hover:decoration-[#9d89d8] dark:decoration-yellow-100/30 dark:hover:decoration-yellow-200"
      href={href}
    >
      {children}
    </Link>
  );
};
