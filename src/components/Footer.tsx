import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/MurtazaKp", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/murtaza-khopoliwala",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:khopoliwala52@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-16 px-4 bg-muted/50 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FD</span>
              </div>
              <span className="font-semibold text-xl gradient-text">
                Frontend Dev
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Creating beautiful, performant, and user-friendly web applications
              with modern frontend technologies. Let&#39;s build something
              amazing together.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href="mailto:khopoliwala52@gmail.com">
                Khopoliwala52@gmail.com
              </a>
              <p>
                Pune ,
                <span role="img" aria-label="India flag">
                  🇮🇳
                </span>
              </p>
              <p>Available for freelance</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Frontend Dev. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
