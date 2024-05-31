import Link from "next/link";

export const StyledLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <Link
      className="underline decoration-yellow-100/30 hover:decoration-yellow-200 underline-offset-4 transition-all"
      href={href}
    >
      {children}
    </Link>
  );
}
