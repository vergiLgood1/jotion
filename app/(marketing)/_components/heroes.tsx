import { FileText, Globe2, Layers3, Search, Sparkles } from "lucide-react";

const Heroes = () => {
  return (
    <div data-product-mockup className="relative mx-auto mt-14 w-full max-w-6xl px-4">
      <div className="absolute -left-4 top-16 hidden rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur md:block" data-float-card>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Search className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Quick search</p>
            <p className="text-xs text-muted-foreground">Find every page in seconds</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 bottom-24 hidden rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur lg:block z-10" data-float-card>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Globe2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Publish ready</p>
            <p className="text-xs text-muted-foreground">Share a page when it is done</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-border bg-card text-card-foreground shadow-2xl">
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary/20" />
            <span className="h-3 w-3 rounded-full bg-primary/30" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
          </div>
          <div className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Jotion workspace
          </div>
        </div>

        <div className="grid min-h-[520px] md:grid-cols-[280px_1fr]">
          <aside className="hidden border-r border-border bg-muted/30 p-5 md:block">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Launch Notes</p>
                <p className="text-xs text-muted-foreground">Private workspace</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              {[
                ["Product strategy", true],
                ["Research notes", false],
                ["Release plan", false],
                ["Published changelog", false],
              ].map(([label, active]) => (
                <div
                  key={label as string}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                    active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>

          <section className="relative bg-background p-6 sm:p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-muted/50 to-transparent" />
            <div className="relative mx-auto max-w-3xl">
              <div className="mb-8 h-36 rounded-3xl border border-border bg-gradient-to-br from-muted via-background to-muted/40 p-6">
                <div className="flex h-full items-end justify-between">
                  <div>
                    <p className="mb-2 text-5xl">✦</p>
                    <p className="text-sm font-medium text-muted-foreground">A page can begin messy</p>
                  </div>
                  <div className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                    Draft saved
                  </div>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-muted px-3 py-1">Cover</span>
                <span className="rounded-full border border-border bg-muted px-3 py-1">Icon</span>
                <span className="rounded-full border border-border bg-muted px-3 py-1">Nested page</span>
                <span className="rounded-full border border-border bg-muted px-3 py-1">Publish</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Product strategy
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Collect raw notes, turn them into sections, and keep the full story
                connected from first idea to final public page.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <Layers3 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-medium text-foreground">Connected pages</p>
                  <p className="mt-1 text-sm text-muted-foreground">Structure plans without losing the thread.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <Globe2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="font-medium text-foreground">Public preview</p>
                  <p className="mt-1 text-sm text-muted-foreground">Publish only the pages you choose.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
