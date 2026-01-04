import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Globe, Leaf, Shield, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const problemStatements = [
  {
    id: 1,
    title: "Cybersecurity & Privacy",
    description: "Develop innovative solutions to improve healthcare accessibility and patient care using AI and IoT technologies.",
    icon: Lock,
    color: "from-rose-500 to-pink-600",
    detailedContent: `**Problem Statement 1 — Digital Fraud Evidence Capture & Future Threat Database Gap**

Scams, phishing attacks, fraudulent links, fake calls, and digital deception are increasing, but there is no software that enables instant incident reporting, evidence capture, attack classification, origin tagging, and long-term threat database creation for future prevention.

**Goal:** Build an app/web that logs incidents and stores evidence securely.

**Expected Outcome:** A future-usable cyber fraud threat index with evidence repository and classification.

---

**Problem Statement 2 — Personal Credential Sharing & Misuse-Risk Confidence Gap**

Users share sensitive credentials and documents (ID proofs, OTPs, certificates, banking docs) through insecure channels, and lack a software system that provides encrypted sharing, access permission logs, expiry-based access, and a measurable misuse-risk confidence score for future safety decisions.

**Goal:** Build a software system for secure credential vault + controlled sharing + access tracking.

**Expected Outcome:** Safer credential exchange, permission history logs, and a measurable misuse-risk confidence model for future protection.`,
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Create technology driven solutions to address conversations and automatically identify the emotions expressed by user.",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
    detailedContent: `**Problem Statement 1: Emotion Detection from Text in Online Conversations**

**Problem:** Most online conversations like chat messages, feedback, and support chats are text-based and do not clearly show the user's emotions. Because of this, systems cannot understand whether a user is stressed, angry, sad, or happy. This leads to poor responses, delayed support, and missed early signs of emotional distress. There is also a lack of emotion-based text data for improving future systems.

**Goal:** To build a system that can analyze text messages and automatically identify the user's emotions such as happiness, sadness, anger, stress, or urgency.

**Expected Outcome:** Emotion-aware text analysis helps systems understand user emotions, provide faster and better responses, detect stress early, and generate useful emotion-labeled data for future improvements.

---

**Problem Statement 2: Digital Assistance for Daily Life Task Coordination**

**Problem:** Individuals depend on multiple services and daily tasks like payments, appointments, bookings, documentation, education guidance, healthcare follow-ups, grievance status, and support requests — but lack a single conversational software bot that can plan tasks, generate tickets, track progress, and maintain history for future reference.

**Goal:** Build a web/mobile chatbot that acts as a personal assistant, coordinates tasks, stores history, and tracks progress via conversation.

**Expected Outcome:** Faster task execution, organized request tracking, long-term usable conversation/request history, better user experience.`,
  },
  {
    id: 3,
    title: "Digital Security & Privacy",
    description: "Build secure systems to protect user data and enhance cybersecurity in the digital age.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    detailedContent: null,
  },
  {
    id: 4,
    title: "Smart Healthcare Solutions",
    description: "Develop innovative solutions to improve healthcare accessibility and patient care using AI and IoT technologies.",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
    detailedContent: null,
  },
];

export const ProblemsSection = () => {
  const [selectedProblem, setSelectedProblem] = useState<typeof problemStatements[0] | null>(null);

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
                    {problem.detailedContent ? (
                      <motion.button 
                        className="text-primary text-sm font-medium"
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedProblem(problem)}
                      >
                        View more →
                      </motion.button>
                    ) : (
                      <motion.span 
                        className="text-primary text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        View more →
                      </motion.span>
                    )}
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

      {/* Detail Dialog */}
      <Dialog open={!!selectedProblem} onOpenChange={() => setSelectedProblem(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              {selectedProblem && (
                <>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedProblem.color} flex items-center justify-center`}>
                    <selectedProblem.icon className="w-5 h-5 text-white" />
                  </div>
                  {selectedProblem.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none mt-4">
            {selectedProblem?.detailedContent?.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={i} className="font-bold text-foreground mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
              }
              if (line.startsWith('---')) {
                return <hr key={i} className="my-6 border-border" />;
              }
              if (line.startsWith('**Goal:**') || line.startsWith('**Expected Outcome:**')) {
                const [label, ...rest] = line.split(':');
                return (
                  <p key={i} className="text-muted-foreground mb-2">
                    <strong className="text-foreground">{label.replace(/\*\*/g, '')}:</strong>
                    {rest.join(':')}
                  </p>
                );
              }
              if (line.trim()) {
                return <p key={i} className="text-muted-foreground mb-3">{line}</p>;
              }
              return null;
            })}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
