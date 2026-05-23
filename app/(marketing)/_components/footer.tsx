import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-border px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
      <Logo />
      <p className="md:ml-4">A focused place to write, organize, and publish your work.</p>
      <div className="flex items-center gap-x-2 md:ml-auto">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Privacy
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Terms
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
