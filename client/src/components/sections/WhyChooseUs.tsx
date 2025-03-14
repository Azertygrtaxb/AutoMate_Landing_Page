import { motion } from "framer-motion";
import { Shield, Clock, Award, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Excellence Éprouvée",
    description:
      "Protocoles de sécurité de pointe et historique de réussite prouvé.",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description:
      "Support technique et surveillance de vos systèmes IA 24h/24 et 7j/7.",
  },
  {
    icon: Award,
    title: "Équipe d'Experts",
    description:
      "Professionnels hautement qualifiés avec des décennies d'expérience combinée en IA.",
  },
  {
    icon: Zap,
    title: "Intégration Rapide",
    description:
      "Processus d'implémentation fluide avec un minimum de perturbation des opérations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-spacing bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,13,173,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(106,13,173,0.1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#6A0DAD] opacity-10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[20rem] h-[20rem] bg-[#8A2BE2] opacity-5 blur-[100px] rounded-full animate-float" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white font-heading mb-6"
          >
            Pourquoi Choisir <span className="gradient-text purple-glow">AutoMate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 font-light max-w-3xl mx-auto"
          >
            Leader dans le futur de l'IA avec une expertise et une innovation inégalées
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="futuristic-border bg-black/40 backdrop-blur-sm p-8 rounded-lg hover:bg-[#6A0DAD]/10 transition-all duration-300 h-full">
                <reason.icon
                  className="w-14 h-14 text-[#6A0DAD] mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  {reason.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}