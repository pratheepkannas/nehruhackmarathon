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
    title: "Smart City Infrastructure",
    description: "Design solutions that improve urban living through smart transportation, energy management, and connectivity.",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
  },
];

const cybersecurityProblems = [
  {
    id: 1,
    title: "Digital Fraud Evidence Capture & Future Threat Database Gap",
    description: "Scams, phishing attacks, fraudulent links, fake calls, and digital deception are increasing, but there is no software that enables instant incident reporting, evidence capture, attack classification, origin tagging, and long-term threat database creation for future prevention.",
    goal: "Build an app/web that logs incidents and stores evidence securely.",
    outcome: "A future-usable cyber fraud threat index with evidence repository and classification.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Personal Credential Sharing & Misuse-Risk Confidence Gap",
    description: "Users share sensitive credentials and documents (ID proofs, OTPs, certificates, banking docs) through insecure channels, and lack a software system that provides encrypted sharing, access permission logs, expiry-based access, and a measurable misuse-risk confidence score for future safety decisions.",
    goal: "Build a software system for secure credential vault + controlled sharing + access tracking.",
    outcome: "Safer credential exchange, permission history logs, and a measurable misuse-risk confidence model for future protection.",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
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

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {problemStatements.map((problem) => (
            <StaggerItem key={problem.id}>
              <motion.div
                className="glass-card p-6 h-full group cursor-pointer overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Cybersecurity & Privacy Section */}
        <AnimatedSection delay={0.2} className="mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cybersecurity & Privacy
            </span>
          </h3>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {cybersecurityProblems.map((problem) => (
              <StaggerItem key={problem.id}>
                <motion.div
                  className="glass-card p-6 h-full group cursor-pointer overflow-hidden relative"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
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
                        <h3 className="text-lg font-display font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                          {problem.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {problem.description}
                        </p>
                        <div className="space-y-2 pt-3 border-t border-border/50">
                          <p className="text-sm">
                            <span className="text-primary font-semibold">Goal:</span>{" "}
                            <span className="text-muted-foreground">{problem.goal}</span>
                          </p>
                          <p className="text-sm">
                            <span className="text-primary font-semibold">Expected Outcome:</span>{" "}
                            <span className="text-muted-foreground">{problem.outcome}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

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
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/HACK_MARATHON.pptx';
                link.download = 'HACK_MARATHON.pptx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold hover:opacity-90 transition-all glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PPT
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
