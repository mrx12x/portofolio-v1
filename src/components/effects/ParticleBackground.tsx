import React from "react";
import { motion } from "framer-motion";

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

export default ParticleBackground;