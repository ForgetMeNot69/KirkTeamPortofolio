import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquareText } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <MessageSquareText className="mb-4 size-12 text-primary" />
                <div>
                  Have a project for
                  <span className="text-transparent pl-2 bg-gradient-to-r from-emerald-500 via-primary to-amber-400 bg-clip-text">
                    BoorgerKirk?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Tell us what you want to build. We can help shape the idea into a
              website, AI automation, machine learning prototype, or a complete
              computer science project.
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="#contact">Contact the Team</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
