import { cn } from "@/lib/utils";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        // `Main` Specific Styles
        "max-w-none prose-p:m-0",
        // General Prose
        "prose:font-sans prose prose-neutral dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:font-normal",
        // Prose Strong
        "prose-strong:font-semibold",
        // Inline Links
        "prose-a:underline prose-a:decoration-yellow-100/30 prose-a:underline-offset-4 prose-a:transition-all",
        // Inline Link Hover
        "hover:prose-a:text-foreground hover:prose-a:decoration-yellow-200",
        // Blockquotes
        "prose-blockquote:not-italic",
        // Pre and Code Blocks
        "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
      )}
    >
      {children}
    </section>
  );
}

// className=""
