import GlassHeader from "@/components/GlassHeader";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import ProcessSteps from "@/components/ProcessSteps";
import PremiumCTA from "@/components/PremiumCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Helmet>
        <title>Ремонт ванной под ключ в Новосибирске | VANNA NSK</title>
        <meta name="description" content="Современный ремонт ванных комнат под ключ. Бесплатный замер, фиксированная цена, гарантия 3 года." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "VANNA NSK",
          "description": "Ремонт ванных комнат под ключ в Новосибирске",
          "address": { "@type": "PostalAddress", "addressLocality": "Новосибирск", "addressCountry": "RU" },
          "telephone": "+79991234567",
          "url": "https://vanna-nsk.ru"
        })}</script>
      </Helmet>
      <GlassHeader />
      <main>
        <HeroSection />
        <ServicesGrid />
        <BeforeAfter />
        <ProcessSteps />
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
