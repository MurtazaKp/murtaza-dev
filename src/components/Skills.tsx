import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  Palette,
  Zap,
  Globe,
  Smartphone,
  Layers,
  Server,
  Rocket,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern JavaScript frameworks and libraries",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "Next.js",
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "UI & Styling",
      description: "CSS frameworks, design systems, and animations",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Ant Design",
        "GSAP",
        "Framer Motion",
        "Responsive Design",
        "Figma",
      ],
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency improvements",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      skills: [
        "Lazy Loading",
        "Code Splitting",
        "Image Optimization",
        "Lighthouse",
        "Web Vitals",
      ],
    },
    {
      title: "State & Data Management",
      description: "Managing state and data flow",
      icon: Layers,
      gradient: "from-purple-500 to-indigo-500",
      skills: ["REST APIs", "Fetch/Axios", "GROQ Queries", "Context API"],
    },
    {
      title: "SEO & Metadata",
      description: "Search optimization and metadata control",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        "Open Graph",
        "Canonical Tags",
        "Structured Data",
        "Dynamic Metadata Generation",
        "SEO Optimization",
      ],
    },
    {
      title: "CMS & Deployment",
      description: "Content management systems and hosting",
      icon: Server,
      gradient: "from-teal-500 to-blue-500",
      skills: ["Sanity.io", "Strapi", "Git (GitHub)", "Vercel", "Netlify"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 backdrop-blur-sm bg-card/80 border border-border/50"
          >
            Frontend Technologies
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Technical</span> Stack
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I specialize in building high-performance, responsive, and
            SEO-optimized web applications with modern frontend frameworks,
            animations, and CMS integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/80"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs px-3 py-1 hover:bg-muted transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
