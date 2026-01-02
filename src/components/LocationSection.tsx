import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { MapPin, Navigation } from "lucide-react";
export const LocationSection = () => {
  const latitude = 10.870794821566035;
  const longitude = 76.9285885365084;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  return <section id="location" className="py-20 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Event Location</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us at NASC for an exciting hackathon experience
          </p>
        </AnimatedSection>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border border-primary/20">
            {/* Map Container */}
            <div className="relative h-[400px] md:h-[500px]">
              <iframe src={googleMapsUrl} width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="NASC College Location" className="grayscale hover:grayscale-0 transition-all duration-500" />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Location Info */}
            <div className="p-6 md:p-8 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      NASC College
                    </h3>
                    <p className="text-muted-foreground">Thirumalayampalayam, Tamil Nadu, India</p>
                  </div>
                </div>

                <motion.a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-all" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};