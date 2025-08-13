import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Coffee, Heart, Zap, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Zap,
      title: "Performance-Driven",
      description:
        "Optimizing Core Web Vitals with techniques like lazy loading, code splitting, and image compression",
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Designing responsive, intuitive, and accessible interfaces",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Working closely with designers, backend developers, and product teams in Agile sprints",
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description:
        "Exploring the latest frontend frameworks, CMS integrations, and SEO strategies",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 backdrop-blur-sm bg-card/80 border border-border/50"
            >
              About Me
            </Badge>
            <h2 className="mb-8 text-4xl md:text-5xl font-bold">
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I’m a Frontend Developer with{" "}
                <strong>2+ years of experience</strong> building
                high-performance, SEO-friendly, and responsive web applications.
                My expertise lies in{" "}
                <strong>React.js, Next.js, Tailwind CSS</strong>, and CMS
                platforms like <strong>Sanity.io</strong> and{" "}
                <strong>Strapi</strong>.
              </p>
              <p>
                I focus on delivering exceptional user experiences by combining
                clean, maintainable code with performance optimization
                strategies. From crafting reusable UI components to integrating
                CMS solutions, my goal is to make applications both visually
                appealing and technically sound.
              </p>
              <p>
                When I’m not coding, I enjoy exploring new frontend tools,
                experimenting with animations using GSAP and Framer Motion, and
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Profile Card */}
          <div className="order-1 lg:order-2">
            <Card className="p-8 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-56 h-56 mx-auto mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-purple-600 p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="/photo.jpg"
                      alt="Murtaza Khopoliwala"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Murtaza Khopoliwala</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Frontend Developer
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="secondary" className="px-3 py-1">
                    React.js
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Sanity / Strapi
                  </Badge>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold gradient-text">
                    2+ Years
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Frontend Experience
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
