import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { AlertCircle, CheckCircle, XCircle, Users } from "lucide-react";
const rules = [{
  type: "allowed",
  icon: CheckCircle,
  title: "Participation Guidelines",
  rules: ["Each team should have 2–4 members only", "Only UG/PG students are allowed to participate", "Selected students must bring their own college ID card"]
}, {
  type: "allowed",
  icon: CheckCircle,
  title: "Facilities Provided",
  rules: ["Food and refreshments will be provided", "Lab facilities and Wi-Fi network will be provided", "One team member can register as Team Leader"]
}, {
  type: "warning",
  icon: AlertCircle,
  title: "Important Guidelines",
  rules: ["Bring all the required items and materials that you may need", "All code must be written during the hackathon", "Projects must address the chosen problem statement"]
}, {
  type: "restricted",
  icon: XCircle,
  title: "Not Allowed",
  rules: ["Participants should not be involved in any malpractice or misbehaviour", "Pre-written code or copied solutions", "Plagiarism or intellectual property theft"]
}];
export const RulesSection = () => {
  return <section id="rules" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Rules & Guidelines</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Please read and follow all guidelines carefully
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
          {rules.map(section => <StaggerItem key={section.title}>
              <motion.div className="glass-card p-6 h-full" whileHover={{
            scale: 1.02
          }}>
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className={`w-6 h-6 ${section.type === 'allowed' ? 'text-emerald-500' : section.type === 'warning' ? 'text-amber-500' : 'text-rose-500'}`} />
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.rules.map((rule, i) => <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${section.type === 'allowed' ? 'bg-emerald-500' : section.type === 'warning' ? 'bg-amber-500' : 'bg-rose-500'}`} />
                      {rule}
                    </li>)}
                </ul>
              </motion.div>
            </StaggerItem>)}
        </StaggerContainer>

        {/* Team Section */}
        <AnimatedSection>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Team Collaboration
                </h3>
                <p className="text-muted-foreground">2–3 Members per Team</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Form a team of 2–3 members to participate in the hackathon.
              All members will work collaboratively on the same problem statement 
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
      </div>
    </section>;
};