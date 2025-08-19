"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Star, Eye, Calendar } from "lucide-react";

export function Projects() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: 1,
      title: "Qualitia AI",
      description:
        "Qualitia is a AI native Salesforce automation testing platforms that ensure precision & faster results. Optimise Salesforce automation testing with our innovative platform.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "RWD"],
      github: "https://github.com",
      demo: "https://www.qualitia.ai/",
      featured: true,
      stats: { stars: 142, views: "2.3k" },
      category: "Landing Page",
      year: "2024",
    },
    {
      id: 2,
      title: "Setoo AI",
      description:
        "Setoo AI helps businesses create AI agents to automate reviews, schedule calls, and enhance customer interactions. Boost efficiency with our AI-driven solutions.",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWl8ZW58MHx8MHx8fDA%3D",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Turborepo"],
      github: "https://github.com",
      demo: "https://setoo.ai/",
      featured: true,
      stats: { stars: 98, views: "1.8k" },
      category: "AI Landing Page",
      year: "2024",
    },
    {
      id: 3,
      title: "Mediqlogix",
      description:
        "MediQlogix a digital solution company providing AI and ML-powered platform to hospitals and healthcare organizations’ needs to enhance their “Global Quality Matrix”.",
      image:
        "https://plus.unsplash.com/premium_photo-1699387204159-184c8e0ac55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxIZWFsdGhjYXJlfGVufDB8fDB8fHww",
      technologies: [
        "Nextjs",
        "TypeScript",
        "Storybook",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "https://github.com",
      demo: "https://mediq-logix.vercel.app/",
      featured: false,
      stats: { stars: 76, views: "1.2k" },
      category: "Healthcare Landing",
      year: "2023",
    },
    {
      id: 4,
      title: "Y-Macro",
      description:
        "Y-Macro Analytics specializes in modeling regional economic trends to drive precision strategies. Where national data stops, we begin—unlocking deeper insights that empower businesses to grow across Bharat.",
      image:
        "https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React", "Strapi", "Bootstrap", "GSAP"],
      github: "https://github.com",
      demo: "https://www.y-macro.com/",
      featured: false,
      stats: { stars: 234, views: "3.1k" },
      category: "Analytics",
      year: "2024",
    },
    {
      id: 5,
      title: "Techtribe",
      description:
        "TechTribe Resume Builder transforms the way you apply for jobs. Build professional, ATS-friendly resumes in minutes. Generate personalized cover letters with AI assistance.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://techtribe-resume-builder.vercel.app",
      featured: false,
      stats: { stars: 89, views: "1.5k" },
      category: "Productivity",
      year: "2024",
    },
    {
      id: 6,
      title: "Crep Protect",
      description:
        "Crep Protect, a leading brand in sneaker care, aimed to strengthen its online presence for a global audience. The goal was to create an advanced e-commerce website that enhances user experience.",
      image:
        "https://images.unsplash.com/photo-1674027392851-7b34f21b07ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fEVDT01NRVJDRXxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React", "Shopify", "Liquid", "Theme Development"],
      github: "https://github.com",
      demo: "https://crepprotect.com/",
      featured: false,
      stats: { stars: 156, views: "2.1k" },
      category: "E-Commerce",
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of my recent work showcasing modern frontend
            development techniques, creative problem-solving, and attention to
            detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isActive = activeCard === project.id;

            return (
              <Card
                key={project.id}
                className="group overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 hover:border-primary/20"
                onClick={() => handleCardClick(project.id)}
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Buttons */}
                  <div
                    className={`
                      absolute bottom-4 left-4 right-4 flex space-x-2
                      transition-all duration-300 transform
                      ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }
                      group-hover:opacity-100 group-hover:translate-y-0
                    `}
                  >
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
