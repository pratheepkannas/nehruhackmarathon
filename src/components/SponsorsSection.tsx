import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const sponsors = [
  { name: "Nehru Colleges", tier: "Platinum" },
  { name: "MetatronCube Software Solutions", tier: "Gold" },
  { name: "Hacktivate Cyber Solutions Pvt.Ltd", tier: "Silver" },
];

const SponsorCard = ({ name, tier }: { name: string; tier: string }) => {
  const tierColors: Record<string, string> = {
    Platinum: "from-purple-400 to-purple-600",
    Gold: "from-yellow-400 to-yellow-600",
    Silver: "from-gray-300 to-gray-500",
    Bronze: "from-orange-400 to-orange-600",
  };

  return (
    <div className="flex-shrink-0 mx-4">
      <div className="glass-card px-8 py-6 min-w-[180px] text-center group hover:scale-105 transition-transform duration-300">
        <div
          className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-br ${tierColors[tier]} p-0.5 mb-3`}
        >
          <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
            <span className="text-xl font-display font-bold gradient-text">
              {name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
        <h3 className="font-display font-bold text-foreground">{name}</h3>
        <p className={`text-xs mt-1 bg-gradient-to-r ${tierColors[tier]} bg-clip-text text-transparent font-semibold`}>
          {tier} Sponsor
        </p>
      </div>
    </div>
  );
};

export const SponsorsSection = () => {
  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">Our Sponsors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powered by industry leaders who believe in innovation
          </p>
        </AnimatedSection>

        {/* First row - scrolling left */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * sponsors.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <SponsorCard key={`row1-${index}`} {...sponsor} />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex"
            animate={{
              x: [-100 * sponsors.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <SponsorCard key={`row2-${index}`} {...sponsor} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
