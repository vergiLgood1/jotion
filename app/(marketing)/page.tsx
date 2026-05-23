import Plasma from "@/components/Plasma";
import {
  ArchiveRestore,
  FileStack,
  FileText,
  Globe2,
  ImageIcon,
  Layers3,
  Moon,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import Footer from "./_components/footer";
import { Heading } from "./_components/heading";
import Heroes from "./_components/heroes";
import { MarketingAnimations } from "./_components/marketing-animations";

const workflow = [
  {
    title: "Capture",
    description:
      "Open a blank page and write the rough version before the idea disappears.",
  },
  {
    title: "Structure",
    description:
      "Turn scattered notes into nested pages that keep context close.",
  },
  {
    title: "Refine",
    description:
      "Add covers, icons, rich blocks, and the details that make a page useful.",
  },
  {
    title: "Publish",
    description:
      "Share a public preview only when the work is ready to leave your workspace.",
  },
];

const features = [
  {
    title: "Nested pages",
    description:
      "Create a hierarchy that mirrors the way your projects actually develop.",
    icon: Layers3,
  },
  {
    title: "Rich editor",
    description:
      "Write with a flexible editor built for notes, docs, images, and long-form thinking.",
    icon: FileText,
  },
  {
    title: "Covers and icons",
    description:
      "Give important pages a visual identity so the workspace feels easier to scan.",
    icon: ImageIcon,
  },
  {
    title: "Fast search",
    description:
      "Jump back into any document without digging through every folder by hand.",
    icon: Search,
  },
  {
    title: "Trash and restore",
    description:
      "Archive confidently and recover notes when an idea becomes relevant again.",
    icon: ArchiveRestore,
  },
  {
    title: "Public preview",
    description:
      "Publish selected pages to the web while keeping the rest of your workspace private.",
    icon: Globe2,
  },
  {
    title: "Dark mode",
    description:
      "Keep writing comfortably in the theme that fits your focus and environment.",
    icon: Moon,
  },
  {
    title: "Connected workspace",
    description:
      "Bring notes, plans, drafts, and references into one product-shaped system.",
    icon: FileStack,
  },
];

/* -------------------------------------------------------------------------- */
/*                                  STYLES                                    */
/* -------------------------------------------------------------------------- */

const sectionClass =
  "mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32";

const compactSectionClass =
  "mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28";

const sectionIntroClass = "mb-12 max-w-2xl";

const sectionEyebrowClass =
  "mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground";

const sectionTitleClass =
  "text-3xl font-semibold tracking-tight text-foreground sm:text-5xl";

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      data-section-reveal
      className={cn(sectionClass, className)}
    >
      {children}
    </section>
  );
};

const MarketingPage = () => {
  return (
    <div
      id="top"
      className="min-h-full overflow-hidden bg-background text-foreground"
    >
      <MarketingAnimations />

      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 pb-32 pt-16 sm:pt-20 md:pt-44 md:pb-40 lg:pb-48">
        <div className="absolute inset-0 -z-30 bg-background" />

        <div className="absolute inset-x-0 top-[-7rem] -z-20 h-[1120px] opacity-85 sm:h-[1180px] lg:h-[1240px]">
          <Plasma
            color="#7c3aed"
            speed={0.55}
            direction="pingpong"
            scale={1.15}
            opacity={0.72}
            mouseInteractive={false}
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_24%,transparent_0%,hsl(var(--background)/0.08)_44%,hsl(var(--background)/0.7)_88%)]" />

        <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-gradient-to-b from-transparent via-background/75 to-background" />

        <div className="relative z-10">
          <Heading />
          <Heroes />
        </div>
      </section>

      {/* STORY */}
      <Section
        id="story"
        className="-mt-10 scroll-mt-28 pt-24 md:pt-32 lg:pt-36"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className={sectionEyebrowClass}>
              The story behind the workspace
            </p>

            <h2 className={sectionTitleClass}>
              Ideas rarely arrive organized.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
            <p className="text-lg leading-8 text-muted-foreground">
              A product decision starts as a note. A note becomes a plan. A plan
              needs context, references, structure, and eventually a way to be
              shared. Jotion is designed around that movement: from the first
              unfinished sentence to a page that can stand on its own.
            </p>
          </div>
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section id="workflow" className="scroll-mt-28">
        <div className={sectionIntroClass}>
          <p className={sectionEyebrowClass}>A simple flow</p>

          <h2 className={sectionTitleClass}>
            Move from blank page to published work without changing tools.
          </h2>
        </div>

        <div data-stagger-parent className="grid gap-4 md:grid-cols-4">
          {workflow.map((item, index) => (
            <article
              data-stagger-item
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {item.description}
              </p>

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5" />
            </article>
          ))}
        </div>
      </Section>

      {/* FEATURES HIGHLIGHT */}
      <Section id="features" className="scroll-mt-28">
        <div className="rounded-[2.5rem] border border-border bg-muted/30 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground">
                Built around real writing work
              </div>

              <h2 className={sectionTitleClass}>
                Keep the full context, not just the final document.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Jotion keeps rough notes, supporting pages, polished drafts, and
                public previews in one connected space. The result feels less
                like filing and more like building a living map of your work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Draft privately",
                  "Every page starts inside your workspace before it becomes public.",
                ],
                [
                  "Add personality",
                  "Use covers and icons to make pages memorable without visual clutter.",
                ],
                [
                  "Recover safely",
                  "Archive and restore notes as projects change direction.",
                ],
                [
                  "Share intentionally",
                  "Publish only the document you want others to see.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-border bg-background p-5 shadow-sm"
                >
                  <Sparkles className="mb-4 h-5 w-5 text-primary" />

                  <h3 className="font-semibold text-foreground">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURES GRID */}
      <Section>
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={sectionEyebrowClass}>
              What Jotion does
            </p>

            <h2 className={sectionTitleClass}>
              Everything here supports the same story: better pages, clearer
              work.
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-muted-foreground">
            No inflated claims. Just the product capabilities already built into
            the workspace.
          </p>
        </div>

        <div data-stagger-parent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                data-stagger-item
                key={feature.title}
                className="group rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-muted/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary transition-transform group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section
        data-section-reveal
        className={compactSectionClass}
      >
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 text-center text-card-foreground shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Share2 className="h-6 w-6" />
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your next idea does not need another tab. It needs a home.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
            Start with one page. Let it become a structure. Publish it only when
            the story is ready.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingPage;