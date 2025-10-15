"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Privacy Policy
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Your privacy is important to us. This Privacy Policy explains how we
                collect, use, and protect your information when you use our website.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl py-12 space-y-10">
          <ScrollReveal delay={0.1}>
            <Card className="glassmorphic-card">
              <CardContent className="p-6 space-y-6 text-muted-foreground dark:text-gray-300 text-justify">
                
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">1. Information We Collect</h3>
                  <p>
                    We may collect personal details such as your name, email address,
                    contact information, and usage data when you interact with our
                    website or services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">2. How We Use Your Information</h3>
                  <p>
                    Your data helps us provide services, improve user experience,
                    process inquiries, and deliver updates or marketing communications
                    (only if you consent).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">3. Sharing of Data</h3>
                  <p>
                    We do not sell or rent your personal information. Data may only be
                    shared with trusted third parties for service provision, legal
                    compliance, or security purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">4. Data Security</h3>
                  <p>
                    We implement industry-standard measures to protect your
                    information from unauthorized access, alteration, or disclosure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">5. Your Rights</h3>
                  <p>
                    You have the right to access, update, or delete your personal
                    information. You may also opt out of marketing communications at
                    any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">6. Policy Updates</h3>
                  <p>
                    We may update this Privacy Policy periodically. The updated
                    version will always be available on this page with the revised
                    effective date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">7. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please reach
                    out to us at{" "}
                    <span className="font-medium text-foreground">support@componentcraft.com</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
