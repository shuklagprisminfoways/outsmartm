"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import { OutlineButton } from "@/components/ui-library/buttons/button-variants";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="w-full py-12 md:py-24 lg:py-32 
  dark:bg-gradient-to-br dark:from-red-950/30 dark:to-gray-950/30 
  bg-gradient-to-br from-[#2596be]/30 to-[#1e7da1]/30"
    >
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <AnimatedText
                text="Ready to Secure Your Healthcare Practice?"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="wave"
              />
              <AnimatedText
                text="Get started with our cybersecurity solutions today and safeguard your data with end-to-end protection."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <GradientButton
                glowAmount={5}
                size="lg"
                className="px-8 py-3"
                gradientFrom="from-[#2596be]"
                gradientTo="to-[#1e7da1]"
                asChild
              >
                <Link href="#pricing" className="flex items-center">
                  Get Started
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      duration: 1,
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </GradientButton>

              <AnimatedGradientBorder
                colors={["#2596be", "#1e7da1", "#2596be", "#1e7da1"]}
                borderWidth={1}
                duration={6}
              >
                <OutlineButton
                  size="lg"
                  className="bg-background w-full h-full border-0 px-8 py-3"
                  asChild
                >
                  <Link href="#features">View Services</Link>
                </OutlineButton>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
