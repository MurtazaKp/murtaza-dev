"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ExternalLink,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  technologies: string[];
  demo: string;
  category: string;
  year: string;
  github?: string | null;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  // 🔹 All projects with single main image, rich full description, and key points
  const projects: Project[] = [
    {
      id: 1,
      title: "Gharfolio",
      description:
        "A multi-tenant website & lead generation platform for Indian real estate brokers. Features instant 3-page broker website generation, customizable themes (Haven, Meridian, Noir), property listing management, and lead tracking.",
      fullDescription:
        "Gharfolio is a full-featured, multi-tenant SaaS platform and lead generation system engineered specifically for Indian real estate brokers and property agencies. It automates the generation of custom-branded 3-page web presences (Profile, Property Listings, and Property Details) in minutes. The platform includes a Super Admin dashboard for broker onboarding and template controls, broker tenant management with Row Level Security, and dynamic multi-theme rendering.",
      highlights: [
        "Multi-tenant architecture with strict Postgres Row Level Security (RLS) ensuring total data isolation between brokers",
        "Three distinct design families (Haven light, Meridian refined, Noir premium) switchable dynamically without content loss",
        "Custom domain & subdomain wildcard routing powered by Next.js edge proxy logic",
        "WhatsApp lead dispatch and direct Super Admin inbound lead tracking",
        "Indian market pricing (INR Lakh/Crore), RERA credential verification, and mobile-first responsive design",
      ],
      image: "/gharfolio.jpg",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "Supabase",
        "PostgreSQL",
        "RLS",
        "Motion",
        "Vercel",
      ],
      demo: "https://gharfolio.vercel.app",
      category: "SaaS / PropTech Platform",
      year: "2026",
    },
    {
      id: 2,
      title: "Digital Pass & Event System",
      description:
        "An event registration and digital QR pass verification system built for Anjuman E Najmi Khopoli. Features instant dynamic QR pass generation, live camera scanning check-in, Google Sheets real-time sync, and automated notifications.",
      fullDescription:
        "An enterprise-grade event registration and digital QR pass validation system built for Anjuman E Najmi Khopoli (Zikrah Waaz Majlis 1448H). It streamlines high-concurrency public registration, auto-generates cryptographically secure dynamic QR passes with instant lookup, enables real-time camera scanning verification at venue gates, and provides two-way Google Sheets synchronization.",
      highlights: [
        "High-speed registration workflow with parallel Supabase inserts and in-memory caching to eliminate serverless timeouts",
        "Real-time bidirectional synchronization with Google Sheets API for offline usher desks",
        "In-browser QR code scanner integration with instant attendee verification and duplicate check-in prevention",
        "Automated digital pass generation with copyable payment IDs and one-click WhatsApp technical support",
        "Capacity monitoring with instant lookups and high concurrency support for 1800+ attendees",
      ],
      image: "/digital-pass.jpg",
      technologies: [
        "Next.js",
        "Supabase",
        "QR Code Engine",
        "Tailwind CSS",
        "Google Sheets API",
        "Nodemailer",
        "Vercel",
      ],
      demo: "https://khopoli-relay.vercel.app",
      category: "Web App / Event Tech",
      year: "2026",
    },
    {
      id: 3,
      title: "MenuMuse",
      description:
        "A digital menu platform that helps businesses create and share interactive menus, pricing, and dishes videos through a QR Code, improving customer experience and engagement.",
      fullDescription:
        "A digital menu SaaS platform that revolutionizes the dining experience. Restaurants can create, customize, and share interactive digital menus enriched with dish pricing, high-definition dish videos, dietary tags, and QR code access for physical tables.",
      highlights: [
        "Dynamic QR code generation linking directly to mobile-optimized interactive restaurant menus",
        "Prismic Headless CMS integration for instantaneous real-time menu and pricing updates",
        "SEO-optimized, lightweight static generation achieving sub-second load times on mobile 4G/5G",
        "Video reel embeds showcasing dish preparation and culinary presentations",
      ],
      image: "/menumuse.png",
      technologies: [
        "Next.js",
        "Responsive Design",
        "UI/UX",
        "SEO",
        "Web App",
        "Prismic.io",
        "Vercel",
      ],
      demo: "https://menumuse.in/",
      category: "Business / SaaS Website",
      year: "2026",
    },
    {
      id: 4,
      title: "SparkFuture Technologies",
      description:
        "A modern technology solutions company offering web, mobile, and software development services, focused on helping businesses enhance their digital presence, streamline operations, and achieve scalable growth through innovative solutions.",
      fullDescription:
        "A modern corporate website and client portal for SparkFuture Technologies, an IT services and software development agency. Designed to convert visitors through engaging service showcases, case studies, and automated lead capture pipelines.",
      highlights: [
        "Modern, high-performance responsive frontend built with Next.js and Tailwind CSS",
        "Automated CI/CD deployment pipelines using GitHub Actions for seamless continuous delivery",
        "Rigorous accessibility and SEO compliance achieving top Lighthouse performance scores",
        "Interactive service explorer and responsive contact workflows",
      ],
      image: "/sparkfuture.png",
      technologies: [
        "Next.js",
        "Responsive Design",
        "UI/UX",
        "SEO",
        "Web Development",
        "Github Action",
        "CI/CD Pipeline",
      ],
      demo: "https://sparkfuturetechnologies.com/",
      category: "Corporate / IT Services Website",
      year: "2026",
    },
    {
      id: 5,
      title: "Jamea Saifiyah Business School (JSBS)",
      description:
        "An institution that provides quality education in business and management, rooted in the principles of the Islamic ethos.",
      fullDescription:
        "The official academic portal for Jamea Saifiyah Business School, delivering an institutional web presence rooted in modern design and traditional ethos. Provides students and faculty with comprehensive program overviews, admissions information, and institutional news.",
      highlights: [
        "Responsive, accessible multi-page layout built with Next.js and modular SASS/SCSS",
        "Structured data and semantic SEO optimizations to boost educational search ranking",
        "Interactive program curricula navigators and academic calendar displays",
        "Optimized asset delivery ensuring crisp rendering on desktop and mobile",
      ],
      image: "/jsbs.png",
      technologies: ["Bootstrap", "SEO", "Next.js", "RWD", "SASS/SCSS"],
      demo: "https://jsbs.jameasaifiyah.edu/",
      category: "Educational Website",
      year: "2024",
    },
    {
      id: 6,
      title: "Rugna Adhaar Foundation Website",
      description:
        "A website built for Rugna Adhaar Foundation — providing support services and community outreach via a modern frontend, payment integration and automated tax receipt via email to donor.",
      fullDescription:
        "A comprehensive web portal for Rugna Adhaar Foundation, a non-profit healthcare organization. The platform facilitates donor outreach, transparent medical aid tracking, online donations via Razorpay payment gateway, and automated 80G tax exemption receipt delivery via SMTP email.",
      highlights: [
        "Razorpay payment gateway integration supporting UPI, cards, and net banking with instant webhooks",
        "Automated PDF tax receipt generation sent straight to donors' inboxes via SMTP",
        "Transparent impact dashboards displaying fund distribution and patient case studies",
        "Mobile-first accessible interface designed for easy donor navigation",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      technologies: [
        "Next.js",
        "Bootstrap",
        "Razorpay",
        "Automated Email Receipt",
        "SMTP Integration",
      ],
      demo: "https://vercel.com/murtazakps-projects/rugna-adhaar-foundation-website",
      category: "Non-profit Website",
      year: "2025",
    },
    {
      id: 7,
      title: "Qualitia AI",
      description:
        "Qualitia is an AI-native Salesforce automation testing platform that ensures precision & faster results.",
      fullDescription:
        "An enterprise landing experience for Qualitia, an AI-native Salesforce test automation platform that boosts release cycles through scriptless automation and autonomous AI testing agents.",
      highlights: [
        "Engineered 25+ reusable, modular UI components utilizing React and Tailwind CSS",
        "Integrated Strapi headless CMS enabling seamless real-time marketing content publishing",
        "Fluid micro-interactions and scroll-triggered animations powered by GSAP",
        "Boosted Core Web Vitals and load times by 25% through lazy loading and next-gen image compression",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "RWD"],
      demo: "https://www.qualitia.ai/",
      category: "Landing Page",
      year: "2024",
    },
    {
      id: 8,
      title: "Setoo AI",
      description:
        "Setoo AI helps businesses create AI agents to automate reviews, schedule calls, and enhance customer interactions.",
      fullDescription:
        "A high-conversion landing page and product showcase for Setoo AI, an autonomous AI agent solution automating review collection, appointment scheduling, and omni-channel customer interactions.",
      highlights: [
        "Custom Sanity.io CMS implementation with optimized GROQ queries cutting content load times by 35%",
        "Mobile-first layout driving a 20% increase in lead conversion rates",
        "Comprehensive technical SEO strategy delivering a 40% boost in organic search traffic",
        "Monorepo architecture orchestrated with Turborepo for shared design system packages",
      ],
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Turborepo"],
      demo: "https://setoo.ai/",
      category: "AI Landing Page",
      year: "2024",
    },
    {
      id: 9,
      title: "Mediqlogix",
      description:
        "MediQlogix provides AI and ML-powered digital solutions to enhance hospitals' quality matrices.",
      fullDescription:
        "A digital healthcare portal presenting MediQlogix's AI and machine-learning solutions for hospital quality compliance, clinical metrics tracking, and risk minimization.",
      highlights: [
        "Developed 20+ responsive UI components documented in Storybook for design consistency",
        "Dynamic content synchronization powered by headless CMS integration",
        "Strict metadata, Open Graph, and JSON-LD schema implementation for healthcare search dominance",
        "Optimized bundle footprint with progressive asset streaming",
      ],
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
      id: 10,
      title: "Y-Macro",
      description:
        "Y-Macro Analytics models regional economic trends to empower businesses with deeper insights.",
      fullDescription:
        "A regional economic intelligence and predictive analytics platform. Y-Macro models macroeconomic shifts, local market conditions, and demographic trajectories to guide investment and strategy decisions.",
      highlights: [
        "Interactive data storytelling and financial chart visualizations using GSAP and React",
        "Decoupled architecture backed by Strapi CMS for rapid research report dissemination",
        "High-performance data grids with custom filtering and regional segmentation",
        "Responsive presentation optimized across mobile, tablet, and widescreen displays",
      ],
      image:
        "https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=500&auto=format&fit=crop&q=60",
      technologies: ["React", "Strapi", "Bootstrap", "GSAP"],
      demo: "https://www.y-macro.com/",
      category: "Analytics",
      year: "2024",
    },
    {
      id: 11,
      title: "Techtribe",
      description:
        "TechTribe Resume Builder transforms how you apply for jobs with AI-powered resumes and cover letters.",
      fullDescription:
        "An interactive resume and cover letter builder empowering job seekers with real-time AI assistance, dynamic preview templates, collaborative editing, and instant PDF exports.",
      highlights: [
        "Real-time updates and collaborative synchronization powered by Socket.io and Node.js",
        "Interactive drag-and-drop resume section reordering and live preview rendering",
        "Scalable MongoDB persistence for multiple user resumes and customizable styling presets",
        "Instant client-side PDF generation formatted for ATS compliance",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      demo: "https://techtribe-resume-builder.vercel.app",
      category: "Productivity",
      year: "2024",
    },
    {
      id: 12,
      title: "Crep Protect",
      description:
        "Crep Protect — a global sneaker care e-commerce site with a focus on UX and brand identity.",
      fullDescription:
        "A premium global sneaker care e-commerce web platform engineered for Crep Protect, delivering high-impact brand storytelling, localized storefronts, and seamless checkout flows.",
      highlights: [
        "Custom Shopify theme architecture utilizing React, Liquid, and high-performance styling",
        "Immersive visual merchandise layouts with video integrations and product benefit breakdowns",
        "Streamlined multi-currency and regional shipping checkout integrations",
        "Ultra-fast mobile catalog browsing optimized for sneaker enthusiast audiences",
      ],
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
    startIndex + projectsPerPage,
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
            detail. Click any card to explore full project details.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedProjects.map((project) => {
              return (
                <Card
                  key={project.id}
                  className="group cursor-pointer overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 relative flex flex-col justify-between"
                  onClick={() => handleOpenModal(project)}
                >
                  <div>
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted shrink-0">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="inline-flex items-center text-xs font-semibold text-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                          <Eye className="h-3.5 w-3.5 mr-1.5 text-primary" /> View Details
                        </span>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm h-8 px-3 text-xs font-semibold"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3 gap-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-xs font-medium text-muted-foreground shrink-0 bg-muted px-2 py-0.5 rounded">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-md font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
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

      {/* 🔹 PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border shadow-2xl rounded-2xl z-10 flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-background/85 hover:bg-background text-foreground/80 hover:text-foreground backdrop-blur-md transition-all shadow-md hover:scale-105 border border-border/60"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Image Section: shrink-0 with explicit aspect ratio & objectFit: cover */}
              <div className="relative w-full aspect-[16/9] max-h-[380px] shrink-0 bg-muted/50 overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />

                <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow border border-border/40">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Highlights / Points */}
                {selectedProject.highlights &&
                  selectedProject.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold tracking-wide uppercase text-primary flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4" /> Key Highlights & Architecture
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.highlights.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-foreground/90 leading-relaxed"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2.5 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-1.5">
                    <Layers className="h-4 w-4" /> Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>

                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    asChild
                  >
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
