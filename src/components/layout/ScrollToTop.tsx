import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

const ScrollToTop = ({ show, onClick }: ScrollToTopProps) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.5,
        pointerEvents: show ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={onClick}
        size="icon"
        className="rounded-full h-12 w-12 shadow-lg"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </motion.div>
  );
};

export default ScrollToTop;