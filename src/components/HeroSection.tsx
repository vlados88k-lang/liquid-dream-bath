import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, FileText, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bathroom.jpg";

const features = [
  { icon: Clock, label: "Срок от 7 дней" },
  { icon: FileText, label: "Фиксированная смета" },
  { icon: ShieldCheck, label: "Гарантия до 3 лет" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Современная ванная комната" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 text-center animate-float"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Ремонт ванных комнат{" "}
          <span className="text-primary neon-text">нового уровня</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Создаём стильные, современные и технологичные ванные под ключ в Новосибирске.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacts"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold neon-glow hover:scale-105 transition-transform text-center"
          >
            Получить расчёт
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3 rounded-lg glass glass-hover font-semibold text-center transition-all duration-300"
          >
            Наши работы
          </Link>
        </div>
      </motion.div>

      {/* Features strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
      >
        {features.map(({ icon: Icon, label }) => (
          <div key={label} className="glass rounded-xl p-4 flex items-center gap-3 justify-center">
            <Icon className="text-primary" size={20} />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
