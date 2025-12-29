import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "./AnimatedSection";
import { Award, Gift, Sparkles } from "lucide-react";

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

        {/* Main Prize Pool */}
        <ScaleIn delay={0.1}>
          <motion.div
            className="relative glass-card p-12 text-center overflow-hidden group max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-4 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8 text-amber-400" />
                <Gift className="w-16 h-16 text-primary" />
                <Sparkles className="w-8 h-8 text-amber-400" />
              </motion.div>
              
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-primary/20 text-amber-400 text-lg font-medium mb-6">
                🏆 Total Prize Pool
              </div>
              
              <motion.div 
                className="text-6xl md:text-8xl font-display font-bold gradient-text mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(var(--primary-rgb), 0.5)",
                    "0 0 40px rgba(var(--primary-rgb), 0.8)",
                    "0 0 20px rgba(var(--primary-rgb), 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ₹15,000+
              </motion.div>
              
              <p className="text-xl text-muted-foreground mb-8">
                Worth of Exciting Prizes
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <motion.div 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-amber-400 font-bold text-2xl">₹10,000</span>
                  <p className="text-amber-300/70 text-sm">Winner</p>
                </motion.div>
                
                <motion.div 
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-400/20 to-slate-500/20 border border-slate-400/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-slate-300 font-bold text-2xl">₹5,000</span>
                  <p className="text-slate-400/70 text-sm">Runner Up</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScaleIn>

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
