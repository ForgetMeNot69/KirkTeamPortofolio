import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Prototype",
    popular: 0,
    price: "1-2 weeks",
    description:
      "For testing one clear idea quickly with enough polish to demo.",
    buttonText: "Discuss Prototype",
    benefitList: [
      "Landing page or small tool",
      "Core UI and data flow",
      "Basic documentation",
      "Presentation-ready demo",
      "Iteration notes",
    ],
  },
  {
    title: "Product Build",
    popular: 1,
    price: "3-5 weeks",
    description:
      "For a complete web app, dashboard, or automation workflow.",
    buttonText: "Plan Build",
    benefitList: [
      "Multi-page interface",
      "API and database layer",
      "Authentication or forms",
      "AI or automation option",
      "Testing and handoff notes",
    ],
  },
  {
    title: "Research Demo",
    popular: 0,
    price: "Flexible",
    description:
      "For machine learning, data analysis, or experimental CS concepts.",
    buttonText: "Scope Research",
    benefitList: [
      "Dataset preparation",
      "Model experiment",
      "Metrics and charts",
      "Result explanation",
      "Report support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Project Paths
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Pick the kind of collaboration that matches the size and uncertainty of
        the idea. We can adjust scope after the first discussion.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">{price}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  <a href="#contact">{buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
