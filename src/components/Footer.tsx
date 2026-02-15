import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <span className="text-lg font-bold">VANNA <span className="text-primary neon-text">NSK</span></span>
          <p className="text-sm text-muted-foreground mt-2">Премиум ремонт ванных комнат в Новосибирске</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Наши работы</Link>
          <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> +7 (999) 123-45-67
          </a>
          <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VANNA NSK. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
