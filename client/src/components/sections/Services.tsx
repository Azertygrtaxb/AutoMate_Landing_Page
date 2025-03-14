import { motion } from "framer-motion";
import { Brain, Workflow, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Conseil en IA",
    description:
      "Conseils stratégiques pour l'implémentation de solutions IA adaptées à vos besoins commerciaux.",
  },
  {
    icon: Workflow,
    title: "Automatisation des Processus",
    description:
      "Optimisez vos opérations avec des solutions d'automatisation intelligentes pour une efficacité accrue.",
  },
  {
    icon: Bot,
    title: "Agents IA",
    description:
      "Agents IA avancés qui gèrent de manière autonome les tâches complexes et la prise de décision.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white font-heading mb-6"
          >
            Nos <span className="gradient-text purple-glow">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 font-light max-w-3xl mx-auto"
          >
            Transformer les entreprises grâce à des solutions IA innovantes
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group futuristic-border bg-black/40 backdrop-blur-sm hover:bg-[#6A0DAD]/10 transition-all duration-300 border-[#6A0DAD]/20">
                <CardContent className="p-8">
                  <service.icon
                    className="w-14 h-14 text-[#6A0DAD] mb-6 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}