"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#features" },
  { name: "Why Choose Us", href: "#components" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrollPosition > 10
          ? "bg-background/80 backdrop-blur-lg border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          {/* Light mode logo */}
          <Image
            src="/logo1.webp"
            alt="Logo Light"
            width={40}
            height={40}
            className="h-20 w-20 dark:hidden"
            priority
          />
          {/* Dark mode logo */}
          <Image
            src="/logo2.webp"
            alt="Logo Dark"
            width={40}
            height={40}
            className="h-20 w-20 hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button size="sm" className="neumorphic-button-primary" asChild>
              <Link href="#features">
                Get Started
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                    duration: 0.8,
                  }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md bg-background/90 border border-border/40 shadow-sm"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-foreground h-5 w-5" />
            ) : (
              <List className="text-foreground h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 z-1001 w-full max-w-xs bg-background shadow-xl border-l border-border"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Mobile Logo + Close */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  <Image
                    src="/logo1.webp"
                    alt="Logo Light"
                    width={32}
                    height={32}
                    className="h-8 w-8 dark:hidden"
                    priority
                  />
                  <Image
                    src="/logo2.webp"
                    alt="Logo Dark"
                    width={32}
                    height={32}
                    className="h-8 w-8 hidden dark:block"
                    priority
                  />
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="text-foreground h-5 w-5" />
                </button>
              </div>

              {/* Mobile Nav */}
              <div className="py-4 px-2">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        });
                        closeMobileMenu();
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto p-4 border-t border-border">
                <Button className="w-full neumorphic-button-primary" asChild>
                  <Link href="#features" onClick={closeMobileMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
