import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "./AnimatedSection";
import { Award, Trophy, Medal } from "lucide-react";

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Prizes & Rewards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compete for amazing cash prizes and recognition
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Prize */}
          <ScaleIn delay={0.1}>
            <motion.div
              className="relative glass-card p-8 text-center overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Trophy className="w-12 h-12 text-amber-900" />
                </motion.div>
                
                <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4">
                  🥇 First Place
                </div>
                
                <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
                  ₹12,625
                </div>
                
                <p className="text-muted-foreground">
                  Grand Prize Winner
                </p>
                
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li>✓ Cash Prize</li>
                  <li>✓ Winner Certificate</li>
                  <li>✓ Special Recognition</li>
                </ul>
              </div>
            </motion.div>
          </ScaleIn>

          {/* Second Prize */}
          <ScaleIn delay={0.2}>
            <motion.div
              className="relative glass-card p-8 text-center overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center mb-6 shadow-lg"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Medal className="w-12 h-12 text-slate-700" />
                </motion.div>
                
                <div className="inline-block px-4 py-1 rounded-full bg-slate-400/20 text-slate-300 text-sm font-medium mb-4">
                  🥈 Second Place
                </div>
                
                <div className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                  ₹2,000
                </div>
                
                <p className="text-muted-foreground">
                  Runner Up
                </p>
                
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li>✓ Cash Prize</li>
                  <li>✓ Merit Certificate</li>
                  <li>✓ Recognition</li>
                </ul>
              </div>
            </motion.div>
          </ScaleIn>
        </div>

        {/* Additional perks */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="glass-card p-6 max-w-2xl mx-auto text-center">
            <Award className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              All Participants Receive
            </h3>
            <p className="text-muted-foreground">
              Certificate of Participation • Networking Opportunities • Learning Experience
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
