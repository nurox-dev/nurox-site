import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { successStories } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. See how we've helped businesses like yours succeed.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-start gap-6 p-6">
                      <p className="text-lg font-medium text-foreground">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={story.avatarUrl} alt={story.clientName} data-ai-hint={story.dataAiHint} />
                          <AvatarFallback>{story.clientName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{story.clientName}</p>
                          <p className="text-sm text-muted-foreground">
                            {story.clientCompany}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
