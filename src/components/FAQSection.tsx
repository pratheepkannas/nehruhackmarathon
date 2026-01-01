import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can team members be from different colleges?",
    answer: "Yes, inter-college teams are allowed.",
  },
  {
    question: "Can I change my team members after registration?",
    answer: "Team changes are allowed only before the shortlisting phase.",
  },
  {
    question: "Can I choose my own problem statement?",
    answer: "No, you must choose one from the provided problem statements.",
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, all eligible participants will receive a participation certificate.",
  },
  {
    question: "How will updates be shared?",
    answer: "Updates will be shared via email and the official website.",
  },
  {
    question: "Whom should I contact for queries?",
    answer: "You can contact the coordinators listed in the Coordinator section.",
  },
  {
    question: "What happens if we miss a deadline?",
    answer: "Late submissions may not be considered for evaluation.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Got questions? We've got answers
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card/30 backdrop-blur-xl rounded-2xl border border-primary/20 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-xl px-4 bg-background/20 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
