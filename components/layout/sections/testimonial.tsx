"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "",
    name: "Plan",
    userName: "Before building",
    comment:
      "We define the core user, the expected output, and the smallest useful version before opening the editor.",
    rating: 5.0,
  },
  {
    image: "",
    name: "Prototype",
    userName: "Fast feedback",
    comment:
      "We turn uncertain ideas into clickable screens, runnable scripts, or model experiments early.",
    rating: 4.8,
  },

  {
    image: "",
    name: "Integrate",
    userName: "Full workflow",
    comment:
      "Frontend, backend, data, and automation pieces should connect into one workflow users can actually try.",
    rating: 4.9,
  },
  {
    image: "",
    name: "Validate",
    userName: "Evidence matters",
    comment:
      "For AI and ML work, we care about datasets, assumptions, failure cases, and explainable results.",
    rating: 5.0,
  },
  {
    image: "",
    name: "Present",
    userName: "Clear delivery",
    comment:
      "A good project should be easy to demo, explain, and continue after the first version is finished.",
    rating: 5.0,
  },
  {
    image: "",
    name: "Improve",
    userName: "Iteration loop",
    comment:
      "We refine layout, performance, edge cases, and documentation after the main behavior is working.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Workflow
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          How BoorgerKirk Works
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
