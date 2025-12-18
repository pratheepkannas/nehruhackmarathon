import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

export const RegisterSection = () => {
  return (
    <section id="register" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <motion.div
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
              >
                <span className="text-4xl">🚀</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ready to <span className="gradient-text">Innovate?</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of talented developers and designers in this exciting 
                hackathon. Register now and be part of something amazing!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-bold text-lg flex items-center justify-center gap-2 glow-effect"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(270 91% 65% / 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Your Team
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-display font-semibold text-lg hover:bg-muted/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span>✓ Free Registration</span>
                <span>✓ 2 Members per Team</span>
                <span>✓ Amazing Prizes</span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
