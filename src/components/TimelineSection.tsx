import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Calendar, CheckCircle, FileText, Trophy } from "lucide-react";

const timeline = [
  {
    date: "16 Jan 2026",
    title: "Registration Opens",
    description: "Submit your team details and start preparing for the challenge",
    icon: Calendar,
    status: "upcoming",
  },
  {
    date: "20 Jan 2026",
    title: "Shortlist Announcement",
    description: "Selected teams will be notified and invited to the final round",
    icon: FileText,
    status: "upcoming",
  },
  {
    date: "28 Jan 2026",
    title: "Finals Day 1",
    description: "Hackathon begins! Start building your innovative solutions",
    icon: CheckCircle,
    status: "upcoming",
  },
  {
    date: "29 Jan 2026",
    title: "Finals Day 2 & Results",
    description: "Project presentations and winner announcements",
    icon: Trophy,
    status: "upcoming",
  },
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Event Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mark your calendars for these important dates
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 md:-translate-x-1/2" />

          {timeline.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <motion.div
                className={`relative flex items-center gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="glass-card p-6 inline-block">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center md:-translate-x-1/2 z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </motion.div>

                {/* Empty space for alignment on larger screens */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
