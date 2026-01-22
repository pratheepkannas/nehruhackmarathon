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
    title: "FinTech & Digital Economy",
    description: "Build solutions to improve financial awareness, digital inclusion, and fair market practices.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    detailedContent: `**Problem Statement 1: Financial Awareness and Digital Inclusion Platform**

**Problem:** In India, many citizens—especially in remote regions—lack financial awareness about credit, savings, and digital benefits, leading to loan rejection, poor planning, and dependency on intermediaries. A software solution is needed to improve financial decision clarity and inclusion.

**Goal:** Build a web/mobile platform that guides users in credit, savings, or digital finance planning.

**Expected Outcome:** Improved financial awareness, better loan/savings planning, reduced dependency on middlemen.

---

**Problem Statement 2: Local Market Price Volatility & Fair Value Negotiation Gap**

**Problem:** Sellers and producers face daily price changes and unfair value decisions because they lack a system to compare markets, evaluate quality-based pricing, and get a reasonable price range with negotiation support, leading to financial loss or undervalued sales. No decision-support pricing intelligence tool exists in software.

**Goal:** Build a software platform (app/web) that provides fair-value price range, comparison, and negotiation assistance.

**Expected Outcome:** Better selling decisions, reduced undervaluation, smarter price awareness, improved negotiation confidence.`,
  },
  {
    id: 4,
    title: "Smart Healthcare Solutions",
    description: "Develop innovative solutions to improve healthcare accessibility and patient care using AI and IoT technologies.",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
    detailedContent: `**Problem Statement 1: Emergency Response & Hospital Readiness Coordination**

**Problem:** During sudden medical emergencies, people struggle to identify nearby hospital readiness (bed/doctor availability), optimal arrival time, and fast pre-registration for immediate care, causing critical delays. There is no software system that enables real-time emergency coordination and hospital readiness visibility.

**Goal:** To develop a digital platform that provides real-time information on nearby hospital readiness, including bed and doctor availability, estimated arrival time, and quick pre-registration, enabling faster and more coordinated emergency medical response.

**Expected Outcome:** The system will reduce delays in emergency care by providing real-time hospital readiness information, enabling faster arrival decisions, quick pre-registration, and improved coordination between patients, ambulances, and hospitals, ultimately increasing the chances of timely and effective treatment.

---

**Problem Statement 2: Crowd-Aware Blood Donation & Availability Coordination**

**Problem:** Blood banks and donation drives suffer from unpredictable donor turnout, mismatched blood availability, and poor visibility into upcoming shortages, causing emergency dependency on unplanned donors. A software system is needed for donor scheduling, blood availability visibility, and shortage-aware coordination.

**Goal:** To build a digital system that manages blood donor scheduling, tracks real-time blood availability, and predicts potential shortages to ensure timely and well-coordinated blood donation and distribution.

**Expected Outcome:** The system will improve blood availability planning by providing clear visibility into donor turnout and blood stock levels, reducing emergency shortages and dependency on unplanned donors. It will enable better coordination between blood banks, donors, and hospitals, ensuring timely access to required blood types and saving more lives.`,
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
          {problemStatements.map((problem) => {
            const isClosed = false; // All domains are open
            
            return (
              <StaggerItem key={problem.id}>
                <motion.div
                  className={`glass-card p-6 h-full group overflow-hidden relative ${isClosed ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  whileHover={isClosed ? {} : { scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 ${!isClosed && 'group-hover:opacity-10'} transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0 ${!isClosed && 'group-hover:scale-110'} transition-transform ${isClosed && 'grayscale'}`}>
                        <problem.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground font-medium">
                          Problem Statement {problem.id}
                        </span>
                        <h3 className={`text-xl font-display font-bold mt-1 mb-3 transition-colors ${isClosed ? 'line-through text-muted-foreground' : 'text-foreground group-hover:text-primary'}`}>
                          {problem.title}
                        </h3>
                        <p className={`text-sm leading-relaxed text-justify ${isClosed ? 'line-through text-muted-foreground/70' : 'text-muted-foreground'}`}>
                          {problem.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                      {isClosed ? (
                        <span className="text-xs text-destructive font-semibold">
                          Registration is closed for this domain
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          Open for all participants
                        </span>
                      )}
                      {!isClosed && problem.detailedContent ? (
                        <motion.button 
                          className="text-primary text-sm font-medium"
                          whileHover={{ x: 5 }}
                          onClick={() => setSelectedProblem(problem)}
                        >
                          View more →
                        </motion.button>
                      ) : !isClosed ? (
                        <motion.span 
                          className="text-primary text-sm font-medium"
                          whileHover={{ x: 5 }}
                        >
                          View more →
                        </motion.span>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
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
                    {rest.join(':').replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (line.trim()) {
                // Remove any remaining ** markers from text
                const cleanLine = line.replace(/\*\*/g, '');
                return <p key={i} className="text-muted-foreground mb-3">{cleanLine}</p>;
              }
              return null;
            })}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
