import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import GlassHeader from "@/components/GlassHeader";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  name: z.string().trim().min(1, "Введите имя").max(100),
  phone: z.string().trim().min(5, "Введите телефон").max(20),
  area: z.string().max(20).optional(),
  type: z.string().max(100).optional(),
  comment: z.string().max(1000).optional(),
});

const repairTypes = ["Ремонт под ключ", "Санузел под ключ", "Замена плитки", "Реставрация ванны", "Душевая зона", "Премиум дизайн"];

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", area: "", type: "", comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => { if (err.path[0]) fieldErrors[String(err.path[0])] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    // WhatsApp redirect
    const text = encodeURIComponent(
      `Заявка с сайта VANNA NSK\n\nИмя: ${form.name}\nТелефон: ${form.phone}\nПлощадь: ${form.area || "—"}\nТип: ${form.type || "—"}\nКомментарий: ${form.comment || "—"}`
    );
    window.open(`https://wa.me/79991234567?text=${text}`, "_blank");
    setSent(true);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl glass border border-border/50 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

  return (
    <div className="min-h-screen bg-background grain">
      <Helmet>
        <title>Контакты — VANNA NSK | Ремонт ванных в Новосибирске</title>
        <meta name="description" content="Свяжитесь с нами для бесплатного замера и расчёта стоимости ремонта ванной комнаты в Новосибирске." />
      </Helmet>
      <GlassHeader />

      <main className="pt-24 pb-20 bg-radial-green">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="text-primary neon-text">с нами</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {sent ? (
                <div className="glass rounded-2xl p-10 text-center">
                  <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-primary hover:underline text-sm">Отправить ещё</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
                  <div>
                    <input className={inputCls} placeholder="Имя *" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input className={inputCls} placeholder="Телефон *" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <input className={inputCls} placeholder="Площадь (м²)" value={form.area} onChange={e => setForm(p => ({ ...p, area: e.target.value }))} />
                  <select
                    className={inputCls}
                    value={form.type}
                    onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                  >
                    <option value="">Тип ремонта</option>
                    {repairTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <textarea
                    className={`${inputCls} min-h-[100px] resize-none`}
                    placeholder="Комментарий"
                    value={form.comment}
                    onChange={e => setForm(p => ({ ...p, comment: e.target.value }))}
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg neon-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Отправить заявку
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold mb-3">Контактная информация</h3>
                <a href="tel:+79991234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" /> +7 (999) 123-45-67
                </a>
                <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle size={18} className="text-primary" /> WhatsApp
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary" /> Новосибирск, ул. Примерная, 123
                </div>
              </div>

              {/* Yandex Map */}
              <div className="glass rounded-2xl p-2 overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A1&amp;source=constructor&amp;ll=82.920430%2C55.030199&amp;z=12"
                  width="100%"
                  height="300"
                  className="rounded-xl"
                  title="Карта — VANNA NSK"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
