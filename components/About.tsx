import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-bg-primary">
      {/* background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_20%,rgba(139,92,246,0.2)_60%,rgba(0,0,0,0.85)_100%)]" />

      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <span className="text-sm tracking-wider uppercase text-primary inline-block mb-3 animate-pulse drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Who I Am
          </h2>
        </div>

        <div className="glass-panel rounded-xl p-8 transition-all duration-700 bg-bg-secondary/70">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/profile.jpg')",
                  }}
                ></div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Full Stack Developer & Tech Enthusiast
              </h3>
              <p className="text-white/70 mb-6">
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies and real-time applications. With a strong
                foundation in the MERN stack and a love for clean, efficient
                code, I specialize in building scalable, responsive applications
                that deliver exceptional user experiences.
              </p>
              <p className="text-white/70 mb-6">
                My approach combines technical excellence with creative
                problem-solving, allowing me to tackle complex challenges and
                transform ideas into reality. I'm particularly interested in
                real-time applications, e-commerce solutions, and creating
                intuitive interfaces that users love.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="#contact"
                  className="glass-panel px-6 py-3 text-nowrap rounded-full text-white text-center font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Get In Touch
                </Link>
                <a
                  href="#"
                  className="bg-primary text-primary-foreground text-nowrap  text-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-primary/90"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
