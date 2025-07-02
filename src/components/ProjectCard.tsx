import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      className="h-full bg-background"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="h-full overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <CardContent className="flex-grow p-5">
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 p-5 pt-0">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Badge variant="secondary" className="text-xs">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;