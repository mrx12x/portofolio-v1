export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
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