"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full pt-24 md:pt-24 lg:pt-24 xl:pt-24 pb-6 md:pb-12 lg:pb-20 xl:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Comprehensive Cybersecurity Protection
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Protecting healthcare providers with advanced security solutions
                and compliance assurance.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2 items-stretch">
          {/* Left side - Image */}
          <ScrollReveal delay={0.1}>
            <Card className="glassmorphic-card h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/about.jpg" // keep about.jpg inside public/
                    alt="About Cybersecurity"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Right side - Content */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold tracking-tight">
                  Introduction
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-200 opacity-70 text-justify">
                  <p>
                    The recent cyber incident impacting UK healthcare providers
                    highlights the growing risks faced by doctors, clinics, and
                    nurseries. With sensitive patient and child data stored on
                    local Windows servers and practice management systems, a
                    single breach can lead to data loss, financial penalties
                    under GDPR, reputational harm, and disruption of essential
                    services.
                  </p>
                  <p>
                    To address these risks, we have developed a comprehensive
                    Cybersecurity Protection Package for healthcare and nursery
                    institutions. This package combines cyber protection,
                    continuous monitoring, and targeted protection to make
                    critical systems safe from external attacks and ensure
                    compliance with data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
