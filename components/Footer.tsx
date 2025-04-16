"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {


  return (
    <footer className="relative overflow-hidden py-12 px-6 md:px-12 text-white bg-bg-secondary border-t border-white/10">
    

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-xl font-bold text-white">Sandeep</span>
            </div>
            <p className="text-white/70 text-sm mt-2">
              Building digital experiences with modern technologies.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-0">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {[
                { icon: Github, href: "https://github.com/thisMeSandeep", label: "GitHub Profile" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sandeepsinghnayal/", label: "LinkedIn Profile" },
                {
                  icon: Mail,
                  href: "mailto:sandeepnayal50@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </Link>
              ))}
              
            </div>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Sandeep. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
