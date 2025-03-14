import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Directrice Technique, TechVision Inc",
    content:
      "Les solutions d'AutoMate ont transformé nos opérations commerciales. L'intégration de l'IA a été fluide et les résultats ont été immédiats.",
  },
  {
    name: "Michael Rodriguez",
    role: "Directeur de l'Innovation, Future Corp",
    content:
      "Travailler avec AutoMate a été révolutionnaire pour notre entreprise. Leur expertise en automatisation IA est inégalée dans l'industrie.",
  },
  {
    name: "Emily Watson",
    role: "Responsable des Opérations, DataFlow",
    content:
      "Le niveau de professionnalisme et d'excellence technique d'AutoMate est exceptionnel. Ils nous ont aidés à atteindre nos objectifs d'automatisation.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing bg-black relative overflow-hidden">
      {/* Purple Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-[#6A0DAD] opacity-5 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-[#8A2BE2] opacity-5 blur-[100px] rounded-full" />
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
            Témoignages <span className="gradient-text purple-glow">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 font-light max-w-3xl mx-auto"
          >
            Découvrez ce que nos clients disent de nos services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="futuristic-border bg-black/40 backdrop-blur-sm border-[#6A0DAD]/20 hover:border-[#6A0DAD]/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#6A0DAD] mb-6" />
                  <p className="text-white/80 font-light text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-[#6A0DAD]/20 pt-6">
                    <h4 className="text-[#6A0DAD] font-heading text-xl font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/40 font-light mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}