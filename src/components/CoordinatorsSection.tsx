import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Mail, Phone, Linkedin } from "lucide-react";

const coordinators = [
  {
    name: "Dr. Arun Kumar",
    role: "Faculty Coordinator",
    email: "arun.kumar@college.edu",
    phone: "+91 98765 43210",
  },
  {
    name: "Priya Sharma",
    role: "Student Coordinator",
    email: "priya.sharma@college.edu",
    phone: "+91 98765 43211",
  },
  {
    name: "Rahul Verma",
    role: "Technical Lead",
    email: "rahul.verma@college.edu",
    phone: "+91 98765 43212",
  },
  {
    name: "Sneha Patel",
    role: "Event Manager",
    email: "sneha.patel@college.edu",
    phone: "+91 98765 43213",
  },
  {
    name: "Vikram Singh",
    role: "Logistics Coordinator",
    email: "vikram.singh@college.edu",
    phone: "+91 98765 43214",
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Lead",
    email: "ananya.reddy@college.edu",
    phone: "+91 98765 43215",
  },
  {
    name: "Karthik Nair",
    role: "Volunteer Coordinator",
    email: "karthik.nair@college.edu",
    phone: "+91 98765 43216",
  },
];

export const CoordinatorsSection = () => {
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Meet Our Coordinators</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? Reach out to our organizing team
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinators.map((coordinator) => (
            <StaggerItem key={coordinator.name}>
              <motion.div
                className="glass-card p-6 text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Avatar placeholder */}
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-3xl font-display font-bold gradient-text">
                      {coordinator.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </motion.div>

                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {coordinator.name}
                </h3>
                <p className="text-primary text-sm mb-4">{coordinator.role}</p>

                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{coordinator.email}</span>
                  </a>
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{coordinator.phone}</span>
                  </a>
                </div>

                <motion.div
                  className="mt-4 flex justify-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="#"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
