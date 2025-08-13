import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative">
        <div className="animate-float">
          <Badge
            variant="secondary"
            className="mb-8 px-4 py-2 backdrop-blur-sm bg-card/80 border border-border/50"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Available for Frontend Projects
          </Badge>
        </div>

        <div className="space-y-6 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block mb-2">Creative</span>
            <span className="gradient-text block">Frontend</span>
            <span className="block">Developer</span>
          </h1>

          <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-muted-foreground">
            <Code className="w-5 h-5" />
            <span>Crafting Beautiful User Experiences</span>
          </div>
        </div>

        <p className="mb-10 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I specialize in building stunning, responsive web applications using
          modern frameworks like React, Next.js. From pixel-perfect designs to
          seamless user interactions, I bring digital experiences to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="group px-8 py-6 text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg hover:bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="#contact">Let&#39;s Connect</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/MurtazaKp"
            className="group p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/murtaza-khopoliwala"
            className="group p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="mailto:khopoliwala52@gmail.com"
            className="group p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
