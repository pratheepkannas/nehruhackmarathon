import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Brain, Globe, Leaf, Shield } from "lucide-react";

const problemStatements = [
  {
    id: 1,
    title: "Smart Healthcare Solutions",
    description: "Develop innovative solutions to improve healthcare accessibility and patient care using AI and IoT technologies.",
    icon: Brain,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    title: "Sustainable Environment",
    description: "Create technology-driven solutions to address environmental challenges and promote sustainability.",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Digital Security & Privacy",
    description: "Build secure systems to protect user data and enhance cybersecurity in the digital age.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    description: "Design solutions that improve urban living through smart transportation, energy management, and connectivity.",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
  },
];

export const ProblemsSection = () => {
  return (
    <section id="problems" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Problem Statements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from these exciting challenges and build something amazing
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {problemStatements.map((problem) => (
            <StaggerItem key={problem.id}>
              <motion.div
                className="glass-card p-6 h-full group cursor-pointer overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <problem.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-muted-foreground font-medium">
                        Problem Statement {problem.id}
                      </span>
                      <h3 className="text-xl font-display font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Open for all participants
                    </span>
                    <motion.span 
                      className="text-primary text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Learn more →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* PPT Download Section */}
        <AnimatedSection delay={0.3} className="mt-12">
          <motion.div
            className="glass-card p-8 max-w-2xl mx-auto text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              📥 Download Problem Statements
            </h3>
            <p className="text-muted-foreground mb-6">
              Get detailed information about all problem statements in our presentation
            </p>
            <motion.a
              href="/HACK_MARATHON.pptx"
              download="HACK_MARATHON.pptx"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold hover:opacity-90 transition-all glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PPT
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
