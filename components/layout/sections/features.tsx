import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Responsive Interfaces",
    description:
      "Pages and dashboards are designed to stay readable on phones, laptops, and presentation screens.",
  },
  {
    icon: "BadgeCheck",
    title: "Readable Code",
    description:
      "We keep components, API routes, and scripts organized so future changes are easier to understand.",
  },
  {
    icon: "Goal",
    title: "Goal-Oriented Scope",
    description:
      "Every build is shaped around a demoable outcome: a working site, model, automation, or prototype.",
  },
  {
    icon: "PictureInPicture",
    title: "Clear Visual Output",
    description:
      "Charts, UI states, and project screens are prepared for reports, showcases, and user testing.",
  },
  {
    icon: "MousePointerClick",
    title: "Interactive Workflows",
    description:
      "Forms, filters, uploads, auth flows, and automation triggers are built as usable experiences.",
  },
  {
    icon: "Newspaper",
    title: "Documentation Ready",
    description:
      "We can prepare technical notes, setup steps, and project explanations alongside the implementation.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        How We Shape a Build
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We keep the technical work practical: useful interfaces, measurable
        behavior, readable code, and enough polish for a confident presentation.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
