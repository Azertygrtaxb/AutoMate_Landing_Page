import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CalendlyModal } from "@/components/ui/calendly-modal";

export default function CallToAction() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section className="py-20 bg-[#6A0DAD] relative overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.2)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white font-heading mb-6"
          >
            Prêt à Transformer Votre Entreprise ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-xl font-light max-w-2xl mx-auto mb-8"
          >
            Rejoignez le futur de l'innovation en IA. Créons ensemble quelque chose d'extraordinaire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-[#1C1C1E] text-white text-lg px-8 py-6 transition-all duration-300 shadow-lg rounded-xl"
              onClick={() => setShowCalendly(true)}
            >
              Planifier une Consultation
            </Button>
          </motion.div>
        </div>
      </section>
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </>
  );
}