import { motion } from "framer-motion";
import { Wrench, Bath, Grid3X3, Sparkles, ShowerHead, Palette } from "lucide-react";

const services = [
  { icon: Wrench, title: "Ремонт под ключ", desc: "Полный цикл ремонта ванной от демонтажа до финишной отделки" },
  { icon: Bath, title: "Санузел под ключ", desc: "Комплексный ремонт совмещённого или раздельного санузла" },
  { icon: Grid3X3, title: "Замена плитки", desc: "Профессиональная укладка плитки любой сложности" },
  { icon: Sparkles, title: "Реставрация ванны", desc: "Восстановление покрытия ванны до идеального состояния" },
  { icon: ShowerHead, title: "Душевые зоны", desc: "Современные душевые кабины и walk-in решения" },
  { icon: Palette, title: "Премиум дизайн", desc: "Индивидуальный дизайн-проект вашей мечты" },
];

const ServicesGrid = () => (
  <section id="services" className="py-20 bg-radial-green">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши <span className="text-primary neon-text">услуги</span></h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Выполняем все виды работ по ремонту и реставрации ванных комнат</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-[1.03]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
