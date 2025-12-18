import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { AlertCircle, CheckCircle, XCircle, Users } from "lucide-react";

const rules = [
  {
    type: "allowed",
    icon: CheckCircle,
    title: "Team Composition",
    rules: [
      "Teams must consist of exactly 2 members",
      "All team members must be registered participants",
      "Cross-institutional teams are allowed",
    ],
  },
  {
    type: "allowed",
    icon: CheckCircle,
    title: "Technical Requirements",
    rules: [
      "Use any programming language or framework",
      "Open source libraries and APIs are permitted",
      "Cloud services can be utilized",
    ],
  },
  {
    type: "warning",
    icon: AlertCircle,
    title: "Important Guidelines",
    rules: [
      "All code must be written during the hackathon",
      "Projects must address the chosen problem statement",
      "Presentations are limited to 10 minutes",
    ],
  },
  {
    type: "restricted",
    icon: XCircle,
    title: "Not Allowed",
    rules: [
      "Pre-written code or copied solutions",
      "Plagiarism or intellectual property theft",
      "Unethical practices or harassment",
    ],
  },
];

const criteria = [
  { name: "Innovation", weight: "30%" },
  { name: "Technical Implementation", weight: "25%" },
  { name: "Problem Relevance", weight: "20%" },
  { name: "Presentation", weight: "15%" },
  { name: "User Experience", weight: "10%" },
];

export const RulesSection = () => {
  return (
    <section id="rules" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Rules & Guidelines</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Please read and follow all guidelines carefully
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
          {rules.map((section) => (
            <StaggerItem key={section.title}>
              <motion.div
                className="glass-card p-6 h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon 
                    className={`w-6 h-6 ${
                      section.type === 'allowed' ? 'text-emerald-500' :
                      section.type === 'warning' ? 'text-amber-500' :
                      'text-rose-500'
                    }`} 
                  />
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        section.type === 'allowed' ? 'bg-emerald-500' :
                        section.type === 'warning' ? 'bg-amber-500' :
                        'bg-rose-500'
                      }`} />
                      {rule}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Team Section */}
        <AnimatedSection className="mb-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Team Collaboration
                </h3>
                <p className="text-muted-foreground">2 Members per Team</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Form a team of exactly 2 members to participate in the hackathon. 
              Both members will work collaboratively on the same problem statement 
              and share the responsibilities of coding, designing, and presenting.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                Equal Contribution Expected
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">
                Communication is Key
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Judging Criteria */}
        <AnimatedSection>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">
              Judging Criteria
            </h3>
            <div className="space-y-4">
              {criteria.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-muted-foreground w-40">{item.name}</span>
                  <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.weight }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-primary font-display font-bold w-14 text-right">
                    {item.weight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
