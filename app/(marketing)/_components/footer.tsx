import { Button } from "@/components/ui/button";
import { FileText, Github, Globe2, Layers3, Search } from "lucide-react";
import { Logo } from "./logo";

const footerLinks = [
  { label: "Story", href: "#story" },
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Get started", href: "#top" },
];

const highlights = [
  { label: "Nested pages", icon: Layers3 },
  { label: "Rich editor", icon: FileText },
  { label: "Fast search", icon: Search },
  { label: "Public preview", icon: Globe2 },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20 px-6 py-12 text-sm text-muted-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7">
            A focused place to write, organize, and publish work that grows from rough notes into clear pages.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <h2 className="font-semibold text-foreground">Explore</h2>
            <div className="mt-3 grid gap-2">
              {footerLinks.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  className="h-auto justify-start px-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-foreground">Product</h2>
            <div className="mt-3 grid gap-2">
              <Button variant="ghost" size="sm" className="h-auto justify-start px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
                Privacy
              </Button>
              <Button variant="ghost" size="sm" className="h-auto justify-start px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
                Terms
              </Button>
              <Button variant="ghost" size="sm" className="h-auto justify-start gap-2 px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
                <Github className="h-4 w-4" />
                Source
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>Built for calm, connected writing.</p>
        <p>© {new Date().getFullYear()} Jotion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
