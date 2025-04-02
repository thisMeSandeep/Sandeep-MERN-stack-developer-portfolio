"use client";

import {
  Code,
  Code2,
  Database,
  FileJson,
  Github,
  Server,
  Layers,
  ArrowLeftRight,
  LayoutGrid,
  Globe,
  Boxes,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const skillsCategories = [
  {
    name: "Frontend",
    icon: <Globe size={24} className="text-primary" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Zod",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    icon: <Server size={24} className="text-primary" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Jwt",
      "Fastify",
      "Socket.IO",
    ],
  },
  {
    name: "State Management",
    icon: <Boxes size={24} className="text-primary" />,
    skills: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
  },
  {
    name: "Databases",
    icon: <Database size={24} className="text-primary" />,
    skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma"],
  },
];

const skillLogos = [
  { name: "HTML", icon: <Code size={24} className="text-[#E34F26]" /> },
  { name: "CSS", icon: <Code2 size={24} className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <FileJson size={24} className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <FileJson size={24} className="text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <LayoutGrid size={24} className="text-[#61DAFB]" />,
  },
  { name: "Next.js", icon: <LayoutGrid size={24} className="text-white" /> },
  { name: "Node.js", icon: <Server size={24} className="text-[#339933]" /> },
  { name: "Express", icon: <Server size={24} className="text-white" /> },
  {
    name: "MongoDB",
    icon: <Database size={24} className="text-[#47A248]" />,
  },
  { name: "Redux", icon: <Layers size={24} className="text-[#764ABC]" /> },
  { name: "Zustand", icon: <Layers size={24} className="text-white" /> },
  {
    name: "Socket.IO",
    icon: <ArrowLeftRight size={24} className="text-white" />,
  },
  { name: "MySQL", icon: <Database size={24} className="text-[#4479A1]" /> },
  {
    name: "PostgreSQL",
    icon: <Database size={24} className="text-[#336791]" />,
  },
  { name: "Prisma", icon: <Database size={24} className="text-white" /> },
  { name: "GitHub", icon: <Github size={24} className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider uppercase text-primary inline-block mb-3 bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            <Sparkles size={14} className="inline mr-2" />
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        {/* Logo Ticker */}
        <div className="mb-16 overflow-hidden rounded-xl backdrop-blur-sm bg-white/[0.01] p-4 border border-white/5 relative">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }} 
            transition={{
              ease: "linear",
              duration: 15, 
              repeat: Infinity,
            }}
            className="flex flex-none gap-8 lg:gap-16 pr-8 lg:pr-16"
          >
            {[...skillLogos, ...skillLogos].map(
              (
                logo,
                index // Duplicate items
              ) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex flex-col items-center glass-panel px-6 py-4 rounded-lg min-w-[120px] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                >
                  <div className="mb-2">{logo.icon}</div>
                  <span className="text-sm font-medium text-text-primary">
                    {logo.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsCategories.map((category) => (
            <div
              key={category.name}
              className="gradient-card rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] group"
            >
              <div className="flex items-center mb-4">
                <div className="cyber-box p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
