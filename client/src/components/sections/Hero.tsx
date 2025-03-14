import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CalendlyModal } from "@/components/ui/calendly-modal";

export default function Hero() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(106,13,173,0.15)_2px,transparent_2px),linear-gradient(90deg,rgba(106,13,173,0.15)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Purple Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#6A0DAD] opacity-20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[20rem] h-[20rem] bg-[#8A2BE2] opacity-10 blur-[100px] rounded-full animate-float" />
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                Auto<span className="gradient-text purple-glow">Mate</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto mb-8 leading-relaxed">
                Là où l'Innovation en IA Rencontre l'Automatisation Parfaite
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light"
            >
              Donnons aux entreprises les moyens d'agir grâce à des solutions d'IA de nouvelle génération qui transforment l'avenir de l'automatisation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="bg-[#6A0DAD] hover:bg-[#8A2BE2] text-white text-lg px-8 py-6 transition-all duration-300 shadow-[0_0_15px_rgba(106,13,173,0.5)] hover:shadow-[0_0_30px_rgba(106,13,173,0.7)] rounded-xl group"
                onClick={() => setShowCalendly(true)}
              >
                Commencer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </>
  );
}