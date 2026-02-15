import { useState, useRef } from "react";
import { motion } from "framer-motion";

const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">До / <span className="text-primary neon-text">После</span></h2>
          <p className="text-muted-foreground">Разница видна сразу</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-2"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-col-resize select-none"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* Before */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-lg font-semibold">ДО — загрузите фото</span>
            </div>

            {/* After */}
            <div
              className="absolute inset-0 bg-secondary flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <span className="text-primary text-lg font-semibold">ПОСЛЕ — загрузите фото</span>
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-primary neon-glow z-10"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center neon-glow">
                <span className="text-primary-foreground text-xs font-bold">⇔</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
