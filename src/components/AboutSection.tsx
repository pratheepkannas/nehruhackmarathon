import { AnimatedSection, FadeInLeft, FadeInRight } from "./AnimatedSection";
import { Code, Lightbulb, Rocket, Trophy } from "lucide-react";
const features = [{
  icon: Lightbulb,
  title: "Innovate",
  description: "Bring your creative ideas to life with cutting-edge technology"
}, {
  icon: Code,
  title: "Build",
  description: "48 hours of intense coding and problem-solving"
}, {
  icon: Rocket,
  title: "Launch",
  description: "Present your solution to industry experts and judges"
}, {
  icon: Trophy,
  title: "Win",
  description: "Amazing prizes and recognition await the winners"
}];
export const AboutSection = () => {
  return <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">About The Competition</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A national-level hackmarathon that brings together the brightest minds 
            to solve real-world problems through technology and innovation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeInLeft>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                What is Hackmarathon?
              </h3>
              <p className="text-muted-foreground leading-relaxed">Hackmarathon is a national-level coding competition where talented developers, designers, and innovators come together to create solutions for pressing problems. Teams of 2–3 members collaborate intensively over 24hr to build working prototypes and present them to a panel of expert judges.</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you're a seasoned developer or a passionate beginner, this 
                hackathon provides the perfect platform to showcase your skills, 
                learn from peers, and potentially win exciting prizes.
              </p>
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Why Participate?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Network with industry professionals and like-minded developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Gain hands-on experience solving real-world problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Win exciting cash prizes and recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Add valuable experience to your portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Learn new technologies and methodologies</span>
                </li>
              </ul>
            </div>
          </FadeInRight>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, i) => <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};