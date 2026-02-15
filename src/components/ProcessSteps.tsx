import { motion } from "framer-motion";
import { Ruler, Calculator, FileCheck, Hammer, CheckCircle } from "lucide-react";

const steps = [
  { icon: Ruler, label: "Замер" },
  { icon: Calculator, label: "Смета" },
  { icon: FileCheck, label: "Договор" },
  { icon: Hammer, label: "Ремонт" },
  { icon: CheckCircle, label: "Сдача" },
];

const ProcessSteps = () => (
  <section id="process" className="py-20 bg-radial-green">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс <span className="text-primary neon-text">работы</span></h2>
        <p className="text-muted-foreground">5 простых шагов к ванной вашей мечты</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="glass rounded-2xl p-5 mb-3 relative z-10 hover:neon-glow transition-shadow duration-500">
                <Icon className="text-primary" size={28} />
              </div>
              <span className="text-sm font-medium">{label}</span>
              <span className="text-xs text-muted-foreground mt-1">Шаг {i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSteps;
