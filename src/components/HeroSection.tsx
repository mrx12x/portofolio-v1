import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onScrollToProjects?: () => void;
}

const HeroSection = ({ onScrollToProjects = () => {} }: HeroSectionProps) => {
  const [text, setText] = useState("");
  const fullText = "I'm a Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.div
      className="relative h-screen w-full flex flex-col justify-center items-center bg-background text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particle background */}
      <ParticleBackground />

      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm <span className="text-primary">John Doe</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl mb-8 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Crafting beautiful, interactive web experiences with modern
          technologies. Passionate about clean code and user-centered design.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={onScrollToProjects}
            className="group transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={onScrollToProjects}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ParticleBackground = () => {
  const particleCount = 50;
  const particles = Array.from({ length: particleCount });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, index) => {
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 20 + 10;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: duration,
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroSection;
