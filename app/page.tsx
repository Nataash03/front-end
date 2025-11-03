"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
} from "lucide-react";

// Types
type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

type Skill = {
  name: string;
  icon: React.ElementType;
  items: string[];
};

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio generator with customizable themes",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
  ];

  const skills: Skill[] = [
    {
      name: "Frontend Development",
      icon: Code2,
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      items: ["Figma", "Adobe XD", "Responsive Design"],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      items: ["React Native", "Flutter"],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() && "text-purple-400"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item.toLowerCase());
                  }}
                  className="block px-3 py-2 hover:bg-purple-500/20 rounded-md transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Hero Left */}
          <div className="flex-1 space-y-6">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm border border-purple-500/30 mb-4 inline-block">
              👋 Hello, Im
            </span>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Natasya Agustine
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300">
              Coding Enthusiast
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              I turn ideas into reality with clean code and creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Get In Touch
              </a>

              <a
                href="#projects"
                className="px-8 py-3 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
              >
                View Projects
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Nataash03/front-end.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/natasya-agustine-sadhi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:natasyaagustine0@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Hero Right */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 text-lg">
            Im an Informatics Engineering student passionate about web development.
            I love combining code & design to build beautiful digital experiences.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <skill.icon className="w-10 h-10 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <ul className="space-y-1 text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} className="text-purple-400 hover:underline">
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-300 mb-8">
            Feel free to reach me through email or connect via social media!
          </p>

          <div className="flex justify-center gap-4">
            <a href="mailto:natasyaagustine0@gmail.com" className="p-4 bg-slate-800 rounded-lg hover:bg-purple-500/20">
              <Mail size={24} />
            </a>

            <a href="https://github.com/Nataash03/front-end.git" target="_blank" className="p-4 bg-slate-800 rounded-lg hover:bg-purple-500/20">
              <Github size={24} />
            </a>

            <a href="https://www.linkedin.com/in/natasya-agustine-sadhi" target="_blank" className="p-4 bg-slate-800 rounded-lg hover:bg-purple-500/20">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-400">
        © 2025 Natasya Agustine — All rights reserved.
      </footer>

    </div>
  );
}