import { motion } from "framer-motion";
import { Calendar, Users, Slack } from "lucide-react";
import { useState, useEffect } from "react";
import nascHeader from "@/assets/nasc-header.jpeg";
const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
};
export const HeroSection = () => {
  const hackathonDate = new Date("2026-02-05T09:00:00");
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdown(hackathonDate);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-8">
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* College Header Image */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mb-6 md:mb-8">
          <img src={nascHeader} alt="Nehru Arts and Science College" className="max-w-full h-auto mx-auto max-h-16 md:max-h-24 lg:max-h-28 object-contain drop-shadow-glow" />
        </motion.div>

        {/* NASC - Main Hero Text */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }} className="mb-4">
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-display font-black tracking-wider">
            <span className="gradient-text glow-text">NASC</span>
          </h1>
        </motion.div>

        {/* National Level Hackmarathon with 24HR Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold">
            <span className="gradient-text glow-text">NATIONAL LEVEL</span>
            <br />
            <span className="text-foreground">HACKMARATHON</span>
          </h2>
          
          {/* 24HR Badge - simplified animation */}
          <div className="relative animate-pulse-glow rounded-2xl">
            <div className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary to-secondary rounded-2xl border-2 border-white/20">
              <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-black text-white">
                24hr
              </span>
            </div>
          </div>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          Join the ultimate coding challenge where innovation meets execution. 
          Build, compete, and win amazing prizes!
        </motion.p>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span>5 - 6 Feb 2026</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
            <Slack className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <span>National Event</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span>2–4 Members</span>
          </div>
        </motion.div>

        {/* CTA Buttons with touch-friendly sizing */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a href="https://forms.gle/2tyXXexojdF9iufT7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary 
                       text-primary-foreground font-display font-semibold text-lg 
                       active:scale-95 transition-transform touch-manipulation glow-effect">
            Register Now
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-display font-semibold text-lg 
                       active:scale-95 transition-transform touch-manipulation text-center">
            Learn More
          </a>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="mt-10 md:mt-16 glass-card p-4 md:p-8 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3 md:mb-4">Event Starts In</p>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {[{
            value: days,
            label: "Days"
          }, {
            value: hours,
            label: "Hours"
          }, {
            value: minutes,
            label: "Minutes"
          }, {
            value: seconds,
            label: "Seconds"
          }].map(item => <div key={item.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-5xl font-display font-bold gradient-text">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">
                  {item.label}
                </div>
              </div>)}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>;
};