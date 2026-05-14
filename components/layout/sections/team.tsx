import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamProps {
  name: string;
  initials: string;
  role: string;
  focus: string;
}

const teamList: TeamProps[] = [
  {
    name: "Farriel Arrianta Akbar Pratama",
    initials: "FA",
    role: "Backend and Systems Developer",
    focus: "Builds APIs, service logic, integrations, and the technical foundation behind each project.",
  },
  {
    name: "Muhammad Hariz Faizul Anwar",
    initials: "MH",
    role: "Full-Stack Developer",
    focus: "Connects frontend, backend, databases, and deployment details into working products.",
  },
  {
    name: "Muhammad Eka Nur Arief",
    initials: "ME",
    role: "AI and Data Developer",
    focus: "Works on automation logic, data preparation, machine learning experiments, and analysis.",
  },
  {
    name: "Nizam Avif Anhari",
    initials: "NA",
    role: "Frontend and Interface Developer",
    focus: "Turns project ideas into structured pages, reusable UI, and clear user flows.",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet BoorgerKirk Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {teamList.map(({ name, initials, role, focus }) => (
          <Card
            key={name}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
          >
            <CardHeader className="p-0 gap-0">
              <div className="aspect-square bg-gradient-to-br from-emerald-500 via-primary to-amber-400 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">
                  {initials}
                </span>
              </div>
              <CardTitle className="py-6 pb-3 px-6 text-xl leading-tight">
                {name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3 text-primary font-medium">
              {role}
            </CardContent>
            <CardContent className="pt-0 text-muted-foreground">
              {focus}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
