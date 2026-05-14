import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code2, Cpu, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const projectTracks = [
  { icon: LayoutDashboard, label: "Web", value: "Design system" },
  { icon: Bot, label: "AI", value: "Automation flow" },
  { icon: Cpu, label: "ML", value: "Model prototype" },
  { icon: Code2, label: "CS", value: "Clean architecture" },
];

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Team</Badge>
            </span>
            <span> Web, AI, and computer science projects </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Build practical digital systems with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                BoorgerKirk
              </span>
              Team
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            A four-person student team turning ideas into websites,
            automations, machine learning experiments, dashboards, and clean
            software prototypes.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#contact">
                Start a Project
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-14 w-full max-w-[1200px] overflow-hidden rounded-lg border border-border bg-background shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/15 to-transparent" />
          <div className="relative border-b border-border bg-muted/60 px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-primary" />
              </div>
              <div className="h-2 w-28 rounded-full bg-primary/30 md:w-44" />
            </div>
          </div>

          <div className="relative grid gap-4 p-4 md:grid-cols-[1.05fr_0.95fr] md:p-8">
            <div className="rounded-lg border border-border bg-background/90 p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Project pipeline
                  </p>
                  <h2 className="text-2xl font-bold">Idea to prototype</h2>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Live
                </Badge>
              </div>

              <div className="space-y-3">
                {[
                  "Map user flow and data needs",
                  "Build the core interface",
                  "Connect AI or automation",
                  "Ship a tested prototype",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-md border border-border bg-muted/40 px-4 py-3"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                {projectTracks.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border bg-background/90 p-4 shadow-sm"
                  >
                    <Icon className="mb-4 size-6 text-primary" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-foreground p-5 text-background shadow-sm dark:bg-background dark:text-foreground">
                <div className="mb-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-background/70 dark:text-muted-foreground">
                    Build log
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <p>
                    <span className="text-primary">deploy</span> /dashboard
                  </p>
                  <p>
                    <span className="text-primary">train</span>{" "}
                    intent-classifier
                  </p>
                  <p>
                    <span className="text-primary">test</span> user-workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>
      </div>
    </section>
  );
};
