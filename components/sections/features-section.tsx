"use client";
import {
  Shield,
  Lock,
  AlertTriangle,
  Radar,
  MonitorCheck,
  Server,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedBackground } from "@/components/ui/animated-background";

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-red-500" />,
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description:
        "A controlled simulation of cyberattacks to identify security flaws across web apps, servers, and internal systems before real hackers exploit them.",
      points: [
        "Detects misconfigurations and weak points in your IT infrastructure.",
        "Safeguards patient and child data stored in applications and databases.",
        "Ensures full compliance with NHS Data Security and GDPR requirements.",
      ],
      borderClass: "border-glow-red",
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-500" />,
      title: "Data Protection & Compliance Assurance",
      description:
        "Comprehensive data security controls designed to protect sensitive healthcare and nursery information from breaches or misuse.",
      points: [
        "Prevents unauthorized access and accidental data exposure.",
        "Aligns with GDPR and ICO data protection standards.",
        "Minimizes risk of regulatory fines and legal repercussions.",
      ],
      borderClass: "border-glow-blue",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
      title: "Ransomware Protection & Recovery",
      description:
        "Multi-layered defense and backup strategies that prevent ransomware intrusions and enable instant recovery if an attack occurs.",
      points: [
        "Shields against loss of patient data and service disruptions.",
        "Prevents ransom demands through secure, verified backups.",
        "Ensures rapid restoration of critical systems and operations.",
      ],
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Radar className="h-10 w-10 text-green-500" />,
      title: "Cyber Threat Intelligence (CTI)",
      description:
        "Continuous analysis of global and local threat patterns to predict, detect, and neutralize cyber risks before they strike.",
      points: [
        "Provides early alerts for phishing, malware, and APT campaigns.",
        "Delivers insights into attacker techniques used in the UK sector.",
        "Keeps your organization’s defense posture up to date and adaptive.",
      ],
      borderClass: "border-glow-green",
    },
    {
      icon: <MonitorCheck className="h-10 w-10 text-purple-500" />,
      title: "Endpoint Protection & Monitoring",
      description:
        "Advanced endpoint security for desktops, laptops, and medical devices to maintain full control and visibility over all access points.",
      points: [
        "Prevents malware, unauthorized access, and insider threats.",
        "Secures staff devices, ensuring no weak links in your ecosystem.",
        "Delivers 24/7 real-time monitoring and automated threat alerts.",
      ],
      borderClass: "border-glow-purple",
    },
    {
      icon: <Server className="h-10 w-10 text-orange-500" />,
      title: "Windows Server Security & Hardening",
      description:
        "Enterprise-grade protection and configuration hardening for on-premise Windows servers used by clinics and nursery providers.",
      points: [
        "Prevents unauthorized access, privilege escalation, and data theft.",
        "Strengthens Windows configurations against sophisticated attacks.",
        "Protects locally hosted records with continuous threat mitigation.",
      ],
      borderClass: "border-glow-orange",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full pt-24 md:pt-24 lg:pt-24 xl:pt-24 pb-6 md:pb-12 lg:pb-20 xl:pb-24 overflow-hidden"
    >
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Packaged Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Our bundled cybersecurity solutions combine advanced protection tools, compliance support, and ongoing monitoring — delivering end-to-end security tailored for healthcare and nursery providers."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card
                    className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative">
                        {feature.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2596be] transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-base text-gray-500 dark:text-gray-200 opacity-70 transition-opacity duration-300 group-hover:opacity-100 text-justify">
                        {feature.description}
                      </CardDescription>

                      {feature.points && (
                        <ul className="list-disc pl-6 space-y-2">
                          {feature.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-base text-gray-500 dark:text-gray-200 opacity-70 transition-opacity duration-300 group-hover:opacity-100 text-justify"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
