import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CalendlyModal } from "@/components/ui/calendly-modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pourquoi Nous", href: "#why-us" },
    { name: "Témoignages", href: "#testimonials" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="cursor-pointer font-heading text-2xl font-bold">
                  Auto<span className="gradient-text">Mate</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                  className="text-gray-300 hover:text-white hover:gradient-text transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="outline"
                className="border-[#6A0DAD] text-white hover:bg-[#6A0DAD] transition-colors"
                onClick={() => setShowCalendly(true)}
              >
                Nous Contacter
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute left-0 right-0 top-full mt-2 bg-black/95 backdrop-blur-sm border border-[#6A0DAD]/20 rounded-lg overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#6A0DAD]/20 rounded-md transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full border-[#6A0DAD] text-white hover:bg-[#6A0DAD] transition-colors mt-4"
                    onClick={() => {
                      setShowCalendly(true);
                      setIsOpen(false);
                    }}
                  >
                    Nous Contacter
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </>
  );
}