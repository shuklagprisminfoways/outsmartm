"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/animated-background";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Healthcare-focused approach",
      content:
        "We understand the unique challenges of medical practices and nurseries.",
    },
    {
      name: "Comprehensive coverage",
      content:
        "From VAPT to ransomware defense, we deliver complete end-to-end protection.",
    },
    {
      name: "Affordable packages",
      content:
        "Delivering security to small and mid-sized practices without compromising security.",
    },
    {
      name: "Compliance readiness",
      content:
        "Our services help you meet GDPR, ICO, and NHS data protection standards.",
    },
    {
      name: "Peace of mind",
      content:
        "Protect your reputation, ensure patient trust, and keep operations running smoothly.",
    },
  ];

  return (
    <section
      id="components"
      className="relative w-full pt-24 md:pt-24 lg:pt-24 xl:pt-24 pb-6 md:pb-12 lg:pb-20 xl:pb-24 overflow-hidden"
    >
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedText
                text="Why Choose Us?"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl"
                animation="slide"
              />
              <AnimatedText
                text="We don’t just offer cybersecurity — we deliver peace of mind. Our healthcare-specific security solutions are built to protect sensitive patient data, ensure compliance, and keep your operations running without disruption."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full flex flex-col justify-between glassmorphic-card group">
                  <CardHeader className="flex-grow">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#2596be] transition-colors">
                      {testimonial.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed text-justify">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
