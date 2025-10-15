"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function TermsAndConditions() {
  return (
    <section id="terms" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Terms &amp; Conditions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Please read these Terms and Conditions carefully before using our website. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl py-12 space-y-10">
          <ScrollReveal delay={0.1}>
            <Card className="glassmorphic-card">
              <CardContent className="p-6 space-y-6 text-muted-foreground dark:text-gray-300 text-justify">

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">1. Acceptance of Terms</h3>
                  <p>
                    By using our website, you confirm that you accept these Terms and 
                    Conditions and agree to comply with them. If you do not agree, 
                    you must not use our site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">2. Use of Website</h3>
                  <p>
                    You agree to use this website for lawful purposes only. You must not 
                    misuse or attempt to disrupt the functionality of the website or its services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">3. Intellectual Property Rights</h3>
                  <p>
                    All content, trademarks, graphics, and code on this site are the property 
                    of ComponentCraft or its licensors. You may not copy, modify, or 
                    distribute any content without prior written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">4. Limitation of Liability</h3>
                  <p>
                    We are not responsible for any direct, indirect, or incidental damages 
                    arising from your use of our website. All services are provided "as is" 
                    without warranties of any kind.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">5. Third-Party Links</h3>
                  <p>
                    Our website may contain links to third-party websites. We are not 
                    responsible for the content or practices of these external sites and 
                    advise you to read their terms and privacy policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">6. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these Terms and Conditions at any time. 
                    Any changes will be posted on this page with an updated effective date. 
                    Continued use of the site means you accept those changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">7. Governing Law</h3>
                  <p>
                    These Terms and Conditions are governed by and construed in accordance 
                    with the laws of India. Any disputes will be subject to the exclusive 
                    jurisdiction of the courts located in Gurugram, Haryana.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">8. Contact Us</h3>
                  <p>
                    For questions regarding these Terms and Conditions, please contact us at{" "}
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
