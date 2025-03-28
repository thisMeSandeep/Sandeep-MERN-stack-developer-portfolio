"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Sparkles, Code, Layers } from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with the MERN stack. Features include product search, filtering, user authentication, shopping cart, payment processing with Stripe, and real-time order tracking.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux Toolkit",
        "Stripe API",
        "Socket.IO",
      ],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A feature-rich chat application with real-time messaging capabilities. Users can create chat rooms, send direct messages, share media, and receive instant notifications.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "JWT Authentication",
      ],
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "Project Management Dashboard",
      description:
        "A comprehensive project management tool for teams. Features include task assignment, progress tracking, deadline management, and real-time collaboration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Zustand",
        "TailwindCSS",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full filter blur-3xl opacity-30"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${
              (mousePosition.y - 0.5) * 30
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0xOCAwdjE4SDBWMGgxOHpNMSAxN2gxNlYxSDFWMTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider uppercase inline-block mb-3 glass-hero-card px-4 py-1 rounded-full">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-accent animate-gradient-x">
              <Sparkles size={14} className="inline mr-2" />
              Portfolio
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold cyber-gradient">
            Featured Projects
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills across the full
            stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`gradient-card rounded-xl overflow-hidden group transition-all duration-700 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)] relative ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="absolute top-0 right-0 w-full h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="h-52 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/0 after:to-background/90"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="cyber-box p-3 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="cyber-box p-3 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 right-6 cyber-box p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 translate-y-0 transform hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                  <Code size={20} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary/80 group-hover:animate-gradient-x">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs glass-panel px-3 py-1 rounded-full text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center cyber-box px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] group"
          >
            <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">
              Explore More Projects
            </span>
            <div className="p-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
              <ExternalLink size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
