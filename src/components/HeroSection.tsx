import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11749-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* NASC - Main Hero Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-display font-black tracking-wider">
            <span className="gradient-text glow-text drop-shadow-[0_0_60px_hsl(var(--primary)/0.8)]">
              NASC
            </span>
          </h1>
        </motion.div>

        {/* National Level Hackmarathon with 24HR Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="gradient-text glow-text">NATIONAL LEVEL</span>
            <br />
            <span className="text-foreground">HACKMARATHON</span>
          </h2>
          
          {/* Animated 24HR Badge */}
          <motion.div
            className="relative"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-70 animate-pulse" />
            <div className="relative px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary to-secondary rounded-2xl border-2 border-white/20">
              <motion.span 
                className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                24HR
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Join the ultimate coding challenge where innovation meets execution. 
          Build, compete, and win amazing prizes!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>28 - 29 Jan 2026</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>National Event</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>2 Members per Team</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#register"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold text-lg hover:opacity-90 transition-all glow-effect"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(270 91% 65% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-4 rounded-xl glass-card font-display font-semibold text-lg hover:bg-muted/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 glass-card p-6 md:p-8 max-w-3xl mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4">Registration Opens</p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: "28", label: "Days" },
              { value: "14", label: "Hours" },
              { value: "32", label: "Minutes" },
              { value: "18", label: "Seconds" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-display font-bold gradient-text">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
