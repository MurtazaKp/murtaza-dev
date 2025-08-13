import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Star, Eye, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Dashboard Pro",
      description:
        "A comprehensive admin dashboard built with React, TypeScript, and Tailwind CSS featuring real-time analytics, data visualization, and responsive design. Perfect for managing complex data workflows.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "Motion",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      stats: { stars: 142, views: "2.3k" },
      category: "Dashboard",
      year: "2024",
    },
    {
      id: 2,
      title: "E-Commerce PWA",
      description:
        "A modern e-commerce progressive web app with Next.js, featuring offline support, push notifications, and seamless mobile experience. Built with performance in mind.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      technologies: ["Next.js", "PWA", "Stripe", "Prisma"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      stats: { stars: 98, views: "1.8k" },
      category: "E-Commerce",
      year: "2024",
    },
    {
      id: 3,
      title: "Vue Component Library",
      description:
        "A reusable Vue.js component library with TypeScript support and Storybook integration. Includes comprehensive documentation and testing.",
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=500&fit=crop",
      technologies: ["Vue.js", "TypeScript", "Storybook", "Vite"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stats: { stars: 76, views: "1.2k" },
      category: "Library",
      year: "2023",
    },
    {
      id: 4,
      title: "Animated Portfolio",
      description:
        "A stunning portfolio website with advanced animations and 3D elements built with React and Three.js. Showcases modern web capabilities.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      technologies: ["React", "Three.js", "Motion", "GSAP"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stats: { stars: 234, views: "3.1k" },
      category: "Portfolio",
      year: "2023",
    },
    {
      id: 5,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features. Built for productivity and team collaboration.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stats: { stars: 89, views: "1.5k" },
      category: "Productivity",
      year: "2023",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with interactive maps and detailed forecasts. Features real-time data visualization and location-based services.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      technologies: ["React", "D3.js", "Weather API", "Mapbox"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stats: { stars: 156, views: "2.1k" },
      category: "Data Viz",
      year: "2023",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

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
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 hover:border-primary/20"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Stats in corner */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1 text-white text-sm bg-black/50 rounded-full px-2 py-1 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-current" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white text-sm bg-black/50 rounded-full px-2 py-1 backdrop-blur-sm">
                    <Eye className="h-3 w-3" />
                    <span>{project.stats.views}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1 bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content Section */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
