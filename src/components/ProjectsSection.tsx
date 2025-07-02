import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            with attention to detail and performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Live
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, user collaboration features, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/taskapp",
    github: "https://github.com/example/taskapp",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts for any location. Features include animated weather icons and interactive charts.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    link: "https://example.com/weather",
    github: "https://github.com/example/weather",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media analytics with customizable widgets, data visualization, and export capabilities.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    link: "https://example.com/social-dashboard",
    github: "https://github.com/example/social-dashboard",
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set goals with interactive charts.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Recharts"],
    link: "https://example.com/fitness",
    github: "https://github.com/example/fitness",
  },
  {
    id: "6",
    title: "Recipe Finder",
    description:
      "A recipe discovery application with advanced filtering options, user reviews, and the ability to save favorite recipes.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    technologies: ["React", "Redux", "Spoonacular API", "Tailwind CSS"],
    link: "https://example.com/recipes",
    github: "https://github.com/example/recipes",
  },
];

export default ProjectsSection;
