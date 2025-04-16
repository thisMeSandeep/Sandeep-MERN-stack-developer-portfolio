"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Please use email , this feature is yet to be integrated");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding relative bg-bg-primary">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider uppercase text-primary inline-block mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Contact Me
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="transition-all duration-700">
            <div className="glass-panel rounded-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <Mail className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">
                  Contact Information
                </h3>
              </div>

              <p className="text-white/70 mb-8">
                I'm currently open to internships, full-time positions, and
                freelance opportunities. Let's build something amazing together!
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:snayal50@gmail.com"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    sandeepnayal50@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-2">
                    Location
                  </h4>
                  <p className="text-white">India , Lucknow</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-4">
                    Connect
                  </h4>

                  {/* links */}
                  <div className="flex space-x-4">
                    <Link
                      href="https://github.com/thisMeSandeep"
                      className="glass-panel p-3 rounded-full hover:bg-white/10 transition-colors duration-300"
                      aria-label="GitHub Profile"
                      target="_blank"
                    >
                      <Github size={20} className="text-white" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/sandeepsinghnayal/"
                      className="glass-panel p-3 rounded-full hover:bg-white/10 transition-colors duration-300"
                      aria-label="LinkedIn Profile"
                      target="_blank"
                    >
                      <Linkedin size={20} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="transition-all duration-700 delay-300 ">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
