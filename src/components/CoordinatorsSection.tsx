import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Mail, Phone } from "lucide-react";
import principalImage from "@/assets/principal.png";
import vicePrincipalImage from "@/assets/vice-principal.png";
import convener1Image from "@/assets/convener-1.png";
import convener2Image from "@/assets/convener-2.png";
import faculty1Image from "@/assets/faculty-1.png";
import faculty2Image from "@/assets/faculty-2.png";
import deanImage from "@/assets/dean.png";

const management = [
  {
    name: "Dr. P. Krishna Kumar",
    profession: "CEO & Secretary",
    image: principalImage,
  },
  {
    name: "Dr. H. N. Nagaraja",
    profession: "Executive Director",
    image: vicePrincipalImage,
  },
  {
    name: "Dr. V. Vijayakumar",
    profession: "Principal",
    image: deanImage,
  },
];

const conveners = [
  {
    name: "Dr. S. Saraswathi",
    profession: "Head of Department - Computer Science and Data Science",
    phone: "+91 98765 43210",
    image: convener1Image,
  },
  {
    name: "Dr.K.Selvavinayaki",
    profession: "Head of Department - Computer Applications",
    phone: "+91 98765 43211",
    image: convener2Image,
  },
];

const facultyCoordinators = [
  {
    name: "Dr. R. Anitha",
    profession: "Assistant Professor - Computer Science and Data Science",
    phone: "+91 9159912712",
    image: faculty1Image,
  },
  {
    name: "Dr.M.Sheela New Sheeba",
    profession: "Assistant Professor - Computer Applications",
    phone: "+91 9965665652",
    image: faculty2Image,
  },
];

const coordinators = [
  {
    name: "Lavanya.B.P",
    role: "Student Coordinator",
    phone: "+91 9361818449",
  },
  {
    name: "Darshana.B",
    role: "Technical Lead",
    phone: "+91 9342941778",
  },
  {
    name: "Preethi Ganesh",
    role: "Event Manager",
    phone: "+91 8270816214",
  },
  {
    name: "Harish.K",
    role: "Volunteer Coordinator",
    phone: "+91 6383341381",
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
                <p className="text-primary text-sm mb-4">{member.profession}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                  </div>
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
                <p className="text-primary text-sm mb-4">{member.profession}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                  </div>
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
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                  </div>
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
