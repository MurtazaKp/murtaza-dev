"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ExternalLink,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleCardClick = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  // 🔹 Your projects array
  const projects = [
    {
      id: 1,
      title: "Jamea Saifiyah Business School (JSBS)",
      description:
        "An institution that provides quality education in business and management, rooted in the principles of the Islamic ethos.",
      image: "/jsbs.png",
      technologies: ["Bootstrap", "SEO", "Next.js", "RWD", "SASS/SCSS"],
      demo: "https://jsbs.jameasaifiyah.edu/",
      category: "Educational Website",
      year: "2024",
    },

    {
       id: 2,
  title: "Rugna Adhaar Foundation Website",
  description:
    "A website built for Rugna Adhaar Foundation — providing support services and community outreach via a modern frontend, payment integration and automatd tax reciept via email tp donor",
  image:
    "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // you may want to use a screenshot url instead
  technologies: ["Next.js", "Bootstrap", "Razorpay","Automated Email Reciept","Smtp Integration"],
  github: null,
  demo: "https://vercel.com/murtazakps-projects/rugna-adhaar-foundation-website",
  featured: false,
  stats: null,
  category: "Non-profit Website",
  year: "2025",
    },
    {
      id: 3,
      title: "Qualitia AI",
      description:
        "Qualitia is an AI-native Salesforce automation testing platform that ensures precision & faster results.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "RWD"],
      demo: "https://www.qualitia.ai/",
      category: "Landing Page",
      year: "2024",
    },
    {
      id: 4,
      title: "Setoo AI",
      description:
        "Setoo AI helps businesses create AI agents to automate reviews, schedule calls, and enhance customer interactions.",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Turborepo"],
      demo: "https://setoo.ai/",
      category: "AI Landing Page",
      year: "2024",
    },
    {
      id: 5,
      title: "Mediqlogix",
      description:
        "MediQlogix provides AI and ML-powered digital solutions to enhance hospitals' quality matrices.",
      image:
        "https://plus.unsplash.com/premium_photo-1699387204159-184c8e0ac55e?w=500&auto=format&fit=crop&q=60",
      technologies: [
        "Nextjs",
        "TypeScript",
        "Storybook",
        "Tailwind CSS",
        "Vercel",
      ],
      demo: "https://mediq-logix.vercel.app/",
      category: "Healthcare Landing",
      year: "2023",
    },
    {
      id: 6,
      title: "Y-Macro",
      description:
        "Y-Macro Analytics models regional economic trends to empower businesses with deeper insights.",
      image:
        "https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=500&auto=format&fit=crop&q=60",
      technologies: ["React", "Strapi", "Bootstrap", "GSAP"],
      demo: "https://www.y-macro.com/",
      category: "Analytics",
      year: "2024",
    },
    {
      id: 7,
      title: "Techtribe",
      description:
        "TechTribe Resume Builder transforms how you apply for jobs with AI-powered resumes and cover letters.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      demo: "https://techtribe-resume-builder.vercel.app",
      category: "Productivity",
      year: "2024",
    },
    {
      id: 8,
      title: "Crep Protect",
      description:
        "Crep Protect — a global sneaker care e-commerce site with a focus on UX and brand identity.",
      image:
        "https://images.unsplash.com/photo-1674027392851-7b34f21b07ee?w=500&auto=format&fit=crop&q=60",
      technologies: ["React", "Shopify", "Liquid", "Theme Development"],
      demo: "https://crepprotect.com/",
      category: "E-Commerce",
      year: "2023",
    },
   
  ];

  // 🔹 Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

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
        <AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
  >
          {paginatedProjects.map((project) => {
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
                  <div
                    className={`absolute bottom-4 left-4 right-4 flex space-x-2 transition-all duration-300 transform ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } group-hover:opacity-100 group-hover:translate-y-0`}
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
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-4">
                    {project.description}
                  </p>
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
       
       </motion.div>
       </AnimatePresence>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
