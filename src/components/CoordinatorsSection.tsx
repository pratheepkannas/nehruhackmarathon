import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Mail, Phone } from "lucide-react";
import principalImage from "@/assets/principal.png";

const management = [
  {
    name: "Dr. Rajesh Kumar",
    profession: "Principal",
    image: principalImage,
  },
  {
    name: "Dr. Sunita Sharma",
    profession: "Vice Principal",
  },
  {
    name: "Dr. Amit Gupta",
    profession: "Dean of Academics",
  },
];

const conveners = [
  {
    name: "Dr. Arun Kumar",
    profession: "Head of Department - CSE",
    email: "arun.kumar@college.edu",
    phone: "+91 98765 43210",
  },
  {
    name: "Dr. Meera Patel",
    profession: "Associate Professor",
    email: "meera.patel@college.edu",
    phone: "+91 98765 43211",
  },
];

const facultyCoordinators = [
  {
    name: "Prof. Vikram Singh",
    profession: "Assistant Professor - CSE",
    email: "vikram.singh@college.edu",
    phone: "+91 98765 43212",
  },
  {
    name: "Prof. Anita Reddy",
    profession: "Assistant Professor - IT",
    email: "anita.reddy@college.edu",
    phone: "+91 98765 43213",
  },
];

const coordinators = [
  {
    name: "Priya Sharma",
    role: "Student Coordinator",
    email: "priya.sharma@college.edu",
    phone: "+91 98765 43214",
  },
  {
    name: "Rahul Verma",
    role: "Technical Lead",
    email: "rahul.verma@college.edu",
    phone: "+91 98765 43215",
  },
  {
    name: "Sneha Patel",
    role: "Event Manager",
    email: "sneha.patel@college.edu",
    phone: "+91 98765 43216",
  },
  {
    name: "Karthik Nair",
    role: "Volunteer Coordinator",
    email: "karthik.nair@college.edu",
    phone: "+91 98765 43217",
  },
];

export const CoordinatorsSection = () => {
  return (
    <section id="team" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Management Section */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title mb-4">Management</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our esteemed leadership guiding the hackathon
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {management.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="glass-card p-6 text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-display font-bold gradient-text">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                </motion.div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm">{member.profession}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Convener Section */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title mb-4">Convener</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leading the hackathon organization
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {conveners.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="glass-card p-6 text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-3xl font-display font-bold gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </motion.div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-4">{member.profession}</p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Faculty Coordinator Section */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title mb-4">Faculty Coordinators</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Guiding and mentoring the event
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {facultyCoordinators.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="glass-card p-6 text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-3xl font-display font-bold gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </motion.div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-4">{member.profession}</p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Student Coordinators Section */}
        <AnimatedSection className="text-center mb-12">
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
