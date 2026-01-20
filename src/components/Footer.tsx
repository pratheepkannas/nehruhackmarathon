import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold gradient-text mb-2">
              HACKMARATHON
            </h3>
            <p className="text-sm text-muted-foreground">
              National Level Coding Competition
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#prizes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Prizes
            </a>
            <a href="#timeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Timeline
            </a>
            <a href="#problems" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problems
            </a>
            <a href="#rules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Rules
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Hackmarathon. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
