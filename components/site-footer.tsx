import Link from "next/link";
import { Icons } from "@/components/icons";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2 z-10">
              {/* Light mode logo */}
              <Image
                src="/logo1.PNG"
                alt="ComponentCraft Logo Light"
                width={32}
                height={32}
                className="h-20 w-20 dark:hidden"
                priority
              />
              {/* Dark mode logo */}
              <Image
                src="/logo2.png"
                alt="ComponentCraft Logo Dark"
                width={32}
                height={32}
                className="h-20 w-20 hidden dark:block"
                priority
              />
            </Link>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Cybersecurity Protection Package for UK Healthcare & Nursery
              Providers. Protecting Patient Data, Operations, and Trust.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.gitHub className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.discord className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            {/* <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="#changelog"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground opacity-70"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} Outsmartm. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}
