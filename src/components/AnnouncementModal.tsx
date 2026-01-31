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
  { teamId: "TF001", teamName: "Brogrammers", collegeName: "Dr.Mahalingam College of Engineering and Technology", domain: "Fintech and Digital Economy" },
  { teamId: "TF002", teamName: "Kerberos", collegeName: "Sri Krishna College of Engineering and Technology", domain: "Fintech and Digital Economy" },
  { teamId: "TF003", teamName: "Phanton Hackers", collegeName: "Nadar College of Arts and Science", domain: "Fintech and Digital Economy" },
  { teamId: "TF004", teamName: "Necromancers", collegeName: "Rathinam Groups Of Institution", domain: "Fintech and Digital Economy" },
  { teamId: "TF005", teamName: "Mad Squad", collegeName: "Nehru Institute of Technology", domain: "Fintech and Digital Economy" },
  { teamId: "TF006", teamName: "Stranger Tech", collegeName: "KG College Of Arts and Science", domain: "Fintech and Digital Economy" },
  { teamId: "TNL07", teamName: "Weekend Coders", collegeName: "KG College Of Arts and Science", domain: "NLP" },
  { teamId: "TNL08", teamName: "MindGuard", collegeName: "Dr.NGP Arts and Science College", domain: "NLP" },
  { teamId: "TNL09", teamName: "Upstream", collegeName: "Dr.NGP Arts and Science College", domain: "NLP" },
  { teamId: "TNL10", teamName: "Necromancers", collegeName: "Rathinam Groups Of Institution", domain: "NLP" },
  { teamId: "TNL11", teamName: "Tech Titans", collegeName: "Karpagam Academy Of Higher Education", domain: "NLP" },
  { teamId: "TNL12", teamName: "TaskGuardians", collegeName: "Sri Ramakrishna Engineering College", domain: "NLP" },
  { teamId: "TNL13", teamName: "Wolf", collegeName: "Sri Krishna Adithya", domain: "NLP" },
  { teamId: "TH013", teamName: "Blood Bridge", collegeName: "KGISL College", domain: "Healthcare" },
  { teamId: "TH014", teamName: "Magneta", collegeName: "Kgisl Institute of technology", domain: "Healthcare" },
  { teamId: "TH015", teamName: "Eclipse Syndicate", collegeName: "KG College of Arts and Science", domain: "Healthcare" },
  { teamId: "TH016", teamName: "Think AI", collegeName: "KPR College of Arts and Science", domain: "Healthcare" },
  { teamId: "TH017", teamName: "Quadmith_tech", collegeName: "Presidency University", domain: "Healthcare" },
  { teamId: "TH018", teamName: "CloudNexus", collegeName: "Hindusthan college of Arts and Science", domain: "Healthcare" },
  { teamId: "TC019", teamName: "Hashers", collegeName: "Sri Ramakrishna college of Arts and Science", domain: "Cybersecurity" },
  { teamId: "TC020", teamName: "Digital Defender", collegeName: "Karpagam Academy Of Higher Education", domain: "Cybersecurity" },
  { teamId: "TC021", teamName: "Lightning Logics", collegeName: "Sri Krishna Arts and Science", domain: "Cybersecurity" },
  { teamId: "TC022", teamName: "Nexora", collegeName: "Sri Ramakrishna Arts and Science for women", domain: "Cybersecurity" },
  { teamId: "TC023", teamName: "Team Ghost Arsenal", collegeName: "Dr N.G.P Arts and Science college", domain: "Cybersecurity" },
  { teamId: "TC024", teamName: "Odyssey", collegeName: "Sri Ramakrishna college of Arts and Science", domain: "Cybersecurity" },
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
