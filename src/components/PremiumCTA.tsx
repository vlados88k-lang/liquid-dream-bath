import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PremiumCTA = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto neon-glow"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы к ванной <span className="text-primary neon-text">вашей мечты?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Оставьте заявку и получите бесплатный расчёт стоимости ремонта
        </p>
        <Link
          to="/contacts"
          className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold neon-glow hover:scale-105 transition-transform duration-300"
        >
          Получить бесплатный расчёт
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PremiumCTA;
