import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Prizes", href: "#prizes" },
  { name: "Timeline", href: "#timeline" },
  { name: "Problems", href: "#problems" },
  { name: "Rules", href: "#rules" },
  { name: "Team", href: "#team" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4 py-3 md:py-4"
    >
      <div className="max-w-7xl mx-auto glass-card px-4 md:px-6 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-lg md:text-xl font-display font-bold gradient-text active:scale-95 transition-transform touch-manipulation"
          >
            HACKMARATHON
          </a>

          {/* Desktop Nav - hidden on mobile since we have bottom nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <span
              className="px-4 py-2 rounded-lg bg-muted text-muted-foreground font-semibold text-sm cursor-not-allowed opacity-60"
            >
              Registration Closed
            </span>
          </div>

          {/* Mobile Register Button */}
          <span
            className="md:hidden px-4 py-2 rounded-lg bg-muted text-muted-foreground font-semibold text-sm cursor-not-allowed opacity-60"
          >
            Closed
          </span>
        </div>
      </div>
    </motion.nav>
  );
};
