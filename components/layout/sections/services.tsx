import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Website Development",
    description:
      "Responsive landing pages, portfolios, admin dashboards, and full-stack web apps built with modern frameworks.",
    pro: 0,
  },
  {
    title: "AI Automation",
    description:
      "Workflow bots, data extraction, document helpers, and AI-assisted tools that reduce repetitive work.",
    pro: 1,
  },
  {
    title: "Machine Learning Prototypes",
    description:
      "Classification, prediction, recommendation, and computer vision experiments for coursework or product ideas.",
    pro: 0,
  },
  {
    title: "CS Project Support",
    description:
      "APIs, databases, algorithms, data visualization, and technical documentation for research-style builds.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What We Can Build
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        BoorgerKirk mixes frontend craft, backend thinking, and practical AI
        experiments to ship useful computer science projects.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              Focus
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
