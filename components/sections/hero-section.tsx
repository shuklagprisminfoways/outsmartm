"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full pt-24 md:pt-32 lg:pt-32 xl:pt-32 pb-6 md:pb-12 lg:pb-20 xl:pb-32 overflow-hidden"
    >
      {/* Gradient Animated Background */}
      <AnimatedBackground
        variant="gradient"
        color="rgba(220, 38, 38, 0.08)"
        secondaryColor="rgba(75, 85, 99, 0.08)"
      />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="gradient-text">
                  Cybersecurity Protection Package
                </span>
                <br />
                <span className="text-foreground">
                  {" "}
                  for UK Healthcare & Nursery Providers
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                Protecting Patient Data, Operations, and Trust
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <GradientButton
                glowAmount={5}
                className="px-6 py-2.5 text-base"
                gradientFrom="from-[#2596be]"
                gradientTo="to-[#1e7da1]"
                asChild
              >
                <Link href="#components" className="flex items-center">
                  View Services
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
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
            </motion.div>
          </motion.div>

          {/* Right Image (Same Height as Text Content) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-full flex justify-center items-center"
          >
            <div className="relative w-full h-[300px] lg:h-[350px] xl:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hero.webp"
                alt="Cybersecurity protection illustration"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
