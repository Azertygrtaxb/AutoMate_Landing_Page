import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-2xl mb-4 font-heading">
              Auto<span className="gradient-text">Mate</span>
            </h3>
            <p className="text-gray-400 font-light">
              Transformer les entreprises grâce à des solutions IA innovantes et l'automatisation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Services</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="hover:text-[#6A0DAD] transition-colors">Conseil en IA</a></li>
              <li><a href="#" className="hover:text-[#6A0DAD] transition-colors">Automatisation des Processus</a></li>
              <li><a href="#" className="hover:text-[#6A0DAD] transition-colors">Agents IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Réseaux Sociaux</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#6A0DAD] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6A0DAD] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-light">
            © {new Date().getFullYear()} AutoMate. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}