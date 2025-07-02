import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { skills, experiences, technologies } from "../../data/skills";

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const categories = [...new Set(skills.map((skill) => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've spent years honing my skills across various technologies.
              Here's a glimpse of what I bring to the table.
            </p>
          </motion.div>

          {/* Experience Counters */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={counterVariants}
                className="text-center"
              >
                <Card className="h-full bg-card/50 hover:bg-card/80 transition-colors border-primary/20 hover:border-primary/50">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <motion.span
                      className="text-4xl md:text-5xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      {item.value}
                      {item.suffix}
                    </motion.span>
                    <span className="text-sm md:text-base mt-2 text-muted-foreground">
                      {item.title}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-10">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span>{skill.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                        </div>
                        <Progress
                          value={isInView ? skill.level : 0}
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Icons */}
          <motion.div variants={containerVariants} className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Technologies I Work With
            </h3>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold">
                        {tech.charAt(0)}
                      </div>
                    </div>
                    <span className="text-sm">{tech}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;