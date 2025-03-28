"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navItems: string[] = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-bg-primary ${
        isScrolled
          ? "bg-bg-primary backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 animate-fade-in">
            <span className="text-xl font-bold tracking-tight text-gradient">
              Sandeep
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social nav Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              download
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white/70 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="" />
              ) : (
                <Menu size={24} className="" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel ">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-base font-medium text-white/70 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block text-base font-medium text-primary hover:text-primary/80 transition-colors duration-300"
              download
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
