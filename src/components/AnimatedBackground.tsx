export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient - CSS only, no JS animation */}
      <div className="absolute inset-0 animated-bg" />
      
      {/* Subtle animated grid - CSS animation only */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* CSS-only floating orbs - much lighter than framer-motion */}
      <div 
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/15 blur-3xl animate-float-slow"
        style={{ top: "10%", left: "10%" }}
      />
      <div 
        className="absolute w-48 h-48 md:w-80 md:h-80 rounded-full bg-secondary/10 blur-3xl animate-float-slower"
        style={{ bottom: "20%", right: "15%" }}
      />
    </div>
  );
};
