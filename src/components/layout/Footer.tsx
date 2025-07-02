import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;