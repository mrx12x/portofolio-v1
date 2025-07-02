export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  title: string;
  value: number;
  suffix: string;
}

export const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "CSS/SCSS", level: 85, category: "Frontend" },
  { name: "Framer Motion", level: 75, category: "Animation" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
];

export const experiences: Experience[] = [
  { title: "Years Experience", value: 5, suffix: "+" },
  { title: "Projects Completed", value: 30, suffix: "+" },
  { title: "Happy Clients", value: 25, suffix: "+" },
  { title: "Technologies", value: 15, suffix: "+" },
];

export const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
];