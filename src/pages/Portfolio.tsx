import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import GlassHeader from "@/components/GlassHeader";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const projects = [
  { id: 1, title: "Ванная в стиле лофт", desc: "Совмещённый санузел 8 м²", materials: "Керамогранит, микроцемент", area: "8 м²" },
  { id: 2, title: "Минималистичная ванная", desc: "Раздельный санузел 5 м²", materials: "Крупноформатная плитка", area: "5 м²" },
  { id: 3, title: "Премиум санузел", desc: "Мастер-ванная 12 м²", materials: "Мрамор, стекло", area: "12 м²" },
  { id: 4, title: "Компактный санузел", desc: "Хрущёвка 3 м²", materials: "Мозаика, ПВХ панели", area: "3 м²" },
  { id: 5, title: "Душевая зона", desc: "Walk-in душ 6 м²", materials: "Травертин, стекло", area: "6 м²" },
  { id: 6, title: "Семейная ванная", desc: "Просторная ванная 10 м²", materials: "Керамика, дерево", area: "10 м²" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background grain">
      <Helmet>
        <title>Наши работы — ремонт ванных | VANNA NSK</title>
        <meta name="description" content="Портфолио выполненных проектов ремонта ванных комнат в Новосибирске. Реальные фото до и после." />
      </Helmet>
      <GlassHeader />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Наши <span className="text-primary neon-text">реализованные проекты</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Каждый проект — индивидуальный подход и безупречное качество</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelected(project)}
                className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] group"
              >
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Загрузите фото</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-2xl w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={24} />
              </button>
              <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center">
                <span className="text-muted-foreground">Загрузите фото</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
              <p className="text-muted-foreground mb-4">{selected.desc}</p>
              <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                <span>📐 {selected.area}</span>
                <span>🧱 {selected.materials}</span>
              </div>
              <a
                href="/contacts"
                className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold neon-glow hover:scale-105 transition-transform"
              >
                Хочу так же
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
