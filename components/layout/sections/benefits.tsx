import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Project-First Thinking",
    description:
      "We start from the problem, then choose the stack, data model, interface, and automation flow that fit the project.",
  },
  {
    icon: "LineChart",
    title: "Useful Data Work",
    description:
      "We can clean, visualize, and model data so dashboards and ML experiments explain what is happening.",
  },
  {
    icon: "Wallet",
    title: "Lean Delivery",
    description:
      "Small, clear milestones keep prototypes realistic, testable, and easier to present or extend later.",
  },
  {
    icon: "Sparkle",
    title: "Creative Engineering",
    description:
      "From AI assistants to interactive websites, we enjoy turning rough ideas into polished technical demos.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Real Student Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We are a compact team, so each member can move across design,
            implementation, testing, and presentation instead of staying boxed
            into one narrow role.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
