import { motion } from "framer-motion";
import { AnimatedSection, ScaleIn } from "./AnimatedSection";
import { Award, Gift, Sparkles, Trophy } from "lucide-react";

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Prizes & Rewards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compete for amazing prizes and recognition
          </p>
        </AnimatedSection>

        {/* Main Prize Display */}
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
                <Trophy className="w-20 h-20 text-amber-500" />
                <Sparkles className="w-8 h-8 text-amber-400" />
              </motion.div>
              
              <motion.div 
                className="text-5xl md:text-7xl font-display font-bold gradient-text mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(var(--primary-rgb), 0.5)",
                    "0 0 40px rgba(var(--primary-rgb), 0.8)",
                    "0 0 20px rgba(var(--primary-rgb), 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Attractive Prizes
              </motion.div>
              
              <p className="text-xl text-muted-foreground mb-4">
                Exciting Rewards Await the Winners!
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Gift className="w-5 h-5 inline mr-2" />
                  Cash Prizes
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award className="w-5 h-5 inline mr-2" />
                  Certificates
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                  <Sparkles className="w-5 h-5 inline mr-2" />
                  Recognition
                </div>
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
