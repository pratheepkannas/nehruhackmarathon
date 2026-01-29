import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Eye } from "lucide-react";
import confetti from "canvas-confetti";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const shortlistedTeams = [
  { teamId: "TM001", teamName: "Code Crushers", collegeName: "Anna University", domain: "AI/ML" },
  { teamId: "TM002", teamName: "Binary Blazers", collegeName: "VIT Chennai", domain: "Web Development" },
  { teamId: "TM003", teamName: "Tech Titans", collegeName: "SRM University", domain: "Blockchain" },
  { teamId: "TM004", teamName: "Debug Dynasty", collegeName: "PSG Tech", domain: "IoT" },
  { teamId: "TM005", teamName: "Hack Heroes", collegeName: "NIT Trichy", domain: "Cybersecurity" },
  { teamId: "TM006", teamName: "Pixel Pioneers", collegeName: "CEG Chennai", domain: "AR/VR" },
  { teamId: "TM007", teamName: "Logic Legends", collegeName: "SSN College", domain: "Cloud Computing" },
  { teamId: "TM008", teamName: "Byte Busters", collegeName: "Amrita University", domain: "Data Science" },
  { teamId: "TM009", teamName: "Neural Ninjas", collegeName: "BITS Pilani", domain: "AI/ML" },
  { teamId: "TM010", teamName: "Data Dynamos", collegeName: "IIT Madras", domain: "Fintech" },
  { teamId: "TM011", teamName: "Quantum Coders", collegeName: "IIT Bombay", domain: "Quantum Computing" },
  { teamId: "TM012", teamName: "Cloud Surfers", collegeName: "IIIT Hyderabad", domain: "Cloud Computing" },
  { teamId: "TM013", teamName: "Cyber Warriors", collegeName: "Manipal University", domain: "Cybersecurity" },
  { teamId: "TM014", teamName: "AI Avengers", collegeName: "DSCE Bangalore", domain: "AI/ML" },
  { teamId: "TM015", teamName: "Block Builders", collegeName: "Christ University", domain: "Blockchain" },
  { teamId: "TM016", teamName: "Web Wizards", collegeName: "Loyola College", domain: "Web Development" },
  { teamId: "TM017", teamName: "IoT Innovators", collegeName: "Madras University", domain: "IoT" },
  { teamId: "TM018", teamName: "Data Detectives", collegeName: "Stella Maris", domain: "Data Science" },
  { teamId: "TM019", teamName: "Virtual Vipers", collegeName: "MCC Chennai", domain: "AR/VR" },
  { teamId: "TM020", teamName: "Fintech Force", collegeName: "Presidency College", domain: "Fintech" },
  { teamId: "TM021", teamName: "Algo Architects", collegeName: "Ethiraj College", domain: "AI/ML" },
  { teamId: "TM022", teamName: "Secure Squad", collegeName: "Women's Christian", domain: "Cybersecurity" },
  { teamId: "TM023", teamName: "Smart Solvers", collegeName: "Sathyabama Univ", domain: "IoT" },
  { teamId: "TM024", teamName: "Code Catalysts", collegeName: "Hindustan Univ", domain: "Web Development" },
];

export const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const fireCelebration = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#a855f7', '#06b6d4', '#fbbf24', '#ec4899', '#10b981'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#a855f7', '#06b6d4', '#fbbf24', '#ec4899', '#10b981'],
      });
    }, 250);
  }, []);

  const handleViewClick = () => {
    setShowTable(true);
    fireCelebration();
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowTable(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className={`w-full ${showTable ? 'max-w-3xl' : 'max-w-md'} glass-card p-6 md:p-8 rounded-2xl border border-primary/30 relative overflow-hidden max-h-[90vh] overflow-y-auto`} 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted/50 transition-colors z-10"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4"
                >
                  Shortlisted Students Announced!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6"
                >
                  Congratulations to all the shortlisted teams! Check if your team made it to the finals.
                </motion.p>

                {!showTable ? (
                  /* View Button */
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleViewClick}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-5 h-5" />
                    View Here
                  </motion.button>
                ) : (
                  /* Table View */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="rounded-xl border border-primary/20 overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="text-foreground font-display font-semibold">Team ID</TableHead>
                            <TableHead className="text-foreground font-display font-semibold">Team Name</TableHead>
                            <TableHead className="text-foreground font-display font-semibold">College Name</TableHead>
                            <TableHead className="text-foreground font-display font-semibold">Domain</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {shortlistedTeams.map((team, index) => (
                            <TableRow 
                              key={team.teamId}
                              className="border-primary/10 hover:bg-primary/5"
                            >
                              <TableCell className="font-mono text-primary font-semibold">
                                {team.teamId}
                              </TableCell>
                              <TableCell className="font-medium">
                                {team.teamName.length > 42 
                                  ? `${team.teamName.substring(0, 42)}...` 
                                  : team.teamName}
                              </TableCell>
                              <TableCell className="text-muted-foreground">
                                {team.collegeName}
                              </TableCell>
                              <TableCell className="text-muted-foreground">
                                {team.domain}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      onClick={handleClose}
                      className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
                    >
                      Got it!
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
