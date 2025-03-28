import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  bg-bg-primary relative">
      {/* grid background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_30%,rgba(0,0,0,0.6)_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_20%,rgba(0,0,0,0.9)_90%)] sm:bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2)_20%,rgba(0,0,0,0.85)_90%)]" />

      {/* content */}
      <div
        className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10]

"
      >
        <span className=" text-sm md:text-base tracking-wider uppercase inline-block mb-4 glass-hero-card px-4 py-2 rounded-full border border-white ">
          <span className="mx-auto bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary">
            Full Stack Developer
          </span>
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tighter mb-6 text-text-primary text-center">
          Hi , I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary  to-primary">
            Sandeep
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary mb-10  text-center ">
          Specializing in modern web technologies and MERN stack
          <br className="hidden md:block" /> with a passion for creating
          seamless user experiences.
        </p>

        {/* links */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-full text-white font-medium bg-primary cursor-pointer"
          >
            View Project
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 rounded-full text-gradient font-medium border glass-panel border-white/10 cursor-pointer "
          >
            Download Resume
          </Link>
        </div>

        {/* scroll down */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm mb-2 group-hover:text-primary transition-colors duration-300">
              Scroll Down
            </span>
            <div className="cyber-box p-2 rounded-full">
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
